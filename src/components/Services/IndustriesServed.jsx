import React from "react";
import { Grid2 as Grid, Card, CardContent, Typography, Box, styled, Container } from "@mui/material";
import mysql from "../../assets/img/Services/Startup/mysql.png";


// Styled component for hover effect
const HoverCard = styled(Card)(({ theme, isSmall }) => ({
  backgroundColor: "transparent",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#1976d2", // MUI primary color
    color: "#fff", // Change text color on hover
    "& .card-icon": {
      // No need for a filter since fill is now currentColor
    },
  },
  cursor: "pointer",
  height: isSmall ? "250px" : "250px",
  width: isSmall ? "100%" : "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
}));

// Card component
const CustomCard = ({ image, title, description, isSmall }) => (
  <HoverCard isSmall={isSmall}>
    <CardContent style={{ textAlign: "center", padding: "10px" }}>
      <img
        src={image}
        alt={title}
        className="card-icon"  // Add this class for targeting
        style={{
          height: isSmall ? "60px" : "100px",
          marginBottom: "10px",
          transition: "filter 0.3s ease, color 0.3s ease", // Transition for both filter and color
          // Remove filter style since we're using currentColor
        }}
      />
      <Typography variant="h6" style={{ fontSize: isSmall ? "0.9rem" : "1rem" }}>
        {title}
      </Typography>
      <Typography variant="body2" style={{ fontSize: isSmall ? "0.75rem" : "0.8rem" }}>
        {description}
      </Typography>
    </CardContent>
  </HoverCard>
);
const IndustriesServed = ({data}) => {
  return (
    <Box 
      sx={{ 
        padding: "40px 20px", 
        marginTop: "60px", 
        maxWidth: "100%",
        backgroundImage: `url(${data.backgroundImage})`,  // Add background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: 10,
        position: 'relative',
      }}
    >
      <Container>
      <Grid container spacing={3}>
        {/* Left Text */}
        <Grid size = {{xs: 12 ,md: 6}}  style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {data.firstHeading}
          </Typography>
        </Grid>

        {/* First Row with 2 Smaller Cards */}
        <Grid size = {{xs: 12, md:6}}>
          <Grid container spacing={2}>
            {data.cardData.slice(0, 2).map((card, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <CustomCard 
                  image={card.image} 
                  title={card.title} 
                  description={card.description} 
                  isSmall={true}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Second Row with 4 Regular Sized Cards */}
        <Grid size = {{xs: 12}} >
          <Grid container spacing={3}>
            {data.cardData.slice(2).map((card, index) => (
              <Grid size = {{xs: 12, sm: 6, md: 3}}  key={index}>
                <CustomCard 
                  image={card.image} 
                  title={card.title} 
                  description={card.description} 
                  isSmall={false}  // Regular size for the remaining cards
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};


export default IndustriesServed;
