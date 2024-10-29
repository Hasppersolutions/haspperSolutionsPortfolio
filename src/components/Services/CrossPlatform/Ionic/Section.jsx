import React from 'react';
import { Box,Typography, Container, Grid2 as Grid} from '@mui/material';
import SectionImage from '../../../../assets/img/Services/IonicSectionImg.svg';

const Section = () => {
  return (
    <Box
      sx={{
        padding: '50px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          {/* Content Section */}
          <Grid size = {{xs :12,md:7}}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 2 }}>
              What is Ionic App

              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#c75425', mb: 2 }}>
              Development?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              Created by Drifty Co. in 2013, Ionic is an Open-Source SDK for cross-platform Mobile <br/>App Development. 
              The initial alpha version of Ionic was released in November 2013 ,<br/>followed by the beta 1.0 in March 2014. 
              Using familiar web libraries, frameworks, and <br/> languages, 
              Ionic provides a set of tools that help developers to build native iOS,<br/> Android, and progressive web applications.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              Backed by a dedicated team of Ionic developers we at Haspper help you build <br/> outstanding 
              cross-platform application development that works perfectly in <br/>Android, iOS, and progressive web.
               Get in touch with us today for a free consultation<br/> and start your Ionic development.
              </Typography>
             
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid size = {{xs:12, md:5}}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={SectionImage} alt="Consulting Service" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
