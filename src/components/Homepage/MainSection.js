import React from 'react';
import { Box, Button, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import BackgroundImage from '../../assets/img/Background.svg';  // Update with the correct path to your ima

const StatsCard = ({ value, label }) => (
  <Paper
    elevation={3}
    style={{
      padding: '20px',
      textAlign: 'center',
      borderRadius: '16px',
      backgroundColor: 'white',
    }}
  >
    <Typography variant="h4" sx={{ color: '#d9652b' }} gutterBottom>
      {value}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      {label}
    </Typography>
  </Paper>
);

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      py: 10,
      position: 'relative',  // To make it the relative parent for StatsSection
    }}
  >
    <Container>
      <Box sx={{ textAlign: 'left', color: '#fff', mb: 4 }}>
        <Typography
          variant="overline"
          sx={{
            fontSize: '1.2rem',
            backgroundColor: '#d9652b',
            padding: '5px 15px',
            borderRadius: '20px',
            marginTop: '40px',
          }}
        >
          # Haspper Best Startup Company
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 3 }}>
          We Are Here For, IT Solutions <br />
          For A More Secure Environment
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Welcome To Haspper! We Are A Newly Established Startup Founded <br />
          By A Team Of Experienced Technical Developers.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'left', mt: 5 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d9652b',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '1.1rem',
            mr: 2,
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
            fontSize: '1.1rem',
            borderRadius: '50px',  // Rounded button
          }}
        >
          Get An Estimate
        </Button>
      </Box>
    </Container>
  </Box>
);

const StatsSection = () => {
  const statsData = [
    { value: '300+', label: 'Developers' },
    { value: '500+', label: 'Customers' },
    { value: '1140', label: 'Projects Delivered' },
    { value: '96%', label: 'Retention rate' },
  ];

  return (
    <Box
    sx={{
      position: 'absolute',   // Position relative to the HeroSection
      bottom: '-6%',          // Move it near the bottom of the background
      left: '50%',            // Center it horizontally
      transform: 'translateX(-50%)',  // Correct horizontal centering
      width: '50%',           // Adjust the width as needed
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    }}
    >
      <Box sx={haspperLettersBoxStyle}>
          {statsData.map((item, index) => (
            <Typography sx={haspperLettersStyle} key={index}>
              {/*<StatsCard value={item.value} label={item.label} />*/}
              <Typography variant="h5" sx={{
                    fontWeight: 'bold',
                    color: '#C94C16',
                    textTransform: 'uppercase',
                  }}>
              {item.value} 
              </Typography>
              <Typography sx= {{color:'#000',fontWeight: 'bold'}}>
              {item.label} 
              </Typography>
            </Typography>
          ))}
        </Box>
        {/*
        <Grid container spacing={3} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StatsCard value={stat.value} label={stat.label} />
            </Grid>
          ))}
        </Grid>
        */}
    </Box>
  );
};

const MainSection = () => (
  <Box sx={{ position: 'relative' }}>
    <HeroSection />
    <StatsSection />  {/* StatsSection is positioned over HeroSection */}
  </Box>
);

export default MainSection;

const haspperLettersBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: { xs: "0px 16px", lg: "0px 32px" },

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
  flexDirection:"column",
  alignItems: "center",
  justifyContent: "center",
  filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25))",
  cursor: "pointer",
  "&:last-child": {
    borderRight: 0,
  },
};
