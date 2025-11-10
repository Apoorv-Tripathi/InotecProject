import React from 'react';
import { ChevronRight, Award, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero-section position-relative d-flex align-items-center overflow-hidden">
    <div className="hero-background"></div>
    <div className="hero-overlay"></div>
    <div className="container position-relative" style={{ zIndex: 2 }}>
      <div className="row align-items-center">
        <div className="col-lg-6 text-white hero-content">
          <div className="hero-badge mb-3">
            <Award size={16} className="me-2" />
            ISO 9001-2015 Certified Excellence
          </div>
          <h1 className="display-3 fw-bold mb-4 hero-title">
            Advanced Industrial Air Solutions
          </h1>
          <p className="lead mb-4 hero-subtitle">
            INOTEC delivers advanced air solutions, nitrogen systems, and industrial equipment engineered for reliable performance. Backed by ISO 9001:2015 certification, we provide end-to-end installation, maintenance, and calibration services across India.
          </p>
          <div className="d-flex gap-3 flex-wrap mb-5">
            <a href="#products" className="btn btn-primary btn-lg btn-custom px-4 py-3">
              Explore Products
              <ArrowRight size={20} className="ms-2" />
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg btn-custom-outline px-4 py-3">
              Raise Complaint
              
            </a>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="stat-card">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
                <h3 className="fw-bold mb-0">7+</h3>
                <p className="mb-0 text-white-50">Years Experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card">
                <div className="stat-icon">
                  <CheckCircle size={24} />
                </div>
                <h3 className="fw-bold mb-0">100+</h3>
                <p className="mb-0 text-white-50">Installations</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card">
                <div className="stat-icon">
                  <Award size={24} />
                </div>
                <h3 className="fw-bold mb-0">ISO</h3>
                <p className="mb-0 text-white-50">Certified</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-image-wrapper">
            <div className="hero-image-overlay"></div>
            <img
              src="/InotecLogo.JPG"
              alt="Industrial machinery"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="scroll-indicator">
      <div className="scroll-line"></div>
    </div>
  </section>
);

export default Hero;