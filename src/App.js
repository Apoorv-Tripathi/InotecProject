import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Calibration from './pages/Calibration';
import Contact from './pages/Contact';
import './styles/App.css';

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          color: #1a1a2e;
          line-height: 1.6;
        }

        /* Navbar Styles */
        .navbar {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1rem 0;
        }

        .navbar-scrolled {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .brand-icon-wrapper {
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.8s ease;
          height:30px;
          width:70px;
        }

        .brand-logo:hover .brand-icon-wrapper {
          transform: rotate(360deg);
        }

        .brand-icon {
          display: block;
        }

        .nav-link-custom {
          position: relative;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #0dcaf0);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          position: relative;
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(13, 110, 253, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .hero-content {
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-title {
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .hero-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5));
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          50% { opacity: 1; transform: translateY(10px); }
        }

        /* Section Styles */
        .section-padding {
          padding: 100px 0;
        }

        .section-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(13, 110, 253, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          color: white;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #6c757d;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Feature Cards */
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
        }

        .bg-gradient-success {
          background: linear-gradient(135deg, #198754, #20c997);
        }

        .bg-gradient-info {
          background: linear-gradient(135deg, #0dcaf0, #6610f2);
        }

        /* Product Cards */
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-filter {
          padding: 0.75rem 2rem;
          border: 2px solid #e9ecef;
          background: white;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-filter:hover {
          border-color: #0d6efd;
          color: #0d6efd;
          transform: translateY(-2px);
        }

        .btn-filter.active {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          color: white;
          border-color: transparent;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .product-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.1);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1rem;
        }

        .specs-grid {
          display: grid;
          gap: 0.75rem;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 10px;
          font-size: 0.875rem;
        }

        .spec-label {
          font-weight: 600;
          color: #6c757d;
          text-transform: capitalize;
        }

        .spec-value {
          font-weight: 600;
          color: #1a1a2e;
        }

        /* Service Cards */
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border-left: 4px solid #0d6efd;
        }

        .service-card:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .service-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
        }

        .service-features li:last-child {
          border-bottom: none;
        }

        /* Workflow Card */
        .workflow-card {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          border-radius: 20px;
          padding: 3rem 2rem;
          color: white;
        }

        .workflow-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .workflow-step {
          text-align: center;
          flex: 1;
          min-width: 150px;
        }

        .workflow-number {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1rem;
          border: 3px solid rgba(255, 255, 255, 0.3);
        }

        /* Pricing Cards */
        .pricing-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .pricing-card.popular {
          border-color: #0d6efd;
          transform: scale(1.05);
        }

        .popular-badge {
          position: absolute;
          top: 20px;
          right: -35px;
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          color: white;
          padding: 0.5rem 3rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          transform: rotate(45deg);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .pricing-header {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          padding: 2rem;
          text-align: center;
        }

        .pricing-body {
          padding: 2rem;
        }

        /* Form Styles */
        .form-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .form-control-custom, .form-select {
          padding: 0.875rem 1.25rem;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .form-control-custom:focus, .form-select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
          outline: none;
        }

        .form-label {
          font-size: 0.875rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }

        /* Button Styles */
        .btn-custom {
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          position: relative;
          overflow: hidden;
        }

        .btn-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-custom:hover::before {
          left: 100%;
        }

        .btn-custom:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.3);
        }

        .btn-custom-outline {
          border: 2px solid white;
          background: transparent;
          color: white;
        }

        .btn-custom-outline:hover {
          background: white;
          color: #0d6efd;
        }

        /* Info Cards */
        .info-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .param-card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .param-card:hover {
          background: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        /* Certificate Banner */
        .certificate-banner {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 20px;
          padding: 3rem 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Contact Styles */
        .contact-info-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .contact-item:last-of-type {
          border-bottom: none;
          margin-bottom: 2rem;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .business-hours {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }

        .map-placeholder {
          height: 300px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        /* Footer Styles */
        .footer {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          padding: 4rem 0 2rem;
          color: white;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          color: white;
        }

        .footer-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #0dcaf0;
          transform: translateX(5px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .section-title {
            font-size: 2.5rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .workflow-steps {
            flex-direction: column;
          }

          .pricing-card.popular {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-section {
            padding-top: 80px;
          }

          .filter-buttons {
            flex-direction: column;
          }

          .btn-filter {
            width: 100%;
          }
        }

        /* Smooth Animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Utility Classes */
        .transition-all {
          transition: all 0.3s ease;
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 80px;
        }

        /* Card Hover Effects */
        .feature-card, .product-card, .service-card, .pricing-card, .info-card, .form-card {
          position: relative;
        }

        .feature-card::before, .product-card::before, .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(13, 202, 240, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
          pointer-events: none;
        }

        .feature-card:hover::before, .product-card:hover::before, .service-card:hover::before {
          opacity: 1;
        }

        /* Loading Animation */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #0d6efd, #0dcaf0);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0a58ca;
        }

        /* Focus Visible */
        *:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }

        /* Selection */
        ::selection {
          background: #0d6efd;
          color: white;
        }

        /* Backdrop Blur Support */
        @supports (backdrop-filter: blur(10px)) {
          .navbar-scrolled {
            backdrop-filter: blur(10px);
          }
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Calibration />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
