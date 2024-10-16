import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import DataUsageIcon from '../../assets/img/database.svg'; // Assuming it's an SVG component or image
import AiIcon from '../../assets/img/AI.svg';
import MicroservicesIcon from '../../assets/img/Microservices.svg';
import DataScienceIcon from '../../assets/img/DataScience.svg';
import WebApiIcon from '../../assets/img/API.svg';

const sections = [
  { 
    title: 'Data Analytics', 
    icon: <img src={DataUsageIcon} alt="Data Analytics" width={50} />
  },
  { 
    title: 'Artifical Intelligence', 
    icon: <img src={AiIcon} alt="Artifical Intelligence" width={50} />
  },
  { 
    title: 'Microservices', 
    icon: <img src={MicroservicesIcon} alt="Microservices" width={50} />
  },
  { 
    title: 'Data Science', 
    icon: <img src={DataScienceIcon} alt="Data Science" width={50} />
  },
  { 
    title: 'Web API Development', 
    icon: <img src={WebApiIcon} alt="Web API Development" width={50} />
  },
];

function CircularSection({ icon, title, description }) {
  return (
    <Box sx={{ textAlign: 'center', margin: '30px', cursor: 'pointer' }}>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: '#D9D9D9', // Circle background color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1) translateY(-5px)',
            boxShadow: '0 15px 25px rgba(0, 0, 0, 0.4)',
          },
          '&:active': {
            transform: 'scale(0.95) translateY(2px)',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {icon}
      </Box>

      <Typography variant="h6" color="black" mt={2}>
        {title}
      </Typography>
      <Typography variant="body2" color="gray" mt={1}>
        {description}
      </Typography>
    </Box>
  );
}

export default function CircularGrid() {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        textAlign: 'center', 
        py: 6,
        backgroundColor: '#D9D9D9', // Background color for the entire component
        minHeight: '100vh', // Optional: Ensures full height of viewport
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} container justifyContent="center" spacing={2}>
          {sections.slice(0, 2).map((section, index) => (
            <Grid item key={index}>
              <CircularSection 
                icon={section.icon} 
                title={section.title} 
                description={section.description} 
              />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} container justifyContent="center" spacing={2}>
          {sections.slice(2).map((section, index) => (
            <Grid item key={index + 2}>
              <CircularSection 
                icon={section.icon} 
                title={section.title} 
                description={section.description} 
              />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} sx={{ mt: 3 }}>
          <Button 
            variant="contained"
            sx={{
              backgroundColor: 'black', // Background color for the button
              color: 'white', 
              borderRadius: '20px',
              padding: '12px 24px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05) translateY(-3px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
              },
              '&:active': {
                transform: 'scale(0.95) translateY(2px)',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
