import React from "react";
// import './Section.css';
import AiFeature from "../../assets/img/aiFeature.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
const AiDescription = () => {
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
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container
        sx={{
          paddingTop: { xs: "30px ", sm: "40px" },
        }}
      >
        <Box
          className="scroll-down-icon"
          sx={{
            textAlign: "center",
            width: "fit-content",
            margin: "auto",
            marginTop: "12px",
          }}
        >
          ⏷
        </Box>
        <Grid container spacing={{xs: 0, md: 5}} rowGap={{xs: 5, md: 0}}>
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              padding: { xs: "30px 0", sm: "60px 0" },
              // backgroundColor: "#f9f9f9",
              // textAlign: "center",
            }}
          >
            <Box>
              <Typography
                component={"h1"}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                Unleashing Business Potential with
              </Typography>
              <Typography
                // component={"h2"}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  color: "#c75425",
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Tailor-Made Artificial Intelligence Development Services
              </Typography>
              <Typography sx={descriptionText}>
                With OnGraph’s cutting-edge AI solutions, you can increase
                operational efficiency, uncover untapped opportunities, and
                achieve a competitive advantage. We are your one-stop shop for
                any AI requirements.
              </Typography>
              <Typography sx={descriptionText}>
                Discover the power of OnGraph’s intelligent, secured, and highly
                personalized artificial intelligence services. Natural language
                processing for faster processes, machine learning for insightful
                decision-making, computer vision for enhanced customer
                experience, and deep learning for discovering new opportunities
                can all help your organization.
              </Typography>
              <Typography sx={descriptionText}>
                Besides offering Development in AI across diverse domains, we
                specialize in artificial intelligence game development, and
                software development powered by AI, and provide top-tier
                artificial intelligence automation consulting. Our AI
                technologies go beyond automation, allowing you to create and
                excel.
              </Typography>
              <Typography sx={descriptionText}>
                As a leading Artificial Intelligence Company, we cover all
                bases, from AI consulting and development of Artificial
                Intelligence to Integration, Maintenance, Generative AI, and AI
                Data Engineering. Trust our AI consulting experts to guide you
                through the AI transformation process. Choose OnGraph for an
                AI-powered, smarter, faster, and genuinely revolutionary
                corporate future.
              </Typography>
              <Button className="btn-learn-more" sx={learnButton}>
                GET FREE DEMO
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            //   padding: { xs: "0 50px", sm: "0 50px " },
              // width: {
              //     xs: "100%",
              //     md: 390,
              // }
            }}
          >
            <Box className="section-image">
              <img src={AiFeature} alt="Consulting Service" style={{width: "100%", height: "100%"}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AiDescription;
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
  padding: "15px 20px",
};
