import React from "react";
import "./ExpertServices.css";
import logo from "../../assets/img/nav-icon1.svg";
import {
  Box,
  Container,
  Grid2 as Grid,
  styled,
  Typography,
} from "@mui/material";
// import haspperLogo from "../../assets/img/LOGO.svg";
import roundCurve from "../../assets/img/round_curve.png";
import line from "../../assets/img/line.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: "APP DEVELOPMENT",
    description:
      "Unlock new opportunities and services with our interactive and innovative app development.",
    icon: logo,
  },
  {
    title: "CHATBOT & VOICEBOT DEVELOPMENT",
    description:
      "Connect with your customers in real-time and make the most out of the situation with our custom-built bots.",
    icon: logo,
  },
  {
    title: "SMART IOT SOLUTIONS",
    description:
      "With IoT power, automate your crucial workflow and improve your productivity.",
    icon: logo,
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Do not leave your desktop customers behind, have your web app ready!",
    icon: logo,
  },
  {
    title: "ENTERPRISE RESOURCE PLANNING",
    description:
      "Grow your network and connect with other companies for more shared resources.",
    icon: logo,
  },
];

const ExpertServices = () => {
  useGSAP(() => {
    // heading animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".expertMainBox",
        start: "top 80%",
        end: "bottom 15%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".expertMainBox .headingText", {
      scale: 0,
      x: -20,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".globalText", {
      scrollTrigger: {
        trigger: ".main-content",
        start: "top 85%",
        end: "bottom 85%",
        toggleActions: "play none none reset",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    //services Title animation
    gsap.utils.toArray("#item").forEach((card) => {
      gsap.from(
        card,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 90%",
            toggleActions: "play none none reset",
          },
        },
        "list"
      );
    });
     //services Icon animation
    gsap.utils.toArray(".service-icon").forEach((card) => {
      gsap.from(
        card,
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 90%",
            toggleActions: "play none none reset",
          },
        },
        "list"
      );
    });
  });

  return (
    <Box
      className="expertMainBox"
      sx={{
        backgroundColor: "#f2f2f2",
        // textAlign: "center",
        py: 5,
      }}
    >
      <Container>
        {/* Header Section */}
        <Box>
          <Typography
            component={"h1"}
            className="headingText"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
              color: "#0462ac",
              fontWeight: 700,
              lineHeight: 0.6,
            }}
          >
            16 Years
          </Typography>
          <Box>
            <img
              src={line}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            className="headingText"
            sx={{
              marginLeft: { md: "6%" },
              fontSize: "1.2rem",
              color: "#666",
              marginTop: { md: "-0.6rem" },
            }}
          >
            of empirical understanding
          </Typography>
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
        </Box>

        {/* Main Content */}
        <Box className="main-content" sx={{ textAlign: "center" }}>
          <p className="globalText">Trusted by 218 Customers Globally</p>
          <h2 className="globalText">
            Do you have an Idea? <br />
            We have an Expert Team!
          </h2>

          {/* Services Section */}
          <Box
            sx={{
              mt: { xs: 4, sm: 8 },
            }}
          >
            <Grid container rowGap={{ xs: 6, sm: 0 }}>
              <Grid
                size={{ xs: 12, sm: 4 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  order: { xs: 2, sm: "inherit" },
                  padding: { xs: "100px 0px", sm: 0 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 9,
                    width: { md: "42%" },
                  }}
                >
                  <Box
                    sx={{
                      width: 140,
                      height: 110,
                      marginRight: { xs: 2, sm: -10, md: 2 },
                    }}
                  >
                    <img
                      src={"haspperLogo"}
                      alt="HaspperSolutions Logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "left",
                      }}
                    />
                  </Box>
                  <LogoShadow1 />
                  <LogoShadow2 />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <Box
                  className="services"
                  sx={[
                    {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "left",
                      position: "relative",
                      minHeight: 640,
                      zIndex: 100,
                    },
                    afterStyle,
                  ]}
                >
                  {services.map((service, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        // marginBottom: "20px",
                        position: { xs: "static", sm: "absolute" },
                        top: `${positionData[index].top}px`,
                        left: `${positionData[index].left}px`,
                      }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="service-icon"
                      />
                      <Box
                        id="item"
                        sx={{
                          paddingLeft: { xs: "20px", sm: "25px", md: "40px" },
                        }}
                      >
                        <Typography
                          component={"h3"}
                          sx={{
                            fontWeight: 700,
                            color: "#C94C16",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography>{service.description}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <button className="view-services-btn">VIEW ALL SERVICES</button>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertServices;
const positionData = [
  {
    top: -10,
    left: -10,
  },
  {
    top: 117,
    left: 100,
  },
  {
    top: 268,
    left: 147,
  },
  {
    top: 438,
    left: 110,
  },
  {
    top: 571,
    left: -25,
  },
];
const LogoShadow1 = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "block",
  width: 300,
  height: 300,
  backgroundColor: "rgba(255, 255, 255, .7)",
  zIndex: -1,
  left: -65,
  top: -100,
  animation: "4s infinite shadow-pulse",
  margin: "auto",
  boxShadow: "0 10px 40px 0 rgba(0, 0, 0, .07)",
  borderRadius: "100%",
  right: 0,
  [theme.breakpoints.down("sm")]: {
    width: 200,
    height: 200,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 220,
    height: 220,
    left: 60,
    top: "-12%",
    transform: "translate(-40%, -20%)",
  },
}));
const LogoShadow2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "block",
  width: 380,
  height: 380,
  backgroundColor: "rgba(255, 255, 255, .3)",
  zIndex: -2,
  left: -104,
  top: -141,
  animation: "4s infinite pulse",
  margin: "auto",
  boxShadow: "0 10px 40px 0 rgba(0, 0, 0, .07)",
  borderRadius: "100%",
  right: 0,
  [theme.breakpoints.down("sm")]: {
    width: 280,
    height: 280,
    left: -61,
    top: "-78%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 300,
    height: 300,
    left: -67,
    top: -99,
  },
}));
const afterStyle = {
  "&:after": {
    display: { xs: "none", sm: "block" },
    content: "''",
    background: `url(${roundCurve})`,
    position: "absolute",
    top: 20,
    left: -20,
    width: 185,
    height: 591,
    zIndex: -1,
  },
};
