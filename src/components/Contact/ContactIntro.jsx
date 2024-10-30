import React from "react";
import { Box, Typography } from "@mui/material";

export const ContactIntro = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        // padding: "200px 20px 0px",
        pt: { xs: "100px", sm: "200px" },
        px: {xs: "20px", xl: "40px"},
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "auto",
      }}
    >
      <Box
        sx={{
          width: 65,
          height: 6,
          backgroundColor: "black",
          marginBottom: "50px",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      />
      <Box
        sx={{
          width: { xs: "100%", lg: "80%", xl: "70%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 24, sm: 32, md: 38, lg: 48 },
            marginBottom: "20px",
          }}
        >
          Let's Build Tomorrow Together - Contact Our IT Experts Today
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 20, md: 28 },
            fontWeight: "200",
            marginBottom: "40px",
          }}
        >
          Unlock the power of advanced technology with our dedicated IT team.
          Let's collaborate to build future-proof solutions that keep your
          business ahead of the competition.
        </Typography>
      </Box>
    </Box>
  );
};
