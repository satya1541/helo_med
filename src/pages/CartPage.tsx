import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Crown, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './CartPage.css';

const cartItems = [
    {
        id: 1,
        name: 'Nestle Cerelac (Wheat)',
        weight: '300 gm',
        price: 1020,
        originalPrice: 1080,
        savings: 60,
        quantity: 1,
        image: 'https://placehold.co/80/FFF3E0/e65100?text=Cerelac'
    },
    {
        id: 2,
        name: 'Nestle Cerelac (Ragi Apple)',
        weight: '300 gm',
        price: 2000,
        originalPrice: 2030,
        savings: 30,
        quantity: 1,
        image: 'https://placehold.co/80/FCE4EC/c2185b?text=Cerelac'
    },
    {
        id: 3,
        name: 'Dettol Handwash',
        weight: '200 ml',
        price: 200,
        originalPrice: 254,
        savings: 54,
        quantity: 1,
        image: 'https://placehold.co/80/E8F5E9/2e7d32?text=Dettol'
    }
];

const CartPage = () => {
    const navigate = useNavigate();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <Sidebar />
            <div className="cart-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Cart</h1>
                </header>

                <main className="cart-content">
                    <div className="prime-banner-cart">
                        <Crown size={20} fill="#FFD700" color="#FFD700" />
                        <span>Prime</span>
                        <p>Enjoy 15% savings on every service</p>
                        <button className="arrow-btn">→</button>
                    </div>

                    <div className="cart-items-section">
                        <h2>Order Items ({cartItems.length})</h2>

                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <button className="remove-btn"><X size={16} /></button>
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-weight">{item.weight}</p>
                                    <div className="cart-item-pricing">
                                        <span className="cart-item-price">₹{item.price.toFixed(2)}</span>
                                        <span className="cart-item-original">₹{item.originalPrice.toFixed(2)}</span>
                                    </div>
                                    <p className="cart-item-savings">You Save ₹ {item.savings.toFixed(2)}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <button className="qty-btn">-</button>
                                    <span>{item.quantity}</span>
                                    <button className="qty-btn">+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="add-more-btn">
                        <span>+</span> Add more medicines
                    </button>

                    <div className="prescription-upload-cart">
                        <div className="prescription-icon">📋</div>
                        <div className="prescription-text">
                            <h3>Upload your prescription</h3>
                            <p>to place your order</p>
                        </div>
                        <button className="upload-btn-cart">↓ Upload</button>
                    </div>

                    <div className="coupons-section">
                        <div className="coupon-icon">🎫</div>
                        <span>Coupons and Offers</span>
                        <a href="#" className="offers-link">3 offers →</a>
                    </div>
                </main>

                <footer className="cart-footer">
                    <div className="cart-total">
                        <span>₹ {total.toFixed(2)}</span>
                        <a href="#" className="view-bill">View bill</a>
                    </div>
                    <button className="checkout-btn">Add delivery details</button>
                </footer>
            </div>
        </>
    );
};

export default CartPage;
