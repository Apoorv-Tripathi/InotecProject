import React, { useState } from 'react';
import { FileText, CheckCircle, Award, Shield, Gauge, Zap, Clock } from 'lucide-react';

const Calibration = () => {
  const [certForm, setCertForm] = useState({
    companyName: '',
    equipmentModel: '',
    serialNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    calibrationDate: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Calibration request submitted successfully! We will contact you to schedule the service.');
    setCertForm({
      companyName: '',
      equipmentModel: '',
      serialNumber: '',
      contactPerson: '',
      email: '',
      phone: '',
      calibrationDate: '',
      notes: ''
    });
  };

  return (
    <section id="calibration" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-badge mb-3">Calibration Services</div>
          <h2 className="section-title mb-4">ISO/IEC 9001-2015 Accredited</h2>
          <p className="section-subtitle">Precision calibration </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="info-card h-100">
              <h4 className="fw-bold mb-3">Why Calibration Matters</h4>
              <p className="text-muted mb-4">
                Regular calibration ensures measurement accuracy, regulatory compliance, and operational safety.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3"><CheckCircle size={18} className="text-success me-2" />ISO 9001:2015 Certified</li>
                <li className="mb-3"><CheckCircle size={18} className="text-success me-2" />Meets NIST/NPL Standard Requirements</li>
                <li className="mb-3"><CheckCircle size={18} className="text-success me-2" />Documented Accuracy & Uncertainty</li>
                <li className="mb-3"><CheckCircle size={18} className="text-success me-2" />Available for Both On-Site & Lab Calibration</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-card h-100">
              <h4 className="fw-bold mb-4">Calibration Parameters</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="param-card">
                    <Gauge size={24} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-2">Pressure</h6>
                    <p className="mb-0 small text-muted">0–100 PSI Range
                      <br />±1 PSI Accuracy</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="param-card">
                    <Zap size={24} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-2">Flow Rate</h6>
                    <p className="mb-0 small text-muted">90–150 PSI Input Range<br />Stable Automatic Sensing</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="param-card">
                    <Shield size={24} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-2">Purity Analysis</h6>
                    <p className="mb-0 small text-muted">N₂ / O₂ Measurement<br />High-accuracy Control</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="param-card">
                    <Clock size={24} className="text-primary mb-2" />
                    <h6 className="fw-bold mb-2">Temperature</h6>
                    <p className="mb-0 small text-muted">Safe Operating Limits<br />Real-time Monitoring Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="certificate-banner">
              <h4 className="fw-bold mb-4 text-center text-white">Calibration Certificate Details</h4>
              <div className="row g-4">
                <div className="col-md-3 text-center text-white">
                  <Award size={40} className="mb-3" />
                  <p className="mb-0 fw-semibold">NABL Accredited</p>
                </div>
                <div className="col-md-3 text-center text-white">
                  <FileText size={40} className="mb-3" />
                  <p className="mb-0 fw-semibold">Digital & Physical Copies</p>
                </div>
                <div className="col-md-3 text-center text-white">
                  <Shield size={40} className="mb-3" />
                  <p className="mb-0 fw-semibold">Traceability Chain</p>
                </div>
                <div className="col-md-3 text-center text-white">
                  <CheckCircle size={40} className="mb-3" />
                  <p className="mb-0 fw-semibold">Uncertainty Documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calibration;