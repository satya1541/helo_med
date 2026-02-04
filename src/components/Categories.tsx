import { motion } from 'framer-motion';
import { Pill, Apple, Droplets, Stethoscope, Sparkles, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const categories = [
    { id: 1, name: 'Medicines', icon: Pill, color: 'rgba(57, 126, 75, 0.1)', iconColor: '#397E4B' },
    { id: 2, name: 'Nutrition', icon: Apple, color: 'rgba(255, 152, 0, 0.1)', iconColor: '#F57C00' },
    { id: 3, name: 'Hygiene', icon: Droplets, color: 'rgba(33, 150, 243, 0.1)', iconColor: '#1976D2' },
    { id: 4, name: 'Devices', icon: Stethoscope, color: 'rgba(103, 58, 183, 0.1)', iconColor: '#512DA8' },
    { id: 5, name: 'Personal Care', icon: Sparkles, color: 'rgba(233, 30, 99, 0.1)', iconColor: '#C2185B' },
    { id: 6, name: 'More', icon: LayoutGrid, color: 'rgba(96, 125, 139, 0.1)', iconColor: '#455A64' },
];

const Categories = () => {
    const navigate = useNavigate();

    return (
        <section className="categories-section-modern">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="category-header-row"
            >
                <div className="section-title-group">
                    <span className="section-tag-new">Browse</span>
                    <h2 className="section-title-modern">Shop by Category</h2>
                </div>
                <button className="view-all-text-btn" onClick={() => navigate('/categories')}>View All Categories</button>
            </motion.div>

            <div className="categories-list-premium">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="cat-card-premium"
                        onClick={() => navigate('/medicines')}
                    >
                        <div className="cat-icon-outer" style={{ backgroundColor: cat.color }}>
                            <cat.icon size={32} style={{ color: cat.iconColor }} strokeWidth={1.5} />
                        </div>
                        <p className="cat-name-modern">{cat.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
