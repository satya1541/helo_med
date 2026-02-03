import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, Plus, ArrowRight, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/Toast';
import { motion, AnimatePresence } from 'framer-motion';

const WalletPage = () => {
    const navigate = useNavigate();
    const { walletBalance, transactions, addMoney } = useCart();
    const { showToast } = useToast();
    const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);
    const [amountToAdd, setAmountToAdd] = useState('');

    const handleAddMoney = () => {
        const amount = parseFloat(amountToAdd);
        if (amount > 0) {
            addMoney(amount);
            showToast('Money Added', `₹${amount} added successfully`);
            setAmountToAdd('');
            setIsAddMoneyOpen(false);
        }
    };

    return (
        <>
            <div className="wallet-container">
                <Header />
                <div className="wallet-wrapper">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Wallet</h1>
                </div>

                <main className="profile-content" style={{ maxWidth: '600px', margin: '0 auto', padding: '1.5rem' }}>
                    <div className="wallet-card" style={{
                        background: 'linear-gradient(135deg, #008080 0%, #004d40 100%)',
                        color: 'white',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        marginBottom: '2rem',
                        boxShadow: '0 10px 20px rgba(0, 128, 128, 0.2)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                            <div>
                                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Current Balance</p>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>₹ {walletBalance.toFixed(2)}</h2>
                            </div>
                            <div style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.75rem', borderRadius: '1rem' }}>
                                <Wallet size={24} />
                            </div>
                        </div>
                        <button
                            onClick={() => setIsAddMoneyOpen(true)}
                            style={{
                                width: '100%',
                                background: 'white',
                                color: '#008080',
                                border: 'none',
                                padding: '1rem',
                                borderRadius: '1rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            <Plus size={20} />
                            Add Money
                        </button>
                    </div>

                    <div className="transactions-section">
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Recent Transactions</h3>
                        {transactions.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#666' }}>No transactions yet.</p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {transactions.map(tx => (
                                    <div key={tx.id} style={{
                                        background: 'white',
                                        padding: '1.25rem',
                                        borderRadius: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        border: '1px solid #eee'
                                    }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{
                                                background: tx.type === 'credit' ? '#E8F5E9' : '#FFEBEE',
                                                padding: '0.75rem',
                                                borderRadius: '50%'
                                            }}>
                                                <ArrowRight size={20} color={tx.type === 'credit' ? '#2E7D32' : '#C62828'} />
                                            </div>
                                            <div>
                                                <h4 style={{ margin: 0, fontSize: '1rem' }}>{tx.description}</h4>
                                                <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{tx.date}</p>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontWeight: '700',
                                            color: tx.type === 'debit' ? '#C62828' : '#2E7D32',
                                            margin: 0
                                        }}>
                                            {tx.type === 'debit' ? '-' : '+'} ₹ {tx.amount.toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>

                <AnimatePresence>
                    {isAddMoneyOpen && (
                        <div style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                            backdropFilter: 'blur(4px)'
                        }}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    width: '90%',
                                    maxWidth: '360px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Add Money</h3>
                                    <button onClick={() => setIsAddMoneyOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <X size={24} color="#666" />
                                    </button>
                                </div>

                                <input
                                    type="number"
                                    placeholder="Enter amount (e.g. 500)"
                                    value={amountToAdd}
                                    onChange={(e) => setAmountToAdd(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '1.2rem',
                                        border: '2px solid #eee',
                                        borderRadius: '1rem',
                                        marginBottom: '1rem',
                                        outline: 'none'
                                    }}
                                />

                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                    {[100, 500, 1000, 2000].map(amt => (
                                        <button
                                            key={amt}
                                            onClick={() => setAmountToAdd(amt.toString())}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                background: '#f5f5f5',
                                                border: 'none',
                                                borderRadius: '2rem',
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                color: '#666'
                                            }}
                                        >
                                            + ₹{amt}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={handleAddMoney}
                                    style={{
                                        width: '100%',
                                        background: '#008080',
                                        color: 'white',
                                        border: 'none',
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        fontWeight: '700',
                                        fontSize: '1.1rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Proceed to Add <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </>
    );
};

export default WalletPage;
