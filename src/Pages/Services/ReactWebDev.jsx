import React from "react";
import Banner from "../../components/Services/Banner";
import WebPageDesc from "../../components/Services/WebAppDevelopment/WebPageDescription";
import TechnologyAdv from "../../components/Services/WebAppDevelopment/TechnologyAdvantage";
import DevelopmentServices from "../../components/Services/WebAppDevelopment/DevelopmentServices";
import TechnologyStack from "../../components/Services/WebAppDevelopment/TechnologyStack";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import reactBgimg from "../../assets/img/reactdevbg.png";
import reactDescimg from "../../assets/img/reactDescimg.png";
import VitualDomIcon from "../../assets/img/DataScience.svg";
import crossPltIcon from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";
import seoIcon from "../../assets/img/vision-1.png";
import componentIcon from "../../assets/img/webDevelopmentService/webbaseddev.png";
import jsxIcon from "../../assets/img/jsxIcon.png"
import dataBindIcon from "../../assets/img/webDevelopmentService/easyDBphp.png";
import declarativeIcon from "../../assets/img/UIUximg.png";
import mobileIcon from "../../assets/img/healthCare.png";
import customIcon from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";

const ReactWebDevelopment = () =>{
    return(
        <>
        <Banner data = {bannerTextData} />
        <WebPageDesc data = {reactDescription}/>
        <TechnologyAdv data={technologyAdv} />
        <TechnologyStack data = {ourStack}/>
        <DevelopmentServices data = {developmentService}/>
        <FAQ data={faqData}/>
        </>
    );
};

export default ReactWebDevelopment;

const bannerTextData = {
    mainHeading: "React.js",
    middleHeading: "Development Company",
    backgroundImage: ServiceBackgroudImage, // Replace with your actual background image
    rightImage: reactBgimg, // Replace with your actual image for React
    bottomHeading:
        "Harness the power of React.js to create dynamic, high-performance applications that are scalable and user-friendly. Our experienced team specializes in delivering tailored React.js solutions that cater to the unique needs of your business.",
    button: "TALK TO OUR EXPERTS",
};

const reactDescription = {
    firstHeading: "Generate Business Value Through Our",
    secondHeading: "ReactJS Development Services",
    description: "ReactJS is a widely used open-source JavaScript library that serves as a fundamental tool in modern web development, compatible across various platforms and operating systems. It empowers developers to build engaging user interfaces for both single-page applications (SPAs) and dynamic web applications.This approach to web development simplifies the front-end process by decomposing the user interface into reusable components, which enhances modularity and maintainability. Renowned for its flexibility and speed, ReactJS allows for rapid application development. At Haspper, a premier ReactJS development company, we offer a full spectrum of ReactJS development services tailored to meet the needs of businesses globally. Our team is well-versed in advanced frameworks and tools, including Redux, Create React App, and Material-UI, ensuring adherence to industry best practices. As a trusted ReactJS development agency, our mission is to create high-performance, business-centric applications that align with your strategic goals. Our skilled ReactJS developers specialize in crafting intricate mobile applications and progressive web apps (PWAs) that are not only functional but also user-friendly. With a diverse team of developers, we embrace innovative methodologies in both app and web development, ensuring that projects are delivered on time and to the highest standards. We take pride in our ability to provide tailored ReactJS web development services that focus on building highly interactive user interfaces and dynamic applications. Feel free to modify any parts to better suit your needs!",
    button: "",
    image: reactDescimg,
};

const technologyAdv = {
    firstHeading: "Why do We Recommend",
    secondHeading: "ReactJs App Development Services",
    description: "Due to its inherent flexibility and scalability, ReactJS development has seen a significant increase in demand, positioning it as a powerful JavaScript library. With the capabilities of this open-source library, Haspper's ReactJS developers are equipped to craft intricate web and mobile application solutions.",
    cardData: [
        {
            image: VitualDomIcon,
            title: "Virtual DOM",
            description: "In contrast to traditional DOM, makes coding more straightforward by only re-rendering the parts of the UI that change."
        },
        {
            image: crossPltIcon,
            title: "Cross-Platform",
            description:
            "ReactJS’s cross-platform capabilities mean it’s a write-once, run-everywhere solution, boasting compatibility with Android, Windows, and iOS."
        },
        {
            image: seoIcon,
            title: "SEO-Friendly",
            description:
            "ReactJS stands out among frameworks due to its SEO-friendliness; its rapid rendering notably improves website load times."
        },
        {
            image: componentIcon,
            title: "Component-Based",
            description:
            "ReactJS’s component-based approach encourages developers at OnGraph to design sophisticated user interfaces by breaking the UI into individual, reusable segments."
        },
        {
            image: jsxIcon,
            title: "Usefulness of JSX",
            description:
            "The power of JSX as a preprocessor step in ReactJS introduces JavaScript with XML syntax, facilitating more natural component reasoning."
        },
        {
            image: dataBindIcon,
            title: "One-Way Data Binding",
            description:
            "One-way data binding in ReactJS uses Flux controls, offering a consistent method to update the view and regulate the application’s workflow."
        },
        {
            image: declarativeIcon,
            title: "Declarative",
            description:
            "The declarative nature of ReactJS ensures components are efficiently updated and rendered as data changes, enabling seamless management of the application’s state and flow."
        },
    ],
};

