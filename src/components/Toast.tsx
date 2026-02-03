import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShoppingCart, X } from 'lucide-react';
import './Toast.css';

interface ToastData {
    id: number;
    message: string;
    productName?: string;
}

interface ToastContextType {
    showToast: (message: string, productName?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const showToast = (message: string, productName?: string) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, productName }]);
    };

    const removeToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="toast-container">
                <AnimatePresence>
                    {toasts.map(toast => (
                        <ToastItem
                            key={toast.id}
                            toast={toast}
                            onRemove={() => removeToast(toast.id)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onRemove }: { toast: ToastData; onRemove: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onRemove, 3000);
        return () => clearTimeout(timer);
    }, [onRemove]);

    return (
        <motion.div
            className="toast-item"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
            <div className="toast-icon">
                <CheckCircle size={20} />
            </div>
            <div className="toast-content">
                <span className="toast-title">
                    <ShoppingCart size={14} /> Added to Cart
                </span>
                {toast.productName && (
                    <span className="toast-product">{toast.productName}</span>
                )}
            </div>
            <button className="toast-close" onClick={onRemove}>
                <X size={16} />
            </button>
        </motion.div>
    );
};

export default ToastProvider;
