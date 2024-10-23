import React from "react";
import { NavBar } from "./NavBar";
import { Box } from "@mui/material";
import Footer from "./Footer";

const Index = ({children}) => {
  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: 10 }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Index;
