import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { API_DATA } from '../data/apiData';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? API_DATA.products
    : API_DATA.products.filter(p => p.category === filter);

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-badge mb-3">Our Products</div>
          <h2 className="section-title mb-4">Industrial-Grade Equipment</h2>
          <p className="section-subtitle">Engineered for reliability and performance</p>
        </div>

        <div className="filter-buttons mb-5">
          <button
            className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Products
          </button>
        </div>

        <div className="row g-4">
          {filteredProducts.map(product => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <div className="product-card h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">{product.name}</h5>
                  <p className="card-text text-muted mb-4">{product.description}</p>

                  <h6 className="fw-bold mt-4 mb-3">Technical Specifications</h6>
                  <div className="specs-grid">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div className="spec-item" key={key}>
                        <span className="spec-label">{key}</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button className="btn btn-primary btn-sm flex-grow-1">
                      <Download size={16} className="me-1" /> Brochure
                    </button>
                    <a href="#contact" className="btn btn-outline-primary btn-sm flex-grow-1">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;