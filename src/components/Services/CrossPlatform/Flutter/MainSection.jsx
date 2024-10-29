import React from 'react';
import { Box, Button, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';

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
      // backgroundImage: `url(${BackgroundImage})`,
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
          Flutter App Development <br /> Company
        </Typography>
    
        <Typography variant="h6" sx={{ mt: 2 }}>
          Build scalable, rich, and feature-loaded applications using the <br/>
          buisness logic and tech skills of out Flutter app developers. We are top <br/>
          flutter app development company specializes in creating cost-<br/>effective and efficent applications.
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

