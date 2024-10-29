import React from 'react';
import { Box, Typography, Grid2 as Grid, Paper, Container } from '@mui/material';
import ReusableCodeImage from '../../../../assets/img/Services/CrossPlatform/reusecode.png'; // Replace with actual icon path
import NativePerformanceImage from '../../../../assets/img/Services/CrossPlatform/Performance.png'; // Replace with actual icon path
import CrossPlatformImage from '../../../../assets/img/Services/CrossPlatform/Framework.png'; // Replace with actual icon path
import HotReloadImage from '../../../../assets/img/Services/CrossPlatform/Reload.png'; // Replace with actual icon path
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
  
        <Grid container spacing={4}>

          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={ReusableCodeImage}
              title="Hot reload"
              description="With a hot reload, it is possible to notice changes in the code instantly reflected on the UI. This expedites the process of working on the application’s outlook; in addition, it enables developers to resolve issues, which saves money and time."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={NativePerformanceImage}
              title="Native Performance"
              description="Platform-specific widgets for Google Fuchsia, Android, and iOS are offered in Flutter. These widgets can be integrated into the Flutter application to use different platform-dependent functionalities. You can leverage existing Swift, Objective-C, and Java codes to access native capabilities like the camera and location. Therefore, Flutter makes it simple to use APIs and third-party integrations."
            />
          </Grid>
  
          {/* Row 2: Two Cards Side by Side */}
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={CrossPlatformImage}
              title="Cross Platform Development"
              description="Flutter allows developers to write code that works on different platforms. Same code can be used to develop two different applications. The UI itself can be shared in addition to the UI code. Compared to maintaining several code bases for various platforms, maintaining a single codebase is much easier."
            />
          </Grid>
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={HotReloadImage}
              title="Widget library"
              description="In Flutter, everything is defined as a widget. Complex widgets can be created by Flutter and then customized to meet the app requirements. There are also built-in widgets that can be used. Examples of widget sets that offer a glitch-free user experience are the Cupertino bundle and Material Design."
            /> 
          </Grid>
          
          <Grid size={{xs:12, md :6}}>
            <FeatureCard
              image={QuickTime}
              title="Open Source"
              description="Flutter was introduced as an open-source platform by Google. To create Flutter applications, developers can explore a variety of design alternatives. Flutter is free to use and has comprehensive documentation and communities available online. Its active and supportive community is always available to answer and discuss questions related to the Flutter framework."
            /> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  
  export default FeaturesSection;