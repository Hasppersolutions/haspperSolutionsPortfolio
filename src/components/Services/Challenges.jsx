import { Box, Container, Typography } from "@mui/material";
import React from "react";
import haspperLogo from "../../assets/img/haspper-logo.png";
import leftCurve from "../../assets/img/Services/left-curve.png";
import rightCurve from "../../assets/img/Services/right-curve.png";

const Challenges = ({data}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
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
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "50px 0px", md: "350px 0px" },
            }}
          >
            <Box
              sx={{
                padding: 3,
                border: "15px solid #BD4918",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              {/* left curve */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  bottom: -209,
                  right: 108,
                  width: 200,
                  height: 500,
                  zIndex: 0,
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 300,
                  }}
                >
                  {data.stepsData
                    .filter((x) => x.side == "left")
                    .map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: 4,
                          display: "flex",
                          alignItems: "center",
                          columnGap: 2,
                          width: "100%",
                          position: "absolute",
                          left: item.position.left,
                          top: item.position.top,
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            boxShadow: "0px 1px 17px 0px #00000040",
                            flexShrink: 0,
                            order: 3,
                            fontSize: 20,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.id}
                          {/* <img
                            src={item.icon}
                            alt={index}
                            style={{ width: 30, pointerEvents: "none" }}
                          /> */}
                        </Box>
                        <Typography
                          sx={{ color: "#000", fontSize: 18, order: 2 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    ))}
                </Box>
                <img
                  src={leftCurve}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                />
              </Box>
              {/* right curve */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  top: -209,
                  left: 103,
                  width: 200,
                  height: 500,
                  zIndex: 0,
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 300,
                  }}
                >
                  {data.stepsData
                    .filter((x) => x.side == "right")
                    .map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: 2,
                          width: "100%",
                          position: "absolute",
                          left: item.position.left,
                          top: item.position.top,
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            boxShadow: "0px 1px 17px 0px #00000040",
                            flexShrink: 0,
                            fontSize: 20,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.id}
                          {/* <img
                            src={item.icon}
                            alt={index}
                            style={{ width: 30, pointerEvents: "none" }}
                          /> */}
                        </Box>
                        <Typography sx={{ color: "#000", fontSize: 18 }}>
                          {item.title}
                        </Typography>
                      </Box>
                    ))}
                </Box>
                <img
                  src={rightCurve}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  boxShadow: " 0px 1px 25.5px 0px #D9D9D9ED",
                  width: { xs: 140, md: 177 },
                  height: { xs: 140, md: 177 },
                  userSelect: "none",
                }}
              >
                <img
                  src={haspperLogo}
                  alt="Haspper"
                  style={{ width: "60%", pointerEvents: "none" }}
                />
              </Box>
            </Box>
          </Box>
          {/* Mobile section */}
          <Box
            sx={{
              rowGap: 3,
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              mt: 4,
              pb: "50px",
            }}
          >
            {data.stepsData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  columnGap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    boxShadow: "0px 1px 17px 0px #00000040",
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.id}
                  {/* <img
                            src={item.icon}
                            alt={index}
                            style={{ width: 30, pointerEvents: "none" }}
                          /> */}
                </Box>
                <Typography sx={{ color: "#000", fontSize: 18 }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Challenges;

const titleStyle = {
  fontSize: { xs: 26, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
};
