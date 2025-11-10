import React from 'react';
import { Target, Award, Users } from 'lucide-react';
const About = () => (
  <section id="about" className="section-padding bg-light position-relative">
    <div className="section-decoration"></div>
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <div className="section-badge mb-3">About Us</div>
          <h2 className="section-title mb-4">Delivering Certified Quality and Advanced Engineering Solutions</h2>
          <p className="section-subtitle">
            INOTEC is ISO 9001:2015 certified and registered with the Government of India, GeM, and the MSME Business Forum. Established in 2018, we are one of India’s leading manufacturers of Tyre Inflators, Air Compressors, Nitrogen Inflators, LED Displays, and other advanced equipment. Our engineering expertise and reliable product performance have helped us build a strong presence across fuel stations, automotive workshops, and industrial clients. We offer complete installation, commissioning, maintenance, repair services, AMC support, and certified calibration solutions to ensure long-term efficiency and dependable operation of all our machines.
          </p>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="feature-card h-100">
            <div className="feature-icon-wrapper bg-gradient-primary">
              <Target size={32} className="text-white" />
            </div>
            <h4 className="fw-bold mb-3 mt-4">Our Mission</h4>
            <p className="text-muted mb-0">
              To deliver reliable and precision-engineered air solutions, nitrogen systems, and calibration services that meet industry standards and ensure consistent performance for our clients.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card h-100">
            <div className="feature-icon-wrapper bg-gradient-success">
              <Award size={32} className="text-white" />
            </div>
            <h4 className="fw-bold mb-3 mt-4">Quality Commitment</h4>
            <p className="text-muted mb-0">
              ISO 9001:2015 certified and registered with GeM and MSME, ensuring strict quality processes and consistent compliance with national and international standards.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="feature-card h-100">
            <div className="feature-icon-wrapper bg-gradient-info">
              <Users size={32} className="text-white" />
            </div>
            <h4 className="fw-bold mb-3 mt-4">Expert Team</h4>
            <p className="text-muted mb-0">
              Experienced engineers and technicians specializing in air systems, pneumatics, automation, and calibration, delivering dependable support across installation, maintenance, and service operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;