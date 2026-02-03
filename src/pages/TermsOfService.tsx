import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content container">
                <h1>Terms of Service</h1>
                <p>Last updated: October 2023</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                </section>

                <section>
                    <h2>2. Use of Service</h2>
                    <p>You agree to use our service only for lawful purposes and in accordance with these terms. You must not use our service to transmit any harmful or illegal content.</p>
                </section>

                <section>
                    <h2>3. Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and images, is the property of Helo Med or its licensors and is protected by copyright laws.</p>
                </section>

                <section>
                    <h2>4. Limitation of Liability</h2>
                    <p>Helo Med shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our service.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
