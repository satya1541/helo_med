import { motion } from 'framer-motion';
import { Upload, FileText, ChevronRight } from 'lucide-react';
import './PrescriptionBanner.css';

interface PrescriptionBannerProps {
    onClick: () => void;
}

const PrescriptionBanner = ({ onClick }: PrescriptionBannerProps) => {
    return (
        <motion.div
            className="presc-banner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={onClick}
        >
            <div className="presc-banner-left">
                <div className="presc-icon-badge">
                    <FileText size={24} />
                    <Upload size={14} className="badge-overlay" />
                </div>
                <div className="presc-banner-text">
                    <h3>Order with Prescription</h3>
                    <p>Upload your doctor's note and we'll handle the rest.</p>
                </div>
            </div>

            <button className="presc-banner-btn">
                <span>Upload Now</span>
                <ChevronRight size={18} />
            </button>

            <div className="presc-banner-decor">
                <div className="decor-circle circle-1"></div>
                <div className="decor-circle circle-2"></div>
            </div>
        </motion.div>
    );
};

export default PrescriptionBanner;
