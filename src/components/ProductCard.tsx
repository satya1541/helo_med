import './ProductCard.css';

interface ProductCardProps {
    name: string;
    weight: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image?: string;
    color?: string; // background color for placeholder
}

const ProductCard = ({ name, weight, price, originalPrice, discount, color, image }: ProductCardProps) => {
    return (
        <div className="product-card">
            {discount && (
                <div className="product-badge">
                    {discount}%<br />OFF
                </div>
            )}

            <div className="product-image" style={{ backgroundColor: color || '#f5f5f5' }}>
                <img
                    src={image || `https://placehold.co/300x300/${(color || 'f5f5f5').replace('#', '')}/333?text=${encodeURIComponent(name)}`}
                    alt={name}
                    className="product-img-element"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-weight">{weight}</p>

                <div className="product-pricing">
                    {originalPrice && (
                        <span className="original-price">₹{originalPrice}</span>
                    )}
                    <span className="current-price">₹{price}</span>
                </div>

                <button className="add-btn">
                    ADD
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
