import React from "react";
import { Grid2 as Grid, Typography, Container, Box } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Technology = ({ data }) => {

      //Animation

      useGSAP(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".technologyBox",
            start: "top 98%",
            end: "bottom 70%",
            toggleActions: "play none none reset",
          },
        });
    
        tl.from(".technologyTitle", {
          y: 100,
          opacity: 0,
          duration: 1,
        });
      });

  const renderTechItems = (items) => {
    return items?.map((item, index) => (
      <Grid
        key={index}
        size={{ xs: 6, sm: 4, md: 2.4 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(54,54,54,1) 50%)",
        }}
      >
        <Box sx={iconContainer}>
          <Box
            sx={{
              borderRadius: "50%",
              border: "4px solid #BD4918",
              width: { xs: 100, sm: 132 },
              height: { xs: 100, sm: 132 },
              padding: { xs: 1, sm: "20px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ".icons": {
                width: "100%",
              },
            }}
          >
            <img src={item} alt={"icon"} className="icons" style={{height:"100%",width:"100%",objectFit:"contain"}}/>
          </Box>
        </Box>
      </Grid>
    ));
  };

  return (
    <Box className="technologyBox" sx={{ pt: 3, pb: { xs: 8, md: 14 } }}>
      <Box
        className="scroll-down-icon"
        sx={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        ⏷
      </Box>
      <Container>
        <Typography className="technologyTitle"  sx={titleStyle}>
          Technologies <br />
          <Typography
            component={"span"}
            sx={[
              titleStyle,
              {
                color: "#BD4918",
              },
            ]}
          >
            We Use
          </Typography>
        </Typography>
        {data.map((item, index) => (
          <Box key={index}>
            <Typography
              sx={[
                sectionHeadingStyle,
                index == 0 ? { mt: "0px !important" } : "",
              ]}
            >
              {item.name}
            </Typography>
            <Grid container rowGap={{ xs: 3, sm: 6 }} justifyContent="center">
              {renderTechItems(item.imgData)}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Technology;
const iconContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  marginBottom: "50px",
  backgroundColor: "#F2F2F2",
  padding: { xs: "20px", sm: "27px" },
  width: "fit-content",
};
const sectionHeadingStyle = {
  fontSize: { xs: 32, sm: 48, md: 60, lg: 80 },
  fontWeight: 700,
  color: "rgba(0, 0, 0, 0.42)",
  textTransform: "uppercase",
  textAlign: "center",
  marginTop: { xs: "40px", md: "50px", lg: "60px" },
};
const titleStyle = {
  fontSize: { xs: 24, sm: 32, md: 39 },
  fontWeight: 700,
  textAlign: "center",
  lineHeight: 1.3,
};
