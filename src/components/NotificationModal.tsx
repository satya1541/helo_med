import { ShoppingBag, Bell, X } from 'lucide-react';
import './NotificationModal.css';

interface NotificationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

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

const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
    if (!isOpen) return null;

    const getIcon = (type: string) => {
        switch (type) {
            case 'order':
                return ShoppingBag;
            default:
                return Bell;
        }
    };

    return (
        <>
            <div className="notification-overlay" onClick={onClose} />
            <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
                <div className="notification-modal-header">
                    <h2>Notifications</h2>
                    <button className="close-modal-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                <div className="notification-modal-content">
                    {notifications.map((notification) => {
                        const IconComponent = getIcon(notification.icon);
                        return (
                            <div key={notification.id} className="notification-item">
                                <div
                                    className="notification-item-icon"
                                    style={{ backgroundColor: notification.iconBg }}
                                >
                                    <IconComponent size={20} color={notification.iconColor} />
                                </div>
                                <div className="notification-item-details">
                                    <div className="notification-item-header">
                                        <h3>{notification.title}</h3>
                                        <span className="notification-item-time">{notification.time}</span>
                                    </div>
                                    <p className="notification-item-message">{notification.message}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default NotificationModal;
