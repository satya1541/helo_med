import { Search, ShoppingCart, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NotificationModal from './NotificationModal';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-section" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <div className="logo-icon">
                        <User size={24} color="#008080" />
                    </div>
                    <span className="logo-text">Helo Med</span>
                </div>

                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Find medicines and pharmacy stores..."
                        className="search-input"
                    />
                </div>

                <div className="header-actions">
                    <button className="icon-btn" onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                        <Bell size={24} />
                        <span className="badge">3</span>
                    </button>
                    <button className="icon-btn" onClick={() => navigate('/cart')}>
                        <ShoppingCart size={24} />
                        <span className="badge">3</span>
                    </button>
                    <button className="profile-btn" onClick={() => navigate('/profile')}>
                        <div className="header-avatar">
                            <User size={20} color="#fff" />
                        </div>
                        {/* <span className="profile-name">Satya</span> */}
                    </button>
                </div>
            </div>

            <NotificationModal
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
            />
        </header>
    );
};

export default Header;
