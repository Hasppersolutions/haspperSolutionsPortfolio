import React from "react";
import Features from "../../components/Services/MobileAppDevelopment/Features";
import Banner from "../../components/Services/Banner.jsx";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mobileDevelopmentRight from "../../assets/img/Services/mobile-development-right.png";
import mobileAppConsult from "../../assets/img/Services/mobile-app-consulting.png";
import Accredited from "../../components/Services/MobileAppDevelopment/Accredited.jsx";
import { Box } from "@mui/material";
import DevelopmentServices from "../../components/Services/MobileAppDevelopment/DevelopmentServices.jsx";
import Technologies from "../../components/Services/MobileAppDevelopment/Technologies.jsx";
import Industries from "../../components/Services/MobileAppDevelopment/Industries.jsx";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ.jsx";
import AiDescription from "../../components/Services/AiDescription.jsx";
import AiTool from "../../components/Services/Ai/AiTool.jsx";
import Certification from "../../components/Homepage/Certification.js";
import Review from "../../components/Homepage/Review.js";
import ContactUs from "../ContactUs.jsx";

import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing.js";
import Model from "../../components/Solution/Model.jsx";
const ArtificialIntelligence = () => {
  return (
    <>
    
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <AiTool data={toolData} />
      <Technologies data={technologiesData} />
      <Certification/>
      <Review/>
      <ServicesAndStaffing/>
      
    </>
  );
};

export default ArtificialIntelligence;


const bannerTextData = {
    mainHeading: "Artificial Intelligence",
    middleHeading: "Solutions",
    backgroundImage: ServiceBackgroudImage,
    rightImage: mobileDevelopmentRight,
    bottomHeading:
    `
    Step into the future of business with our comprehensive Artificial <br/>Intelligence Solutions, propelling you toward unrivaled success.
    ` 
   };


const technologiesData = {
  firstHeading: "Next-Gen Artificial Intelligence for",
  secondHeading: "AI-Driven Business Transformation",
  description:"Leverage our extensive AI services for swift, reliable, and transformational business outcomes.",

  technologies: [
    {
      title: "AI Consulting",
      description:
        `With our specialized AI consulting services, you can navigate the challenging AI world. We plan and direct your AI transformation to maximize commercial benefit.`,
      icon: mobileAppConsult,
    },
    {
      title: "AI Development",
      description:
      `We create customized AI solutions tailored to your specific business requirements, resulting in increased productivity and decision-making.`,
        icon: mobileAppConsult,
    },
    {
      title: "AI Integration",
      description:
        `Our services ensure seamless integration of AI solutions within your existing systems. Experience a hassle-free transition and enriched operational workflow.`,
      icon: mobileAppConsult,
    },
    {
      title: "Generative AI",
      description:
        `We assist in the creation of original data and content with advanced Generative AI. Empower your business with innovative AI-driven content creation.`,
      icon: mobileAppConsult,
    },
    {
      title: "Data Engineering",
      description:
      `We structure and organize your data for insightful and data-driven decision-making. Harness the power of data for an evidence-based business strategy.`,
       icon: mobileAppConsult,
    }
  ],
};


