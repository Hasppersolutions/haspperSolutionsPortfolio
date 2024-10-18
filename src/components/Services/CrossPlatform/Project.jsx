import React from 'react';
import { Box,Typography, Container, Grid2 as Grid,Button} from '@mui/material';

const Project = () => {
    return (
        <Box sx={{ padding: '50px',  backgroundColor: '#c94c16' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 ,color:'#fff'}}>
        HAVE AN
      </Typography>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600,color:'#fff' }}>
        AWESOME PROJECT IDEA 
      </Typography>

      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 300 ,color:'#fff'}}>
      AND NOT SURE HOW TO GET STARTED?
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
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

        </Box>
        
    );
};

export default Project;