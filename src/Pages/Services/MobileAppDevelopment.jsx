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

const MobileAppDevelopment = () => {
  return (
    <>
      {/* <Box sx={{ backgroundColor: "#F2F2F2" }}> */}
        <Banner data={bannerTextData} />
        <Features data={featuresData} />
        <WaveLine />
        <Accredited />
        <DevelopmentServices data={developmentServicesData} />
        <Technologies data={technologiesData} />
        <Industries data={industriesData} />
      {/* </Box> */}
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
      icon: mobileAppConsult,
      title: "Mobile App Development Consulting",
      description: `Our team of professionals offers advice and suggestions on the best methods for developing mobile apps, including app ideation, market research, programming language, and technology stack selection.`,
    },
    {
      icon: mobileAppConsult,
      title: "Mobile UX & UI Design",
      description: `We produce user-friendly and intuitive mobile app designs that improve user experience, engagement, and conversion rates.`,
    },
    {
      icon: mobileAppConsult,
      title: "Backend Development",
      description: `To ensure a smooth connection with frontend mobile applications, our backend developers build scalable and secure server-side architectures, APIs, and databases. We also focus on open-source adoption for cost-effective development and increased customization.`,
    },
    {
      icon: mobileAppConsult,
      title: "Mobile App Integration",
      description: `We connect mobile applications to other services and platforms, including enterprise software, social media platforms, and payment gateways.`,
    },
    {
      icon: mobileAppConsult,
      title: "Mobile App QA & Testing",
      description: `To make sure that mobile apps are free of bugs, functional, and adhere to industry standards, we conduct thorough quality assurance and testing.`,
    },
    {
      icon: mobileAppConsult,
      title: "Mobile App Maintenance and Support",
      description: `To keep mobile apps safe, reliable, and current, we offer maintenance and post-launch L0-L3 support services that include bug fixes, security, compliance, upgrades, and enhancements.`,
    },
    {
      icon: mobileAppConsult,
      title: "Mobile App Modernization",
      description: `Hire mobile app developer from OnGraph to get complete assistance for adding new features, updating the user experience, and improving speed and security to modernize websites into mobile apps.`,
    },
  ],
};
const technologiesData = {
  firstHeading: "Mobile App Development Technologies",
  secondHeading: "We’re Skilled in",
  description:
    "To produce innovative and engaging mobile apps, our mobile app developers and UX/UI designers are continually researching the newest trends and technology and upskilling.",
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
const industriesData = {
  firstHeading: "Delivering Mobile App Development",
  secondHeading:
    "Services to <span style='color: #c75425'>Numerous Industries</span>",
  industries: [
    {
      icon: mobileAppConsult,
      title: "Healthcare",
      description:
        " design mobile apps for healthcare companies to improve patient care, telemedicine, medical education, and research.",
    },
    {
      icon: mobileAppConsult,
      title: "FinTech",
      description:
        "Our FinTech mobile app development services aid in the delivery of secure and dependable financial solutions such as banking apps, mobile wallets, and payment gateways.",
    },
    {
      icon: mobileAppConsult,
      title: "Entertainment and Media",
      description:
        "We create creative mobile apps for the entertainment and media industries, such as music streaming, video streaming, social media apps, and gaming apps.",
    },
    {
      icon: mobileAppConsult,
      title: "Retail and E-commerce",
      description:
        "We offer e-commerce, mobile payment, inventory management, and loyalty programs for the retail industry to improve the consumer experience.",
    },
    {
      icon: mobileAppConsult,
      title: "HRMS",
      description:
        "We provide bespoke mobile apps for HRMS systems that offer unified personnel administration, communication, and productivity solutions.",
    },
    {
      icon: mobileAppConsult,
      title: "Insurance",
      description:
        "Our insurance mobile app development services include claim administration, policy management, and customer service solutions for increased client engagement and satisfaction.",
    },
    {
      icon: mobileAppConsult,
      title: "Travel",
      description:
        "We offer mobile app development services for the travel industry, such as trip planning, booking, and management apps that provide users with a seamless experience.",
    },
    {
      icon: mobileAppConsult,
      title: "Banking",
      description:
        "Our banking mobile app development services include mobile banking apps, investing apps, and trading applications that offer users simple and safe financial management solutions.",
    },
    {
      icon: mobileAppConsult,
      title: "Education and E-Learning",
      description:
        "We develop unique e-learning mobile apps that provide students and professionals with dynamic and engaging learning experiences, such as online courses, assessments, and skill-building tools.",
    },
  ],
};
