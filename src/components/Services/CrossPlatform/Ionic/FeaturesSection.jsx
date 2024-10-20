import React from 'react';
import { Box, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import ReusableCodeImage from '../../../../assets/img/Services/CrossPlatform/reusecode.png'; // Replace with actual icon path
import NativePerformanceImage from '../../../../assets/img/Services/CrossPlatform/Performance.png'; // Replace with actual icon path
import CrossPlatformImage from '../../../../assets/img/Services/CrossPlatform/Framework.png'; // Replace with actual icon path
import HotReloadImage from '../../../../assets/img/Services/CrossPlatform/Reload.png'; // Replace with actual icon path
import LiveReload from '../../../../assets/img/Services/CrossPlatform/LiveReolad.png';
import StrongCommunity from '../../../../assets/img/Services/CrossPlatform/StrongCommunity.png';
import QuickTime from '../../../../assets/img/Services/CrossPlatform/QuickTime.png';
// FeatureCard Component
const FeatureCard = ({ image, title, description }) => (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        padding: '20px',
        borderRadius: '16px',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {/* Image section */}
      <Box sx={{ marginRight: '20px' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '60px',
            height: '60px',
          }}
        />
      </Box>
  
      {/* Text section */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#C94C16', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#555' }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  );
  
  const FeaturesSection = () => (
    <Box sx={{ backgroundColor: '#d9d9d9', py: 10 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 5,
            fontWeight: 'bold',
            color: '#C94C16',
          }}
        >
          Leverage The Potential of React Native App Development Services
        </Typography>
  
       < Grid container spacing={4}>

          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={ReusableCodeImage}
              title="Single codebase"
              description="Write once, use anywhere- the first and foremost feature of Ionic is the shared code base. It saves you time, money, and effort and you can develop native iOS, Android, and web applications using the same code base."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={NativePerformanceImage}
              title="Quick Development"
              description="Ionic offers quick development compared to native iOS and Android development."
            />
          </Grid>
  
          {/* Row 2: Two Cards Side by Side */}
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={CrossPlatformImage}
              title="Plugins"
              description="There are plenty of plugins available in Ionic that allow you to use the features of smartphones such as camera, geolocation, NFC, fingerprint sensors, etc."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={HotReloadImage}
              title="User interface"
              description="Thanks to the wide range of web libraries Ionic provides platform-specific user interface (UI) elements for iOS, Android, and progressive applications."
           /> 
          </Grid>

          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={QuickTime}
              title="Easy testing"
              description="Mobile app testing is far easier with Ionic. You could test in on a desktop browser or even perform simulator testing for both iOS and Android apps using Cordova commands"
            /> 
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={StrongCommunity}
              title="Large community"
              description="The best part about the Ionic Framework is that it has a large and active community that is eager to help on different forums or specialized YouTube channels."
            /> 
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
  
  export default FeaturesSection;