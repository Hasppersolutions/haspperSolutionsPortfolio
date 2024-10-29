import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const AiDescription = ({ data }) => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-content",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(
      ".section-content h1",
      {
        y: -80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
    tl.from(
      ".section-content h2",
      {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
    tl.from(
      ".section-image img",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "anim"
    );
  });
  return (
    <Box
      className="section-content"
      sx={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container
        sx={{
          paddingTop: { xs: "30px ", sm: "40px" },
        }}
      >
        <Box
          className="scroll-down-icon"
          sx={{
            textAlign: "center",
            width: "fit-content",
            margin: "auto",
            marginTop: "12px",
          }}
        >
          ⏷
        </Box>
        <Grid container spacing={{ xs: 0, md: 5 }} rowGap={{ xs: 5, md: 0 }}>
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              padding: { xs: "30px 0", sm: "60px 0" },
              // backgroundColor: "#f9f9f9",
              // textAlign: "center",
            }}
          >
            <Box>
              <Typography
                component={"h1"}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 800,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                {data.firstHeading}
              </Typography>
              {data.secondHeading && (
                <Typography
                  // component={"h2"}
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 800,
                    color: "#c75425",
                    lineHeight: 1.2,
                  }}
                >
                  {data.secondHeading}
                </Typography>
              )}
              <Typography
                sx={descriptionText}
                dangerouslySetInnerHTML={{
                  __html: data?.description?.split("\n")?.join("<br/>"),
                }}
              />
              {data.button && (
                <Link to={data.link} style={{ textDecoration: "none" }}>
                  <Button className="btn-learn-more" sx={learnButton}>
                    {data.button}
                  </Button>
                </Link>
              )}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className="section-image">
              <img
                src={data.image}
                alt="Consulting Service"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AiDescription;
const descriptionText = {
  fontSize: { xs: "1rem", md: "1.1rem" },
  color: "#333",
  mb: "20px",
  mt: 2,
};
const learnButton = {
  backgroundColor: "#d9652b",
  color: "#fff",
  borderRadius: "22px",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#ffca76",
    color: "#000",
  },
  padding: "15px 20px",
};
