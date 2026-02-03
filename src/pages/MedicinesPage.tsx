import { useState, useMemo } from 'react';
import { Search, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import './MedicinesPage.css';

const medicines = [
    { id: 1, name: 'Azithromycin - 500', price: 90, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Atorvastatin Tablets', price: 289, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'S-Amlodipine Tablets', price: 450, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Alprazolam Tablets', price: 350, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400' },
    { id: 5, name: 'Ciprofloxacin - 500', price: 80, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400' },
    { id: 6, name: 'Metformin SR - 500', price: 115, discount: 30, category: 'Medicine', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400' },
    { id: 7, name: 'Digital Thermometer', price: 250, discount: 10, category: 'First Aid', image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400' },
    { id: 8, name: 'Antiseptic Liquid', price: 160, discount: 15, category: 'First Aid', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400' },
];

const categories = [
    { id: 1, name: 'All', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Medicine', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Hygiene', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'First Aid', image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=200' },
];

const MedicinesPage = () => {
    const { addToCart, updateQuantity, cartItems, toggleWishlist, isInWishlist } = useCart();
    const { showToast } = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const getQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    const handleWishlist = (e: React.MouseEvent, med: typeof medicines[0]) => {
        e.stopPropagation();
        toggleWishlist(med.id);
        const isWishlisted = isInWishlist(med.id);
        showToast(isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist', med.name);
    };

    const handleAdd = (med: typeof medicines[0]) => {
        addToCart({
            id: med.id,
            name: med.name,
            price: med.price,
            originalPrice: Math.round(med.price * 100 / (100 - med.discount)),
            discount: med.discount,
            image: med.image,
            weight: '10 Tablets'
        });
        showToast('Added to cart', med.name);
    };

    const filteredMedicines = useMemo(() => {
        return medicines.filter(med => {
            const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="medicines-container">
            <Header />

            <main className="medicines-wrapper">
                <header className="medicines-header">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="header-info"
                    >
                        <span className="page-tag">Pharmacy</span>
                        <h1 className="header-title">Medicine & <span className="text-primary italic">Supplements</span></h1>
                    </motion.div>

                    <div className="medicines-search">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for medications..."
                            className="search-input-med"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </header>

                <div className="med-categories">
                    {categories.map((cat, index) => (
                        <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`med-cat-chip ${selectedCategory === cat.name ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.name)}
                        >
                            <div className="chip-img-box">
                                <img src={cat.image} alt={cat.name} />
                            </div>
                            <span>{cat.name}</span>
                        </motion.button>
                    ))}
                </div>

                <div className="medicines-grid-premium">
                    <AnimatePresence mode="popLayout">
                        {filteredMedicines.length === 0 ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="medicines-empty-state"
                            >
                                <p>No medications found matching your criteria.</p>
                            </motion.div>
                        ) : (
                            filteredMedicines.map((med, index) => {
                                const qty = getQuantity(med.id);
                                return (
                                    <motion.div
                                        key={med.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="med-grid-card"
                                    >
                                        <div className="med-card-visual">
                                            <div className="med-discount">{med.discount}%</div>
                                            <button
                                                className={`med-wishlist-trigger ${isInWishlist(med.id) ? 'active' : ''}`}
                                                onClick={(e) => handleWishlist(e, med)}
                                            >
                                                <Heart size={18} fill={isInWishlist(med.id) ? "currentColor" : "none"} />
                                            </button>
                                            <img src={med.image} alt={med.name} />
                                        </div>
                                        <div className="med-card-info">
                                            <h3>{med.name}</h3>
                                            <p className="med-store">Certified Partner Pharmacy</p>
                                            <div className="med-card-footer">
                                                <div className="med-price-info">
                                                    <span className="med-price-main">₹{med.price}</span>
                                                </div>

                                                {qty === 0 ? (
                                                    <button className="med-add-cta" onClick={() => handleAdd(med)}>
                                                        <span>Add to cart</span>
                                                    </button>
                                                ) : (
                                                    <div className="med-qty-group">
                                                        <button onClick={() => updateQuantity(med.id, qty - 1)}>-</button>
                                                        <span>{qty}</span>
                                                        <button onClick={() => updateQuantity(med.id, qty + 1)}>+</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </AnimatePresence>
                </div>
            </main>
            <div style={{ marginTop: 'auto' }}>
                <Footer />
            </div>
        </div>
    );
};

export default MedicinesPage;

