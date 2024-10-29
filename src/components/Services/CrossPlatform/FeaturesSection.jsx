import React from 'react';
import { Box, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import ReusableCodeImage from '../../../assets/img/Services/CrossPlatform/reusecode.png'; // Replace with actual icon path
import NativePerformanceImage from '../../../assets/img/Services/CrossPlatform/Performance.png'; // Replace with actual icon path
import CrossPlatformImage from '../../../assets/img/Services/CrossPlatform/Framework.png'; // Replace with actual icon path
import HotReloadImage from '../../../assets/img/Services/CrossPlatform/Reload.png'; // Replace with actual icon path
import LiveReload from '../../../assets/img/Services/CrossPlatform/LiveReolad.png';
import StrongCommunity from '../../../assets/img/Services/CrossPlatform/StrongCommunity.png';
import QuickTime from '../../../assets/img/Services/CrossPlatform/QuickTime.png';

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
  
        <Grid container spacing={4}>

          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={ReusableCodeImage}
              title="Reusable Code"
              description="It is possible to use a single codebase for both Android and iOS apps with React Native technology. This equates to significant time and cost savings in the development process."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={NativePerformanceImage}
              title="Native Performance"
              description="Unlike Cordova or PhoneGap, the framework generates components that operate as native views, ensuring that app users enjoy fast performance even when the app consumes a lot of resources."
            />
          </Grid>
  
          {/* Row 2: Two Cards Side by Side */}
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={CrossPlatformImage}
              title="Cross Platform Framework"
              description="With React Native, developers can write code that runs natively on many platforms while maintaining a single codebase, delivering top-tier performance across all devices."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={HotReloadImage}
              title="Hot Reload"
              description="React Native’s hot reload feature is connected to Hot Module Replacement (HMR). This helps developers instantly reload their changes without restarting the entire app."
            /> 
          </Grid>

          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={LiveReload}
              title="Live Reload"
              description="React Native allows you to view two different screens simultaneously.  You can modify codes on the first screen and you can see the results of your changes on the second screen. Android mobile app developers are well aware of the value of this feature."
            /> 
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={QuickTime}
              title="Quick Time to Market"
              description="React Native considerably reduces coding efforts because the majority of the code can be shared between the iOS and Android versions, cutting development time in half. It also comes with pre-built components for multiple functions."
            /> 
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={StrongCommunity}
              title="Strong Community"
              description="React Native has become one of the favorite tech stacks for developers since its launch. It has large and active community support in cross-platform mobile app development. The community ensures that no question remains unanswered."
            /> 
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
  
  export default FeaturesSection;