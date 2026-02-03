import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Camera, LogOut, Package, MapPin, Edit2, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import type { Address } from '../context/CartContext';
import AddressModal from '../components/AddressModal';
import './ProfilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuth();
    const { orders, addresses, upsertAddress, removeAddress } = useCart();

    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleEditAddress = (addr: Address) => {
        setSelectedAddress(addr);
        setIsAddressModalOpen(true);
    };

    const handleAddNewAddress = () => {
        setSelectedAddress(null);
        setIsAddressModalOpen(true);
    };

    const handleSaveAddress = (addr: Address) => {
        upsertAddress(addr);
    };

    return (
        <>
            <Header />
            <div className="profile-container">
                <div className="profile-wrapper">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Profile</h1>
                    <button className="logout-btn-header" onClick={handleLogout} title="Logout">
                        <LogOut size={20} />
                    </button>
                </div>

                <main className="profile-content">
                    {/* User Info Section */}
                    <div className="profile-card user-card">
                        <div className="avatar-section">
                            <div className="avatar-wrapper">
                                <div className="avatar-placeholder">
                                    <span>{user ? user.charAt(0).toUpperCase() : 'U'}</span>
                                </div>
                                <button className="camera-btn">
                                    <Camera size={16} />
                                </button>
                            </div>
                            <div className="user-details-view">
                                <h2>{user || 'User'}</h2>
                                <p>+91 9878555432</p>
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <section className="profile-section">
                        <div className="section-header">
                            <h3><MapPin size={18} /> Saved Addresses</h3>
                            <button className="add-btn" onClick={handleAddNewAddress}>Add New</button>
                        </div>
                        <div className="addresses-list">
                            {addresses.map((addr) => (
                                <div key={addr.id} className="address-card">
                                    <div className="address-meta">
                                        <div className="address-type">{addr.type}</div>
                                        <div className="address-actions">
                                            <button className="edit-addr-btn-mini" onClick={() => handleEditAddress(addr)}>
                                                <Edit2 size={14} />
                                            </button>
                                            <button className="remove-addr-btn-mini" onClick={() => removeAddress(addr.id)}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="address-text">{addr.text}</p>
                                </div>
                            ))}
                            {addresses.length === 0 && (
                                <p style={{ padding: '1.5rem', textAlign: 'center', color: '#888' }}>
                                    No saved addresses yet.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Order History Section */}
                    <section className="profile-section">
                        <div className="section-header">
                            <h3><Package size={18} /> Recent Orders</h3>
                            {orders.length > 0 && <span className="view-all" onClick={() => navigate('/orders')}>View All</span>}
                        </div>

                        <div className="recent-orders-list">
                            {orders.length > 0 ? (
                                orders.slice(0, 3).map((order) => (
                                    <div key={order.id} className="mini-order-card">
                                        <div className="mini-order-header">
                                            <span className="order-id">#{order.id}</span>
                                            <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                                        </div>
                                        <div className="mini-order-total">
                                            ₹{order.total} • {order.items.length} Items
                                        </div>
                                        <div className="mini-order-date">{order.date}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-orders">
                                    <p>No recent orders</p>
                                    <button onClick={() => navigate('/medicines')}>Start Shopping</button>
                                </div>
                            )}
                        </div>
                    </section>

                    <button className="logout-btn-full" onClick={handleLogout}>
                        <LogOut size={18} /> Logout
                    </button>
                </main>

                <AddressModal
                    isOpen={isAddressModalOpen}
                    onClose={() => setIsAddressModalOpen(false)}
                    onSave={handleSaveAddress}
                    initialData={selectedAddress}
                />
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
