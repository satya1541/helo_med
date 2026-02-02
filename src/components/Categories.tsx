import './Categories.css';

const categories = [
    { id: 1, name: 'Medicine & Supplements', color: '#FFF3E0', image: 'https://placehold.co/200/FFF3E0/e65100?text=Medicine' },
    { id: 2, name: 'Food & Nutrition', color: '#E8F5E9', image: 'https://placehold.co/200/E8F5E9/2e7d32?text=Food' },
    { id: 3, name: 'Baby & Personal Hygiene Essentials', color: '#FCE4EC', image: 'https://placehold.co/200/FCE4EC/c2185b?text=Baby' },
    { id: 4, name: 'Medical Devices', color: '#E1F5FE', image: 'https://placehold.co/200/E1F5FE/0277bd?text=Devices' },
    { id: 5, name: 'Personal Care', color: '#F3E5F5', image: 'https://placehold.co/200/F3E5F5/7b1fa2?text=Care' },
    { id: 6, name: 'Explore More', color: '#FFFDE7', image: 'https://placehold.co/200/FFFDE7/fbc02d?text=More' },
];

const Categories = () => {
    return (
        <section className="categories-section">
            <div className="section-header">
                <h2>Self Care <span className="highlight">Up to 50% off</span></h2>
            </div>

            <div className="categories-grid">
                {categories.map((cat) => (
                    <div key={cat.id} className="category-card">
                        <div className="category-image-wrapper" style={{ backgroundColor: cat.color }}>
                            <img src={cat.image} alt={cat.name} className="category-image" />
                        </div>
                        <p className="category-name">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
