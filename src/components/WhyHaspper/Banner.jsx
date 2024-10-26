import React from "react";
import { Box, Grid2 as Grid, styled, Tooltip, Typography } from "@mui/material";
import whyHaspperBanner from "../../assets/img/whyHaspper/why-haspper-banner.png";
import background from "../../assets/img/whyHaspper/background.png";
import relation from "../../assets/img/whyHaspper/relation.png";
import security from "../../assets/img/whyHaspper/security.png";
import support from "../../assets/img/whyHaspper/support.png";
import transparency from "../../assets/img/whyHaspper/transparency.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  //Animation

  useGSAP(() => {
    gsap.from(".haspperLetters p", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".whyHaspperMainBox",
        start: "top 30%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(".nextGenTitle", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".nextGenTitle",
        start: "top 100%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(".whyHaspperCardBox", {
      scale: 0,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".whyHaspperCardBox",
        start: "top 100%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(".naviagateText", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".naviagateText",
        start: "top 100%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <>
      <MainBox className="whyHaspperMainBox">
        <BannerBox>
          <img src={whyHaspperBanner} alt="Banner" style={bannerStyle} />
        </BannerBox>
        <Box className="haspperLetters" sx={haspperLettersBoxStyle}>
          {haspperLetters.map((item, index) => (
            <Tooltip
              placement="bottom-start"
              slotProps={{
                tooltip: {
                  sx: tooltipStyle,
                },
              }}
              title={
                <Box>
                  <Typography sx={partneringTitle}>
                    {haspperDetails[index].title}
                  </Typography>
                  <Typography sx={partneringDescription}>
                    {haspperDetails[index].description}
                  </Typography>
                </Box>
              }
              key={index}
            >
              <Typography sx={haspperLettersStyle}>{item}</Typography>
            </Tooltip>
          ))}
        </Box>
        <Box sx={{ mt: "7%", pb: "10%", px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            className="nextGenTitle"
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.5rem",
              },
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Next-Generation Cloud Solutions
          </Typography>
          <Typography
            className="nextGenTitle"
            sx={{
              fontSize: { xs: "1rem", sm: "1.8rem", md: "2rem", lg: "2.5rem" },
              fontWeight: 700,
              textAlign: "center",
              color: "#bd4918",
            }}
          >
            For Tomorrow’s Challenges
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem", lg: "1.5rem" },
              fontWeight: 300,
              textAlign: "center",
              mt: 2,
            }}
          >
            "Explore Our Vision for the Future of IT: How We Leverage AI, Cloud,
            and Data-Driven Innovation to Build Scalable, Secure, and
            Intelligent Solutions for the World’s Leading Enterprises"
          </Typography>
        </Box>
        <NavigateBox>
          <Typography className="naviagateText" sx={navigateTitle}>
            Navigating the Digital Landscape Together: Partnering for Innovation
            and Growth
          </Typography>
          <Grid
            className="whyHaspperCardBox"
            container
            spacing={3.5}
            sx={cardContainer}
          >
            {partneringData.map((data, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={cardStyle}>
                  <Box>
                    <img src={data?.img} alt={data.label} />
                  </Box>
                  <Typography sx={cardTitle}>{data.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </NavigateBox>
      </MainBox>
    </>
  );
};

export default Banner;
const haspperDetails = [
  {
    title: "Hybrid Data Products",
    description:
      "Many IT companies are embracing hybrid approaches that combine traditional data analytics with machine learning and AI models, such as Haspper's hybrid data products, which integrate both structured and unstructured data for more holistic insights.",
  },
  {
    title: "Analytics Co-pilot",
    description:
      "The use of AI-driven tools that serve as an 'analytics co-pilot,' helping IT teams quickly analyze large datasets and draw actionable insights. This includes natural language processing (NLP) that allows users to interact with data in real-time.",
  },
  {
    title: "Scalability",
    description:
      " systems like Haspper handle scalability challenges. Large-scale data processing and cloud computing are central to IT services, ensuring that as companies grow, their systems can handle increasing workloads efficiently.",
  },
  {
    title: "Privacy and Security",
    description:
      " maintaining strong data privacy and security measures is essential. Haspper integrates features like an 'LLM firewall' to ensure that data protection is enforced, which is a priority for IT companies dealing with sensitive data.",
  },
  {
    title: "Performance Optimization",
    description:
      "Haspper offering modules for optimizing tasks like data processing and system orchestration to ensure reliability and cost-effectiveness.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Hasper provides customizable, AI-powered data products that meet the needs of large organizations, allowing them to build domain-specific applications that are both efficient and secure.",
  },
  {
    title: "Reliability",
    description:
      "With modules ensuring smooth function, availability, and security, IT firms rely on platforms like Hasper to maintain uptime and ensure uninterrupted services to clients.",
  },
];
const partneringData = [
  {
    img: transparency,
    label: "Transparency and Communication",
  },
  {
    img: security,
    label: "Strong Security Practices",
  },
  {
    img: support,
    label: "Excellent Customer Support",
  },
  {
    img: relation,
    label: "Building Long-Term Relationships",
  },
];
const haspperLetters = ["H", "A", "S", "P", "P", "E", "R"];
const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  // marginTop: { xs: 85, xl: 95 },
}));
const BannerBox = styled(Box)(({ theme }) => ({
  height: "70vh",
  width: "100%",
}));
const bannerStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
const haspperLettersBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: { xs: "0px 16px", lg: "0px 32px" },
  borderBottom: "1px solid rgba(0, 0, 0, 0.11)",
};
const haspperLettersStyle = {
  fontSize: { xs: "3.1rem", sm: "5.1rem", md: "6.1rem", lg: "8.1rem" },
  fontFamily: "exo",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.25,
  borderRight: "1px solid rgba(0, 0, 0, 0.11)",
  width: "100%",
  maxWidth: { xs: 185, xl: "100%" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25))",
  cursor: "pointer",
  "&:last-child": {
    borderRight: 0,
  },
};
const NavigateBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  width: "100%",
  padding: "18rem 32px 97px 32px",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 16px 50px 16px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "2rem 32px 60px 32px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "16rem 32px 80px 32px",
  },
  //   padding: { xs: 2, sm: 3, md: 4 },
}));
const cardTitle = {
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  marginTop: 2.5,
};
const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: { xs: "47px 20px", sm: "67px 20px" },
  backgroundColor: "#fff",
  height: "100%",
  boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};
const cardContainer = {
  marginTop: { xs: "40px", md: "70px" },
};
const navigateTitle = {
  fontSize: {
    xs: "1.4rem",
    sm: "2rem",
    md: "2.2rem",
    lg: "2.5rem",
  },
  fontWeight: 700,
  textAlign: "center",
  color: "#fff",
  padding: { md: "0px 10%", xl: "0px 15%" },
};
const partneringTitle = {
  fontSize: 29,
  color: "#BD4918",
  fontWeight: 700,
};
const partneringDescription = {
  fontSize: 18,
  color: "##1E1E1E",
  fontWeight: 300,
};
const tooltipStyle = {
  color: "#000",
  backgroundColor: "#fff",
  fontSize: "2em",
  padding: "10px",
  borderRadius: "26px",
  textAlign: "center",
};
