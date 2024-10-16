import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import AiBannerIcon from "../../assets/img/AiBannerIcon.png";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";

const Banner = () => {
  const bannerTextData = {
    mainHeading: "Artificial Intelligence",
    middleHeading: "Solutions",
    bottomHeading:
      "Step into the future of business with our comprehensive Artificial Intelligence Solutions, propelling you toward unrivaled success.",
  };
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "100%",
            sm: "calc(100vh - 85px)",
            xl: "calc(100vh - 95px)",
          },
          alignContent: "center",
          py: { xs: 5, sm: 10 },
          position: "relative", // To make it the relative parent for StatsSection
          marginTop: { xs: "85px", xl: "95px" },
          background: "linear-gradient(90.21deg, rgb(87, 34, 11) -5.91%, rgba(189, 73, 24, .6) 88%)",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${ServiceBackgroudImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            bottom: 0,
            right: "auto",
            width: "100%",
          }}
        />
        <Container>
          <Grid container rowGap={{xs: 4, md: 0}}>
            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  alignContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#ffffff",
                    padding: "5px 15px",
                    marginTop: "10px",
                    width: "fit-content",
                    fontSize: 40,
                    fontWeight: 800,
                    lineHeight: {
                        xs: 1.2,
                        sm: 0.7
                      },
                  }}
                >
                  {bannerTextData["mainHeading"]}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#d9652b",
                    padding: "5px 15px",
                    marginTop: "10px",
                    width: "fit-content",
                    fontSize: 40,
                    fontWeight: 800,
                    lineHeight: {
                        xs: 1.2,
                        sm: 0.7
                      },
                  }}
                >
                  {bannerTextData["middleHeading"]}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#ffffff",
                    padding: "5px 15px",
                    marginTop: "10px",
                    width: "fit-content",
                  }}
                >
                  {bannerTextData["bottomHeading"]}
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: {
                //     xs: "100%",
                //     md: 390,
                // }
              }}
            >
              <Box>
                <img src={AiBannerIcon} style={{width: "100%", height: "100%"}} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
