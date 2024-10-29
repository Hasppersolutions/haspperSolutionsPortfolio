import React from "react";
import { ProjectEstimatePage } from "../components/ProjectEstimate/ProjectEstimateIntroPage";
import { Box } from "@mui/material";
import { Contact } from "../components/Homepage/Contact";
import Mailus from "../components/Homepage/Mailus";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
const GetProjectEstimate = () =>{
    return (
        <>
        <Box
        sx={{
          backgroundColor: "#9D9494",
          height: "100%",
        }}
        >
        <ProjectEstimatePage />
        </Box>
        <Contact/>
        <Mailus/>
        <ServicesAndStaffing/>
        </>
    );
};

export default GetProjectEstimate;
