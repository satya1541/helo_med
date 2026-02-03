import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import PaymentModal from '../components/PaymentModal';
import OrderSuccessModal from '../components/OrderSuccessModal';
import './CartPage.css';

const CartPage = () => {
    const navigate = useNavigate();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const { cartItems, removeFromCart, updateQuantity, cartTotal, placeOrder } = useCart();

    const handleCheckout = () => {
        if (cartItems.length === 0) return;
        setIsPaymentModalOpen(true);
    };

    const confirmPayment = () => {
        setIsPaymentModalOpen(false);
        setIsSuccessModalOpen(true);
        placeOrder();
    };

    const handleOrderComplete = () => {
        setIsSuccessModalOpen(false);
        navigate('/orders');
    };

    return (
        <div className="cart-container-premium">
            <Header />

            <main className="cart-wrapper-new">
                <header className="cart-header-new">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="header-content"
                    >
                        <span className="page-tag">Checkout</span>
                        <h1 className="header-title">Your <span className="text-primary italic">Cart</span></h1>
                    </motion.div>
                </header>

                <div className="cart-grid-new">
                    <div className="cart-items-column">
                        {cartItems.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="empty-cart-state"
                            >
                                <div className="empty-visual">🛒</div>
                                <h2>Your cart is feeling light.</h2>
                                <p>Looks like you haven't added anything yet.</p>
                                <button className="go-shop-btn" onClick={() => navigate('/medicines')}>
                                    Start Shopping
                                </button>
                            </motion.div>
                        ) : (
                            <div className="cart-items-list">
                                {cartItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="cart-item-premium"
                                    >
                                        <div className="item-image-box">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-info-box">
                                            <div className="item-main">
                                                <h3>{item.name}</h3>
                                                <p>{item.weight || '10 Tablets'}</p>
                                            </div>
                                            <div className="item-controls">
                                                <div className="item-qty-selector">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                        <Minus size={16} />
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <button className="item-remove-trigger" onClick={() => removeFromCart(item.id)}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="item-price-box">
                                            <span className="price-tag">₹{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        <div className="cart-actions-bottom">
                            <button className="add-more-link" onClick={() => navigate('/medicines')}>
                                <Plus size={20} />
                                <span>Add more from pharmacy</span>
                            </button>
                        </div>
                    </div>

                    <div className="cart-summary-column">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="summary-card-premium"
                        >
                            <div className="summary-header">
                                <h3>Order Summary</h3>
                                <div className="summary-badge">
                                    <Sparkles size={14} />
                                    <span>Free Delivery</span>
                                </div>
                            </div>

                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span className="text-free">FREE</span>
                                </div>
                                <div className="summary-row divider"></div>
                                <div className="summary-row total">
                                    <span>Total Amount</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className={`checkout-trigger ${cartItems.length === 0 ? 'disabled' : ''}`}
                                onClick={handleCheckout}
                                disabled={cartItems.length === 0}
                            >
                                <span>Continue to Payment</span>
                                <ChevronRight size={20} />
                            </button>

                            <p className="secure-note">
                                🔒 Secure SSL encrypted checkout
                            </p>
                        </motion.div>

                        <div className="promo-card-compact">
                            <div className="promo-info">
                                <h4>Have a promo code?</h4>
                                <p>Apply it at the next step</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                onConfirm={confirmPayment}
                totalAmount={cartTotal}
            />

            <OrderSuccessModal
                isOpen={isSuccessModalOpen}
                onClose={handleOrderComplete}
            />
            <Footer />
        </div>
    );
};

export default CartPage;
