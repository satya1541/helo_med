import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './CategoriesPage.css';

const categories = [
    { id: 1, name: 'Medicine & Supplements', color: '#FFF3E0', image: 'https://placehold.co/200/FFF3E0/e65100?text=Medicine' },
    { id: 2, name: 'Food & Nutrition', color: '#E8F5E9', image: 'https://placehold.co/200/E8F5E9/2e7d32?text=Food' },
    { id: 3, name: 'Baby & Personal Hygiene Essentials', color: '#FCE4EC', image: 'https://placehold.co/200/FCE4EC/c2185b?text=Baby' },
    { id: 4, name: 'Medical Devices', color: '#E1F5FE', image: 'https://placehold.co/200/E1F5FE/0277bd?text=Devices' },
    { id: 5, name: 'Personal Care', color: '#F3E5F5', image: 'https://placehold.co/200/F3E5F5/7b1fa2?text=Care' },
    { id: 6, name: 'Explore More', color: '#FFFDE7', image: 'https://placehold.co/200/FFFDE7/fbc02d?text=More' },
];

const products = [
    { id: 1, name: 'Aloe Vera Juice', price: 289, image: 'https://placehold.co/150/E8F5E9/2e7d32?text=Aloe' },
    { id: 2, name: 'Multivitamin Tablets', price: 450, image: 'https://placehold.co/150/FFF3E0/e65100?text=Vitamin' },
    { id: 3, name: 'Protein Powder', price: 999, image: 'https://placehold.co/150/E3F2FD/0277bd?text=Protein' },
];

const CategoriesPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="categories-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>Categories</h1>
                </header>

                <main className="categories-page-content">
                    <section className="category-section">
                        <div className="section-header">
                            <h2>Self Care <span className="highlight">Up to 50% off</span></h2>
                        </div>
                        <div className="categories-grid-page">
                            {categories.map((cat) => (
                                <div key={cat.id} className="category-card-page" onClick={() => navigate('/medicines')}>
                                    <div className="category-image-wrapper-page" style={{ backgroundColor: cat.color }}>
                                        <img src={cat.image} alt={cat.name} className="category-image-page" />
                                    </div>
                                    <p className="category-name-page">{cat.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="explore-section">
                        <div className="section-header">
                            <h2>Explore our hair care products <span className="highlight-link">Up to 60% off</span></h2>
                            <a href="#" className="view-all">View all</a>
                        </div>
                        <div className="products-grid-simple">
                            {products.map((product) => (
                                <div key={product.id} className="simple-product-card">
                                    <img src={product.image} alt={product.name} />
                                    <p className="product-name-simple">{product.name}</p>
                                    <p className="product-price-simple">₹{product.price}</p>
                                    <button className="add-btn-simple">ADD</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="diabetic-section">
                        <div className="section-header">
                            <h2>Diabetic essentials</h2>
                            <a href="#" className="view-all">View all</a>
                        </div>
                        <div className="products-grid-simple">
                            {products.map((product) => (
                                <div key={product.id} className="simple-product-card">
                                    <img src={product.image} alt={product.name} />
                                    <p className="product-name-simple">{product.name}</p>
                                    <p className="product-price-simple">₹{product.price}</p>
                                    <button className="add-btn-simple">ADD</button>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default CategoriesPage;
