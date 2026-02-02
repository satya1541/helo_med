import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './OrdersPage.css';

const OrdersPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="orders-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My orders</h1>
                    <div className="header-actions">
                        <button className="filter-btn">Sort date ▼</button>
                        <button className="filter-btn">End date ▼</button>
                        <button className="search-btn">🔍</button>
                    </div>
                </header>

                <div className="order-tabs">
                    <button className="tab-btn active">All</button>
                    <button className="tab-btn">Active</button>
                    <button className="tab-btn">Delivered</button>
                    <button className="tab-btn">Cancelled</button>
                    <button className="tab-btn">Returned</button>
                </div>

                <main className="orders-content">
                    <div className="empty-state">
                        <div className="empty-icon">🛒🚫</div>
                        <h2>No orders yet</h2>
                        <p>You haven't received any orders so far. Once customers place orders, they'll appear here.</p>
                    </div>
                </main>
            </div>
        </>
    );
};

export default OrdersPage;
