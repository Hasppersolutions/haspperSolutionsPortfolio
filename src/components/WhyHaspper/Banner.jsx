import React from "react";
import { Box, styled, Typography } from "@mui/material";
import whyHaspperBanner from "../../assets/img/whyHaspper/why-haspper-banner.png";
import background from "../../assets/img/whyHaspper/background.png";

const Banner = () => {
  return (
    <>
      <MainBox>
        <BannerBox>
          <img src={whyHaspperBanner} alt="Banner" style={bannerStyle} />
        </BannerBox>
        <Box sx={haspperLettersBoxStyle}>
          {haspperLetters.map((item, index) => (
            <Typography sx={haspperLettersStyle} key={index}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ mt: "7%", pb: "10%", px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
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
              fontSize: { xs: "0.8rem", md: "1.2rem", lg: "1.5rem" },
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
          <Typography
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.5rem",
              },
              fontWeight: 700,
              textAlign: "center",
              color: "#fff"
            }}
          >
            Navigating the Digital Landscape Together: Partnering for Innovation
            and Growth
          </Typography>
          {/* <Box sx={{ width: 273, height: 197, backgroundColor: "#fff" }}></Box> */}
        </NavigateBox>
      </MainBox>
    </>
  );
};

export default Banner;
const haspperLetters = ["H", "A", "S", "P", "P", "E", "R"];
const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  marginTop: 104,
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
    padding: "12rem 16px 50px 16px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "12rem 32px 60px 32px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "14rem 32px 80px 32px",
  },
  //   padding: { xs: 2, sm: 3, md: 4 },
}));
