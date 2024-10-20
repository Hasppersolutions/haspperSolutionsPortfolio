import React from "react";
import { Box } from "@mui/material";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";
import ServiceBackgroudImage from "../assets/img/ServiceBackgroudImage.png";
import AiBannerIcon from "../assets/img/AiBannerIcon.png";
import AiTool from "../components/Services/Ai/AiTool";
import npl from "../assets/img/npl.png";
import healthCare from "../assets/img/healthCare.png";
import dataEngineer from "../assets/img/dataEngineer.png";
import generativeAi from "../assets/img/generativeAi.png";
import recommendationSystem from "../assets/img/recommendationSystem.png";
import InnovationSection from "../components/Services/Ai/InnovationSection";
import AiFeature from "../assets/img/aiFeature.png";

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
        <InnovationSection />
        <AiDescription data={aiDescriptionData} />
        <AiTool data={toolData} />
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
};
const aiDescriptionData = {
  firstHeading: "Unleashing Business Potential with",
  secondHeading: "Tailor-Made Artificial Intelligence Development Services",
  description: `With OnGraph’s cutting-edge AI solutions, you can increase operational efficiency, uncover untapped opportunities, and achieve a competitive advantage. We are your one-stop shop for any AI requirements.<br />
  Discover the power of OnGraph’s intelligent, secured, and highly personalized artificial intelligence services. Natural language processing for faster processes, machine learning for insightful decision-making, computer vision for enhanced customer experience, and deep learning for discovering new opportunities can all help your organization.<br />
  Besides offering Development in AI across diverse domains, we specialize in artificial intelligence game development, and software development powered by AI, and provide top-tier artificial intelligence automation consulting. Our AI technologies go beyond automation, allowing you to create and excel.<br />
  As a leading Artificial Intelligence Company, we cover all bases, from AI consulting and development of Artificial Intelligence to Integration, Maintenance, Generative AI, and AI Data Engineering. Trust our AI consulting experts to guide you through the AI transformation process. Choose OnGraph for an AI-powered, smarter, faster, and genuinely revolutionary corporate future.`,
  button: "GET FREE DEMO",
  image: AiFeature,
};
const toolData = {
  heading: "AI Tools Simplifying",
  subHeading: "Business Complexities",
  description:
    "Put your challenges to rest with our expertise in developing advanced AI solutions.",
  uppeCardData: [
    {
      image: npl,
      text: "Natural Language Processing for E-Commerce",
      hoverText:
        "Maximize consumer engagement with our NLP technology, designed to boost the e-commerce experience.",
    },
    {
      image: healthCare,
      text: "Computer Vision for Healthcare",
      hoverText:
        "With our AI-powered computer vision solutions, enhance patient care and diagnosis accuracy.",
    },
  ],
  belowCardData: [
    {
      image: recommendationSystem,
      text: "Recommendation Engine for Media",
      hoverText:
        "Grow user engagement with personalized content using our AI-based recommendation algorithms.",
    },
    {
      image: generativeAi,
      text: "Generative AI for Content Creation",
      hoverText:
        "Drive uniqueness and creativity in content with our advanced generative AI systems.",
    },
    {
      image: dataEngineer,
      text: "Data Engineering for Market Research",
      hoverText:
        "We structure and organize your data for insightful and data-driven decision-making. Harness the power of data for an evidence-based business strategy.",
    },
  ],
};
