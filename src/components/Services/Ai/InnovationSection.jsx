import { Box, Container, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const InnovationSection = ({ data }) => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".innovation-main-box",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".innovation-main-box .heading", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <>
      <Box
        className="innovation-main-box"
        sx={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: {
            xs: 500,
            sm: 500,
            md: 500,
          },
          alignContent: "center",
          py: { xs: 5, sm: 10 },
          position: "relative",
          // To make it the relative parent for StatsSection
          // marginTop: { xs: "85px", xl: "95px" },
        }}
      >
        <Box
          sx={{
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
            color: "#fff",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Typography
            className="heading"
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "50px" },
              fontWeight: 700,
              lineHeight: 1,
              paddingBottom: "15px",
            }}
          >
           {data.firstHeading}
          </Typography>
          <Typography
            className="heading"
            sx={{
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
            }}
          >
            {data.description}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default InnovationSection;
