import React from "react";
import WaveLine from "../../WaveLine";
import { Container, Grid2 as Grid, Typography, Box } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Potential = ({ data }) => {
  //Animation
  useGSAP(() => {
    gsap.from(".titles", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".titles",
        start: "top 100%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });
    gsap.from(".dataCard", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".potentialsCardBox",
        start: "top 98%",
        end: "bottom 60%",
        toggleActions: "play none none reset",
      },
    });
  });

  return (
    <>
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
        <Box
          className="headingBoxWidth titles"
          sx={{ mt: { xs: "20px", md: "50px" } }}
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
        <Box
          className="potentialsCardBox"
          sx={{ mt: { xs: "60px", sm: "87px" }, pb: "27px" }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {data.cardData.map((item, index) => (
              <Grid className="dataCard" size={{ xs: 12, sm: 6 }} key={index}>
                <Box sx={cardStyle}>
                  <Box sx={{ mt: { xs: 0, sm: 2 } }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: 88 }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 22, sm: 26 },
                        fontWeight: 700,
                        pb: "11px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 16,
                        color: "#666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Potential;
const titleStyle = {
  fontSize: { xs: 26, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
};
const cardStyle = {
  display: "flex",
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: { xs: "column", md: "row" },
  columnGap: 6,
  boxShadow: "rgba(0, 0, 0, .1) 0 0 60px",
  padding: "32px",
  height: "100%",
  textAlign: { xs: "center", md: "start" },
  rowGap: { xs: 2, md: 0 },
};
