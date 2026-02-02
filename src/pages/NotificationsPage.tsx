import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Bell, Tag } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './NotificationsPage.css';

const notifications = [
    {
        id: 1,
        icon: 'order',
        iconBg: '#e0f2f1',
        iconColor: '#00897b',
        title: 'Order Placed Successfully',
        message: "Your order has been placed! We'll notify you once it is confirmed.",
        time: '2 mins ago',
    },
    {
        id: 2,
        icon: 'bell',
        iconBg: '#e3f2fd',
        iconColor: '#1976d2',
        title: 'Payment Successful',
        message: 'Payment of ₹ ___ was completed successfully.',
        time: 'yesterday',
    },
    {
        id: 3,
        icon: 'bell',
        iconBg: '#e3f2fd',
        iconColor: '#1976d2',
        title: 'Special Offer Just for You',
        message: 'Unlock exciting discounts on your next purchase!',
        time: 'yesterday',
    },
];

const NotificationsPage = () => {
    const navigate = useNavigate();

    const getIcon = (type: string) => {
        switch (type) {
            case 'order':
                return ShoppingBag;
            case 'tag':
                return Tag;
            default:
                return Bell;
        }
    };

    return (
        <>
            <Sidebar />
            <div className="notifications-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>Notifications</h1>
                </header>

                <main className="notifications-content">
                    {notifications.map((notification) => {
                        const IconComponent = getIcon(notification.icon);
                        return (
                            <div key={notification.id} className="notification-card">
                                <div
                                    className="notification-icon"
                                    style={{ backgroundColor: notification.iconBg }}
                                >
                                    <IconComponent size={24} color={notification.iconColor} />
                                </div>
                                <div className="notification-details">
                                    <div className="notification-header">
                                        <h3>{notification.title}</h3>
                                        <span className="notification-time">{notification.time}</span>
                                    </div>
                                    <p className="notification-message">{notification.message}</p>
                                </div>
                            </div>
                        );
                    })}
                </main>
            </div>
        </>
    );
};

export default NotificationsPage;
