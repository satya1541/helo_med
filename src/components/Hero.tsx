import { ChevronRight, Upload, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            {/* Prime Banner */}
            <div className="prime-banner">
                <div className="prime-content">
                    <span className="prime-icon">👑</span>
                    <span className="prime-text"><strong>Prime</strong> Enjoy free delivery on every order</span>
                </div>
                <ChevronRight size={18} className="prime-arrow" />
            </div>

            {/* Hero Carousel */}
            <div className="hero-carousel">
                <div className="slide active-sale-slide">
                    <img
                        src="/images/hero-sale-banner.png"
                        alt="Super Sale - Up to 30% Off on Medical Equipment"
                        className="full-banner-image"
                    />
                </div>

                <div className="carousel-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                </div>
            </div>

            {/* Upload Prescription Banner */}
            <div className="prescription-banner">
                <div className="prescription-content">
                    <div className="prescription-icon">
                        <FileText size={28} color="#008080" />
                    </div>
                    <div className="prescription-text">
                        <h3>Upload your prescription</h3>
                        <p>We guarantee your privacy</p>
                    </div>
                </div>
                <button className="upload-btn">
                    <Upload size={16} />
                    Upload
                </button>
            </div>
        </section>
    );
};

export default Hero;
