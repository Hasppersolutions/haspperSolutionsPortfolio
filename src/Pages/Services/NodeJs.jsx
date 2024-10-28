import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import nodejsImage from "../../assets/img/Nodejs_logo.png";
import WebPageDesc from "../../components/Services/WebAppDevelopment/WebPageDescription";
import WhyUsforWebDev from "../../components/Services/WebAppDevelopment/WhyUsforWebDev";
import OurIndustryExperience from "../../components/Services/WebAppDevelopment/OurIndustryExperience";
import TechnologyStack from "../../components/Services/WebAppDevelopment/TechnologyStack";
import { Description } from "@mui/icons-material";
import DevelopmentServices from "../../components/Services/WebAppDevelopment/DevelopmentServices";
import phpdescriptionimg from "../../assets/img/phpdescriptionimg.svg";
import TechnologyAdv from "../../components/Services/WebAppDevelopment/TechnologyAdvantage";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ"
import dynamicIntPhp from "../../assets/img/webDevelopmentService/dynamicIntPhp.png";
import MultipleLangPhp from "../../assets/img/webDevelopmentService/MultipleLangPhp.png";
import easyDBphp from "../../assets/img/webDevelopmentService/easyDBphp.png";
import crosspltfmPhp from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";
import Scalabilityphp from "../../assets/img/webDevelopmentService/Scalabilityphp.png";
import securityphp from "../../assets/img/webDevelopmentService/securityphp.png";
import cmswebdevphp from "../../assets/img/webDevelopmentService/customCMS.png"
import socialnetworkicon from "../../assets/img/webDevelopmentService/socialnetworkicon.png";
import Microservices from "../../assets/img/Microservices.svg";
import webbaseddev from "../../assets/img/webDevelopmentService/webbaseddev.png";
import API from "../../assets/img/API.svg";
import expressIcon from "../../assets/img/webDevelopmentService/expressjs.png";
import socketIcon from "../../assets/img/webDevelopmentService/socketIo.png";
import nextJs from "../../assets/img/webDevelopmentService/nextJsIcon.png";
import mongoIcon from "../../assets/img/webDevelopmentService/mongoDb.png";
import redisIcon from "../../assets/img/webDevelopmentService/redis.png";
import jestIcon from "../../assets/img/webDevelopmentService/jestMocha.png";
import microServiceIcon from "../../assets/img/webDevelopmentService/MicroService.png";
import ecomIcon from "../../assets/img/webDevelopmentService/shoppingapp.png";
import serverRenderIcon from "../../assets/img/webDevelopmentService/serverRender.png";
import cloudIcon from "../../assets/img/webDevelopmentService/dataMigration.png";
import apiIcon from "../../assets/img/webDevelopmentService/API.png";
import realTimeIcon from "../../assets/img/webDevelopmentService/pythonmachine.png";
import { Link } from 'react-router-dom';

const NodeJsDevelopment = () => {
    return(
        <>
        <Banner data={bannerTextData }/>
        <WebPageDesc data = {nodedescription }/>
        <TechnologyAdv data = { technologyAdv}/>
        <TechnologyStack data = {nodeStack}/>
        <DevelopmentServices data = {developmentService}/> 
        < WhyUsforWebDev data ={whyUsForWebDev}/>
        < OurIndustryExperience data = {ourIndustryExperience} />
        <FAQ data = {faqData}/>
        </>
    );
};

export default NodeJsDevelopment;

const bannerTextData = {
  mainHeading: "Node.js",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: nodejsImage,
  bottomHeading:
  "We offer professional Node.js development services, creating robust, scalable, and efficient solutions suited to modern web applications. Our experienced team builds server-side applications with a strong focus on performance and flexibility.",
  button: "TALK TO OUR EXPERTS",

};

const nodedescription = {
  firstHeading: "Node.js Development Solutions",
  secondHeading: "High-Performance Backend for Scalable Applications",
  description: [
    "Node.js is a powerful, event-driven runtime environment built on Chrome's V8 JavaScript engine. Its non-blocking, asynchronous nature makes it ideal for developing applications with high I/O operations, such as real-time data streaming and single-page applications.",
    "Our Node.js development services include backend development, API integration, microservices, and more. With Node.js, you can expect high-performance, scalable applications tailored to your business requirements.",
    "Whether you’re building a simple API or a complex enterprise solution, our Node.js developers bring expertise and innovation to create applications that are both fast and flexible."
  ],
  button: "",
  image: phpdescriptionimg,
};

const technologyAdv = {
  firstHeading: "Why Choose",
  secondHeading: "Node.js for Development",
  description: ["Node.js provides the efficiency and scalability needed for developing high-performance applications. Its rich ecosystem of libraries, packages, and frameworks make it a top choice for various industries."],
  cardData: [
    {
      image: dynamicIntPhp,
      title: "Event-Driven and Fast",
      description:
      "Node.js is built for handling asynchronous operations, making it perfect for real-time applications that require quick response times.",
    },
    {
      image: MultipleLangPhp,
      title: "Unified Development Stack",
      description:
      "With JavaScript on both server and client sides, Node.js provides a unified development environment that simplifies workflow."
    },
    {
      image: easyDBphp,
      title: "Microservices and Scalability",
      description:
      "Node.js supports microservices architecture, which makes it easier to scale individual parts of an application independently."
    },
    {
      image: crosspltfmPhp,
      title: "Cross-Platform Compatibility",
      description:
      "Node.js works across different platforms, allowing developers to build applications that are easily adaptable to various environments."
    },
    {
      image: Scalabilityphp,
      title: "Enhanced Scalability",
      description:
      "Node.js is well-suited for applications with high traffic and complex workflows, providing built-in scalability for growing businesses."
    },
    {
      image: securityphp,
      title: "Robust Security Measures",
      description:
      "Node.js has extensive libraries and modules that ensure secure code, making it a trusted choice for enterprise-level applications."
    },
  ]
};

