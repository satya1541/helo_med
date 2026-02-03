import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const RefundPolicy = () => {
    return (
        <div className="legal-page">
            <Header />
            <main className="legal-content container">
                <h1>Refund & Cancellation Policy</h1>
                <p>Last updated: October 2023</p>

                <section>
                    <h2>1. Returns</h2>
                    <p>We accept returns for damaged, defective, or incorrect items within 7 days of delivery. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                </section>

                <section>
                    <h2>2. Non-Returnable Items</h2>
                    <p>Certain types of items cannot be returned, including perishable goods (such as food, flowers, or newspapers), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases.</p>
                </section>

                <section>
                    <h2>3. Refunds</h2>
                    <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 5-7 business days.</p>
                </section>

                <section>
                    <h2>4. Cancellations</h2>
                    <p>You can cancel your order before it has been shipped. Once the order is shipped, it cannot be cancelled, but you may be eligible for a return as per our return policy.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
