import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="container">
      <header>
        <h1>
          THE LEAGUE OF EXTRAORDINARY <br /> 
          <span className="highlight">WEB & MOBILE APP BUILDERS</span>
        </h1>
        <p>
          We are a group of innovators out to take over the digital world. 
          Instead of using machine guns and laser beams we use weapons like 
          PHP, Node, ROR, Angular, MySQL, HTML5, WordPress, Joomla, Magento, 
          iOS, Android, React Native, etc. to make killer web designs, apps, 
          and developments that are meant to knock out your competitors and 
          establish a new wave of innovation on the web.
        </p>
      </header>

      <section className="mission-vision">
        <div className="card mission">
          <h2>Our MISSION</h2>
          <p>
            Our mission is to simplify human life and empower businesses with 
            AI-backed technology to deliver sustainable and intelligent solutions worldwide.
          </p>
        </div>

        <div className="card vision">
          <h2>Our VISION</h2>
          <p>
            We take a long-term view that builds relations and shares ideas with stakeholders 
            to achieve sustainable results. We unleash possibilities beyond imagination!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;
