import React from 'react';
import { Box,Typography, Container, Grid2 as Grid} from '@mui/material';
import SectionImage from '../../../../assets/img/Services/CrossPlatform/FlutterImg.svg';
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
              Build Your Next Mobile App With
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#c75425', mb: 2 }}>
              Flutter App Development <br/>Company
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              Created by Google in 2017, Flutter is an open-source, cross-platform application <br/>development framework. It is used to develop native iOS, Android, and web <br/>applications, high-quality apps, without having to write the code for the two apps <br/>separately. With Flutter App Development, you need only one codebase for both <br/>platforms. Not only this but also it speeds up mobile app development, reduces <br/>bugs, and increases your ROI. 
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              The Dart programming language, which was also created by Google, forms the <br/>foundation of the Flutter SDK.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333', lineHeight: 1.6, mb: 2 }}>
              Since its release, the open-source framework Flutter has attracted a large and <br/>active developer community. This community continuously publishes helpful code <br/>samples and helps programmers in creating new, creative, stunning cross-<br/>platform applications.
              </Typography>
              
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid size = {{xs:12, md:5}}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={SectionImage} alt="Consulting Service" style={{ width: '100%', height: 'auto', marginTop: '100px'}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
