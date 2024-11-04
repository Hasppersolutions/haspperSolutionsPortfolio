import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import rebrandCities from "../../assets/img/Solutions/hrms/rebrandCities.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = ({ data }) => {
  //Animation

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bannerMainBox",
        start: "top 30%",
        end: "bottom 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(
      ".bannerBottomHeading",
      {
        x: -200,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      },
      "anim"
    );
    tl.from(
      ".bannerMiddleHeading",
      {
        x: 200,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      },
      "anim"
    );
  });

  return (
    <>
      <Box
        className="bannerMainBox"
        sx={{
          backgroundImage: `url(${data?.backgroundImage || rebrandCities})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: {
            xs: "100%",
            sm: "calc(100vh - 85px)",
          },
          alignContent: "center",
          py: { xs: 5, sm: 10 },
          position: "relative", // To make it the relative parent for StatsSection
          // marginTop: { xs: "85px", xl: "95px" },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${data.backgroundImage})`,
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
            background:
              "linear-gradient(90.21deg, rgb(87, 34, 11) -5.91%, rgba(189, 73, 24, .6) 88%)",
          }}
        />
        <Container
          sx={{
            zIndex: 2,
            // color: "#fff",
            position: "relative",
            // textAlign: "center",
          }}
        >
          <Grid container rowGap={{ xs: 4, md: 0 }}>
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
                    marginTop: "10px",
                    width: "fit-content",
                    fontSize: 40,
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  {data.mainHeading}
                </Typography>
                {data.middleHeading && (
                  <Typography
                    className="bannerMiddleHeading"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      color: "#d9652b",
                      marginTop: "10px",
                      width: "fit-content",
                      fontSize: 40,
                      fontWeight: 800,
                      lineHeight: 1.2,
                    }}
                  >
                    {data.middleHeading}
                  </Typography>
                )}
                <Typography
                  className="bannerBottomHeading"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#ffffff",
                    marginTop: "25px",
                    width: "fit-content",
                  }}
                >
                  {data.bottomHeading}
                </Typography>
              </Box>
              {data.button && (
                <Box>
                  <Link
                    to={data.link || "/contact"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={buttonStyle}>{data.button}</Button>
                  </Link>
                </Box>
              )}
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
                <img
                  src={data.rightImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
const buttonStyle = {
  backgroundColor: "#d9652b",
  color: "#fff",
  borderRadius: "22px",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#ffca76",
    color: "#000",
  },
  marginTop: 4,
  padding: "12px 30px",
};
