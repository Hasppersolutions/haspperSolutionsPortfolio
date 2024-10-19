import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import revenue from "../../../assets/img/Services/ios/revenue.png";

const DevelopmentServices = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
    },
    midDesktop: {
      breakpoint: { max: 1200, min: 900 },
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
    <>
      <Box sx={backgroundStyle}>
        <Container>
          <Box
            className="scroll-down-icon"
            sx={{
              textAlign: "center",
              width: "fit-content",
              margin: "auto",
              marginTop: "12px",
              color: "#fff !important",
            }}
          >
            ⏷
          </Box>
          <Box className="headingBoxWidth">
            <Typography sx={titleStyle}>{data.heading}</Typography>
            {data.description && (
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18 },
                  color: "#fff",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {data.description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{ mt: { xs: "40px", md: "90px" }, pb: { xs: 10, sm: "115px" } }}
          >
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
              {data.cardData.map((item, index) => (
                <Box sx={card} key={index}>
                  <Box className="iconBox">
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{
                        maxHeight: 100,
                        maxWidth: 100,
                        marginBottom: 30,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 20,
                      color: "#666",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box className="description" sx={overlayTextStyle}>
                    {item.description}
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DevelopmentServices;
const backgroundStyle = {
  backgroundImage:
    "linear-gradient(to right, rgb(189, 73, 24), rgb(87, 34, 11) )",
  clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0% 100%)",
  backgroundSize: "cover",
  backgroundPosition: "right",
  paddingTop: "156px",
};
const titleStyle = {
  fontSize: { xs: 26, sm: 34, md: 42, lg: 50 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
  color: "#fff",
};
const card = {
  backgroundColor: "#f4f7fb",
  margin: "0 20px",
  height: { xs: "auto", sm: 320 },
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  ":hover": {
    ".description": {
      top: 0,
      opacity: 1,
      transition: "all 400ms cubic-bezier(0, 0, .2, 1)",
    },
  },
};
const overlayTextStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "#fff",
  textAlign: "center",
  fontSize: 14,
  fontWeight: 600,
  color: "#fff",
  backgroundColor: "#c75425",
};
