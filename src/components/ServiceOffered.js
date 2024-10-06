import React from 'react';
import './ServiceOffered.css'; 

const services = [
  { name: 'Java Development', icon: '/path-to-java-icon.png' },
  { name: 'Shopify', icon: '/path-to-shopify-icon.png' },
  { name: 'iOS App Development', icon: '/path-to-ios-icon.png' },
  { name: 'Flutter App Development', icon: '/path-to-flutter-icon.png' },
  { name: 'VueJS', icon: '/path-to-vuejs-icon.png' },
  { name: 'MEAN Stack', icon: '/path-to-meanstack-icon.png' }
];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <img src={service.icon} alt={service.name} />
    <p>{service.name}</p>
  </div>
);

const ServicesOffered = () => (
  <section className="services-offered">
    <h1>Services We Offer</h1>
    <h2>We Build Mobile and Web App Solutions for Every Niche</h2>
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  </section>
);

export default ServicesOffered;
