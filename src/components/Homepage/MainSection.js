import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Box, Button, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import BackgroundImage from '../../assets/img/Background.svg';  // Update with the correct path to your ima

const HeroSection = () => {
  let tl = gsap.timeline()
  useGSAP(() => {
    tl.from(".text-container .tag", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    }, "anim")
    tl.from(".text-container h6", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    }, "anim")
    tl.from(".text-container h2", {
      opacity: 0,
      duration: 1,
    })
    tl.from(".buttons button", {
      opacity: 0,
      scale: 0,
      delay: 0.8
    }, "anim")
  })
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: "100%", sm: "78vh", md: "calc(100vh - 185px)", xl: "calc(100vh - 200px)" },
        py: { xs: 5, sm: 10 },
        position: 'relative',  // To make it the relative parent for StatsSection
        marginTop: { xs: "85px", xl: "95px" },
      }}
    >
      <Container>
        <Box className="text-container" sx={{ textAlign: 'left', color: '#fff', mb: 4 }}>
          <Typography
            // variant="overline"
            className="tag"
            sx={{
              fontSize: { xs: "1rem", sm: '1.2rem' },
              backgroundColor: '#d9652b',
              padding: '5px 15px',
              borderRadius: '20px',
              marginTop: '40px',
              width: "fit-content"
            }}
          >
            # Haspper Best Startup Company
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", sm: "48px", md: "60px" },
              fontWeight: 'bold',
              mt: 3,
              color: "#c75425"
            }}>
            We Are Here For, IT Solutions <br />
            For A More Secure Environment
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: { xs: "18px", sm: "20px" }
            }}>
            Welcome To Haspper! We Are A Newly Established Startup Founded <br />
            By A Team Of Experienced Technical Developers.
          </Typography>
        </Box>

        <Box
          className="buttons"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "start" },
            flexDirection: { xs: "column", sm: "row" },
            rowGap: { xs: 2, sm: 0 },
            mt: 5
          }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d9652b',
              color: '#fff',
              padding: '10px 20px',
              fontSize: { xs: "1rem", sm: '1.1rem' },
              mr: { sm: 2 },
              borderRadius: '50px',  // Rounded button
            }}
          >
            Consult With Us
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d9652b',
              color: '#fff',
              padding: '10px 20px',
              fontSize: { xs: "1rem", sm: '1.1rem' },
              borderRadius: '50px',  // Rounded button
            }}
          >
            Get An Estimate
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

const StatsSection = () => {
  let tl = gsap.timeline()
  useGSAP(() => {
    tl.from(".item", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
  })
  const statsData = [
    { value: '300+', label: 'Developers' },
    { value: '500+', label: 'Customers' },
    { value: '1140', label: 'Projects Delivered' },
    { value: '96%', label: 'Retention rate' },
  ];

  return (
    <>
      <Box sx={transparentBackBox}>
        <Box sx={cardContainerStyle}>
          <Grid container>
            {statsData?.map((data, index) => (
              <Grid className="item" size={{ xs: 6, sm: 2 }} key={index} sx={textBoxStyle}>
                <Typography sx={[headingTextStyle, { color: index == 0 ? "#B74615" : undefined }]}>
                  {data?.value}
                </Typography>
                <Typography sx={valueTextStyle}>{data?.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

const MainSection = () => (
  <Box sx={{ position: 'relative' }}>
    <HeroSection />
    <StatsSection />  {/* StatsSection is positioned over HeroSection */}
  </Box>
);

export default MainSection;
const transparentBackBox = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "18px",
  background:
    "linear-gradient(180deg, rgba(217,217,217,0.24) 50%, rgba(255,255,255,1) 50%)",
  borderRadius: { xs: "36px", md: "50px" },
  position: { xs: "static", sm: "absolute" },
  bottom: "-11%",
  left: "50%",
  transform: { xs: "unset", sm: "translateX(-50%)" },
  filter: "drop-shadow(0px 34px 65px rgba(0, 0, 0, 0.25))",
  zIndex: 99,
  width: { xs: "100%", sm: "max-content" }
}
const cardContainerStyle = {
  borderRadius: { xs: "18px", md: "24px" },
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",
  width: { xs: "100%", md: "fit-content" },
  backgroundColor: "white",
}
const headingTextStyle = {
  fontSize: { xs: 28, sm: 28, md: 32, lg: 48 },
  lineHeight: 1,
  fontWeight: 700,
  // paddingTop: {xs: "18px", md: "40px"}
};
const valueTextStyle = {
  fontSize: { xs: 14, sm: 14 },
  fontWeight: 700,
};
const textBoxStyle = {
  borderRight: "1px solid rgba(0, 0, 0, 0.11)",
  width: "100%",
  maxWidth: { xs: "50%", sm: 180 },
  minWidth: { xs: "auto", sm: 150, md: 190 },
  height: "100%",
  textAlign: "center",
  padding: { xs: "15px", md: "30px" },
  "&:last-child": {
    borderRight: 0,
  },
  "&:nth-child(2)": {
    borderRight: { xs: 0, sm: "1px solid rgba(0, 0, 0, 0.11)" }
  }
};
