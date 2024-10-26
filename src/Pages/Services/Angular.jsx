import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import angularIcon from "../../assets/img/angularBG.png";
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
import securityphp from "../../assets/img/webDevelopmentService/securityphp.jpeg";
import cmswebdevphp from "../../assets/img/webDevelopmentService/cmswebdevphp.svg"
import socialnetworkicon from "../../assets/img/webDevelopmentService/socialnetworkicon.jpg";
import Support from "../../assets/img/webDevelopmentService/communication.png";
import webbaseddev from "../../assets/img/webDevelopmentService/webbaseddev.png";
import Ontime from "../../assets/img/webDevelopmentService/ontime2.jpeg";
import angularDeveloper from "../../assets/img/webDevelopmentService/pythondevelopers.png";
import angularEnterprise from "../../assets/img/webDevelopmentService/pythonEnterprise.jpg";
import angularjsImage from "../../assets/img/webDevelopmentService/angularjs.png";
import angularjsEnterprise from "../../assets/img/webDevelopmentService/angularjsenterprise.png";
import angularmaterialImage from "../../assets/img/webDevelopmentService/angularmaterial.png";
import angularNgx from "../../assets/img/webDevelopmentService/ngx.png";
import angularradianImage from "../../assets/img/webDevelopmentService/radian.png";
import angularGridImage from "../../assets/img/webDevelopmentService/uigrid.png";
import angularRxjsImage from "../../assets/img/webDevelopmentService/rxjs.png";
import angularMask from "../../assets/img/webDevelopmentService/Mask group.png";

const AngularDevelopment = () => {
    return(
        <>
        <Banner data={bannerTextData }/>
        <WebPageDesc data = {angulardescription }/>
        <TechnologyAdv data = { technologyAdv}/>
        <TechnologyStack data = {angularStack}/>
        <DevelopmentServices data = {developmentService}/> 
        < WhyUsforWebDev data ={whyUsForWebDev}/>
        < OurIndustryExperience data = {ourIndustryExperience} />
        <FAQ data = {faqData}/>
        </>
    );
};

export default AngularDevelopment;

const bannerTextData = {
  mainHeading: "Angular",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: angularIcon,
  bottomHeading:
  "At Haspper, we offer comprehensive Angular development services to build dynamic, feature-rich web applications. Our expert Angular developers utilize Angular’s powerful structure and components to create fast, scalable, and interactive applications tailored to meet your specific business needs.",
  button: "TALK TO OUR EXPERTS",
};

const angulardescription = {
  firstHeading: "Angular Development Solutions",
  secondHeading: "For Building Interactive Web Applications",
  description: [
    "Angular is a powerful front-end framework developed by Google, designed to create single-page applications that are dynamic and responsive. Its component-based architecture, two-way data binding, and dependency injection make it an excellent choice for fast and scalable application development.",
    "With Angular, you can build a variety of applications, from enterprise-level solutions and e-commerce platforms to real-time applications. Notable companies using Angular include Google, Microsoft, and Upwork.",
    "At Haspper, we specialize in developing seamless, high-performance applications with Angular. Our services span from building rich user interfaces and single-page applications to integrating Angular with REST APIs and microservices to ensure a smooth, engaging user experience across diverse industries."
  ],
  button: "",
  image: phpdescriptionimg,
};

const technologyAdv = {
  firstHeading: "Why We Recommend",
  secondHeading: "Angular for Web Development",
  description: ["Angular is known for its rich feature set, including reactive programming, modularization, and component-based structure. These aspects streamline development and result in powerful, maintainable applications that can handle complex business logic."],
  cardData: [
    {
      image: dynamicIntPhp,
      title: "Component-Based Architecture",
      description:
      "Angular’s modular component structure allows for better code organization and reuse, making it easy to maintain and extend applications as they grow.",
    },
    {
      image: MultipleLangPhp,
      title: "Two-Way Data Binding",
      description:
      "Angular’s two-way data binding keeps the view and model synchronized, simplifying real-time updates and enabling smooth user interactions."
    },
    {
      image: easyDBphp,
      title: "Reactive Programming with RxJS",
      description:
      "With RxJS, Angular provides a powerful way to handle asynchronous data, ideal for building highly responsive applications and real-time features."
    },
    {
      image: crosspltfmPhp,
      title: "Cross-Platform Development",
      description:
      "Angular can be used to develop web, mobile, and desktop applications, providing a unified framework that supports multiple platforms."
    },
    {
      image: Scalabilityphp,
      title: "Scalable and Maintainable",
      description:
      "Angular’s robust structure and built-in CLI tools make it easy to scale applications, handle complex workflows, and maintain code over time."
    },
    {
      image: securityphp,
      title: "Enterprise-Grade Security",
      description:
      "Angular offers strong security with built-in features such as DOM sanitation and supports best practices for developing secure applications."
    },
  ]
};

