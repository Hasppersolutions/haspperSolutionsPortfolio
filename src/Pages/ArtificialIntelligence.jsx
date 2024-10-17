import React from "react";
import { Box } from "@mui/material";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";
import ServiceBackgroudImage from "../assets/img/ServiceBackgroudImage.png";
import AiBannerIcon from "../assets/img/AiBannerIcon.png";

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
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiBannerIcon,
  bottomHeading:
    "Step into the future of business with our comprehensive Artificial Intelligence Solutions, propelling you toward unrivaled success.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
}
