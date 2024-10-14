import React from 'react';
import './Section.css';
import SectionImage from '../../assets/img/SectionImage.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Section = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-container",
      start: "top 15$",
      end: "bottom 15%",
      toggleActions: "play none none reset"
    },
  })

  useGSAP(() => {
    tl.from(".section-content h1", {
      y: -80,
      opacity: 0,
      duration: 1,
    }, "anim")
    tl.from(".section-content h2", {
      x: 100,
      opacity: 0,
      duration: 1,
    }, "anim")
    tl.from(".section-image img", {
      x: -100,
      opacity: 0,
      duration: 1,
    }, "anim")
  })
  return (
    <div className="section-container">
      <div className="section-content">
        <h1>WE BUILD POWERFUL, SMART SOLUTIONS</h1>
        <h2>DELIVER TOP-NOTCH SERVICES</h2>
        <p>
          At Haspper, we are at the forefront of digital transformation, leveraging a diverse array of cutting-edge technologies to deliver robust, scalable, and innovative solutions
        </p>
        <p>
          Our team of seasoned professionals is dedicated to pushing the boundaries of technology, ensuring that our clients stay ahead in an ever-evolving digital landscape. Whether it’s developing a new application, optimizing existing systems, or integrating disparate technologies, Tech Innovators Inc. is your trusted partner in achieving technological excellence
        </p>
        <p>
          Our approach is built on straightforward processes and proven standards.
        </p>
        <p>So, what’s holding you back from being the best in the market?</p>
        <div className="buttons">
          <button className="btn-learn-more">LEARN MORE ABOUT ONGRAPH</button>
        </div>
      </div>
      <div className="section-image">
        <img src={SectionImage} alt="Consulting Service" />
      </div>
    </div>
  );
};

export default Section;