const angularStack = [
  { category: "Web Framework", technologies: "Angular, Angular CLI" },
  { category: "State Management", technologies: "NgRx, Akita" },
  { category: "Testing", technologies: "Jasmine, Karma, Protractor" },
  { category: "UI Libraries", technologies: "Angular Material, PrimeNG, Nebular" },
  { category: "Animation & Styling", technologies: "Angular Animations, SCSS, Tailwind CSS" },
  { category: "Backend Integration", technologies: "RESTful APIs, GraphQL" },
  { category: "Real-Time Communication", technologies: "Socket.io, Firebase" },
];

const ourIndustryExperience = {
  firstHeading: "Our Expertise with",
  secondHeading: "Angular Development",
  description:
    "Our experienced Angular developers use the latest tools and frameworks to deliver top-quality applications across various industries, from e-commerce to healthcare.",
  technologies: [
    {
      icon: angularmaterialImage,
      title: "Angular Material",
      description:
        "Angular Material provides a comprehensive set of UI components, ensuring consistency and speed in UI development."
    },
    {
      icon: angularjsImage,
      title: "RxJS",
      description:
        "RxJS brings reactive programming to Angular, enabling efficient data handling and real-time updates for responsive applications."
    },
    {
      icon: angularNgx,
      title: "NgRx",
      description:
        "NgRx is a powerful state management library, particularly useful in handling complex application states in Angular projects."
    },
    {
      icon: angularjsEnterprise,
      title: "Angular CLI",
      description:
        "Angular CLI simplifies the development workflow, providing automated tasks like testing, bundling, and deploying applications."
    },
    {
      icon: angularjsImage,
      title: "PrimeNG",
      description:
        "PrimeNG offers a wide range of feature-rich UI components to enhance the user experience in Angular applications."
    },
    {
      icon: angularGridImage,
      title: "Jasmine and Karma",
      description:
        "Jasmine and Karma are widely used in Angular projects for unit testing and ensure code reliability through comprehensive testing."
    },
  ],
};

const whyUsForWebDev = {
  mainHeading: "Why Choose Haspper for Angular Development?",
  description: ["With a deep understanding of Angular and a commitment to quality, our team ensures you get top-notch applications. Our developers bring extensive experience, making us a reliable partner for your Angular projects."],
  cards: [
    {
      image: angularDeveloper,
      title: "Expert Angular Developers",
      description: "Our developers are proficient in using Angular to build robust, scalable applications tailored to your requirements."
    },
    {
      image: angularMask,
      title: "Adherence to Best Practices",
      description: "We follow international standards and industry best practices for all our Angular projects."
    },
    {
      image: Support,
      title: "Continuous Support",
      description: "We provide ongoing support for all Angular development services, ensuring seamless operation and updates as needed."
    },
    {
      image: webbaseddev,
      title: "Diverse Industry Experience",
      description: "Our team has a proven track record across various industries, including healthcare, finance, retail, and more."
    },
    {
      image: angularEnterprise,
      title: "Enterprise-Grade Solutions",
      description: "We build high-quality, secure applications that are optimized for performance and scalability."
    },
    {
      image: Ontime,
      title: "On-Time Delivery",
      description: "We adhere to timelines, ensuring that all Angular projects are delivered on schedule without compromising on quality."
    },
  ]
};

const developmentService = {
  heading: "Angular Development Services We Offer",
  description: ["Our Angular development services cover a wide array of offerings tailored to your business needs. From single-page applications to enterprise-level solutions, we are equipped to build solutions that stand out."],
  cardData: [
    {
      title: "Single-Page Applications (SPA)",
      description: "Building SPAs that provide a seamless, fast, and user-friendly experience."
    },
    {
      title: "Progressive Web Applications (PWA)",
      description: "Developing responsive PWAs that work offline and are optimized for mobile devices."
    },
    {
      title: "Enterprise-Grade Applications",
      description: "Creating complex, scalable applications suited to enterprise needs and large data handling."
    },
    {
      title: "E-commerce Platforms",
      description: "Building secure and scalable e-commerce applications that support seamless shopping experiences."
    },
    {
      title: "Real-Time Applications",
      description: "Developing real-time applications like chat apps and collaborative tools using Angular and RxJS."
    },
    {
      title: "API Integration",
      description: "Integrating Angular applications with various APIs, including REST and GraphQL."
    },
  ],
};

const faqData = {
  heading: "Frequently Asked Questions about Angular Development",
  faqItems: [
    {
      question: "Why should I choose Angular for my project?",
      answer: "Angular is highly popular for its flexibility, component-based structure, and strong community support, making it ideal for scalable web applications."
    },
    {
      question: "What industries benefit most from Angular applications?",
      answer: "Any industry requiring scalable, interactive, and performance-focused applications can benefit, including finance, healthcare, e-commerce, and entertainment."
    },
    {
      question: "How does Angular ensure application performance?",
      answer: "Angular optimizes performance through Ahead-of-Time (AOT) compilation, lazy loading, and other built-in optimizations."
    },
    {
      question: "Is Angular suitable for real-time applications?",
      answer: "Yes, Angular supports real-time features via RxJS, ideal for chat applications, collaborative platforms, and more."
    },
  ]
};
