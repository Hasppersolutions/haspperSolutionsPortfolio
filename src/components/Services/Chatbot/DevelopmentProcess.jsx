import React from "react";
import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import WaveLine from "../../WaveLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DevelopmentProcess = ({ data }) => {

      //Animation

      useGSAP(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".developmentProcessTitleBox",
            start: "top 98%",
            end: "bottom 70%",
            toggleActions: "play none none reset",
          },
        });
    
        tl.from(".developmentProcessTitleBox p", {
          y: 100,
          opacity: 0,
          duration: 1,
        });
      });
  
  return (
    <>
      <Box>
        <WaveLine />
        <Container>
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
          <Box className="headingBoxWidth developmentProcessTitleBox">
            <Typography sx={titleStyle}>{data.firstHeading}</Typography>
            <Typography sx={[titleStyle, { color: "#c75425" }]}>
              {data.secondHeading}
            </Typography>
            {data.description && (
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: "center",
                  color: "#666666",
                  marginTop: "10px",
                }}
              >
                {data.description}
              </Typography>
            )}
          </Box>
          <Grid
            container
            rowGap={{ xs: 6, lg: 0 }}
            spacing={{ xs: 0, sm: 4, lg: 6 }}
            sx={{ padding: { xs: "50px 0px", lg: "350px 100px" } }}
          >
            {data.stepsData.map((item, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                key={index}
                sx={cardStyle}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    border: "1px solid rgba(189, 73, 24, .38)",
                    padding: 1,
                    width: 133,
                    height: 133,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid rgba(189, 73, 24, 0.6)",
                      backgroundColor: "#BD4918",
                      height: "100%",
                      width: "100%",
                      padding: "6px",
                    }}
                  >
                    <Box
                      component={"span"}
                      sx={{
                        borderRadius: "50%",
                        border: "1px solid rgba(189, 73, 24, .38)",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 1,
                        fontSize: 14,
                        backgroundColor: "#fff",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: 40,
                          //   maxWidth: "100%",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className="descriptionBox" sx={textDescriptionBox}>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: "#c75425",
                      pb: { xs: 1, md: 2 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#666",
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
    </>
  );
};

export default DevelopmentProcess;
const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: { xs: "start", lg: "center" },
  flexDirection: { xs: "column", lg: "row" },
  rowGap: { xs: 2, lg: 0 },
  width: "fit-content",
  position: "relative",
  ":before": {
    display: { xs: "none", lg: "block" },
    content: "''",
    borderRadius: "50%",
    backgroundColor: "rgba(189, 73, 24, .6)",
    width: 13,
    height: 13,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "calc(100% + 82px)",
  },
  ":after": {
    display: { xs: "none", lg: "block" },
    content: "''",
    backgroundColor: "rgba(189, 73, 24, .6)",
    width: "1px",
    height: 82,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "100%",
  },
  ":nth-child(2n+0)": {
    ".descriptionBox": {
      bottom: "calc(100% + 150px)",
      top: "unset",
    },
    ":before": {
      bottom: "calc(100% + 82px) !important",
      top: "unset",
    },
    ":after": {
      bottom: "100% !important",
      top: "unset",
    },
  },
};
const textDescriptionBox = {
  textAlign: "center",
  position: { xs: "static", lg: "absolute" },
  top: "calc(110% + 100px)",
  left: "50%",
  transform: { xs: "none", lg: "translateX(-50%)" },
  width: { xs: "100%", lg: 232 },
};
const titleStyle = {
  fontSize: { xs: 26, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
};
