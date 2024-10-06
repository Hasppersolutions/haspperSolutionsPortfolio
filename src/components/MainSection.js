import React from 'react';
import './MainSection.css'; // Import your CSS file

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="Haspper Logo" className="logo-image" />
        <div className="logo-text">HASPERR</div>
      </div>
      <div className="text-container">
        <h1>Haspper Best Startup Company</h1>
        <p>We Are Here For IT Solutions For A More Secure Environment</p>
        <h2>Welcome To Haspper!</h2>
        <p>
          We Are A Newly Established Startup Founded By A Team Of Experienced Technical Developers.
        </p>
        <div className="buttons">
          <button className="consult-btn">Consult With Us</button>
          <button className="estimate-btn">Get An Estimate</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
