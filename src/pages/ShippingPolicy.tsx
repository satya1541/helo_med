import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const ShippingPolicy = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content container">
                <h1>Shipping Policy</h1>
                <p>Last updated: October 2023</p>

                <section>
                    <h2>1. Shipping Areas</h2>
                    <p>We currently ship to all major cities and towns across India. Please check our pincode availability tool on the product page to confirm delivery to your location.</p>
                </section>

                <section>
                    <h2>2. Delivery Timelines</h2>
                    <p>Standard delivery typically takes 3-5 business days for metro cities and 5-7 business days for other locations. Delays may occur due to unforeseen circumstances or government restrictions.</p>
                </section>

                <section>
                    <h2>3. Shipping Charges</h2>
                    <p>We offer FREE shipping on orders above ₹500. For orders below ₹500, a nominal shipping charge of ₹50 will be applied.</p>
                </section>

                <section>
                    <h2>4. Tracking Your Order</h2>
                    <p>Once your order is shipped, you will receive a tracking link via SMS and email. You can also track your order status in the "Orders" section of your account.</p>
                </section>

                <section>
                    <h2>5. Damaged Items</h2>
                    <p>If you receive a damaged package, please refuse to accept it and contact our customer support immediately. If you open the package and find damaged items, please initiate a return within 24 hours.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ShippingPolicy;
