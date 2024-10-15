import React from 'react';
import './Section.css';
import SectionImage from '../../assets/img/SectionImage.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Box, Button, Typography } from '@mui/material';
const Section = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-container",
      start: "top 10%",
      end: "bottom 10%",
      toggleActions: "play none none reset"
    },
  })

  useGSAP(() => {
    tl.from(".section-content h1", {
      y: -80,
      opacity: 0,
      duration: 1,
      delay: 0.5
    }, "anim")
    tl.from(".section-content h2", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    }, "anim")
    tl.from(".section-image img", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    }, "anim")
  })
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "70px 16px 50px", sm: "140px 50px 50px" },
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        flexDirection: { xs: "column", md: "row" }
      }}>
      <div className="section-content">
        <Typography
          component={"h1"}
          sx={{
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 700,
            color: "#1a1a1a"
          }}>
          WE BUILD POWERFUL, SMART SOLUTIONS
        </Typography>
        <Typography
          component={"h2"}
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            fontWeight: 700,
            color: "#c75425",
            mb: 2
          }}>DELIVER TOP-NOTCH SERVICES</Typography>
        <Typography sx={descriptionText}>
          At Haspper, we are at the forefront of digital transformation, leveraging a diverse array of cutting-edge technologies to deliver robust, scalable, and innovative solutions
        </Typography>
        <Typography sx={descriptionText}>
          Our team of seasoned professionals is dedicated to pushing the boundaries of technology, ensuring that our clients stay ahead in an ever-evolving digital landscape. Whether it’s developing a new application, optimizing existing systems, or integrating disparate technologies, Tech Innovators Inc. is your trusted partner in achieving technological excellence
        </Typography>
        <Typography sx={descriptionText}>
          Our approach is built on straightforward processes and proven standards.
        </Typography>
        <p>So, what’s holding you back from being the best in the market?</p>
        <div className="buttons">
          <Button
            className="btn-learn-more"
            sx={learnButton}>
            LEARN MORE ABOUT ONGRAPH
          </Button>
        </div>
      </div>
      <div className="section-image">
        <img src={SectionImage} alt="Consulting Service" />
      </div>
    </Box>
  );
};

export default Section;
const descriptionText = {
  fontSize: { xs: "1rem", md: "1.1rem" },
  color: "#333",
  mb: "20px",
}
const learnButton = {
  backgroundColor: "#d9652b",
  color: "#fff",
  borderRadius: "22px",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#ffca76",
    color: "#000",
  }
}