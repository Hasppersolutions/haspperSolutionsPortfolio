import React from "react";
import { Grid2 as Grid, Typography, Box, Divider } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DividerComponent = ({ data }) => {
  //Animation

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dividerComponentBox",
        start: "top 98%",
        end: "bottom 70%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(".dividerComponentTitle", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <Box
      className="headingBoxWidth dividerComponentBox"
      sx={{ mt: { xs: "20px", md: "50px" } }}
    >
      <Typography className="dividerComponentTitle" sx={titleStyle}>
        {data.firstHeading}
      </Typography>
      <Typography
        className="dividerComponentTitle"
        sx={[titleStyle, { color: "#c75425" }]}
      >
        {data.secondHeading}
      </Typography>

      {data.description && (
        <Typography
          className="dividerComponentTitle"
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

      {/* Middle Divider (Horizontal between title and content) */}
      <Divider
        sx={{ margin: "20px 0", borderColor: "#e0e0e0", borderBottomWidth: 2 }}
      />

      <Box sx={{ mt: { xs: "60px", sm: "87px" }, pb: "27px" }}>
        {data.cardData.map(
          (item, index) =>
            index % 2 === 0 && (
              <React.Fragment key={index}>
                <Grid container spacing={2} alignItems="center">
                  {/* Card Row Wrapper */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {/* First Card */}
                    <Box sx={{ flex: 1 }}>
                      <Box sx={cardStyle}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data.cardData[index].image}
                            alt={data.cardData[index].title}
                            style={{ height: 88, marginBottom: "16px" }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: 22, sm: 26 },
                              fontWeight: 700,
                              pb: "11px",
                            }}
                          >
                            {data.cardData[index].title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 16,
                              color: "#666",
                              textAlign: "center",
                            }}
                          >
                            {data.cardData[index].description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Vertical Divider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        borderRightWidth: 2,
                        borderColor: "#dfdfdf",
                        opacity: "0.7",
                        height: "360px",
                        mx: 2,
                      }}
                    />

                    {/* Second Card */}
                    {data.cardData[index + 1] && (
                      <Box sx={{ flex: 1 }}>
                        <Box sx={cardStyle}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={data.cardData[index + 1].image}
                              alt={data.cardData[index + 1].title}
                              style={{ height: 88, marginBottom: "16px" }}
                            />
                            <Typography
                              sx={{
                                fontSize: { xs: 22, sm: 26 },
                                fontWeight: 700,
                                pb: "11px",
                              }}
                            >
                              {data.cardData[index + 1].title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 16,
                                color: "#666",
                                textAlign: "center",
                              }}
                            >
                              {data.cardData[index + 1].description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* Horizontal Divider after each row */}
                <Divider
                  sx={{
                    margin: "20px 0",
                    borderColor: "#e0e0e0",
                    borderBottomWidth: 2,
                    opacity: "0.7",
                  }}
                />
              </React.Fragment>
            )
        )}
      </Box>
    </Box>
  );
};

export default DividerComponent;

const titleStyle = {
  fontSize: { xs: 26, sm: 32, md: 39 },
  fontWeight: 700,
  lineHeight: 1.2,
  textAlign: "center",
};

const cardStyle = {
  display: "flex",
  alignItems: "center", // Center image and content vertically
  flexDirection: "column", // Stack image on top of content
  boxShadow: "none",
  border: "none",
  backgroundColor: "#f5f5f5",
  padding: "32px",
  height: "100%",
  textAlign: "center", // Center content
  rowGap: "16px", // Add gap between elements
};
