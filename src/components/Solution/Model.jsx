import React from "react";
import { Grid2 as Grid, Typography, Box, Container } from "@mui/material";
import rebrandCities from "../../assets/img/Solutions/hrms/rebrandCities.png"

const Model = ({ data }) => {
  return (

    
    <Box sx={{ py: "50px" ,position:'relative',background:
      "linear-gradient(90.21deg, rgb(87, 34, 11) -5.91%, rgba(189, 73, 24, .6) 88%)"}}>

          <Box
          sx={{
            backgroundImage: `url(${data?.backgroundImage || rebrandCities})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            bottom: 0,
            right: "auto",
            width: "100%",
          }}
        />  
      <Container>
        <Box sx={{ textAlign: "center", maxWidth: 1100, margin: "auto" }}>
          <Typography sx={titleStyle}>{data.firstHeading}</Typography>
          <Typography
            sx={[
              titleStyle,
              {
                color: "#c75425",
              },
            ]}
          >
            {data.secondHeading}
          </Typography>
          {data.description && (
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "28px",
                color: "#666",
                mt: 2.5,
              }}
            >
              {data.description}
            </Typography>
          )}
        </Box>
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          sx={{
            mt: 6,
          }}
        >
          {data.technologies.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box sx={cardStyle}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box className="iconBox" sx={iconStyle}>
                    <img
                      src={item?.icon}
                      alt={item.title}
                      style={{ width: "60%" }}
                    />
                  </Box>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 14,
                    textAlign: "center",
                    color: "#666",
                    mt: 2.5,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Model;
const cardStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  width: "100%",
  borderRadius: 2,
  height: { xs: "auto", sm: 300 },
  
};
const iconStyle = {
  height: { xs: 60, lg: 80 },
  width: { xs: 60, lg: 80 },
  borderRadius: "50%",
  backgroundColor: "rgba(189, 73, 24, .5)",
  marginRight: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: ".5s",
  flexShrink: 0,
};
const titleStyle = {
  fontSize: { xs: 24, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
};
