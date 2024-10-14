import React from "react";
import {Contact} from "../components/Homepage/Contact";
import { Box } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#9D9494",
          height: "100%",
        }}
      >
        <Contact />
      </Box>
    </>
  );
};

export default ContactUs;