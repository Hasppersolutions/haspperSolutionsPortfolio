import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
const AiTool = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          margin: "50px 0px",
        }}
      >
        <Container>
          <Grid container rowGap={{ xs: 5, sm: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: { xs: 250, sm: 300 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
                    {data.heading}
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
                    {data.subHeading}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "19px" },
                      color: "#000",
                      marginTop: "25px",
                      width: "fit-content",
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container rowGap={{ xs: 2, md: 0 }}>
                {data?.uppeCardData.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box
                      sx={{
                        borderRight: {
                          sm: "2px solid rgba(0, 0, 0, 0.11)",
                          md: "2px solid rgba(0, 0, 0, 0.11)",
                        },
                        borderBottom: {
                          sm: "2px solid rgba(0, 0, 0, 0.11)",
                          md: "2px solid rgba(0, 0, 0, 0.11)",
                        },
                        boxShadow: {
                          xs: "0 1px 4px 0 rgba(0, 0, 0, .16)",
                          sm: "none",
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        position: "relative",
                        height: { xs: 250, sm: 300 },
                        overflow: "hidden",
                        ":hover": {
                          ".overLayBox": {
                            opacity: 1,
                            top: 0,
                            transition: "all 400ms cubic-bezier(0, 0, .2, 1)",
                          },
                        },
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="Consulting Service"
                            style={{ width: "80px" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "18px" },
                            color: "#c75425",
                            marginTop: "15px",
                            textAlign: "center",
                          }}
                        >
                          {item.text}
                        </Typography>
                        <Box
                          className="overLayBox"
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "#c75425",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 25px 25px",
                            opacity: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: { xs: 400, sm: 400 },
                              color: "#ffffff",
                            }}
                          >
                            {item.hoverText}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            rowGap={{ xs: 2, sm: 0 }}
            sx={{ marginTop: { xs: 2, md: 0, sm: 0 } }}
          >
            {data?.belowCardData?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    borderRight: {
                      sm: "2px solid rgba(0, 0, 0, 0.11)",
                      md: "2px solid rgba(0, 0, 0, 0.11)",
                    },
                    borderBottom: {
                      sm: "2px solid rgba(0, 0, 0, 0.11)",
                      md: "2px solid rgba(0, 0, 0, 0.11)",
                    },
                    boxShadow: {
                      xs: "0 1px 4px 0 rgba(0, 0, 0, .16)",
                      sm: "none",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    position: "relative",
                    height: { xs: 250, sm: 300 },
                    overflow: "hidden",
                    ":hover": {
                      ".overLayBox": {
                        opacity: 1,
                        top: 0,
                        transition: "all 400ms cubic-bezier(0, 0, .2, 1)",
                      },
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt="Consulting Service"
                        style={{ width: "80px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px" },
                        color: "#c75425",
                        marginTop: "15px",
                        textAlign: "center",
                      }}
                    >
                      {item.text}
                    </Typography>
                    <Box
                      className="overLayBox"
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#c75425",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 25px 25px",
                        opacity: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: { xs: 400, sm: 400 },
                          color: "#ffffff",
                        }}
                      >
                        {item.hoverText}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AiTool;
