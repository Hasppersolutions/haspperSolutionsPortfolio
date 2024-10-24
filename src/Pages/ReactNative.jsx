import React from "react";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";
import FeaturesSection from "../components/Services/CrossPlatform/FeaturesSection";
import CardSection from "../components/Services/CrossPlatform/CardSection";
import Outsourcing from "../components/Services/CrossPlatform/OutSourcing";
import FAQ from "../components/Services/CrossPlatform/FAQ";
import Project from "../components/Services/CrossPlatform/Project";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
import ServiceBackgroudImage from "../assets/img/ServiceBackgroudImage.png";
import AiBannerIcon from "../assets/img/AiBannerIcon.png";
import AiFeature from "../assets/img/aiFeature.png";
import Potential from "../components/Services/Ios/Potential";
import revenue from "../assets/img/Services/ios/revenue.png";
import DevelopmentServices from "../components/Services/Ios/DevelopmentServices";
import CodeLibrary from "../assets/img/Services/CrossPlatform/CodeLibrary.svg";



const ReactNative = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <Outsourcing data={outSoutceData}/>
      <FAQ data={faqData} />
      <Project />
      <ServicesAndStaffing />
    </>
  );
};

export default ReactNative;
const bannerTextData = {
  mainHeading: "React Native",
  middleHeading: "App Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiBannerIcon,
  bottomHeading:
    "Harness the power of React Native to create incredible cross-platform Android and iOS apps",
  button: "Talk to our expert", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "React Native",
  secondHeading: "App Development Services",
  description: `React Native is a popular open-source UI framework that is based on JavaScript. It is used to build mobile applications for Android and iOS. One of the key features of React Native is that it allows developers to create a mobile app for various platforms by using a single codebase. 
  
  Launched by Facebook in 2015, the framework is used by tech giants like Facebook, Walmart, Instagram, Skype, Airbnb, Tesla, and so on. 
  
  In a short span, the framework has gained a lot of popularity for its unique features that make an attractive UI and engaging UX for apps.
  
  Haspper is one of the leading React Native app development companies that offers services you can rely on when creating mobile apps that add value to your business.`,
  button: "GET FREE DEMO",
  image: AiFeature,
};
const faqData = {
  faqItems: [
    {
      question:
        "Q. Why should I choose React Native over native app development?",
      answer:
        "React Native allows for faster development with reusable components, cross-platform capabilities, and a large developer community.",
    },
    {
      question: "Q. What's the difference between React and React Native?",
      answer:
        "React is used for building web applications, while React Native is for building mobile applications using native components.",
    },
    {
      question: "Q. How long does it take to build a React Native application?",
      answer:
        "The time to develop a React Native app depends on the complexity, but it typically takes around 2-6 months.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        "The cost of building an app using React Native varies depending on the app complexity, team size, and features.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        "The cost of building an app using React Native varies depending on the app complexity, team size, and features.",
    },
  ],
};

