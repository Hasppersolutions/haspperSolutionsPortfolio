import React from "react";
import { Grid2 as Grid, Typography, Box, Container } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OutSourcing = ({ data }) => {

  //Animation

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outSourcingTitleBox",
        start: "top 98%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".outSourcingTitleBox p", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <Box sx={{ padding: "40px 0px", backgroundColor: "#f5f5f5" }}>
      <Container>
        <Box
          className="headingBoxWidth outSourcingTitleBox"
          sx={{ mt: { xs: "20px", md: "50px" }, marginBottom: "35px" }}
        >
          <Typography
            sx={{
              fontSize: { xs: 26, sm: 32, md: 39 },
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {data.firstHeading}
          </Typography>
          <Typography
            sx={[
              {
                fontSize: { xs: 26, sm: 32, md: 39 },
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "center",
              },
              { color: "#c75425" },
            ]}
          >
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
          rowGap={{ xs: 2, md: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          {data.cardData.map((item, index) => (
            <Grid
              container
              sx={{
                height: { xs: "100%", md: "100", lg: "100" },
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                key={index}
                sx={{
                  display: "flex",
                  textAlign: { xs: "center", md: "end" },
                  justifyContent: { xs: "start" },
                  alignContent: { xs: "start" },
                  marginBottom: { xs: "16px", md: 0 },
                }}
              >
                <Box
                  sx={{
                    boxShadow: { xs: "0 0 2px 0 #00000040", md: 0 },
                    borderBottom: { xs: 0, md: "1px solid #dfdfdf" },
                    borderRight: {
                      xs: 0,
                      md: "1px solid #dfdfdf",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "end" },
                    padding: { xs: "20px 10px 20px", md: "35px 50px 15px" },
                    borderRadius: {xs: 2, md: 0}
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "2px solid #BD4918",
                      height: "91px",
                      width: "91px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0px 10px",
                      flexShrink: 0,
                      marginBottom: "15px",
                    }}
                  >
                    <img src={item[0].image} alt={item[0].text} style={{height:'100%',width:'100%',objectFit:'contain'}}/>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { sx: "18px", sm: "26px" },
                      marginBottom: "10px",
                    }}
                  >
                    {item[0].heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: { sx: "14px", sm: "16px" },
                    }}
                  >
                    {item[0].description}
                  </Typography>
                </Box>
              </Grid>
              {item[1] && (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={index}
                  sx={{
                    display: "flex",
                    alignContent: { xs: "center", md: "end" },
                    textAlign: { xs: "center", md: "start" },
                    justifyContent: "start",
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: { xs: "0 0 2px 0 #00000040", md: 0 },
                      borderBottom: { xs: 0, md: "1px solid #dfdfdf" },
                      borderRight: { xs: 0 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", md: "start" },
                      padding: { xs: "20px 10px 20px", md: "35px 50px 15px" },
                      borderRadius: {xs: 2, md: 0}
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "50%",
                        border: "2px solid #BD4918",
                        height: "91px",
                        width: "91px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0px 10px",
                        flexShrink: 0,
                        marginBottom: "15px",
                      }}
                    >
                      <img src={item[1].image} alt={item[1].text} style={{height:'100%',width:'100%',objectFit:'contain'}}/>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { sx: "18px", sm: "26px" },
                        marginBottom: "10px",
                      }}
                    >
                      {item[1].heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: { sx: "14px", sm: "16px" },
                      }}
                    >
                      {item[1].description}
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OutSourcing;
