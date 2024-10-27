import React from 'react';
import './ServiceOffered.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

const ServicesOffered = () => {

  //Animation
  useGSAP(() => {
    gsap.from(".animationText", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".services-offered",
        start: "top 100%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <>
      <section className="services-offered">
        <h1 className='animationText'>Services We Offer</h1>
        <h2 className='animationText'>We Build Mobile and Web App Solutions for Every Niche</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesOffered;
