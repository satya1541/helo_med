import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Check, X } from 'lucide-react';
import './PaymentModal.css';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    totalAmount: number;
}

const PaymentModal = ({ isOpen, onClose, onConfirm, totalAmount }: PaymentModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="payment-modal-overlay">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="payment-modal"
                    >
                        <div className="modal-icon-wrapper">
                            <CreditCard size={32} />
                        </div>

                        <h2>Confirm Payment</h2>
                        <p>You are about to pay <span className="highlight-amount">₹{totalAmount.toFixed(2)}</span></p>

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={onClose}>
                                <X size={18} />
                                <span>Cancel</span>
                            </button>
                            <button className="btn-confirm" onClick={onConfirm}>
                                <Check size={18} />
                                <span>Pay Now</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PaymentModal;
