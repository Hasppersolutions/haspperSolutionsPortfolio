import React from "react";
import { Typography, Box, Container } from "@mui/material";

const Stats = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", lg: "row" },
          pt: "50px",
          pb: "100px",
          columnGap: 12,
          rowGap: { xs: 6, lg: 0 },
        }}
      >
        <Box>
          <Typography sx={textStyle}>Numbers</Typography>
          <Typography sx={[textStyle, { color: "#c75425" }]}>
            don't lie
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            rowGap: { xs: 4, md: 0 },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: { sm: "wrap", md: "nowrap" },
            columnGap: { sm: 4, md: 0 },
            width: { xs: "100%", md: "auto" },
            position: "relative",
          }}
        >
          {data.cardData.map((item, index) => (
            <Box sx={cardStyle} key={index}>
              <Typography
                sx={{
                  height:200
                }}
              >
              <img src={item.icon} alt="" style={{height:"100%",width:'100%',objectFit:'contain'}} />
              </Typography>
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  py: "15px",
                }}
              >
                {item.number}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 15 },
                  color: "#333",
                  
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
const cardStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#fff",
  minHeight: 302,
  width: { xs: "100%", sm: "40%", md: 243 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "rgba(0, 0, 0, .1) 0 0 20px",
  borderRadius: 4,
  zIndex: 10,
  ":nth-child(2n+0)": {
    boxShadow: { md: "none" },
    zIndex: 0,
  },
};
const textStyle = {
  fontSize: { xs: 32, sm: 42, md: 46, lg: 50 },
  fontWeight: 700,
  lineHeight: 1.2,
};