const potentialData = {
  firstHeading: "Leverage The Potential of",
  secondHeading: "React Native App Development Services",
  cardData: [
    {
      image: revenue,
      title: "Reusable Code",
      description:
        "It is possible to use a single codebase for both Android and iOS apps with React Native technology. This equates to significant time and costs savings in the development process.",
    },
    {
      image: revenue,
      title: "Native Performance",
      description:
        "Unlike Cordova or PhoneGap, the framework generates components that operate as native views, ensuring that app users enjoy the fast performance even when the app consumes a lot of resources.",
    },
    {
      image: revenue,
      title: "Cross Platform Framework",
      description:
        "Nothing compares to native apps in terms of user experience and efficiency. With React Native, developers can write code that runs natively on many platforms while maintaining a single codebase.",
    },
    {
      image: revenue,
      title: "Hot Reload",
      description:
        "React Native’s hot reload feature is connected to Hot Module Replacement (HMR). The HMR came into existence after the launch of the first reload option. This hot reload function has the advantage of effectively providing you with the same set of features and actions as before.",
    },
    {
      image: revenue,
      title: "Live Reload",
      description:
        "React Native allows you to view two different screens simultaneously.  You can modify codes on the first screen and you can see the results of your changes on the second screen. Android mobile app developers are well aware of the value of this feature.",
    },
    {
      image: revenue,
      title: "Strong Community",
      description:
        "React Native has become one of the favorite tech stacks for developers since its launch. It has large and active community support in cross-platform mobile app development. The community ensures that no question remains unanswered.",
    },
    {
      image: revenue,
      title: "Quick Time to Market",
      description:
        "React Native considerably reduces coding efforts because the majority of the code can be shared between the iOS and Android versions, cutting development time in half. It also comes with pre-built components for multiple functions.",
    },
  ],
};
const developmentServicesData = {
  heading: "Our React Native App Development Services at a Glance",
  description: "We provide a comprehensive set of capabilities for developing apps that have the look, feel, functionality, and performance of native apps.",
  cardData: [
    {
      icon: revenue,
      title: "Support and Maintenance",
      description:
        "To provide complete support and maintenance, OnGraph employs an innovative and efficient app monitoring system. Response times, crash metrics, and system uptime are all monitored to ensure that the app is meeting your real-world business goals.",
    },
    {
      icon: revenue,
      title: "MVP Development",
      description:
        `We use React Native to build MVPs for companies so that they can have a cost-effective, faster-to-market app with only the most basic functionalities. By employing MVP development, you may win over customers and consistently deliver a superior product.`,
    },
    {
      icon: revenue,
      title: "Custom Mobile Apps",
      description:
        "Our primary goal is to guide our clients through the entire process, from concept to implementation in the form of a unique app solution. We provide seamless cross-platform apps that meet all of our client’s specific demands and expectations.",
    },
    {
      icon: revenue,
      title: "React Native Development and Design",
      description:
        "We combine the skills of developers with your cutting-edge mobile app ideas to develop a high-performing app. From designing an attractive UI to developing a versatile cross-platform app for Android and iOS, we have got you covered.",
    },
    {
      icon: revenue,
      title: "React Native Consulting",
      description:
        "If you have any kind of confusion related to the mobile app development process or React Native framework, you are at the right place. Our React Native consultants guide you and provide you with the most suitable methodology according to your business requirements.",
    },
    {
      icon: revenue,
      title: "React Native Migration",
      description:
        "TOur React Native app developers are always there if you ever change your mind and plan to migrate your present app to React Native. Hire dedicated React Native app developers with us to upgrade your app.",
    },

  ],
};
const outSoutceData = {
  firstHeading: "Why Choose Us",
  secondHeading: "as Your React Native outsourcing Partner?",
  // description: "",
  cardData: [
    {
      image: CodeLibrary,
      heading: "Proficient React Developers",
      description:
        "We have experienced React Native developers capable of building highly scalable mobile applications.",
    },
    {
      image: CodeLibrary,
      heading: "Up-to-dated developers",
      description:
        "Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1 and native versions 0.61-0.63",
    },
    {
      image: CodeLibrary,
      heading: "Various Libraries",
      description:
        "Our React Native team works with multiple React libraries such as material-ui, stripe, chart.js, lodash, j moment, bootstrap, firebase, react-chart-js2, push-notification, react-native-voice, semantic-ui, google-maps-react, amplitude-js, and server-timing.",
    },
    {
      image: CodeLibrary,
      heading: "Variety of apps",
      description:
        "Our React Native developers have created a wide range of applications for social media, e-gaming, e-learning, eCommerce, Shopify, health, and many more.",
    },
    {
      image: CodeLibrary,
      heading: "Timely delivery",
      description:
        "At OnGraph we strictly follow timelines and try to deliver defect-free, well optimized solutions, every time!",
    },
    {
      image: CodeLibrary,
      heading: "Seamless Support",
      description:
        "Be it pre or post development issues or bugs, we are here to help you out. You just need to raise a support ticket with the concerned project manager and our technical support team will be assigned to it within an hour.",
    },
    {
      image: CodeLibrary,
      heading: "Enterprise Applications",
      description:
        "Enterprises need exceptional solutions that can cater millions of users without compromising on the user experience. Keeping this in mind, we employ highly experienced and dedicated developers to build powerful and robust applications for enterprise level businesses.",
    },
    {
      image: CodeLibrary,
      heading: "Competitive Pricing",
      description:
        "Another feature that distinguishes us is our competitive price, as we believe in providing services that are worth the money.",
    },
  ],
};
