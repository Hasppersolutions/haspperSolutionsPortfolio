import React, {useState} from 'react';
import './Section.css';
import { ProjectEstimate } from './ProjectEstimate';


const Section = () => {
  const [showEstimate, setShowEstimate] = useState(false);
  return (
    <div className="section-container">
      <div className="section-content">
        <h1>WE BUILD POWERFUL, SMART SOLUTIONS</h1>
        <h2>DELIVER TOP-NOTCH SERVICES</h2>
        <p>
          Our high-end custom solutions and services will cater to your Web and Mobile App development and help your business excel.
          With our skilled in-house solution architects, developers, and testers, everything is possible.
        </p>
        <p>
          At OnGraph, we specialize in delivering cutting-edge AI-based solutions to help businesses build powerful applications. 
          With over 16 years of experience, we guarantee tangible results through faster development cycles, all while prioritizing our clients’ needs. 
          We have successfully supported customers across various industries and countries, consistently delivering solutions that help them outpace their competitors.
        </p>
        <p>
          Our approach is built on straightforward processes and proven standards.
        </p>
        <p>So, what’s holding you back from being the best in the market?</p>
        <div className="buttons">
          <button className="btn learn-more">LEARN MORE ABOUT ONGRAPH</button>
          <button onclick = {() => setShowEstimate(true)}  className="btn get-estimate">GET AN ESTIMATE</button>
        </div>
        {showEstimate && <ProjectEstimate />}
      </div>
      <div className="section-image">
        <img src="path-to-your-image" alt="Consulting Service" />
      </div>
    </div>
  );
};

export default Section;
