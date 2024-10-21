import React from "react";
import { Grid2 as Grid, Typography, Box, Container } from "@mui/material";

const FeatureSection = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          margin: "20px 0px",
          backgroundColor: "#ffffff",
          padding: "100px 0px 50px 0px",
        }}
      >
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Grid container>
                {data.cardData.map((item, index) => (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={index}
                    sx={{
                      borderRight: {
                        xs: "1px solid #ffffff",
                        sm: "1px solid #dfdfdf",
                      },
                      borderBottom: "1px solid #dfdfdf",
                      ":nth-child(2n+0)": {
                        borderRight: "1px solid #ffffff",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        boxShadow: "none",
                        border: "none",
                        backgroundColor: "#fff",
                        minHeight: "145px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "start", sm: "center" },
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid #BD4918",
                          height: "77px",
                          width: "77px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0px 10px",
                          flexShrink: 0,
                        }}
                      >
                        <img src={item.image} alt={item.text} />
                      </Box>
                      <Box
                        sx={{
                          height: "77px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          width: { xs: "100%", sm: "139px" },
                          // maxWidth: "150px",
                          margin: "0px 15px",
                          // padding: "10px"
                        }}
                      >
                        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                {/* <Box> */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#d9652b",
                    fontSize: "3rem",
                    marginBottom: "10px",
                    marginTop: "-10px",
                    fontFamily: "sans",
                  }}
                >
                  {data.mainHeading}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    marginBottom: "10px",
                    marginTop: "-30px",
                  }}
                >
                  {data.subHeading}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                  {data.description}
                </Typography>
                {/* </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeatureSection;
