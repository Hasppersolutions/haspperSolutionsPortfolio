import React from 'react';
import './ExpertServices.css';
import logo from "../../assets/img/nav-icon1.svg";

const services = [
  {
    title: "APP DEVELOPMENT",
    description: "Unlock new opportunities and services with our interactive and innovative app development.",
    icon: logo, 
  },
  {
    title: "CHATBOT & VOICEBOT DEVELOPMENT",
    description: "Connect with your customers in real-time and make the most out of the situation with our custom-built bots.",
    icon: logo, 
  },
  {
    title: "SMART IOT SOLUTIONS",
    description: "With IoT power, automate your crucial workflow and improve your productivity.",
    icon: logo, 
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Do not leave your desktop customers behind, have your web app ready!",
    icon: logo,
  },
  {
    title: "ENTERPRISE RESOURCE PLANNING",
    description: "Grow your network and connect with other companies for more shared resources.",
    icon:logo
  },
];

const ExpertServices = () => {
  return (
    <div className="expert-services-container">
      {/* Header Section */}
      <div className="header">
        <h1>16 Years</h1>
        <p>of empirical understanding</p>
        <div className="scroll-down-icon">⏷</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <p>Trusted by 218 Customers Globally</p>
        <h2>Do you have an Idea? <br />We have an Expert Team!</h2>

        {/* Services Section */}
        <div className="services">
          <div className="logo-container">
            <img src="../../assets/img/media.svg" alt="HaspperSolutions Logo" />
          </div>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <img src={service.icon} alt={service.title} className="service-icon" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="view-services-btn">VIEW ALL SERVICES</button>
      </div>
    </div>
  );
};

export default ExpertServices;
