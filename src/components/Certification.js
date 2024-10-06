import React from "react";
import "./Certification.css";

const certifications = [
  { id: 1, src: "../assets/img/logo.svg", alt: "AWS Partner" },
  { id: 2, src: "../assets/img/logo.svg", alt: "TechBehemoths Winner" },
  { id: 3, src: "../assets/img/logo.svg", alt: "GoodFirms Work With" },
  { id: 4, src: "../assets/img/logo.svg", alt: "Silicon India" },
  { id: 5, src: "../assets/img/logo.svg", alt: "NASSCOM" },
  { id: 6, src: "../assets/img/logo.svg", alt: "Clutch Top Developers" },
  { id: 7, src: "../assets/img/logo.svg", alt: "DesignRush Accredited" },
];

const Certification = () => {
  return (
    <div className="certifications-container">
      <header className="certifications-header">
        <h2>Our Certifications</h2>
        <p className="subheading">
          Our certifications and recognitions prove our determination and credibility.
        </p>
        <p className="description">
          In our tenure of 16 years, we have marked a powerful presence in the market by delivering excellence.
          We are happy to bag these recognitions, motivating us to deliver the same service throughout.
        </p>
      </header>
      
      <div className="certifications-slider">
        <div className="certifications">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <img src={cert.src} alt={cert.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
