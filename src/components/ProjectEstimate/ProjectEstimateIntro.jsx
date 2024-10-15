import React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectEstIntro from '../../assets/img/ProjectEstIntro.svg'

export const ProjectEstimateIntro = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'black',
        padding: '300px 20px 0px', // Adjust padding to prevent overlap with navbar and form
        //marginBottom:  // Adjust margin to create space below
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for larger screens
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 'auto', // Adjust height if necessary
      }}
    >
      {/* Text Content */}
      <Box sx={{ flex: '1 1 60%', marginRight: { md: '20px', xs: '0' } }}>
        <Box
          sx={{
            width: '40%', // Line width
            height: '5px', // Height of the line
            backgroundColor: 'black', // Line color
            marginBottom: '50px', // Space between the line and text
            marginTop: '-100px',
          }}
        />
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '20px' }}>
          "Get a Tailored Estimate for Your IT Project Today"
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '20px' }}>
          Thank you for considering Haspper for your project.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '2rem', fontWeight: '200', marginBottom: '20px' }}>
          Get a Comprehensive, No-Obligation Estimate Tailored to Your Needs. Our Team of Experts Will
          Provide an Accurate Cost Breakdown to Help You Plan with Confidence!
        </Typography>

        <Typography variant="body2" sx={{ fontSize: '2rem', fontWeight: '200', marginBottom: '20px' }}>
          Curious About How Much Your Project Will Cost? Fill details down below and Request a Detailed,
          Customized Estimate from Our Expert Team and Get a Clear Picture of the Budget and Timeline for Your Needs!
        </Typography>
      </Box>

      {/* Image Content */}
      <Box sx={{ flex: '1 1 40%', marginTop: { xs: '20px', md: '0' } }}>
        <img 
          src= { ProjectEstIntro }
          alt="Estimate Preview" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Box>
  );
};
