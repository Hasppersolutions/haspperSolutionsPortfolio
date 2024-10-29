import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Haspper.css'; // Ensure to import your updated CSS file

export const Haspper = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const industries = [
    {
      title: "Quality Deliverables",
      normalImg: "path/to/food-normal.jpg",  // Path to normal image
      hoverImg: "path/to/food-hover.jpg",   // Path to hover image
      description: "We provide innovative solutions to enhance food safety and quality."
    },
    {
      title: "Customer Oriented Approach",
      normalImg: "path/to/hrms-normal.jpg",
      hoverImg: "path/to/hrms-hover.jpg",
      description: "Business are determined by how well their customers think of them. We Are what we are today because of our dedicated servoces that our customers appreciate."
    },
    {
      title: "Expertise",
      normalImg: "path/to/banking-normal.jpg",
      hoverImg: "path/to/banking-hover.jpg",
      description: "What make us so good is the fact we love performing what we do. Every individual at Haspper are hired for the driving passion they have for thier work."
    },
    {
      title: "Honesty and Transparency",
      normalImg: "path/to/fitness-normal.jpg",
      hoverImg: "path/to/fitness-hover.jpg",
      description: "We don't take client undue advantage of client's ignorance of technological elements and always give them honest support."
    },
    {
        title: "Enhancement Post Launch",
        normalImg: "path/to/fitness-normal.jpg",
        hoverImg: "path/to/fitness-hover.jpg",
        description: "Post-launch, we'll monitor and examine how the solutions performs against the success criteria we outlined in the clarify phase. We also create documentation for the projects."
      },
      {
        title: "Promotion Planning",
        normalImg: "path/to/fitness-normal.jpg",
        hoverImg: "path/to/fitness-hover.jpg",
        description: "We also design and produce a marketing and promotion plan, control training sessions, or advice staff your organization to support the fresh solution."
      }
  ];

  return (
    <section className="haspper" id="haspper">
      <div className="container">
        <div className="header">
          <h2 className="heading" >WE MAKE YOUR
            VIRTUAL DREAMS A REALITY
          </h2>
          <p className="description">We Are Your Angles In Disguise! And our services will deliver you miracles of success.</p>
        </div>
        <Carousel responsive={responsive} infinite={true} className="haspper-slider">
          {industries.map((industry, index) => (
            <div className="item" key={index}>
              <IndustryCard industry={industry} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry }) => {
    return (
      <div className="haspper-card">
        <img
          src={industry.normalImg}
          alt={industry.title}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }} // Optional styling
        />
        <h5 className="haspper-title">{industry.title}</h5>
        <div className="haspper-content">
          <p className="haspper-description">
            {industry.description}
          </p>
        </div>
      </div>
    );
  };
