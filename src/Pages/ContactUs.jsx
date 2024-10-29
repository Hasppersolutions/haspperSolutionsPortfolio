import React from "react";
import { ContactPage } from "../components/Contact/ContactPage";
import { Box } from "@mui/material";
import Mailus from "../components/Homepage/Mailus";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
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
        <Mailus/>
        <ServicesAndStaffing/>
      </Box>
    </>
  );
};

export default ContactUs;
