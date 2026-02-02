import './HealthArticles.css';

const articles = [
    {
        id: 1,
        title: 'Wellness Begins with One Fresh Morning',
        description: 'Fuel your body, refresh your mind, and start your day with movement.',
        date: '25 Dec 2025',
        image: '/images/image_1770018614558.png'
    },
    {
        id: 2,
        title: 'Wellness Begins with One Fresh Morning',
        description: 'Fuel your body, refresh your mind, and start your day with movement.',
        date: '25 Dec 2025',
        image: '/images/image_1770018614558.png'
    }
];

const HealthArticles = () => {
    return (
        <section className="health-articles-section">
            <div className="section-header">
                <h2>Health articles</h2>
                <a href="#" className="view-all">View all</a>
            </div>
            <div className="articles-grid">
                {articles.map((article) => (
                    <div key={article.id} className="article-card">
                        <div className="article-image">
                            <img src={article.image} alt={article.title} />
                        </div>
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <span className="article-date">{article.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HealthArticles;
