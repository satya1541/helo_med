import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import './CategoriesPage.css';

const categories = [
    { id: 1, name: 'Medicine & Supplements', color: '#FFF3E0', image: '/hand/multi vitaminjpg.jpg' },
    { id: 2, name: 'Food & Nutrition', color: '#E8F5E9', image: '/essential/protein mix.jpg' },
    { id: 3, name: 'Baby & Personal Hygiene Essentials', color: '#FCE4EC', image: '/nut/himalayan baby.jpg' },
    { id: 4, name: 'Medical Devices', color: '#E1F5FE', image: '/essential/glucometer.jpg' },
    { id: 5, name: 'Personal Care', color: '#F3E5F5', image: '/nut/baby oil.jpg' },
    { id: 6, name: 'Explore More', color: '#FFFDE7', image: '/hand/hajmola combo.jpg' },
];

const products = [
    { id: 1001, name: 'Glucon-D + Nycil', price: 400, image: '/hand/glucon d + nycil.jpg' },
    { id: 1002, name: 'Multivitamin Tablets', price: 450, image: '/hand/multi vitaminjpg.jpg' },
    { id: 1003, name: 'Protein Powder', price: 999, image: '/hand/proteinx.jpg' },
];

const CategoriesPage = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleAdd = (product: typeof products[0]) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            weight: 'Standard Pack'
        });
        showToast('Added to cart', product.name);
    };

    return (
        <>
            <div className="categories-container-new">
                <Header />
                <div className="categories-wrapper-new">
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
                                        <button className="add-btn-simple" onClick={() => handleAdd(product)}>ADD</button>
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
                                        <button className="add-btn-simple" onClick={() => handleAdd(product)}>ADD</button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CategoriesPage;
