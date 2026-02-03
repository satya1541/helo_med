import { motion } from 'framer-motion';
import './Categories.css';

const categories = [
    { id: 1, name: 'Medicine & Supplements', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'Food & Nutrition', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=300' },
    { id: 3, name: 'Personal Hygiene', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300' },
    { id: 4, name: 'Medical Devices', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=300' },
    { id: 5, name: 'Personal Care', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300' },
    { id: 6, name: 'Explore More', color: '#F4F7F5', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300' },
];

const Categories = () => {
    return (
        <section className="categories-section">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="section-title">Shop by <span className="text-primary italic">Category</span></h2>
            </motion.div>

            <div className="categories-grid-new">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="category-card-new"
                    >
                        <div className="category-img-box" style={{ backgroundColor: cat.color }}>
                            <img src={cat.image} alt={cat.name} className="category-img" />
                        </div>
                        <p className="category-label">{cat.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
