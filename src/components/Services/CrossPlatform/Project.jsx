import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid2 as Grid,
  Button,
} from "@mui/material";

const Project = ({data}) => {

  return (
    <Box sx={{ padding: "50px", backgroundColor: "#c94c16" }}>
      <Typography
        // variant="h4"
        align="center"
        sx={{
          fontWeight: 600,
          color: "#fff",
          fontSize: { xs: "18px", sm: "20px", md: "30px" },
        }}
      >
        {data.mainHeading}
      </Typography>

      <Typography
        // variant="h4"
        align="center"
        sx={{
          fontWeight: 600,
          color: "#fff",
          fontSize: { xs: "26px", sm: "40px", md: "62px" },
        }}
      >
        {data.secondHeading}
      </Typography>

      <Typography
        // variant="h4"
        align="center"
        sx={{
          fontWeight: 300,
          color: "#fff",
          fontSize: { xs: "16px", sm: "18px", md: "24px" },
        }}
      >
        {data.description}
      </Typography>

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d9652b",
            color: "#fff",
            padding: "15px 20px",
            fontSize: "16px",
            mr: 2,
            borderRadius: "50px", // Rounded button
            ":hover": {
              backgroundColor: "#ffca76",
              color: "#000",
            },
          }}
        >
          {data.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Project;
