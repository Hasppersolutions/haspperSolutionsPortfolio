import React from "react";
import { Grid2 as Grid, Typography, Box, Container } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeatureSection = ({ data }) => {
  //Animation

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featureSectionTitleBox",
        start: "top 98%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".featureSectionTitleBox h6", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });
  });

  return (
    <>
      <Box
        sx={{
          marginBottom: "20px",
          backgroundColor: "#ffffff",
          padding: "50px 0px 50px 0px",
        }}
      >
        <Box
          className="scroll-down-icon"
          sx={{
            textAlign: "center",
            width: "fit-content",
            margin: "auto",
            marginTop: "2px",
          }}
        >
          ⏷
        </Box>
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
                        <img
                          src={item.image}
                          alt={item.text}
                          style={{
                            width: "70%",
                            height: "70%",
                            objectFit: "contain",
                          }}
                        />
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
                className="featureSectionTitleBox"
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
                {data.mainHeading && (
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
                )}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    marginBottom: "10px",
                    marginTop: "-30px",
                    lineHeight: 1.1,
                  }}
                >
                  {data.subHeading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "1rem" }}
                  dangerouslySetInnerHTML={{
                    __html: data?.description?.split("\n")?.join("<br/>"),
                  }}
                />
                {/* {data.description} */}
                {/* </Typography> */}
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
