import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, Plus, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const WalletPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="profile-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>My Wallet</h1>
                </header>

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
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>₹ 1,250.00</h2>
                            </div>
                            <div style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.75rem', borderRadius: '1rem' }}>
                                <Wallet size={24} />
                            </div>
                        </div>
                        <button style={{
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
                        }}>
                            <Plus size={20} />
                            Add Money
                        </button>
                    </div>

                    <div className="transactions-section">
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Recent Transactions</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{
                                    background: 'white',
                                    padding: '1.25rem',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    border: '1px solid #eee'
                                }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                        <div style={{ background: '#e0f2f1', padding: '0.75rem', borderRadius: '50%' }}>
                                            <ArrowRight size={20} color="#008080" />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '1rem' }}>Order #{1024 + i}</h4>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>Feb {i + 1}, 2026</p>
                                        </div>
                                    </div>
                                    <p style={{ fontWeight: '700', color: i % 2 === 0 ? '#e53935' : '#43a047', margin: 0 }}>
                                        {i % 2 === 0 ? '-' : '+'} ₹ {250 * i}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default WalletPage;