const ourStack = [
    { category: "Languages/Platform", technologies: "React, Typescript, Javascript, Serverless, Express, JSX, Jest, HOC" },
    { category: "Front-End", technologies: "Bootstrap, React, Angular, jQuery, Vue" },
    { category: "Architecture", technologies: "MVC, MVP, Microservices, MVVM" },
    { category: "Frameworks/Libraries", technologies: "Typescript, Javascript, JSON, Express, XML, Meteor.js, Serverless, Socket.io, SOAP" },
    { category: "Database", technologies: "MySQL, MongoDB, Oracle, Firebase, MS-SQL, Rethinkdb, PostgreSQL, Elasticsearch, CouchDB" },
    { category: "Deployment", technologies: "Azure, AWS, Docker, Google Cloud, Kubernetes" },
    { category: "Testing", technologies: "Selenium, Katalon, Test Rail, OWASP ZAP, Postman" },
    { category: "ORMs", technologies: "TypeORM, Sequelize, GraphQL" },
    { category: "Caching", technologies: "Memcached, Redis" },
    { category: "Project Management Tools", technologies: "Asana, Slack, Trello, Jira, Microsoft Teams" },
];

const developmentService = {
    heading : "For all React development services",
    description: "At Haspper, we take pride in being a distinguished ReactJS development company offering a myriad of services tailored to modern business needs.",
    cardData: [
        {
            icon: declarativeIcon,
            title: "React.js Web Application Development",
            description: "As a premier React.js development company, we specialize in delivering high-quality web applications tailored to meet diverse business needs. Our expertise spans various types of applications, from single-page applications (SPAs) to complex enterprise solutions, ensuring optimized performance and responsive design."
        },
        {
            icon: mobileIcon,
            title: "React.js Mobile Application Development",
            description: "Our talented React.js developers build robust mobile applications that operate flawlessly on both iOS and Android platforms. By following best practices in mobile development, we deliver feature-rich apps that provide a seamless user experience while maintaining high performance."
        },
        {
            icon: customIcon,
            title: "Custom React.js Application Development",
            description: "We offer bespoke React.js solutions that are designed to fulfill your unique business objectives. Whether you need a dynamic web app, a progressive web app (PWA), or a tailored dashboard, partnering with Haspper guarantees innovative and interactive solutions that elevate your digital presence."
        },
        {
            icon: componentIcon,
            title: "React.js Component Development",
            description: "Our team specializes in creating reusable React.js components that enhance the flexibility and scalability of your applications. By working closely with clients, we develop custom components that integrate smoothly into your existing infrastructure, ensuring optimal performance and adaptability."
        },
    ]

};

const faqData = {
    faqItems: [
        {
            question: "Q. Why choose React.js for web development?",
            answer:
                "React.js provides a fast, efficient, and flexible framework for building user interfaces, making it ideal for creating dynamic and responsive web applications.",
        },
        {
            question: "Q. What types of applications can be built with React.js?",
            answer:
                "React.js is versatile and can be used to develop a wide range of applications, including single-page applications (SPAs), progressive web apps (PWAs), and mobile applications through React Native.",
        },
        {
            question: "Q. How long does it take to develop a React.js application?",
            answer:
                "The development time for a React.js application depends on the complexity and features required, but typically ranges from 1 to 6 months.",
        },
        {
            question: "Q. Is React.js suitable for large-scale applications?",
            answer:
                "Absolutely! React.js is designed to be scalable, allowing developers to build large and complex applications with ease while maintaining performance.",
        },
        {
            question: "Q. How cost-effective is React.js development?",
            answer:
                "React.js development can be very cost-effective due to its component-based architecture, which promotes reusability and reduces the overall development time and costs.",
        },
    ],
};
