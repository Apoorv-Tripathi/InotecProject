import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!contactForm.name.trim()) newErrors.name = 'Name is required';
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!contactForm.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(contactForm.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!contactForm.subject.trim()) newErrors.subject = 'Subject is required';
    if (!contactForm.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Thank you for contacting INOTEC! We will respond within 24 hours.');
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-badge mb-3">Contact Us</div>
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="section-subtitle">Our technical team is ready to assist you</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="contact-info-card h-100">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="text-muted mb-0">
                    Plot No. 216, Sec-j<br></br>
                    Gujaini,Udyogh Nagar,kanpur,<br></br>
                    Uttar Pradesh (India) 208022
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="text-muted mb-0">
                    Sales: +91-9453245747<br />
                    Service: +91-9453283173<br />
                    Calibration: +91-9453283173
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">
                    support@inotec.co.in
                  </p>
                </div>
              </div>

              <div className="business-hours">
                <h6 className="fw-bold mb-2">Business Hours</h6>
                <p className="mb-1 small">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-1 small">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="mb-0 small">Emergency Support: 24/7</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="form-card">
              <h4 className="fw-bold mb-4">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Name *</label>
                    <input
                      type="text"
                      className={`form-control form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email *</label>
                    <input
                      type="email"
                      className={`form-control form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone *</label>
                    <input
                      type="tel"
                      className={`form-control form-control-custom ${errors.phone ? 'is-invalid' : ''}`}
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Company</label>
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Subject *</label>
                    <select
                      className={`form-select form-control-custom ${errors.subject ? 'is-invalid' : ''}`}
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Enquiry</option>
                      <option value="service">Service Request</option>
                      <option value="amc">AMC Enquiry</option>
                      <option value="calibration">Calibration Request</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Message *</label>
                    <textarea
                      className={`form-control form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg btn-custom px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="map-placeholder mt-4">
              <MapPin size={48} className="text-muted" />
              <p className="text-muted mb-0 mt-2">Google Maps Integration</p>
              <p className="small text-muted">Gurugram, Haryana, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 
export default Contact;