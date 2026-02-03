import { useState } from 'react';
import { X, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from './Toast';
import './PrescriptionModal.css';

interface PrescriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrescriptionModal = ({ isOpen, onClose }: PrescriptionModalProps) => {
    const [step, setStep] = useState<'upload' | 'verifying' | 'success'>('upload');
    const [fileName, setFileName] = useState<string | null>(null);
    const { showToast } = useToast();

    if (!isOpen) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setStep('verifying');

            // Simulate AI Verification
            setTimeout(() => {
                setStep('success');
                showToast('Prescription Uploaded', 'Our pharmacist will review it shortly.');
            }, 3000);
        }
    };

    const reset = () => {
        setStep('upload');
        setFileName(null);
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="presc-modal-overlay" onClick={reset}>
                <motion.div
                    className="presc-modal"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="presc-close-btn" onClick={reset}>
                        <X size={24} />
                    </button>

                    <div className="presc-modal-content">
                        {step === 'upload' && (
                            <div className="presc-step-upload">
                                <div className="presc-icon-circle">
                                    <FileText size={40} color="var(--primary-color)" />
                                </div>
                                <h2>Upload Prescription</h2>
                                <p>Upload a clear photo of your doctor's prescription to order restricted medicines.</p>

                                <label className="presc-upload-box">
                                    <Upload size={32} />
                                    <span>Select Image / PDF</span>
                                    <p>Max size: 5MB</p>
                                    <input type="file" hidden onChange={handleFileChange} accept="image/*,application/pdf" />
                                </label>

                                <div className="presc-guidelines">
                                    <div className="guide-item">
                                        <CheckCircle2 size={16} color="#4caf50" />
                                        <span>Patient name & date visible</span>
                                    </div>
                                    <div className="guide-item">
                                        <CheckCircle2 size={16} color="#4caf50" />
                                        <span>Doctor's signature visible</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 'verifying' && (
                            <div className="presc-step-verifying">
                                <div className="presc-loader">
                                    <div className="spinner"></div>
                                </div>
                                <h2>Verifying...</h2>
                                <p>Analyzing {fileName} using our Smart Health AI.</p>
                                <div className="verifying-details">
                                    <span>Validating authenticity</span>
                                    <span>Extracting medication list</span>
                                </div>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="presc-step-success">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="success-icon"
                                >
                                    <CheckCircle2 size={80} color="var(--primary-color)" />
                                </motion.div>
                                <h2>Prescription Saved!</h2>
                                <p>Your prescription for <strong>{fileName}</strong> has been uploaded. You can now add prescription-only medicines to your cart.</p>
                                <button className="done-btn" onClick={reset}>
                                    Got it, thanks!
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PrescriptionModal;
