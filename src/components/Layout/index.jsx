import React from "react";
import { NavBar } from "./NavBar";
import { Box } from "@mui/material";
import Footer from "./Footer";

const Index = ({children}) => {
  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: { xs: "85px", xl: "95px" } }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Index;
