import { motion } from 'framer-motion';
import { Check, Quote, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hero-content"
                        >
                            <h1>Welcome to <span className="highlight">Helo Med</span> your trusted online pharmacy.</h1>
                            <p>Delivering health and wellness solutions with care and precision since 2012.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="hero-image"
                        >
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" alt="Medical Team" />
                        </motion.div>
                    </div>
                </section>



                {/* Mission Section */}
                <section className="mission-section">
                    <div className="container split-layout">
                        <div className="mission-text">
                            <span className="section-tag">OUR MISSION</span>
                            <h2>Empowering health and well-being for all.</h2>
                            <p>We believe that access to quality healthcare is a fundamental right. Our mission is to bridge the gap between patients and premium medical products, ensuring safety, reliability, and care in every serving.</p>
                        </div>
                        <div className="mission-details">
                            <div className="value-item">
                                <div className="icon-box"><Check size={20} /></div>
                                <div>
                                    <h3>Pharmaceutical Expertise</h3>
                                    <p>Guided by licensed pharmacists and health experts.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="icon-box"><Check size={20} /></div>
                                <div>
                                    <h3>Regulatory Compliance</h3>
                                    <p>Fully compliant with all safety and health regulations.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="icon-box"><Check size={20} /></div>
                                <div>
                                    <h3>Quality Assurance</h3>
                                    <p>Only genuine, sourced products from trusted manufacturers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Testimonials */}
                <section className="testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-tag">TESTIMONIALS</span>
                            <h2>What our customers say.</h2>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <Quote className="quote-icon" size={32} />
                                <p>"Helo Med has transformed how I manage my family's prescriptions. Fast, reliable, and always genuine."</p>
                                <div className="customer-info">
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                                    </div>
                                    <h4>Sarah J.</h4>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <Quote className="quote-icon" size={32} />
                                <p>"The convenience of having essentials delivered to my door is unmatched. Great service!"</p>
                                <div className="customer-info">
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                                    </div>
                                    <h4>Michael R.</h4>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <Quote className="quote-icon" size={32} />
                                <p>"I trust Helo Med for all my baby care needs. The products are top quality and delivery is quick."</p>
                                <div className="customer-info">
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                                    </div>
                                    <h4>Priya K.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
