import React from "react";
import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
// import googleReview from "../../../assets/img/"

const Accredited = () => {
  return (
    <Container sx={{ pb: { xs: 5, md: 10 } }}>
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 32, md: 39 },
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Top Mobile App Development Company,
          <br />
          <span style={{ color: "#c75425" }}> Accredited By</span>
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            color: "#666",
            mt: 2.5,
            lineHeight: "28px"
          }}
        >
          Our commitment to quality and focus on our customers’ needs has made
          us a go-to resource for companies interested in responsive web app
          development and related technologies.
        </Typography>
      </Box>
      <Box sx={{mt: {xs: "35px", md: "70px"}}}>
        <Grid container spacing={3} rowGap={{ xs: 4, md: 0 }}>
          {accreditationData.map((accreditation, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  maxWidth: { xs: "80%", sm: "100%" },
                  margin: "auto",
                }}
              >
                <Box sx={cardStyle}>
                  <Box
                    sx={{
                      width: 150,
                      height: 70,
                    }}
                  >
                    <img
                      src={accreditation.image}
                      alt={accreditation.name}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt={2}>
                    {[...Array(Math.floor(accreditation.rating))].map(
                      (_, i) => (
                        <span key={i}>⭐</span>
                      )
                    )}
                    {accreditation.rating % 1 !== 0 && <span>⭐</span>}
                    {/* For half-stars */}
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center", mt: "10px" }}>
                  <Typography sx={{ fontSize: 14, color: "#666" }}>
                    {accreditation.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Accredited;
const accreditationData = [
  {
    name: "AppFutura",
    rating: 4.7,
    image: "/path-to-appfutura-logo", // Replace with the actual logo path
    description:
      "Top Mobile and Web Development Company in 2018 with 4.7/5 ratings",
  },
  {
    name: "Google Reviews",
    rating: 4,
    image: "/path-to-google-reviews-logo", // Replace with the actual logo path
    description: "4/5 star for the work environment and learning opportunities",
  },
  {
    name: "GoodFirms",
    rating: 5,
    image: "/path-to-goodfirms-logo", // Replace with the actual logo path
    description:
      "We made 5/5 star for quality, reliability, ability and overall",
  },
  {
    name: "Glassdoor",
    rating: 3.9,
    image: "/path-to-glassdoor-logo", // Replace with the actual logo path
    description: "We earned 3.9 stars, 94% recommended and 92% Approve of CEO",
  },
];

const cardStyle = {
  padding: 2.5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "#fff",
};
