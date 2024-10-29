import React, { useState } from "react";
import { ContactIntro } from "./ContactIntro";
import { Contact } from "../Homepage/Contact";
import { Box } from "@mui/material";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";

export const ContactPage = () => {
  return (
    <>
      <ContactIntro />
      <Contact />
      <Box
        sx={{
          backgroundColor: "#fff",
          mt: {xs: 5, sm: 8},
        }}
      >
        <ServicesAndStaffing />
      </Box>
    </>
  );
};
