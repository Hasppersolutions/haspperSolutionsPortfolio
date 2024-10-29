import React from "react";
import Banner from "../components/WhyHaspper/Banner";
import { Box } from "@mui/material";
import Mission from "../components/Homepage/Mission";
import {Contact} from "../components/Homepage/Contact"
import Mailus from "../components/Homepage/Mailus";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
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
        <Contact/>
        <Mailus/>
        <ServicesAndStaffing/>
      </Box>
    </>
  );
};

export default WhyHaspper;
