import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Package, ChevronRight, Truck, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import './OrdersPage.css';

const OrdersPage = () => {
    const navigate = useNavigate();
    const { orders } = useCart();
    const [activeTab, setActiveTab] = useState('All');

    const filteredOrders = activeTab === 'All'
        ? orders
        : orders.filter(order => order.status === activeTab);

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Active': return <Truck size={16} />;
            case 'Delivered': return <CheckCircle size={16} />;
            case 'Cancelled': return <XCircle size={16} />;
            case 'Returned': return <RotateCcw size={16} />;
            default: return <Package size={16} />;
        }
    };

    return (
        <div className="orders-container">
            <Header />
            <div className="orders-wrapper">
                <header className="orders-page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Orders</h1>
                </header>

                <div className="order-tabs">
                    {['All', 'Active', 'Delivered', 'Cancelled', 'Returned'].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <main className="orders-content">
                    <AnimatePresence mode="wait">
                        {filteredOrders.length === 0 ? (
                            <motion.div
                                className="empty-state"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="empty-icon">📦</div>
                                <h2>No {activeTab === 'All' ? '' : activeTab.toLowerCase()} orders found</h2>
                                <p>Your orders will appear here once you make a purchase.</p>
                                <button className="shop-now-btn" onClick={() => navigate('/medicines')}>
                                    Start Shopping
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="orders-list"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {filteredOrders.map((order, index) => (
                                    <motion.div
                                        key={order.id}
                                        className="order-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="order-card-header">
                                            <div className="order-meta">
                                                <span className="order-id">#{order.id}</span>
                                                <span className="order-date">{order.date}</span>
                                            </div>
                                            <div className={`order-status-badge ${order.status.toLowerCase()}`}>
                                                {getStatusIcon(order.status)}
                                                <span>{order.status}</span>
                                            </div>
                                        </div>

                                        <div className="order-items-list">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="order-item-row">
                                                    <div className="order-item-image">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="order-item-details">
                                                        <h4 className="order-item-name">{item.name}</h4>
                                                        <p className="order-item-qty">Qty: {item.quantity}</p>
                                                    </div>
                                                    <div className="order-item-price">
                                                        ₹{(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="order-card-footer">
                                            <div className="order-summary">
                                                <div className="summary-row">
                                                    <span>Items ({order.items.reduce((acc, i) => acc + i.quantity, 0)})</span>
                                                    <span>₹{order.total.toFixed(2)}</span>
                                                </div>
                                                <div className="summary-row">
                                                    <span>Delivery</span>
                                                    <span className="free-delivery">FREE</span>
                                                </div>
                                                <div className="summary-row total">
                                                    <span>Total Amount</span>
                                                    <span className="total-amount">₹{order.total.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <button className="view-details-btn">
                                                View Details <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </motion.div>
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

export default OrdersPage;
