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
    const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

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
                                            <button
                                                className="view-details-btn"
                                                onClick={() => setSelectedOrder(order)}
                                            >
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

            <AnimatePresence>
                {selectedOrder && (
                    <motion.div
                        className="order-details-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedOrder(null)}
                    >
                        <motion.div
                            className="order-details-modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3>Order Details</h3>
                                <button className="close-modal" onClick={() => setSelectedOrder(null)}>×</button>
                            </div>

                            <div className="modal-body">
                                <div className="detail-section">
                                    <p className="detail-label">Order ID</p>
                                    <p className="detail-value">#{selectedOrder.id}</p>
                                </div>
                                <div className="detail-section">
                                    <p className="detail-label">Order Date</p>
                                    <p className="detail-value">{selectedOrder.date}</p>
                                </div>
                                <div className="detail-section">
                                    <p className="detail-label">Status</p>
                                    <p className={`detail-value status-${selectedOrder.status.toLowerCase()}`}>
                                        {selectedOrder.status}
                                    </p>
                                </div>

                                <div className="modal-divider"></div>

                                <div className="items-summary">
                                    <p className="section-title">Order Items</p>
                                    {selectedOrder.items.map((item, idx) => (
                                        <div key={idx} className="modal-item-row">
                                            <span>{item.name} × {item.quantity}</span>
                                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="modal-divider"></div>

                                <div className="payment-summary">
                                    <div className="summary-line">
                                        <span>Subtotal</span>
                                        <span>₹{selectedOrder.total.toFixed(2)}</span>
                                    </div>
                                    <div className="summary-line">
                                        <span>Delivery</span>
                                        <span className="free">FREE</span>
                                    </div>
                                    <div className="summary-line total">
                                        <span>Total Amount</span>
                                        <span>₹{selectedOrder.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="shipping-info">
                                    <p className="section-title">Shipping Address</p>
                                    <p className="address-text">
                                        123, Green Park, Civil Lines,<br />
                                        Bangalore, Karnataka - 560001
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button className="modal-primary-btn" onClick={() => setSelectedOrder(null)}>Done</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default OrdersPage;
