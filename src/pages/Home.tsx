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
                        <ProductCard id={101} name="Sugar free" weight="1 pack" price={289.11} originalPrice={300} discount={10} image="/essential/sugarfree.jpg" />
                        <ProductCard id={102} name="Vegan Savia" weight="1 pack" price={400} originalPrice={450} discount={12} color="#E8F5E9" image="/essential/vegan savia.jpg" />
                        <ProductCard id={103} name="Glucometer" weight="1 unit" price={1000} originalPrice={1050} discount={50} color="#E3F2FD" image="/essential/glucometer.jpg" />
                        <ProductCard id={104} name="Protein Mix" weight="1 kg" price={999} originalPrice={1200} discount={20} image="/essential/protein mix.jpg" />
                        <ProductCard id={105} name="Baby Wipes" weight="80 pcs" price={150} originalPrice={200} discount={25} image="/essential/baby wipes.jpg" />
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
                        <ProductCard id={201} name="Himalaya Baby" weight="200ml" price={150} originalPrice={180} image="/nut/himalayan baby.jpg" />
                        <ProductCard id={202} name="Baby Powder" weight="100g" price={80} originalPrice={90} color="#FFF3E0" image="/nut/baby powder.jpg" />
                        <ProductCard id={203} name="Diapers M" weight="20 pcs" price={300} originalPrice={350} discount={15} image="/nut/diaper m.webp" />
                        <ProductCard id={204} name="Baby Oil" weight="100ml" price={120} originalPrice={140} image="/nut/baby oil.jpg" />
                        <ProductCard id={205} name="Lotion" weight="200ml" price={200} originalPrice={240} discount={10} color="#FCE4EC" image="/nut/baby-lotion.webp" />
                    </ProductSection>

                    <ProductSection title="Handpicked Selection" subtitle="Curated for your specific health needs." theme="mint">
                        <ProductCard id={301} name="Hajmola (Imli)" weight="120 tabs" price={59} originalPrice={100} discount={20} color="#F3E5F5" image="/hand/hajmola(imli).jpg" />
                        <ProductCard id={302} name="Hajmola Combo" weight="4 pack" price={300} originalPrice={600} discount={50} image="/hand/hajmola combo.jpg" />
                        <ProductCard id={303} name="Glucon-D + Nycil" weight="Combo" price={400.02} originalPrice={500.76} discount={20} color="#E0F2F1" image="/hand/glucon d + nycil.jpg" />
                        <ProductCard id={304} name="Protinex" weight="400g" price={999} originalPrice={1200} discount={20} image="/hand/proteinx.jpg" />
                        <ProductCard id={305} name="Multivitamin" weight="60 tabs" price={450} originalPrice={600} discount={25} image="/hand/multi vitaminjpg.jpg" />
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
