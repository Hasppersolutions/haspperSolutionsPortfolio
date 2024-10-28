import React from "react";
import Features from "../../components/Services/MobileAppDevelopment/Features";
import Banner from "../../components/Services/Banner.jsx";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mainCloudImg from "../../assets/img/Solutions/CloudComputing/CloudComputingMain.svg"
import aiDescImg from "../../assets/img/Solutions/CloudComputing/FeatureImg.svg"
import mobileAppConsult from "../../assets/img/Services/mobile-app-consulting.png";
import icon1 from "../../assets/img/Solutions/CloudComputing/img2.png"
import icon2 from "../../assets/img/Solutions/CloudComputing/cloud-syncing.svg"
import icon3 from "../../assets/img/Solutions/CloudComputing/img3.png"
import icon4 from "../../assets/img/Solutions/CloudComputing/img4.png"
import icon5 from "../../assets/img/Solutions/CloudComputing/img5.png"
import model1 from "../../assets/img/Solutions/CloudComputing/model1.png"
import model3 from "../../assets/img/Solutions/CloudComputing/model3.png"
import model4 from "../../assets/img/Solutions/CloudComputing/model4.png"
import model5 from "../../assets/img/Solutions/CloudComputing/model5.png"
import model2 from "../../assets/img/Solutions/CloudComputing/model2.png"
import techdata1 from "../../assets/img/Solutions/CloudComputing/techdata1.png"
import techdata3 from "../../assets/img/Solutions/CloudComputing/techdata3.png"
import techdata4 from "../../assets/img/Solutions/CloudComputing/techdata4.png"
import techdata5 from "../../assets/img/Solutions/CloudComputing/techdata5.png"
import techdata2 from "../../assets/img/Solutions/CloudComputing/techdata2.png"
import techdata6 from "../../assets/img/Solutions/CloudComputing/techdata6.png"
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
import { Contact } from "../../components/Homepage/Contact";
import Challenges from "../../components/Services/Challenges.jsx";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing.js";
import Model from "../../components/Solution/Model.jsx";
import Mailus from "../../components/Homepage/Mailus";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";

import keyFeatures from "../../assets/img/Solutions/keyFeature.png";


const Chatbot = () => {
  return (
    <>
    
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Challenges data={challengesData} />
      <WaveLine />
      <AiTool data={toolData} />
      <Model data={ModelData} />
      <Technologies data={technologiesData} />
      <KeyFeatures data={keyFeatureData}/>
      <Certification/>
      <Review/>
      <Contact/>
      <Mailus/>
      <ServicesAndStaffing/>
      
    </>
  );
};

export default Chatbot;


const bannerTextData = {
  mainHeading: "Cloud Computing",
  middleHeading: "Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mainCloudImg,
  bottomHeading:
  "Begin your digital transformation journey with our comprehensive cloud computing services, which will launch you into a new era of corporate success."
    };


