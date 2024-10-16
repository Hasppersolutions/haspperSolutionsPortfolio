import React from "react";
import Banner from "../components/WhyHaspper/Banner";
import { Box } from "@mui/material";
import Mission from "../components/Homepage/Mission";

const WhyHaspper = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#9D9494",
          height: "100%",
        }}
      >
        <Banner />
        <Mission/>
      </Box>
    </>
  );
};

export default WhyHaspper;
