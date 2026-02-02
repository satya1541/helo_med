import React from 'react';
import './ProductSection.css';

interface ProductSectionProps {
    title: string;
    subtitle?: React.ReactNode;
    children: React.ReactNode;
    theme?: 'light' | 'orange'; // "Pay less..." section has orange bg
}

const ProductSection = ({ title, subtitle, children, theme = 'light' }: ProductSectionProps) => {
    return (
        <section className={`product-section theme-${theme}`}>
            <div className="section-header">
                <div className="header-text">
                    <h2>{title}</h2>
                    {subtitle && <div className="subtitle">{subtitle}</div>}
                </div>
                <a href="#" className="view-all">View all</a>
            </div>
            <div className="products-grid">
                {children}
            </div>
        </section>
    );
};

export default ProductSection;
