import React, { useState } from "react";
import { ContactIntro } from "./ContactIntro";
import { Contact } from "../Homepage/Contact";
import { Box } from "@mui/material";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import Mailus from "../../components/Homepage/Mailus";

export const ContactPage = () => {
  return (
    <>
      <ContactIntro />
      <Contact />
      <Mailus />
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
