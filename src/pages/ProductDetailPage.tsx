import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSection from '../components/ProductSection';
import ProductCard from '../components/ProductCard';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleWishlist, isInWishlist, cartItems, updateQuantity } = useCart();
    const { showToast } = useToast();

    const product = ALL_PRODUCTS.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="not-found-page">
                <h2>Product Not Found</h2>
                <button onClick={() => navigate('/medicines')}>Back to Medicines</button>
            </div>
        );
    }

    const isWishlisted = isInWishlist(product.id);
    const cartItem = cartItems.find(item => item.id === product.id);
    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        addToCart({
            ...product,
            originalPrice: product.originalPrice || Math.round(product.price * 100 / (100 - (product.discount || 0))),
            discount: product.discount || 0,
            image: product.image || '/images/logo.png'
        });
        showToast('Added to cart', product.name);
    };

    const handleWishlist = () => {
        toggleWishlist(product.id);
        showToast(isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist', product.name);
    };

    // Get similar products (same category, excluding current)
    const similarProducts = ALL_PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="product-detail-container">
            <Header />

            <main className="product-detail-wrapper">
                <div className="breadcrumb">
                    <button className="back-link" onClick={() => navigate(-1)}>
                        <ArrowLeft size={18} /> Back
                    </button>
                    <span className="separator">/</span>
                    <span className="current-path">{product.category} / {product.name}</span>
                </div>

                <div className="product-main-grid">
                    {/* Visual Section */}
                    <div className="product-visual">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="main-image-box"
                            style={{ backgroundColor: product.color || 'var(--surface-color)' }}
                        >
                            {product.discount && (
                                <div className="detail-discount-tag">-{product.discount}%</div>
                            )}
                            <button
                                className={`detail-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                                onClick={handleWishlist}
                            >
                                <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
                            </button>
                            <img src={product.image} alt={product.name} />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="product-info-panel">
                        <div className="info-header">
                            <span className="info-category">{product.category}</span>
                            <h1>{product.name}</h1>
                            <div className="rating-row">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#FFB800" color="#FFB800" />)}
                                </div>
                                <span>(4.8 • 120 reviews)</span>
                            </div>
                        </div>

                        <div className="price-section">
                            <div className="main-price">
                                <span className="currency">₹</span>
                                <span className="value">{product.price}</span>
                            </div>
                            {product.originalPrice && (
                                <span className="strikethrough">₹{product.originalPrice}</span>
                            )}
                            <span className="weight-tag">{product.weight}</span>
                        </div>

                        <p className="product-description">
                            Experience premium care with our {product.name.toLowerCase()}. Formulated with high-quality ingredients to support your daily wellness journey. Dermatologist tested and certified for safety and effectiveness.
                        </p>

                        <div className="action-row">
                            {quantity === 0 ? (
                                <button className="add-to-cart-big" onClick={handleAddToCart}>
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </button>
                            ) : (
                                <div className="qty-control-big">
                                    <button onClick={() => updateQuantity(product.id, quantity - 1)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                                </div>
                            )}
                        </div>

                        <div className="trust-badges">
                            <div className="badge-item">
                                <ShieldCheck size={20} />
                                <div>
                                    <strong>100% Genuine</strong>
                                    <p>Sourced directly from certified pharmacies.</p>
                                </div>
                            </div>
                            <div className="badge-item">
                                <Truck size={20} />
                                <div>
                                    <strong>Fast Delivery</strong>
                                    <p>Delivered to your doorstep within 24-48 hours.</p>
                                </div>
                            </div>
                            <div className="badge-item">
                                <RefreshCw size={20} />
                                <div>
                                    <strong>Easy Returns</strong>
                                    <p>7-day return policy for unused products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {similarProducts.length > 0 && (
                    <ProductSection title="More from this category" subtitle="Explore similar wellness solutions.">
                        {similarProducts.map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </ProductSection>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
