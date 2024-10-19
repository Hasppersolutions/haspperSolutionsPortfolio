import React from "react";
import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";

const Industries = ({ data }) => {
  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ textAlign: "center", maxWidth: 1100, margin: "auto" }}>
        <Typography sx={titleStyle}>{data.firstHeading}</Typography>
        <Typography
          sx={[titleStyle]}
          dangerouslySetInnerHTML={{
            __html: data?.secondHeading?.split("\n")?.join("<br/>"),
          }}
        />
      </Box>
      <Box sx={{mt: 6}}>
        <Grid container spacing={3} justifyContent="center">
          {data.industries.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.2 }} key={index}>
              <Box sx={cardStyle}>
                <Box sx={iconStyle}>
                  <img src={item.icon} alt={item.title} width={"100%"} />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 18 },
                    color: "#666",
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Box className="overlayText" sx={overlayTextStyle}>
                  {item.description}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Industries;
const iconStyle = {
  height: { xs: 50, lg: 80 },
  width: { xs: 50, lg: 80 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px 20px",
  backgroundColor: "#fff",
  width: "100%",
  boxShadow: "rgba(0, 0, 0, .15) 0 5px 15px 0",
  minHeight: { xs: 200, md: 220, lg: 200 },
  height: "100%",
  borderRadius: 2,
  overflow: "hidden",
  position: "relative",
  ":hover": {
    ".overlayText": {
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
  color: "#666",
};
const titleStyle = {
  fontSize: { xs: 24, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
};
