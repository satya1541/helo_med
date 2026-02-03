import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hero-title"
                    >
                        Premium <span className="text-primary italic">Wellness</span> Solutions for Every <span className="text-outline">Home</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-description"
                    >
                        Access pharmaceutical care, wellness products, and expert medical advice—all from the comfort of your space. Designed for your health, curated for your life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hero-cta-group"
                    >
                        <button className="btn-primary" onClick={() => navigate('/medicines')}>
                            Shop Collections
                        </button>
                        <button className="btn-secondary" onClick={() => navigate('/about')}>
                            How it works
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-visual"
                >
                    <div className="visual-wrapper">
                        <img
                            src="/images/hero-sale-banner.png"
                            alt="Wellness Showcase"
                            className="floating-image"
                        />
                        <div className="floating-card c1">
                            <div className="card-dot" />
                            <span>Fast Delivery</span>
                        </div>
                        <div className="floating-card c2">
                            <div className="card-dot blue" />
                            <span>100% Genuine</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mouse-icon"
                >
                    <MousePointer2 size={20} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
