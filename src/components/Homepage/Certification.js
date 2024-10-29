import React from "react";
import "./Certification.css";
import silicon from "../../assets/img/Certification/silicon.png"
import aws from "../../assets/img/Certification/smart.png"
import goodfirm from "../../assets/img/Certification/GoodFirm.png"
import designrush from "../../assets/img/Certification/Design-Rush.png"
import nascom from "../../assets/img/Certification/nascom.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const certifications = [
  { id: 1, src: aws, alt: "AWS Partner" },
  { id: 3, src: goodfirm, alt: "GoodFirms Work With" },
  { id: 4, src: silicon, alt: "Silicon India" },
  { id: 5, src: nascom, alt: "NASSCOM" },
  { id: 7, src: designrush, alt: "DesignRush Accredited" },
];

const Certification = () => {

 //Animation
 useGSAP(() => {
  gsap.from(".certifications-header", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".certifications-header",
      start: "top 100%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
    },
  });
});

  return (
    <div className="certifications-container">
      <header className="certifications-header">
        <h2 >Our Certifications</h2>
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
