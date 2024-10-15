import React from 'react';
import { Box, Typography } from '@mui/material';

export const ContactIntro = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'black',
        padding: '300px 20px 0px', // Adjust padding to prevent overlap with navbar and form
        marginBottom: '60px', // Adjust margin to create space below
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 'auto', // Adjust height if necessary
      }}
    >
         <Box
        sx={{
          width: '40%', // Half of the page width
          height: '5px', // Height of the line
          backgroundColor: 'black', // Line color
          marginBottom: '50px', // Space between the line and text
          marginTop: '-100px'
        }}
      />
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '20px' }}>
        Let's Build Tomorrow Together - Contact Our IT Experts Today
      </Typography>
      {/* <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        Contact Our IT Experts Today
      </Typography> */}
      <Typography variant="body1" sx={{ fontSize: '2rem', fontWeight: '200', marginBottom: '20px' }}>
        Unlock the power of advanced technology with our dedicated IT team. Let's collaborate to build future-proof solutions that keep your business ahead of the competition.
      </Typography>
    </Box>
  );
};