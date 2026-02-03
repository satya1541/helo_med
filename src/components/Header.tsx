import { ShoppingCart, User, Bell, Menu, X, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import NotificationModal from './NotificationModal';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartCount, notifications, wishlist } = useCart();
    const unreadCount = notifications.filter(n => !n.read).length;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Medicines', path: '/medicines' },
        { name: 'Categories', path: '/categories' },
        { name: 'Wallet', path: '/wallet' },
        { name: 'Orders', path: '/orders' },
        { name: 'About Us', path: '/about' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo-section" onClick={() => navigate('/')}>
                    <img src="/images/logo.png" alt="HeloMed" className="header-logo" />
                </div>

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                            onClick={() => navigate(link.path)}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="nav-underline"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="header-actions">
                    <button className="action-btn" onClick={() => navigate('/wishlist')}>
                        <Heart size={22} className={wishlist.length > 0 ? 'text-primary' : ''} fill={wishlist.length > 0 ? 'currentColor' : 'none'} />
                        {wishlist.length > 0 && <span className="count-badge">{wishlist.length}</span>}
                    </button>

                    <button className="action-btn" onClick={() => setIsNotificationOpen(true)}>
                        <Bell size={22} />
                        {unreadCount > 0 && <span className="count-badge">{unreadCount}</span>}
                    </button>

                    <button className="action-btn cart-btn" onClick={() => navigate('/cart')}>
                        <ShoppingCart size={22} />
                        {cartCount > 0 && <span className="count-badge">{cartCount}</span>}
                    </button>

                    <button className="profile-trigger" onClick={() => navigate('/profile')}>
                        <User size={20} />
                    </button>

                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.path}
                                className="mobile-nav-link"
                                onClick={() => {
                                    navigate(link.path);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <NotificationModal
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
            />
        </header>
    );
};

export default Header;
