import React from "react";
import { ContactPage } from "../components/Contact/ContactPage";
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
        <ContactPage />
      </Box>
    </>
  );
};

export default ContactUs;
