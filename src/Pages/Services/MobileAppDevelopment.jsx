import React from "react";
import Features from "../../components/Services/MobileAppDevelopment/Features";
import Banner from "../../components/Services/Banner.jsx";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mobileDevelopmentRight from "../../assets/img/Services/mobile-development-right.png";
import Accredited from "../../components/Services/MobileAppDevelopment/Accredited.jsx";
import { Box } from "@mui/material";
import DevelopmentServices from "../../components/Services/MobileAppDevelopment/DevelopmentServices.jsx";

const MobileAppDevelopment = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F2F2F2" }}>
        <Banner data={bannerTextData} />
        <Features data={featuresData} />
        <Accredited />
        <DevelopmentServices data={developmentServicesData} />
      </Box>
    </>
  );
};

export default MobileAppDevelopment;
const bannerTextData = {
  mainHeading: "Exceptional Mobile App",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mobileDevelopmentRight,
  bottomHeading:
    "Develop feature-rich and robust mobile apps that provide seamless user experiences and contribute to business growth. Empowering your businesses with custom mobile app development company.",
};
const featuresData = {
  description: `OnGraph is a premier agile custom mobile app development company that provides cutting-edge and innovative mobile app development services to businesses of all sizes and industries.<br />
  From inspiration and design to delivery and ongoing maintenance, our full-cycle app design, integration, and management services cover it all.<br />
  Hire mobile app developers from our team who can perform a deep dive into your business ecosystem to understand your market and analyze the needs of your clients.<br />
  Our team has experience developing apps for iOS, Android, and cross-platform mobile apps in <a href="" class="link">Flutter</a>, <a href="" class="link">React Native</a>, and Ionic.<br />
  We deliver high-quality standard mobile apps for any category as a top-rated mobile application development company in the US and India.<br />
  We also specialize in HTML5 development in addition to providing mobile app development services, allowing us to create a robust, scalable, and long-lasting cross-platform mobile application that runs on any device or platform.<br />
  Businesses that partner with OnGraph for their bespoke mobile app development needs are confident that the final product will fulfill their business objectives and be of the highest quality.`,
  featuresList: [
    "Native and cross-platform app development",
    "Custom iOS and Android app development",
    "Second platform app development",
    "UI/UX design",
    "Mobile app development consulting",
    "QA, automated testing, and manual testing",
    "Embedded Android & AOSP customizations",
    "Maintenance and post-warranty support",
  ],
};
const developmentServicesData = {
  firstHeading: "Our Range of ",
  secondHeading: "Mobile Application Development Services",
  description: "",
  cardData: [
    {
      icon: "",
      title: "Mobile App Development Consulting",
      description: `Our team of professionals offers advice and suggestions on the best methods for developing mobile apps, including app ideation, market research, programming language, and technology stack selection.`,
    },
    {
      icon: "",
      title: "Mobile UX & UI Design",
      description: `We produce user-friendly and intuitive mobile app designs that improve user experience, engagement, and conversion rates.`,
    },
    {
      icon: "",
      title: "Backend Development",
      description: `To ensure a smooth connection with frontend mobile applications, our backend developers build scalable and secure server-side architectures, APIs, and databases. We also focus on open-source adoption for cost-effective development and increased customization.`,
    },
    {
      icon: "",
      title: "Mobile App Integration",
      description: `We connect mobile applications to other services and platforms, including enterprise software, social media platforms, and payment gateways.`,
    },
    {
      icon: "",
      title: "Mobile App QA & Testing",
      description: `To make sure that mobile apps are free of bugs, functional, and adhere to industry standards, we conduct thorough quality assurance and testing.`,
    },
    {
      icon: "",
      title: "Mobile App Maintenance and Support",
      description: `To keep mobile apps safe, reliable, and current, we offer maintenance and post-launch L0-L3 support services that include bug fixes, security, compliance, upgrades, and enhancements.`,
    },
    {
      icon: "",
      title: "Mobile App Modernization",
      description: `Hire mobile app developer from OnGraph to get complete assistance for adding new features, updating the user experience, and improving speed and security to modernize websites into mobile apps.`,
    },
  ],
};
