import React from 'react';
import { Box,Typography, Container, Grid2 as Grid} from '@mui/material';
import SectionImage from '../../../assets/img/Services/Background.svg';
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
              React Native
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#c75425', mb: 2 }}>
              App Development Services
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              React Native is a popular open-source UI framework that is based on JavaScript. It is used to build mobile applications for Android and iOS. One of the key features of React Native is that it allows developers to create a mobile app for various platforms by using a single codebase. 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              Launched by Facebook in 2015, the framework is used by tech giants like Facebook, Walmart, Instagram, Skype, Airbnb, Tesla, and so on. 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              In a short span, the framework has gained a lot of popularity for its unique features that make an  attractive UI and engaging UX for apps.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2}}>
              Haspper is one of the leading React Native app development companies that offers services you can rely on when creating mobile apps that add value to your business.
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
