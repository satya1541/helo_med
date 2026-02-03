import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Address } from '../context/CartContext';
import './AddressModal.css';

interface AddressModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (address: Address) => void;
    initialData?: Address | null;
}

const AddressModal = ({ isOpen, onClose, onSave, initialData }: AddressModalProps) => {
    const [type, setType] = useState<'Home' | 'Work' | 'Other'>('Home');
    const [text, setText] = useState('');

    useEffect(() => {
        if (initialData) {
            setType(initialData.type);
            setText(initialData.text);
        } else {
            setType('Home');
            setText('');
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        onSave({
            id: initialData?.id || Date.now().toString(),
            type,
            text
        });
        onClose();
    };

    return (
        <AnimatePresence>
            <div className="address-modal-overlay" onClick={onClose}>
                <motion.div
                    className="address-modal"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="address-modal-header">
                        <h2>{initialData ? 'Edit Address' : 'Add New Address'}</h2>
                        <button onClick={onClose} className="close-btn">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="type-selector">
                            {(['Home', 'Work', 'Other'] as const).map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    className={`type-btn ${type === t ? 'active' : ''}`}
                                    onClick={() => setType(t)}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>

                        <div className="form-group-addr">
                            <label>Full Address</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter your complete address with landmark..."
                                required
                            />
                        </div>

                        <button type="submit" className="save-address-btn">
                            Save Address
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AddressModal;
