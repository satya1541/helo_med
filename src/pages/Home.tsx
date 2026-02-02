import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import ProductCard from '../components/ProductCard';
import HealthArticles from '../components/HealthArticles';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Header />

            <main className="main-content">
                <Hero />

                <Categories />

                {/* Treat your skin Banner */}
                <section className="skin-banner-section">
                    <div className="skin-banner">
                        <div className="skin-banner-content">
                            <h2>Treat your skin to gentle care</h2>
                            <button className="shop-btn">Shop now</button>
                        </div>
                        <div className="skin-banner-image">
                            {/* Image placeholder */}
                        </div>
                    </div>
                </section>

                <ProductSection title="Our home essentials" subtitle={<a href="#" className="view-all-mobile">View all</a>}>
                    <ProductCard name="Sugar free" weight="1 pack" price={289.11} originalPrice={300} discount={10} />
                    <ProductCard name="Vegan Savia" weight="1 pack" price={400} originalPrice={450} discount={12} color="#E8F5E9" />
                    <ProductCard name="Glucometer" weight="1 unit" price={1000} originalPrice={1050} discount={50} color="#E3F2FD" />
                    <ProductCard name="Protein Mix" weight="1 kg" price={999} originalPrice={1200} discount={20} />
                    <ProductCard name="Baby Wipes" weight="80 pcs" price={150} originalPrice={200} discount={25} />
                </ProductSection>

                <ProductSection title="Pay less for kids care" theme="orange">
                    <ProductCard name="Himalaya Baby" weight="200ml" price={150} originalPrice={180} />
                    <ProductCard name="Baby Powder" weight="100g" price={80} originalPrice={90} color="#FFF3E0" />
                    <ProductCard name="Diapers M" weight="20 pcs" price={300} originalPrice={350} discount={15} />
                    <ProductCard name="Baby Oil" weight="100ml" price={120} originalPrice={140} />
                    <ProductCard name="Lotion" weight="200ml" price={200} originalPrice={240} discount={10} color="#FCE4EC" />
                </ProductSection>

                <ProductSection title="Hand picks for you">
                    <ProductCard name="Hajmola (Imli)" weight="120 tabs" price={59} originalPrice={100} discount={20} color="#F3E5F5" />
                    <ProductCard name="Hajmola Combo" weight="4 pack" price={300} originalPrice={600} discount={50} />
                    <ProductCard name="Glucon-D + Nycil" weight="Combo" price={400.02} originalPrice={500.76} discount={20} color="#E0F2F1" />
                    <ProductCard name="Protinex" weight="400g" price={999} originalPrice={1200} discount={20} />
                    <ProductCard name="Multivitamin" weight="60 tabs" price={450} originalPrice={600} discount={25} />
                </ProductSection>

                <HealthArticles />

                <Reviews />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
