import { Box, Container, Typography } from "@mui/material";

const InnovationSection = ({data}) => {
  return (
    <>
      <Box
              sx={{
                height: {
                  xs: "100%",
                  sm: "calc(100vh - 85px)",
                  xl: "calc(100vh - 95px)",
                },
                alignContent: "center",
                py: { xs: 5, sm: 10 },
                position: "relative", // To make it the relative parent for StatsSection
                // marginTop: { xs: "85px", xl: "95px" },
                background:
                  "linear-gradient(90.21deg, rgb(87, 34, 11) -5.91%, rgba(189, 73, 24, .6) 88%)",
              }}>
        <Box
                  sx={{
                    backgroundImage: `url(${data.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    bottom: 0,
                    right: "auto",
                    width: "100%",
                  }}>
          <Container>
            <Typography>
              OnGraph, fueling innovation with pioneering AI solutions
            </Typography>
            <Typography>
              With our robust, secure, and comprehensive AI tools, we create
              synergy between challenges and solutions. OnGraph professionals
              simplify the difficulty by providing capabilities to manage AI
              processes, track KPIs, generate and customize AI algorithms, and
              ensure seamless integration and increased security. Improve your
              business with our skillfully created AI services.
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default InnovationSection;
const data = {
  backgroundImage = 
}
