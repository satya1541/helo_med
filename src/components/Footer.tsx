import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Helo Med</h3>
                    <p>Your trusted partner in health and wellness.</p>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Medicines</a></li>
                        <li><a href="#">Wellness</a></li>
                        <li><a href="#">Lab Tests</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact</h4>
                    <p>Email: support@helomed.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Helo Med. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
