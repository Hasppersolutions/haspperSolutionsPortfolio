import React from "react";
import "./Section.css";
import SectionImage from "../../assets/img/SectionImage.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
const Section = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(
      ".section-content h1",
      {
        y: -80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
    tl.from(
      ".section-content h2",
      {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
    tl.from(
      ".section-image img",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
  });
  return (
    <Box
      className="section-content"
      sx={{
        padding: { xs: "70px 16px 50px", sm: "140px 68px 50px" },
        backgroundColor: "#f9f9f9",
        // textAlign: "center",
      }}
    >
      <Grid container spacing={{ xs: 0, md: 5 }} rowGap={{ xs: 5, md: 0 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box>
            <Typography
              component={"h1"}
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              WE BUILD POWERFUL, SMART SOLUTIONS
            </Typography>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                fontWeight: 700,
                color: "#c75425",
                mb: 2,
              }}
            >
              DELIVER TOP-NOTCH SERVICES
            </Typography>
            <Typography sx={descriptionText}>
              At Haspper, we are at the forefront of digital transformation,
              leveraging a diverse array of cutting-edge technologies to deliver
              robust, scalable, and innovative solutions
            </Typography>
            <Typography sx={descriptionText}>
              Our team of seasoned professionals is dedicated to pushing the
              boundaries of technology, ensuring that our clients stay ahead in
              an ever-evolving digital landscape. Whether it’s developing a new
              application, optimizing existing systems, or integrating disparate
              technologies, Tech Innovators Inc. is your trusted partner in
              achieving technological excellence
            </Typography>
            <Typography sx={descriptionText}>
              Our approach is built on straightforward processes and proven
              standards.
            </Typography>
            <Typography sx={descriptionText}>
              So, what’s holding you back from being the best in the market?
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="section-image">
            <img
              src={SectionImage}
              alt="Consulting Service"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Link to ="/why-haspper" className="link" color="white">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button className="btn-learn-more" sx={learnButton}>
          LEARN MORE ABOUT ONGRAPH
        </Button>
      </Box>
      </Link>
    </Box>
  );
};

export default Section;
const descriptionText = {
  fontSize: { xs: "1rem", md: "1.1rem" },
  color: "#333",
  mb: "20px",
};
const learnButton = {
  backgroundColor: "#d9652b",
  color: "#fff",
  borderRadius: "22px",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#ffca76",
    color: "#000",
  },
  padding: "12px 20px",
};
