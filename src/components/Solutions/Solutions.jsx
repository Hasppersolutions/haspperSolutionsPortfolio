import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import haspperLogo from "../../assets/img/haspper-logo.png";

const Solutions = ({ data }) => {
  return (
    <>
      <Box sx={{ pb: 10, pt: { xs: 5, md: 0 } }}>
        <Container>
          <Box
            className="headingBoxWidth"
            sx={{ pt: { xs: "20px", md: "50px" } }}
          >
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
          <Grid container sx={{ pt: { xs: 5, sm: 8 } }}>
            <Grid
              size={{ xs: 12, lg: 4 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Box
                sx={{
                  width: 328,
                  height: 328,
                  border: "2px dashed #000",
                  borderRadius: "50%",
                  padding: 6,
                  position: "relative",
                  display: { xs: "none", lg: "block" },
                }}
              >
                <Box>
                  {stepsPositionData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        width: 54,
                        height: 54,
                        fontWeight: 600,
                        boxShadow: "1px 2px 10px 0px #00000030",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: item?.top,
                        left: item?.left,
                        ":after": {
                          content: "''",
                          width: dottedLinePositionData[index]?.width,
                          height: "1px",
                          borderTop: "2px dashed #000",
                          position: "absolute",
                          top: dottedLinePositionData[index]?.top,
                          left: dottedLinePositionData[index]?.left,
                          rotate: `${dottedLinePositionData[index]?.rotate}deg`,
                        },
                      }}
                    >
                      {index + 1}
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    boxShadow: "-1px 0px 79.8px 2px #F1F1F1",
                    padding: "33px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      boxShadow: "-1px 0px 79.8px 2px #F1F1F1",
                      boxShadow: "0px 1px 25.5px 0px #D9D9D9ED",
                      border: "1px solid rgba(0, 0, 0, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={haspperLogo}
                      alt="Haspper"
                      style={{ width: "60%" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, lg: 8 }}
              sx={{ rowGap: 3, display: "flex", flexDirection: "column" }}
            >
              {data.stepsData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#363636",
                      borderRadius: "50%",
                      width: { xs: 60, sm: 80, md: 95 },
                      height: { xs: 60, sm: 80, md: 95 },
                      flexShrink: 0,
                      ":hover": {
                        backgroundColor: "#BD4918",
                        img: {
                          filter: "invert(0)",
                        },
                      },
                      img: {
                        filter: "invert(1)",
                      },
                    }}
                  >
                    <img
                      src={item?.image}
                      alt={item.name}
                      style={{ width: "60%" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={[
                        headingStyle,
                        { fontSize: 16, fontWeight: 700, mb: 0.5 },
                      ]}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={headingStyle}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Solutions;
const headingStyle = {
  fontSize: 14,
  color: "#000",
};
const stepsPositionData = [
  {
    top: -27,
    left: 137,
  },
  {
    top: 4,
    left: 239,
  },
  {
    top: 90,
    left: 293,
  },
  {
    top: 180,
    left: 294,
  },
  {
    top: 264,
    left: 240,
  },
  {
    top: 301,
    left: 137,
  },
];
const dottedLinePositionData = [
  {
    width: 260,
    rotate: -24,
    top: -41,
    left: 40,
  },
  {
    width: 135,
    rotate: -15,
    top: 0,
    left: 52,
  },
  {
    width: 80,
    rotate: -6,
    top: 19,
    left: 55,
  },
  {
    width: 80,
    rotate: 6,
    top: 33,
    left: 55,
  },
  {
    width: 140,
    rotate: 12,
    top: 52,
    left: 50,
  },
  {
    width: 264,
    rotate: 22,
    top: 89,
    left: 41,
  },
];
const titleStyle = {
  fontSize: { xs: 26, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
};
