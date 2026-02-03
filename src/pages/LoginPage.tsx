import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Check specific credentials
        if (username === 'user' && password === 'user') {
            login(username);
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo-section">
                    <img src="/images/logo.png" alt="Helo Med" className="login-logo" />
                    <h1>Welcome Back</h1>
                    <p>Please log in to continue to your health dashboard.</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <span className="forgot-password">Forgot password?</span>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="login-btn">Log In</button>

                    <div className="login-footer">
                        <p>Don't have an account? <span className="register-link">Register Now</span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