const technologiesData = {
  firstHeading: "Why Choose Haspper as Your Trusted",
  secondHeading: "Cloud Services Partner?",

  technologies: [
    {
      title: "Proven Expertise",
      description:
      "At OnGraph, we leverage our wealth of experience and strong technical skills to provide cloud solutions that help businesses succeed."
        ,icon: techdata1,
    },
    {
      title: "Agile Approach",
      description:
      "Our Agile process assures the rapid delivery of high-quality cloud solutions, allowing your company to respond rapidly to market developments.",
        icon: techdata2,
    },
    {
      title: "Custom Solutions",
      description:
        "We reject the one-size-fits-all approach in favor of developing cloud solutions that are specifically suited to your company’s needs and ambitions.",
         icon: techdata3,
    },
    {
      title: "Comprehensive Cloud Services",
      description:
        "We provide a comprehensive spectrum of cloud services to support your digital transformation journey, from migration and integration to consultation and maintenance.",
      icon: techdata4,
    },
    {
      title: "End-to-End Support",
      description:
        "Our collaboration with you goes from the initial evaluation to post-implementation optimizations, ensuring continuous support at all stages.",
      icon: techdata5,
    },
    {
      title: "Industry-Leading Security",
      description:
        "We adhere to the highest security standards, guaranteeing that your data is safe and secure, providing you with complete peace of mind.",
         icon: techdata6,
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
    image: aiDescImg,
  };


  const toolData = {
    heading: "Leading the Charge with Futuristic Cloud-Based ",
    subHeading: "Business Solutions",
    description:
      "Say goodbye to bottlenecks with our expertise in crafting cutting-edge cloud solutions.",
    uppeCardData: [
      {
        image: icon1,
        text: "Cloud Migration",
        hoverText:
          "Ensure a smooth move to the cloud, increasing company agility while reducing risk and cost.",
      },
      {
        image: icon2,
        text: "Cloud Native Development",
        hoverText:
          "Unleash the power of modern application development with cutting-edge technology for business change.",
      },
    ],
    belowCardData: [
        {
          image: icon3,
          text: "Data Strategy & Engineering",
          hoverText:
            "Our data strategy and engineering services can help you improve your business outcomes by transforming raw data into actionable insights.",
        },
        {
          image: icon4,
          text: "Digital Transformation",
          hoverText:
            "Accelerate the expansion of your IT company by using proven practices that allow ongoing software releases.",
        },
        {
          image: icon5,
          text: "Site Reliability & Chaos Engineering",
          hoverText:
            "Adopt the latest testing approaches to ensure system reliability at scale and business continuity.",
        },
      ],
    };

    const ModelData = {
        firstHeading: "Our Cloud Models",
        secondHeading: "Flexibility Tailored to Your Needs",
        backgroundImage: ServiceBackgroudImage,
      
        technologies: [
          {
            title: "Public Cloud",
            description:
              "Leveraging the power of scalable, dependable, and cost-effective public cloud solutions to enable your company to develop at size and speed.",
            icon: model1,
          },
          {
            title: "Private Cloud",
            description:
             "Providing increased control and security by providing dedicated resources tailored to your business requirements.",
            icon: model2,
          },
          {
            title: "Hybrid Cloud",
            description:
              "With our hybrid cloud solutions, you get the best of both worlds, with the freedom of the public cloud and the protection and control of the private cloud.",
            icon: model3,
          },
          {
            title: "Disaster Recovery on the Cloud",
            description:
              "Reducing risks and maintaining business continuity by restoring important IT systems and data quickly.",
            icon: model4,
          },
          {
            title: "Disaster Recovery as a Service (DRaaS)",
            description:
            "Offering DRaaS to assist businesses in fast recovering from disasters, minimizing downtime, and avoiding costly disruptions to their business operations.",
               icon: model5,
          },
          
        ],
      };   

      const challengesData = {
        firstHeading: "Solutions Conquering the Toughest",
        secondHeading: "AI Challenges",
        description:
          "Are operational inefficiencies impeding your progress? What are the roadblocks to transforming your company? With our technical skills, we can help you eliminate essential business obstacles and pain areas. Utilize powerful, comprehensive, user-friendly AI technologies and solutions to catapult your company to new heights.",
        stepsData: [
          {
            id: 1,
            icon: icon1,
            title: "Flexibility through cloud Migration",
            position: {
              top: -24,
              left: -20,
            },
            side: "right",
          },
          {
            id: 2,
            icon: "",
            title: "Innovation through Cloud-Native Development",
            position: {
              top: 180,
              left: 144,
            },
            side: "right",
          },
          {
            id: 3,
            icon: "",
            title: "Growth with Data Strategy and Engineering",
            position: {
              top: 450,
              left: 76,
            },
            side: "right",
          },
          {
            id: 4,
            icon: "",
            title: "Progress via Digital Transformation",
            position: {
              top: -36,
              left: -170,
            },
            side: "left",
          },
          {
            id: 5,
            icon: "",
            title: "Resilience with Reliability Engineeering",
            position: {
              top: 209,
              left: -256,
            },
            side: "left",
          },
         
        ],
      };

      const keyFeatureData = {
        mainHeading: "Our Methodology:",
        secondHeading: "A Strategic Approach to Cloud Success",
        image: keyFeatures,
        
        leftSideData: [
          {
            heading: "In-depth Assessment",
            description:
              "We begin the process with a thorough evaluation of your business requirements and IT infrastructure, creating the framework for a successful cloud journey.",
          },
          {
            heading: "Strategic Planning",
            description:
            "Creating a clear roadmap to steer your cloud journey, lowering risk, and ensuring alignment with your business goals is part of our meticulous planning stage",
               },
          {
            heading: "Efficient Implementation",
            description:
              "Using Agile approaches, we ensure that cloud solutions are implemented efficiently and quickly, with the least disturbance to business operations.",
          },
        ],
        rightSideData: [
          {
            heading: "Continuous Optimization",
            description:
              "We don't stop at implementation. We optimize and upgrade your cloud ecosystem on a regular basis to ensure it continues to add value and keeps up with changing market trends.",
          },
          {
            heading: "Robust Security and Compliance",
            description:
              "We integrate security and compliance at every level of your cloud infrastructure, ensuring your data and applications are safeguarded. Our proactive approach helps you meet industry regulations and reduces potential vulnerabilities.",
          },
          {
            heading: "Scalable Growth and Innovation",
            description:
              "Our solutions are designed with scalability in mind, enabling you to expand resources effortlessly as your business grows. We help you leverage cloud-native innovations, so you're always ahead in adapting to new technologies and meeting customer expectations.",
          },
        ],
      };
