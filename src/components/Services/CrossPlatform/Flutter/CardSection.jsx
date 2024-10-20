import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MobileApps from '../../../../assets/img/Services/CrossPlatform/MobileApps.svg';
import Maintainance from '../../../../assets/img/Services/CrossPlatform/Maintainance.svg';
import Consulting from '../../../../assets/img/Services/CrossPlatform/Consulting.svg';
import Migration from '../../../../assets/img/Services/CrossPlatform/Migration.svg';
import DevelopmentDesign from '../../../../assets/img/Services/CrossPlatform/DevelopmentDesgn.svg';
import Testing from '../../../../assets/img/Services/CrossPlatform/Testing.svg';
import Deployment from '../../../../assets/img/Services/CrossPlatform/Deployment.svg';
import LaunchSupport from '../../../../assets/img/Services/CrossPlatform/LaunchSupport.svg';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// Dummy data for card content
const features = [
  { title: "Custom Flutter App Development", description: "We build modern and scalable apps.", icon: <img src= {DevelopmentDesign} style={{ width: '80px', height: '80px' }}></img>},
  { title: "UI/UX Design", description: "Get professional advice for your app.", icon: <img src= {Consulting} style={{ width: '80px', height: '80px' }}></img>  },
  { title: "App Migration", description: "Smooth transitions to React Native.", icon: <img src= {Migration} style={{ width: '80px', height: '80px' }}></img>  },
  { title: "App Integration and Development", description: "Keep your app running smoothly.", icon: <img src= {Maintainance} style={{ width: '80px', height: '80px' }}></img> },
  { title: "Flutter App Consulting", description: "Tailored solutions for your business.", icon: <img src= {MobileApps} style={{ width: '80px', height: '80px' }}></img> },
  { title: "Maintaince and support", description: "Ensure quality with thorough testing.", icon: <img src= {Testing} style={{ width: '80px', height: '80px' }}></img>  }
];

// Single Feature Card component with hover animation and rounded corners
const FeatureCard = ({ title, description, icon }) => (
  <Paper
    elevation={3}
    sx={{
      minWidth: '220px',
      maxWidth: '220px',
      minHeight: '300px',
      maxHeight: '300px',
      padding: '20px',
      backgroundColor: '#d9d9d9', // Background color
      borderRadius: '16px', // Rounded corners
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#fff', // Change background color on hover
        transform: 'scale(1.05)', // Zoom in effect
        boxShadow: '0 16px 24px rgba(0,0,0,0.2)', // 3D shadow
      },
    }}
  >
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        opacity: 1,
        '&:hover .description': {
          opacity: 1, // Show description on hover
        },
      }}
    >
      <Box sx={{ fontSize: '4rem', mb: 2 }}>{icon}</Box> {/* Icon/Image */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#c94c16' }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="description"
        sx={{
          color: '#555',
          textAlign: 'center',
          mt: 1,
          opacity: 0, // Initially hidden
          transition: 'opacity 0.3s ease',
        }}
      >
        {description}
      </Typography>
    </Box>
  </Paper>
);

// Main component for features section
const CardSection = () => (
  <Box sx={{ backgroundColor: '#fff', py: 8 }}>
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        mb: 5,
        fontWeight: 'bold',
        color: '#c94c16',
      }}
    >
      Our React Native App Development Services at a Glance
    </Typography>
    <Typography
      variant="body1"
      sx={{
        textAlign: 'center',
        mb: 5,
        color: '#555',
      }}
    >
      We provide a comprehensive set of capabilities for developing apps that have the look, feel, functionality, and performance of native apps.
    </Typography>

    {/* Swiper carousel */}
    <Swiper
      slidesPerView={4} // Show 5 cards at a time
      spaceBetween={20} // Space between cards
      navigation={true} // Add navigation arrows
      pagination={{ clickable: true }} // Add pagination dots
      modules={[Navigation, Pagination]} // Use Swiper navigation and pagination modules
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
      }}
      style={{ paddingBottom: '20px' }} // Optional padding at the bottom
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default CardSection;
