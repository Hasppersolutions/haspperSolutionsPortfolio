import React from "react";
import { ProjectEstimatePage } from "../components/ProjectEstimate/ProjectEstimateIntroPage";
import { Box } from "@mui/material";

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
        </>
    );
};

export default GetProjectEstimate;
