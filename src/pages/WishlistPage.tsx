import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCTS } from '../data/products';
import './WishlistPage.css';

const WishlistPage = () => {
    const navigate = useNavigate();
    const { wishlist } = useCart();

    const wishlistItems = ALL_PRODUCTS.filter(product => wishlist.includes(product.id));

    return (
        <div className="wishlist-container">
            <Header />
            <div className="wishlist-wrapper">
                <header className="wishlist-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Wishlist</h1>
                </header>

                <main className="wishlist-content">
                    <AnimatePresence mode="wait">
                        {wishlistItems.length === 0 ? (
                            <motion.div
                                className="wishlist-empty"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                key="empty"
                            >
                                <div className="empty-icon-box">
                                    <Heart size={64} strokeWidth={1} color="#ccc" />
                                </div>
                                <h2>Your wishlist is empty</h2>
                                <p>Save your favorite health essentials here to find them easily later.</p>
                                <button className="start-shopping-btn" onClick={() => navigate('/medicines')}>
                                    Explore Products
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="wishlist-grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="grid"
                            >
                                {wishlistItems.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default WishlistPage;
