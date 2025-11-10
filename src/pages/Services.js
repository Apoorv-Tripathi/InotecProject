import React from 'react';
import {
  MdSettings,
  MdBuild,
  MdOutlinePhoneInTalk,
  MdOutlineCalendarMonth,
  MdAir,
  MdOutlineConstruction
} from "react-icons/md";

import {
  LuGauge,
  LuShieldCheck,
  LuCpu,
  LuWind,
  LuWrench,
  LuFuel
} from "react-icons/lu";

import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { API_DATA } from '../data/apiData';

const Services = () => {
  const iconMap = {
    "settings": MdSettings,
    "gauge": LuGauge,
    "shield-check": LuShieldCheck,
    "phone-call": MdOutlinePhoneInTalk,
    "calendar-check": MdOutlineCalendarMonth,
    "fuel": LuFuel,
    "cpu": LuCpu,
    "wind": LuWind,
    "air-vent": MdAir,
    "toolbox": LuWrench
  };
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-badge mb-3">Our Services</div>
          <h2 className="section-title mb-4">Comprehensive Solutions</h2>
          <p className="section-subtitle">From installation to lifecycle support</p>
        </div>

        <div className="row g-4">
          {API_DATA.services.map(service => {
            const Icon = iconMap[service.icon];
            return (
              <div className="col-lg-6" key={service.id}>
                <div className="service-card h-100">
                  <div className="service-header">
                    <div className="service-icon-wrapper">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-2">{service.title}</h4>
                      <p className="text-muted mb-0">{service.description}</p>
                    </div>
                  </div>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle size={18} className="text-success me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn btn-outline-primary btn-sm mt-3">
                    Request Service <FiArrowRight size={16} className="ms-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="workflow-card">
              <h3 className="fw-bold mb-4 text-center">Service Workflow</h3>
              <div className="workflow-steps">
                {['Initial Assessment', 'Proposal & Planning', 'Execution & Testing', 'Documentation & Training', 'Ongoing Support'].map((step, idx) => (
                  <div className="workflow-step" key={idx}>
                    <div className="workflow-number">{idx + 1}</div>
                    <p className="fw-semibold mb-0">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;