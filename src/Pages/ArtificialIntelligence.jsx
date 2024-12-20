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
import innovationBackImg from "../assets/img/innovationBackImg.png";
import Review from "../components/Homepage/Review";
import Certification from "../components/Homepage/Certification";
import Mailus from "../components/Homepage/Mailus";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
import Challenges from "../components/Services/Challenges";
import WaveLine from "../components/WaveLine.jsx";
import Technologies from "../components/Services/MobileAppDevelopment/Technologies.jsx";
import mobileAppConsult from "../assets/img/Services/mobile-app-consulting.png";
import { Contact } from "../components/Homepage/Contact";
const ArtificialIntelligence = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Banner data={bannerTextData} />
        <AiDescription data={aiDescriptionData} />
        <WaveLine />
        <Challenges data={challengesData} />
        <InnovationSection data={innovationSectionData} />
        <AiTool data={toolData} />
        <WaveLine />
        <Technologies data={technologiesData} />
        <Certification />
        <Review />
        <WaveLine />
        <Contact />
        <Mailus />
        <ServicesAndStaffing />
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
  description: `With Haspper’s cutting-edge AI solutions, you can increase operational efficiency, uncover untapped opportunities, and achieve a competitive advantage. We are your one-stop shop for any AI requirements.<br />
  Discover the power of Haspper’s intelligent, secured, and highly personalized artificial intelligence services. Natural language processing for faster processes, machine learning for insightful decision-making, computer vision for enhanced customer experience, and deep learning for discovering new opportunities can all help your organization.<br />
  Besides offering Development in AI across diverse domains, we specialize in artificial intelligence game development, and software development powered by AI, and provide top-tier artificial intelligence automation consulting. Our AI technologies go beyond automation, allowing you to create and excel.<br />
  As a leading Artificial Intelligence Company, we cover all bases, from AI consulting and development of Artificial Intelligence to Integration, Maintenance, Generative AI, and AI Data Engineering. Trust our AI consulting experts to guide you through the AI transformation process. Choose Haspper for an AI-powered, smarter, faster, and genuinely revolutionary corporate future.`,
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
const innovationSectionData = {
  firstHeading: " Haspper, fueling innovation with pioneering AI solutions",
  description:
    "With our robust, secure, and comprehensive AI tools, we create synergy between challenges and solutions. Haspper professionals simplify the difficulty by providing capabilities to manage AI processes, track KPIs, generate and customize AI algorithms, and ensure seamless integration and increased security. Improve your business with our skillfully created AI services.",
  backgroundImage: innovationBackImg,
};
// Keep 6 max Steps data
const challengesData = {
  firstHeading: "Solutions Conquering the Toughest",
  secondHeading: "AI Challenges",
  description:
    "Are operational inefficiencies impeding your progress? What are the roadblocks to transforming your company? With our technical skills, we can help you eliminate essential business obstacles and pain areas. Utilize powerful, comprehensive, user-friendly AI technologies and solutions to catapult your company to new heights.",
  stepsData: [
    {
      id: 1,
      icon: "",
      title: "Managing projects internally",
      position: {
        top: -24,
        left: -20,
      },
      side: "right",
    },
    {
      id: 2,
      icon: "",
      title: "Conducting and distributing surveys smoothly",
      position: {
        top: 180,
        left: 144,
      },
      side: "right",
    },
    {
      id: 3,
      icon: "",
      title: "Gathering the right respondent to make the survey worthwhile",
      position: {
        top: 450,
        left: 76,
      },
      side: "right",
    },
    {
      id: 4,
      icon: "",
      title: "Managing projects internally",
      position: {
        top: -36,
        left: -170,
      },
      side: "left",
    },
    {
      id: 5,
      icon: "",
      title: "Conducting and distributing surveys smoothly",
      position: {
        top: 209,
        left: -256,
      },
      side: "left",
    },
    {
      id: 6,
      icon: "",
      title: "Gathering the right respondent to make the survey worthwhile",
      position: {
        top: 452,
        left: -81,
      },
      side: "left",
    },
  ],
};

const technologiesData = {
  firstHeading: "Next-Gen Artificial Intelligence for",
  secondHeading: "AI-Driven Business Transformation",
  description:
    "Leverage our extensive AI services for swift, reliable, and transformational business outcomes.",
  technologies: [
    {
      title: "AI Consultinga",
      description:
        "With our specialized AI consulting services, you can navigate the challenging AI world. We plan and direct your AI transformation to maximize commercial benefit.",
      icon: mobileAppConsult,
    },
    {
      title: "AI Development",
      description:
        "We create customized AI solutions tailored to your specific business requirements, resulting in increased productivity and decision-making",
      icon: mobileAppConsult,
    },
    {
      title: "AI Integration",
      description:
        "Our services ensure seamless integration of AI solutions within your existing systems. Experience a hassle-free transition and enriched operational workflow.",
      icon: mobileAppConsult,
    },
    {
      title: "Generative AI",
      description:
        "We assist in the creation of original data and content with advanced Generative AI. Empower your business with innovative AI-driven content creation.",
      icon: mobileAppConsult,
    },
    {
      title: "Data Engineering",
      description:
        "We structure and organize your data for insightful and data-driven decision-making. Harness the power of data for an evidence-based business strategy.",
      icon: mobileAppConsult,
    },
  ],
};
