import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content container">
                <h1>Privacy Policy</h1>
                <p>Last updated: October 2023</p>

                <section>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, shipping address, and payment information.</p>
                </section>

                <section>
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to process your orders, communicate with you, improve our services, and personalize your experience. We do not sell or share your personal information with third parties for their direct marketing purposes.</p>
                </section>

                <section>
                    <h2>3. Data Security</h2>
                    <p>We implement reasonable security measures to protect the confidentiality and integrity of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                </section>

                <section>
                    <h2>4. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. You can manage your account settings or contact us for assistance.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
