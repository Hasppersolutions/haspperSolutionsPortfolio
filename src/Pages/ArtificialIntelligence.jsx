import React from "react";
import { Box } from "@mui/material";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";

const ArtificialIntelligence = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Banner data={bannerTextData} />
        <AiDescription />
      </Box>
    </>
  );
};

export default ArtificialIntelligence;
const bannerTextData = {
  mainHeading: "Artificial Intelligence",
  middleHeading: "Solutions",
  bottomHeading:
    "Step into the future of business with our comprehensive Artificial Intelligence Solutions, propelling you toward unrivaled success.",
  // button: "Get Free Demo",
  // link: "link"
}
