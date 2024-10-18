import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import npl from "../../../assets/img/npl.png";
import healthCare from "../../../assets/img/healthCare.png";
import dataEngineer from "../../../assets/img/dataEngineer.png";
import generativeAi from "../../../assets/img/generativeAi.png";
import recommendationSystem from "../../../assets/img/recommendationSystem.png";
const AiTool = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography
                  component={"h1"}
                  sx={{
                    fontSize: { xs: "22px", sm: "28px", md: "36px" },
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                  }}
                >
                  AI Tools Simplifying
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "22px", sm: "28px", md: "36px" },
                    fontWeight: 800,
                    color: "#c75425",
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Business Complexities
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "19px" },
                    color: "#000",
                    marginTop: "25px",
                    width: "fit-content",
                  }}
                >
                  Put your challenges to rest with our expertise in developing
                  advanced AI solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Grid container spacing={{xs: 0, md: 5}} rowGap={{xs: 5, md: 0}}>
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    borderRight: "2px solid rgba(0, 0, 0, 0.11)",
                    borderBottom: "2px solid rgba(0, 0, 0, 0.11)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={npl}
                      alt="Consulting Service"
                      style={{ width: "35%", height: "35%" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1.2rem" },
                      color: "#000",
                      marginTop: "25px",
                      padding: "0 50px",
                      // width: "fit-content",
                    }}
                  >
                    Natural Language Processing for E-Commerce
                  </Typography>
                </Grid>
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  sx={{
                    borderRight: "2px solid rgba(0, 0, 0, 0.11)",
                    borderBottom: "2px solid rgba(0, 0, 0, 0.11)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={healthCare}
                      alt="Consulting Service"
                      style={{ width: "35%", height: "35%" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={{xs: 0, md: 5}} rowGap={{xs: 5, md: 0}}>
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{
                borderRight: "2px solid rgba(0, 0, 0, 0.11)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={recommendationSystem}
                  alt="Consulting Service"
                  style={{ width: "35%", height: "35%" }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{
                borderRight: "2px solid rgba(0, 0, 0, 0.11)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={generativeAi}
                  alt="Consulting Service"
                  style={{ width: "35%", height: "35%" }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 3 }}
              sx={{
                borderRight: "2px solid rgba(0, 0, 0, 0.11)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={dataEngineer}
                  alt="Consulting Service"
                  style={{ width: "35%", height: "35%" }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AiTool;
