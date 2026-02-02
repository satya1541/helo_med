import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import './ProfilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Sidebar />
            <div className="profile-page page-with-sidebar">
                <header className="page-header">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        <ArrowLeft size={24} />
                    </button>
                    <h1>Edit Profile</h1>
                </header>

                <main className="profile-content">
                    <div className="profile-avatar-section">
                        <div className="avatar-wrapper">
                            <div className="avatar-placeholder">
                                <span>👤</span>
                            </div>
                            <button className="camera-btn">
                                <Camera size={16} />
                            </button>
                        </div>
                    </div>

                    <form className="profile-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" defaultValue="Amrit Kumar Jena" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" defaultValue="kumaramrit@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="tel" defaultValue="+91 9878555432" />
                        </div>

                        <button type="submit" className="save-btn">Save changes</button>
                    </form>
                </main>
            </div>
        </>
    );
};

export default ProfilePage;
