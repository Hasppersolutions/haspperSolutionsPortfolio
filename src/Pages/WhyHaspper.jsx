import React from "react";
import Banner from "../components/WhyHaspper/Banner";
import { Box } from "@mui/material";

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
      </Box>
    </>
  );
};

export default WhyHaspper;
