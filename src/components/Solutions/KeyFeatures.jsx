import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const KeyFeatures = ({ data, gridContainerClass }) => {
  //Animation

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".keyFeatureBox",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".featureTitle", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <>
      <Box
        className="keyFeatureBox"
        sx={{
          height: "100%",
        }}
      >
        <Box
          className="scroll-down-icon"
          sx={{
            textAlign: "center",
            width: "fit-content",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          ⏷
        </Box>
        <Container>
          <Box className="headingBoxWidth">
            <Typography
              className="featureTitle"
              sx={{
                fontSize: { xs: 26, sm: 32, md: 39 },
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              {data.mainHeading}
            </Typography>
            <Typography
              className="featureTitle"
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
            className={gridContainerClass}
            container
            sx={{ margin: "50px auto" }}
            rowGap={{ xs: 4, md: 0 }}
            columnSpacing={{ xs: 0, md: 2 }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Grid container rowGap={{ xs: 4, md: 2 }}>
                {data.leftSideData?.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "start", lg: "end" },
                        alignContent: "center",
                        color: "#c75425",
                        fontSize: "20px",
                        fontWeight: 600,
                        paddingBottom: "12px",
                        textAlign: "end",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "start", lg: "end" },
                        alignContent: "center",
                        textAlign: { xs: "start", lg: "end" },
                        color: "#666666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ xs: 0, sm: 0, md: 0, lg: 4 }}
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  maxWidth: 492,
                  maxHeight: 420,
                }}
              >
                <img
                  src={data.image}
                  alt="image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4 }}>
              <Grid container rowGap={{ xs: 4, md: 2 }}>
                {data.rightSideData?.map((item, index) => (
                  <Grid size={{ xs: 12 }} key={index}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignContent: "center",
                        color: "#c75425",
                        fontSize: "20px",
                        fontWeight: 600,
                        paddingBottom: "12px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "start",
                        color: "#666666",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default KeyFeatures;
