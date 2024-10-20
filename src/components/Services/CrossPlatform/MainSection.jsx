import React from 'react';
import { Box, Button, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import BackgroundImage from '../../../assets/img/Services/MainImg.svg';  // Update with the correct path to your ima
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
      <Box sx={{ textAlign: 'left', color: '#fff', mb: 4 ,mt: 25}}>

        <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 3 }}>
          React Native <br />
        </Typography>
        <Typography
          variant="overline"
          sx={{
            fontSize: '1.2rem',
            padding: '5px 15px',
            color: '#d9652b',
            marginBottom: '40px',
          }}
        >
          App Development Company
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Harness the power of React Native to create incredible cross-platform Android and <br/>iOS apps
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
          TALK TO OUR EXPERTS
        </Button>
       
      </Box>
    </Container>
  </Box>
);



const MainSection = () => (
  <Box sx={{ position: 'relative' }}>
    <HeroSection />
  </Box>
);

export default MainSection;

