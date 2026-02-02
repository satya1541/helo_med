import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './MedicinesPage.css';

const medicines = [
    { id: 1, name: 'Azithromycin - 500', price: 90, discount: 30, image: 'https://placehold.co/120/E3F2FD/0277bd?text=Azithro' },
    { id: 2, name: 'Atorvastatin Tablets 10 strips', price: 289, discount: 30, image: 'https://placehold.co/120/F3E5F5/7b1fa2?text=Atorva' },
    { id: 3, name: 'S-Amlodipine Tablets - 2.5 mg', price: 450, discount: 30, image: 'https://placehold.co/120/E8F5E9/2e7d32?text=Amlodi' },
    { id: 4, name: 'Alprazolam Tablets - 0.25', price: 350, discount: 30, image: 'https://placehold.co/120/FFF3E0/e65100?text=Alpraz' },
    { id: 5, name: 'Azithromycin - 500', price: 80, discount: 30, image: 'https://placehold.co/120/E3F2FD/0277bd?text=Azithro' },
    { id: 6, name: 'Azithromycin - 500', price: 115, discount: 30, image: 'https://placehold.co/120/FCE4EC/c2185b?text=Azithro' },
];

const categories = [
    { id: 1, name: 'Medicine & Supplements', image: 'https://placehold.co/80/FFF3E0/e65100?text=Med' },
    { id: 2, name: 'Food & Nutrition', image: 'https://placehold.co/80/E8F5E9/2e7d32?text=Food' },
    { id: 3, name: 'Baby & Personal', image: 'https://placehold.co/80/FCE4EC/c2185b?text=Baby' },
    { id: 4, name: 'Medical Devices', image: 'https://placehold.co/80/E1F5FE/0277bd?text=Device' },
];

const MedicinesPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="medicines-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/categories')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>Medicines & Supplements</h1>
                </header>

                <div className="search-section">
                    <div className="search-bar-medicines">
                        <Search size={20} />
                        <input type="text" placeholder="Find medicines and pharmacy stores..." />
                    </div>
                    <button className="add-btn-header">
                        <Plus size={24} />
                    </button>
                </div>

                <div className="category-chips">
                    {categories.map((cat) => (
                        <div key={cat.id} className="category-chip">
                            <img src={cat.image} alt={cat.name} />
                        </div>
                    ))}
                </div>

                <main className="medicines-content">
                    <div className="medicines-grid">
                        {medicines.map((med) => (
                            <div key={med.id} className="medicine-card">
                                <div className="medicine-discount-badge">{med.discount}% OFF</div>
                                <button className="wishlist-btn">♡</button>
                                <img src={med.image} alt={med.name} className="medicine-image" />
                                <h3>{med.name}</h3>
                                <p className="medicine-seller">By Healthcare store, Patia, Bhubaneswar</p>
                                <div className="medicine-price-row">
                                    <span className="medicine-price">₹ {med.price}</span>
                                    <div className="medicine-quantity-controls">
                                        <button className="qty-control-btn">-</button>
                                        <button className="qty-control-btn">+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default MedicinesPage;
