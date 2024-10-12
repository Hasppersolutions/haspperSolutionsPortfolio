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
import haspperLogo from "../../assets/img/logo.svg";
import roundCurve from "../../assets/img/round_curve.png";

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
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        textAlign: "center",
        pb: 5,
      }}
    >
      <Container>
        {/* Header Section */}
        <div className="header">
          <h1>16 Years</h1>
          <p>of empirical understanding</p>
          <div className="scroll-down-icon">⏷</div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <p>Trusted by 218 Customers Globally</p>
          <h2>
            Do you have an Idea? <br />
            We have an Expert Team!
          </h2>

          {/* Services Section */}
          <Box
            sx={{
              mt: { xs: 4, sm: 8},
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
                      src={haspperLogo}
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
                      <Box>
                        <Typography
                          component={"h3"}
                          sx={{
                            fontWeight: 700,
                            color: "#0462ac",
                            fontSize: {xs: "1rem", md: "1.2rem"},
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
        </div>
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
    display: {xs: "none", sm: "block"},
    content: "''",
    background: `url(${roundCurve})`,
    position: "absolute",
    top: 20,
    left: -10,
    width: 185,
    height: 591,
    zIndex: -1,
  },
};