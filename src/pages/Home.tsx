import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import ProductCard from '../components/ProductCard';
import HealthArticles from '../components/HealthArticles';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import PrescriptionBanner from '../components/PrescriptionBanner';
import PrescriptionModal from '../components/PrescriptionModal';
import { ALL_PRODUCTS } from '../data/products';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [isPrescModalOpen, setIsPrescModalOpen] = useState(false);

    return (
        <div className="home-page">
            <Header />

            <main className="main-content">
                <Hero />

                <div className="home-sections-container">
                    <Categories />

                    <PrescriptionBanner onClick={() => setIsPrescModalOpen(true)} />

                    <ProductSection title="Essential Care" subtitle="Quality essentials for your daily wellness.">
                        {ALL_PRODUCTS.filter(p => [101, 102, 103, 104, 105].includes(p.id)).map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </ProductSection>

                    {/* Treat your skin Banner - Redesigned */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="skin-banner-section"
                    >
                        <div className="skin-banner-new">
                            <div className="skin-banner-info">
                                <span className="banner-tag">Skincare</span>
                                <h2>Treat your skin to <br /> gentle care.</h2>
                                <p>Discover our dermatologist-tested collection.</p>
                                <button className="banner-cta" onClick={() => navigate('/medicines')}>Discover all</button>
                            </div>
                        </div>
                    </motion.section>

                    <ProductSection title="Nurturing Growth" subtitle="Gentle products for your little ones." theme="soft">
                        {ALL_PRODUCTS.filter(p => [201, 202, 203, 204, 205].includes(p.id)).map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </ProductSection>

                    <ProductSection title="Handpicked Selection" subtitle="Curated for your specific health needs." theme="mint">
                        {ALL_PRODUCTS.filter(p => [301, 302, 303, 304, 305].includes(p.id)).map(p => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </ProductSection>

                    <HealthArticles />
                    <Reviews />
                </div>

                <PrescriptionModal
                    isOpen={isPrescModalOpen}
                    onClose={() => setIsPrescModalOpen(false)}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
