import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Package, Wallet, FileText, User } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, path: '/' },
        { id: 'categories', label: 'Categories', icon: Package, path: '/categories' },
        { id: 'wallet', label: 'Wallet', icon: Wallet, path: '/wallet' },
        { id: 'orders', label: 'Orders', icon: FileText, path: '/orders' },
        { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    ];

    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <button
                            key={item.id}
                            className={`sidebar-item ${isActive ? 'active' : ''}`}
                            onClick={() => item.path !== '#' && navigate(item.path)}
                        >
                            <Icon size={24} />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;
