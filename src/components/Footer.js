import React from 'react';
import { Factory, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row g-4 mb-4">
        <div className="col-lg-4">
          <div className="footer-brand mb-3">
            <Factory size={32} className="me-2" />
            <span className="fw-bold fs-4">INOTEC</span>
          </div>
          <p className="text-white-50 mb-3">
            Inovative Techonologies (INOTEC) was established in the year 2018. It is one of India's leading manufacturers and service providers of Tyre Inflators, Compressor, Nitrogen Inflators, LED Displays, and many other innovative products. .
          </p>
          <div className="footer-badges">
            <span className="badge bg-primary me-2">ISO 9001-2015 Certified</span>
            <span className="badge bg-success">NABL Accredited</span>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className="fw-bold mb-3 text-white">Quick Links</h5>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className="fw-bold mb-3 text-white">Services</h5>
          <ul className="footer-links">
            <li><a href="#amc">AMC</a></li>
            <li><a href="#calibration">Calibration</a></li>
            <li><a href="#services">Installation</a></li>
            <li><a href="#contact">Support</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5 className="fw-bold mb-3 text-white">Contact Info</h5>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <span>Gujaini,Udyogh Nagar,kanpur,
                Uttar Pradesh, India</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+91-9453245747,+91-9453283173</span>
            </li>
            <li>
              <Mail size={16} />
              <span>support@inotec.co.in</span>
            </li>
            <li>
              <Globe size={16} />
              <span>Web- www.inotec.co.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50 small">
              &copy; 2025 INOTEC - Innovative Technologies. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50 small">
              Privacy Policy | Terms of Service | Sitemap
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;