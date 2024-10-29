import React from "react";
import { Typography, Card, CardContent, Container, Box } from "@mui/material";
import Carousel from "react-multi-carousel";

const DevelopmentServices = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Box sx={section}>
      <Container>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 32, md: 39 },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {data.firstHeading}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 32, md: 39 },
            fontWeight: 700,
            color: "#c75425",
            lineHeight: 1.2,
          }}
        >
          {data.secondHeading}
        </Typography>
        {data.description && (
          <Typography
            sx={{
              fontSize: 16,
              lineHeight: "28px",
              color: "#fff",
              mt: 2.5,
            }}
          >
            {data.description}
          </Typography>
        )}
        <Box sx={{ mt: { xs: "40px", sm: "60px" } }}>
          <Carousel
            responsive={responsive}
            autoPlaySpeed={3000}
            draggable
            pauseOnHover
            minimumTouchDrag={80}
            swipeable
            removeArrowOnDeviceType={["mobile"]}
            containerClass="carousel-list-container"
          >
            {data.cardData.map((data, index) => (
              <Card sx={card} key={index}>
                <CardContent sx={{ p: "30px" }}>
                  <Box sx={icon} className="iconBox">
                    <img src={data.icon} alt="" style={{ width: "48px" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 22, md: 24 },
                      marginTop: "15px",
                      color: "#666",
                      fontWeight: 500,
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    className="description"
                    sx={{
                      fontSize: 16,
                      color: "#666",
                      overflow: "hidden",
                      transition: "all .3s ease-in-out",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "5",
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default DevelopmentServices;
const section = {
  backgroundColor: "#083f6b", // Dark blue background
  padding: "60px 20px",
  textAlign: "center",
  color: "#fff",
};
const card = {
  backgroundColor: "#f4f7fb", // Light background for cards
  margin: "0 10px",
  height: { xs: "auto", sm: 320 },
  borderRadius: 3,
  ":hover": {
    ".iconBox": {
      scale: 0,
      height: 0,
      width: 0,
      transition: "all .3s ease-in-out",
    },
    ".description": {
      "-webkit-line-clamp": "inherit",
    },
  },
};
const icon = {
  backgroundColor: "rgba(189, 73, 24, .5)",
  width: "fit-content",
  borderRadius: "50%",
  margin: "auto",
  width: 80,
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .5s",
};
