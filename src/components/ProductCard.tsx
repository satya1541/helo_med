import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';
import './ProductCard.css';

interface ProductCardProps {
    id: number;
    name: string;
    weight: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image?: string;
    color?: string;
}

const ProductCard = ({ id, name, weight, price, originalPrice, discount, color, image }: ProductCardProps) => {
    const { addToCart, toggleWishlist, isInWishlist } = useCart();
    const { showToast } = useToast();

    const isWishlisted = isInWishlist(id);

    const handleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleWishlist(id);
        showToast(isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist', name);
    };

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart({
            id,
            name,
            price,
            originalPrice,
            weight,
            image: image || `https://placehold.co/300x300/${(color || 'f5f5f5').replace('#', '')}/333?text=${name}`
        });
        showToast('Added to cart', name);
    };

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="product-card"
        >
            <div className="card-image-wrapper" style={{ backgroundColor: color || 'var(--surface-color)' }}>
                {discount && (
                    <div className="discount-tag">
                        -{discount}%
                    </div>
                )}
                <button
                    className={`wishlist-trigger ${isWishlisted ? 'active' : ''}`}
                    onClick={handleWishlist}
                >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <img
                    src={image || `https://placehold.co/300x300/${(color || 'f5f5f5').replace('#', '')}/333?text=${name}`}
                    alt={name}
                    className="product-image"
                />
            </div>

            <div className="card-info">
                <div className="card-category">Wellness Essentials</div>
                <h3 className="card-title">{name}</h3>
                <p className="card-meta">{weight}</p>

                <div className="card-footer">
                    <div className="card-pricing">
                        <span className="current-price">₹{price}</span>
                        {originalPrice && (
                            <span className="old-price">₹{originalPrice}</span>
                        )}
                    </div>

                    <button className="add-cart-circle" onClick={handleAdd}>
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