const nodeStack = [
  { category: "Runtime Environment", technologies: "Node.js" },
  { category: "Frameworks", technologies: "Express, Koa, NestJS" },
  { category: "Databases", technologies: "MongoDB, PostgreSQL, MySQL, Redis" },
  { category: "Real-Time Communication", technologies: "Socket.io, WebSockets" },
  { category: "Testing", technologies: "Mocha, Chai, Jest" },
  { category: "API Development", technologies: "REST, GraphQL" },
  { category: "Task Runners", technologies: "Gulp, Webpack" },
];

const ourIndustryExperience = {
  firstHeading: "Our Experience with",
  secondHeading: "Node.js Development",
  description:
    "Our Node.js developers bring expertise across industries, providing scalable and innovative solutions tailored to specific business requirements.",
  technologies: [
    {
      icon: expressIcon,
      title: "Express.js",
      description:
        "Express.js enables our developers to create fast, flexible APIs, streamlining data transfer and interactions."
    },
    {
      icon: socketIcon,
      title: "Socket.io",
      description:
        "With Socket.io, we build real-time applications such as chat platforms and collaborative tools, enhancing user experience."
    },
    {
      icon: nextJs,
      title: "NestJS",
      description:
        "NestJS is used for building enterprise-grade applications with a focus on scalability and modularity in complex projects."
    },
    {
      icon: mongoIcon,
      title: "MongoDB",
      description:
        "Integrating MongoDB for dynamic data handling, we ensure flexibility and efficiency in Node.js applications."
    },
    {
      icon: redisIcon,
      title: "Redis",
      description:
        "Redis offers in-memory data storage, ideal for applications requiring rapid data access and caching solutions."
    },
    {
      icon: jestIcon,
      title: "Jest and Mocha",
      description:
        "Using Jest and Mocha for testing, we ensure code quality and reliability across our Node.js projects."
    },
  ],
};

const whyUsForWebDev = {
  mainHeading: "Why Choose Us for Node.js Development?",
  description: ["Our team delivers robust, high-performance Node.js applications tailored to your business needs. From consulting to deployment, we ensure quality and scalability."],
  cards: [
    {
      image: cmswebdevphp,
      title: "Experienced Node.js Developers",
      description: "Our skilled developers have extensive experience in building fast and reliable Node.js applications."
    },
    {
      image: socialnetworkicon,
      title: "Development Best Practices",
      description: "We follow best practices in development to deliver secure and efficient applications with high maintainability."
    },
    {
      image: Microservices,
      title: "Comprehensive Support",
      description: "We offer ongoing support to keep your Node.js applications running smoothly and securely."
    },
    {
      image: webbaseddev,
      title: "Broad Industry Knowledge",
      description: "Our experience across industries helps us tailor solutions to meet specific business demands."
    },
    {
      image: API,
      title: "Enterprise Solutions",
      description: "We create high-quality, secure Node.js applications optimized for performance and scalability."
    },
    {
      image: API,
      title: "On-Time Delivery",
      description: "We ensure timely project completion, adhering to all deadlines without compromising quality."
    },
  ]
};

const developmentService = {
  heading: "Node.js Development Services We Offer",
  description: ["Our comprehensive Node.js services include everything from API development to full-stack solutions, enabling high-performance and scalable applications."],
  cardData: [
    {
      icon: apiIcon,
      title: "Custom API Development",
      description: "Building efficient and reliable APIs tailored to your application’s requirements."
    },
    {
      icon: realTimeIcon,
      title: "Real-Time Applications",
      description: "Developing applications like chat and notification systems with real-time functionality."
    },
    {
      icon: microServiceIcon,
      title: "Microservices Architecture",
      description: "Implementing microservices for flexible scaling and independent deployment of components."
    },
    {
      icon: ecomIcon,
      title: "E-commerce Solutions",
      description: "Creating secure and scalable e-commerce platforms with support for payments and inventory management."
    },
    {
      icon: serverRenderIcon,
      title: "Server-Side Rendering (SSR)",
      description: "Using server-side rendering for improved SEO and performance in Node.js applications."
    },
    {
      icon : cloudIcon,
      title: "Cloud Integration",
      description: "Deploying Node.js applications on cloud platforms with seamless integration and scalability."
    },
  ],
};

const faqData = {
  heading: "Frequently Asked Questions about Node.js Development",
  faqItems: [
    {
      question: "Why should I choose Node.js for backend development?",
      answer: "Node.js is lightweight, efficient, and suitable for data-intensive applications, making it ideal for backend development."
    },
    {
      question: "Can Node.js be used for enterprise-level applications?",
      answer: "Yes, Node.js is highly scalable and widely used for enterprise-grade applications across various industries."
    },
    {
      question: "Is Node.js suitable for real-time applications?",
      answer: "Yes, Node.js is designed for real-time applications, supporting features like WebSockets and asynchronous data handling."
    },
    {
      question: "What industries benefit from Node.js?",
      answer: "Node.js is beneficial for industries that require scalable and high-performance applications, such as finance, e-commerce, and social media."
    },
  ]
};
