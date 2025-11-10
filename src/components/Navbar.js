import React, { useState, useEffect } from 'react';
import { Factory } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Products', 'Services', 'Calibration', 'Contact'];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'bg-transparent'} navbar-dark`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 brand-logo" href="#home">
          <div className="brand-icon-wrapper">
            <img
              src="/InotecLogo.JPG"
              alt="Industrial machinery"
              className="img-fluid hero-image"
            />
          </div>
          <span className="brand-text">INOTEC</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link nav-link-custom" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;