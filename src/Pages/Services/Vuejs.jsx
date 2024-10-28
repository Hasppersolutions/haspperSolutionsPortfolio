import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import vueFrameworks from "../../assets/img/vuejs.png";
import VuejsDesc from "../../assets/img/VuejsDesc.png";
import WebPageDesc from "../../components/Services/WebAppDevelopment/WebPageDescription";
import TechnologyAdv from "../../components/Services/WebAppDevelopment/TechnologyAdvantage";
import DevelopmentServices from "../../components/Services/WebAppDevelopment/DevelopmentServices";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import highperfIcon from "../../assets/img/webDevelopmentService/highperformanceIcon.png";
import crossPltIcon from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";
import approachicon from "../../assets/img/webDevelopmentService/socialnetworkicon.png";
import verstileIcon from "../../assets/img/webDevelopmentService/versatileIcon.png";
import uiuximg from "../../assets/img/UIUximg.png";
import maintenanceIcon from "../../assets/img/maintenanceIcon.png";
import componentIcon from "../../assets/img/webDevelopmentService/webbaseddev.png"
import API from "../../assets/img/webDevelopmentService/API.png";

const VueDevelopment = () => {
    return (
        <>
            <Banner data={bannerTextData} />
            <WebPageDesc data={vueDescription} />
            <TechnologyAdv data={technologyAdv} />
            <DevelopmentServices data = {developmentService}/> 
            <FAQ data={faqData} />
        </>
    );
};

export default VueDevelopment;

const bannerTextData = {
    mainHeading: "Vue.js ",
    middleHeading: "Development Company",
    backgroundImage: ServiceBackgroudImage,
    rightImage: vueFrameworks,
    bottomHeading:
        "Unlock the power of Vue.js to build lightweight, high-performance applications that are scalable, secure, and future-ready. Our expert team is dedicated to delivering customized Vue.js solutions for businesses of all sizes.",
    button: "TALK TO OUR EXPERTS",
};

const vueDescription = {
    firstHeading: "Build next-level web app interface with",
    secondHeading: "Vue.js",
    description:
        ["Our Vue.js development services help you build lightweight, high-performance applications. Whether you're aiming for cross-platform compatibility, or looking to create custom, scalable solutions, our expert team delivers results that meet your unique business needs. Leveraging the power of Vue.js, we ensure intuitive UI, seamless integration, and optimized performance that drive your business forward."],
    button: "",
    image: VuejsDesc,
};

const technologyAdv = {
    firstHeading: "Unlock the Capabilities of the Vue.js Framework",
    secondHeading: "Scale Your Business with Vue.js",
    cardData: [
        {
            image: highperfIcon,
            title: "High-Performance",
            description:
                "Vue.js is lightweight, making code execution faster and improving performance, even with high traffic.",
        },
        {
            image: crossPltIcon,
            title: "Cross-Platform",
            description:
                "Vue enables cross-platform development, allowing you to use the same component syntax for websites and native mobile apps (iOS, Android).",
        },
        {
            image: approachicon,
            title: "Highly Approachable",
            description:
                "Built on standard HTML, CSS, and JavaScript, Vue.js is easy to understand, with intuitive APIs and well-documented guides.",
        },
        {
            image: verstileIcon,
            title: "Versatile",
            description:
                "Vue.js comes with an adaptable ecosystem, allowing developers to scale it from a small library to a feature-rich framework for custom solutions.",
        },
    ],
};

const developmentService = {
    heading : "Get all Vue JS development services under one roof",
    description: "At Haspper, we take pride in being a distinguished VueJS development company offering a myriad of services tailored to modern business needs.",
    cardData: [
        {
            icon: highperfIcon,
            title: "Performance Optimization",
            description: "We focus on optimizing Vue.js applications for speed and efficiency, employing best practices and advanced techniques to enhance load times and overall performance."
        },
        {
            icon: uiuximg,
            title: "UI/UX Development",
            description: "Harnessing the power of the latest Vue.js frameworks, we specialize in creating interactive UI designs and immersive web applications, ensuring a captivating user experience."
        },
        {
            icon: maintenanceIcon,
            title: "Maintenance and Support",
            description: "We offer comprehensive maintenance and support services for your Vue.js applications, ensuring they remain up-to-date and function smoothly in a dynamic environment."
        },
        {
            icon: componentIcon,
            title: "Component Development",
            description: "Our team specializes in building reusable and modular components with Vue.js, streamlining the development process and improving maintainability."
        },
        {
            icon: API,
            title: "API Integration",
            description: "We seamlessly integrate RESTful APIs and GraphQL into your Vue.js applications, enhancing functionality and ensuring smooth data interactions."
        },
    ]

};

const faqData = {
    faqItems: [
        {
            question: "Q. Why choose Vue.js for web development?",
            answer:
                "Vue.js offers high performance, cross-platform compatibility, and flexibility with an easy learning curve, making it a go-to choice for modern web apps.",
        },
        {
            question: "Q. What types of applications can be built with Vue.js?",
            answer:
                "With Vue.js, you can build everything from small-scale websites to enterprise-level web apps, including single-page applications, progressive web apps, and more.",
        },
        {
            question: "Q. How long does it take to develop a Vue.js application?",
            answer:
                "Development time varies based on project complexity, but most Vue.js projects can be developed between 2 to 6 months.",
        },
        {
            question: "Q. Is Vue.js suitable for large-scale applications?",
            answer:
                "Yes, Vue.js is scalable and can handle large-scale applications, thanks to its flexible architecture and modular design.",
        },
        {
            question: "Q. How cost-effective is Vue.js development?",
            answer:
                "Vue.js development is highly cost-effective due to its lightweight framework, ease of use, and reusability, reducing development time and costs.",
        },
    ],
};
