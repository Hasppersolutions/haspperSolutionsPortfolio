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
const Chatbot = () => {
  return (
    <>
    
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <AiTool data={toolData} />
      <Model data={ModelData} />
      <Technologies data={technologiesData} />
      <Certification/>
      <Review/>
      <ServicesAndStaffing/>
      
    </>
  );
};

export default Chatbot;


const bannerTextData = {
  mainHeading: "Cloud Computing",
  middleHeading: "Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mobileDevelopmentRight,
  bottomHeading:
  "Begin your digital transformation journey with our comprehensive cloud computing services, which will launch you into a new era of corporate success."
    };


const technologiesData = {
  firstHeading: "Our Cloud Models",
  secondHeading: "Flexibility Tailored to Your Needs",

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


const aiDescriptionData = {
    firstHeading: "Managing Your Success with",
    secondHeading: "Custom Cloud Solutions",
    description: `Streamline your processes, discover hidden potential, and gain a competitive advantage with OnGraph’s cutting-edge cloud solutions. We are your one-stop expert for all cloud-related requirements.

                Discover the power of OnGraph’s intelligent, secure, and highly personalized cloud services. Utilize cloud migration for smooth transitions, cloud-native and edge computing development for real-time data processing, data strategy and engineering for informed decision-making, and digital transformation for overall change. Our cloud solutions simplify as well as help you innovate, enabling you to succeed.

                We offer a full range of services, including Cloud Consulting, Development, Integration, Maintenance, Edge Computing, and Data Engineering. You can count on us to be your partner at every stage of your cloud journey. Choose OnGraph for a future business that is cloud-powered, efficient, fast, and disruptive.`,
    button: "GET FREE DEMO",
    image: mobileAppConsult,
  };


  const toolData = {
    heading: "Leading the Charge with Futuristic Cloud-Based ",
    subHeading: "Business Solutions",
    description:
      "Say goodbye to bottlenecks with our expertise in crafting cutting-edge cloud solutions.",
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