const aiDescriptionData = {
    firstHeading: "Unleashing Business Potential with",
    secondHeading: "Tailor-Made Artificial Intelligence <br/> Development Services",
    description: `

    With Haspper cutting-edge AI solutions, you can increase operational efficiency, uncover untapped opportunities, and achieve a competitive advantage. We are your one-stop shop for any AI requirements.

Discover the power of Haspper intelligent, secured, and highly personalized artificial intelligence services. Natural language processing for faster processes, machine learning for insightful decision-making, computer vision for enhanced customer experience, and deep learning for discovering new opportunities can all help your organization.

Besides offering Development in AI across diverse domains, we specialize in artificial intelligence game development, and software development powered by AI, and provide top-tier artificial intelligence automation consulting. Our AI technologies go beyond automation, allowing you to create and excel.

As a leading Artificial Intelligence Company, we cover all bases, from AI consulting and development of Artificial Intelligence to Integration, Maintenance, Generative AI, and AI Data Engineering. Trust our AI consulting experts to guide you through the AI transformation process.
Choose OnGraph for an AI-powered, smarter, faster, and genuinely revolutionary corporate future.

    `,
    button: "GET FREE DEMO",
    image: mobileAppConsult,
  };


  const toolData = {
    heading: "AI Tools Simplifying",
    subHeading: "Business Complexities",
    description:
      "Put your challenges to rest with our expertise in developing advanced AI solutions.",
    uppeCardData: [
      {
        image: mobileAppConsult,
        text: "Natural Language Processing for E-Commerce",
        hoverText:
          "Maximize consumer engagement with our NLP technology, designed to boost the e-commerce experience.",
      },
      {
        image: mobileAppConsult,
        text: "Computer Vision for Healthcare",
        hoverText:
          "With our AI-powered computer vision solutions, enhance patient care and diagnosis accuracy.",
      },
    ],
    belowCardData: [
        {
          image: mobileAppConsult,
          text: "Recommendation Engine for Media",
          hoverText:
            "Grow user engagement with personalized content using our AI-based recommendation algorithms.",
        },
        {
          image: mobileAppConsult,
          text: "Generative AI for Content Creation",
          hoverText:
            "Drive uniqueness and creativity in content with our advanced generative AI systems.",
        },
        {
          image: mobileAppConsult,
          text: "Data Engineering for Market Research",
          hoverText:
            "We structure and organize your data for insightful and data-driven decision-making. Harness the power of data for an evidence-based business strategy.",
        },
      ],
    };

    const ModelData = {
        firstHeading: "Our Cloud Models",
        secondHeading: "Flexibility Tailored to Your Needs",
        backgroundImage: ServiceBackgroudImage,
      
        technologies: [
          {
            title: "Big Data",
            description:
              "We integrate big data into our mobile app development services for the capturing, processing, and analysis of massive and complex data sets that assist businesses to undertake data-driven decisions.",
            icon: mobileAppConsult,
          },
          {
            title: "Blockchain",
            description:
              "Our mobile application development service team is well-versed in designing blockchain mobile apps to store and process transactions and other data securely and transparently.",
            icon: mobileAppConsult,
          },
          {
            title: "Cloud Computing",
            description:
              "As experts in mobile app development, we make the most of cloud computing to ensure that your data is secured and easily accessible from any device, at any time.",
            icon: mobileAppConsult,
          },
          {
            title: "Image Recognition",
            description:
              "AR, object identification, and facial recognition are some of the numerous applications we utilize in our mobile app development process.",
            icon: mobileAppConsult,
          },
          {
            title: "Virtual Reality (VR)",
            description:
              "We create feature-rich mobile apps that leverage VR technology, allowing immersive and engaging user experiences across various industries, from gaming and entertainment to education and the arts.",
            icon: mobileAppConsult,
          },
          {
            title: "Artificial Intelligence (AI)",
            description:
              "Our team has extensive experience incorporating AI into mobile apps to deliver customized and foresightful services to end customers.",
            icon: mobileAppConsult,
          },
          {
            title: "Smart TVs",
            description:
              "For smart Televisions, we create specialized mobile apps that permit effortless streaming and content management.",
            icon: mobileAppConsult,
          },
          {
            title: "Internet of Things (IoT)",
            description:
              "To help businesses collect and analyze data in real-time, we've integrated IoT into our mobile app development services. This allows for connecting a wide range of smart devices, sensors, and equipment.",
            icon: mobileAppConsult,
          },
          {
            title: "Wearables",
            description:
              "We are experts in creating mobile apps that can be synced with wearables like smartwatches and fitness trackers to give consumers access to real-time data and tailor their experiences to their specific needs.",
            icon: mobileAppConsult,
          },
          {
            title: "Augmented Reality (AR)",
            description:
              "Our mobile app development services incorporate AR, which superimposes digital images, sounds, and other media onto the real world to improve its usability.",
            icon: mobileAppConsult,
          },
        ],
      };   
