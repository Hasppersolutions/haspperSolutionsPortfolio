import React from 'react';
import './Banner.css'; // Import CSS for this component

const Banner = () => {
  return (
    <div className="consulting-container">
      {/* Top Section */}
      <h1 className="title">AI First Digital Innovation for Modern Businesses</h1>
      <p className="description">
        AI. Mobile. Web. Cloud. Analytics. Web3. Blockchain. Crypto. Bespoke solutions to drive growth.
      </p>
      <button className="consult-button">Consult With Us</button>

      {/* Consulting Partners Section */}
      <div className="partners-container">
        <span className="partner">AWS Consulting Partner</span>
        <span className="partner">Odoo Consulting Partner</span>
        <span className="partner">Mira AI Consulting Partner</span>
      </div>

      {/* Statistics Section */}
      <div className="stats-container">
        <div className="stat">
          <h2>300+</h2>
          <p>AWS Projects</p>
        </div>
        <div className="stat">
          <h2>500+</h2>
          <p>Odoo Deployments</p>
        </div>
        <div className="stat">
          <h2>1140</h2>
          <p>AI Implementations</p>
        </div>
        <div className="stat">
          <h2>96%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
