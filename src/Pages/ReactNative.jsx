import React from "react";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";
import Outsourcing from "../components/Services/CrossPlatform/OutSourcing";
import FAQ from "../components/Services/CrossPlatform/Ionic/FAQ";
import Project from "../components/Services/CrossPlatform/Project";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
import ServiceBackgroudImage from "../assets/img/ServiceBackgroudImage.png";import AiBannerIcon from "../assets/img/AiBannerIcon.png";
import Potential from "../components/Services/Ios/Potential";
import DevelopmentServices from "../components/Services/Ios/DevelopmentServices";

import Mailus from "../components/Homepage/Mailus";
import { Contact } from "../components/Homepage/Contact";
import bgImg from "../assets/img/Services/Background.svg"
import reactImg from "../assets/img/Services/React.png"

import card1 from "../assets/img/Services/CrossPlatform/React/card1.png"
import card2 from "../assets/img/Services/CrossPlatform/React/card2.png"
import card3 from "../assets/img/Services/CrossPlatform/React/card3.png"
import card4 from "../assets/img/Services/CrossPlatform/React/card4.png"
import card5 from "../assets/img/Services/CrossPlatform/React/card5.png"
import card6 from "../assets/img/Services/CrossPlatform/React/card6.png"
import card7 from "../assets/img/Services/CrossPlatform/React/card7.png"


import desc1 from "../assets/img/Services/CrossPlatform/React/desc1.png"
import desc2 from "../assets/img/Services/CrossPlatform/React/desc2.png"
import desc3 from "../assets/img/Services/CrossPlatform/React/desc3.png"
import desc4 from "../assets/img/Services/CrossPlatform/React/desc4.png"
import desc5 from "../assets/img/Services/CrossPlatform/React/desc5.png"
import desc6 from "../assets/img/Services/CrossPlatform/React/desc6.png"

import VariteyApp from '../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../assets/img/Services/CrossPlatform/Mission.svg';
import EnterpriseApplication from '../assets/img/Services/CrossPlatform/EnterpriceApplication.svg'
import Pricing from '../assets/img/Services/CrossPlatform/Pricing.svg';
import run5 from "../assets/img/Services/CrossPlatform/React/run5.png"

import run1 from "../assets/img/Services/CrossPlatform/React/run1.png"
import run2 from "../assets/img/Services/CrossPlatform/React/run3.png"
const ReactNative = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <Outsourcing data={outSoutceData} />
      <FAQ data={faqData} />
      <Project data={projectIdeaData}/>
      <Contact/>
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default ReactNative;
const bannerTextData = {
  mainHeading: "React Native",
  middleHeading: "App Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: bgImg,
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
  image: reactImg,
};
const faqData = {
  faqItems: [
    {
      question:
        "Q. Why should I choose React Native over native app development?",
      answer:
        "React Native is a cross-platform app development framework that uses a single codebase to develop apps for both iOS and Android. Thus, it makes the development and maintenance very easy as you don’t have to code differently for other platforms. Also React Native offers a native-like interface which ultimately gives a better user experience.  You don’t need to have two different teams for developing an app, rather a single team can develop the app which works well for both platforms, allowing you to save resources, time and money.",
    },
    {
      question: "Q. What's the difference between React and React Native?",
      answer:
        "React is a JavaScript library that is used to create web app user interfaces. React Native, on the other hand, is a React extension that can be used to create mobile apps for Android and iOS.",
    },
    {
      question: "Q. How long does it take to build a React Native application?",
      answer:
        "It depends on the size of your React Native development project, as well as the app’s design, features, and goal. Please contact us by email or chat for more information, and we will respond as soon as possible.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        "It completely depends on the scope, features and the experience of the team of  developers you are going to work with. As every business has different tasks to achieve by the mobile application, it’s better to schedule a free consultation with one of our solution architects to discuss the requirements, expectations and timelines to evaluate the cost of the development.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        `We will help you do that. Having developed an app using React Native enables you with many benefits such as saving time to develop and money. 
        
        We will try to cut down the code written in the native app and update the libraries to latest versions, Execute custom native modules, Add assets to the React Native app and a couple of more things. But it is better to code afresh if the existing code has many flaws to be fixed.`,
    },
  ],
};

const potentialData = {
  firstHeading: "Leverage The Potential of",
  secondHeading: "React Native App Development Services",
  cardData: [
    {
      image: card1,
      title: "Reusable Code",
      description:
        "It is possible to use a single codebase for both Android and iOS apps with React Native technology. This equates to significant time and costs savings in the development process.",
    },
    {
      image: card2,
      title: "Native Performance",
      description:
        "Unlike Cordova or PhoneGap, the framework generates components that operate as native views, ensuring that app users enjoy the fast performance even when the app consumes a lot of resources.",
    },
    {
      image: card3,
      title: "Cross Platform Framework",
      description:
        "Nothing compares to native apps in terms of user experience and efficiency. With React Native, developers can write code that runs natively on many platforms while maintaining a single codebase.",
    },
    {
      image: card4,
      title: "Hot Reload",
      description:
        "React Native’s hot reload feature is connected to Hot Module Replacement (HMR). The HMR came into existence after the launch of the first reload option. This hot reload function has the advantage of effectively providing you with the same set of features and actions as before.",
    },
    {
      image: card5,
      title: "Live Reload",
      description:
        "React Native allows you to view two different screens simultaneously.  You can modify codes on the first screen and you can see the results of your changes on the second screen. Android mobile app developers are well aware of the value of this feature.",
    },
    {
      image: card6,
      title: "Strong Community",
      description:
        "React Native has become one of the favorite tech stacks for developers since its launch. It has large and active community support in cross-platform mobile app development. The community ensures that no question remains unanswered.",
    },
    {
      image: card7,
      title: "Quick Time to Market",
      description:
        "React Native considerably reduces coding efforts because the majority of the code can be shared between the iOS and Android versions, cutting development time in half. It also comes with pre-built components for multiple functions.",
    },
  ],
};
const developmentServicesData = {
  heading: "Our React Native App Development Services at a Glance",
  description:
    "We provide a comprehensive set of capabilities for developing apps that have the look, feel, functionality, and performance of native apps.",
  cardData: [
    {
      icon: desc1,
      title: "Support and Maintenance",
      description:
        "To provide complete support and maintenance, haspper employs an innovative and efficient app monitoring system. Response times, crash metrics, and system uptime are all monitored to ensure that the app is meeting your real-world business goals.",
    },
    {
      icon: desc2,
      title: "MVP Development",
      description: `We use React Native to build MVPs for companies so that they can have a cost-effective, faster-to-market app with only the most basic functionalities. By employing MVP development, you may win over customers and consistently deliver a superior product.`,
    },
    {
      icon: desc3,
      title: "Custom Mobile Apps",
      description:
        "Our primary goal is to guide our clients through the entire process, from concept to implementation in the form of a unique app solution. We provide seamless cross-platform apps that meet all of our client’s specific demands and expectations.",
    },
    {
      icon: desc4,
      title: "React Native Development and Design",
      description:
        "We combine the skills of developers with your cutting-edge mobile app ideas to develop a high-performing app. From designing an attractive UI to developing a versatile cross-platform app for Android and iOS, we have got you covered.",
    },
    {
      icon: desc5,
      title: "React Native Consulting",
      description:
        "If you have any kind of confusion related to the mobile app development process or React Native framework, you are at the right place. Our React Native consultants guide you and provide you with the most suitable methodology according to your business requirements.",
    },
    {
      icon: desc6,
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
    [
      {
        image: run1,
        heading: "Proficient React Developers",
        description:
          "We have experienced React Native developers capable of building highly scalable mobile applications.",
      },
      {
        image: Mission,
        heading: "Up-to-dated developers",
        description:
          "Our team of experienced developers has the capability and skills of working with React versions 16.9-18.1 and native versions 0.61-0.63",
      },
    ],
    [
      {
        image: run2,
        heading: "Various Libraries",
        description:
          "Our React Native team works with multiple React libraries such as material-ui, stripe, chart.js, lodash, j moment, bootstrap, firebase, react-chart-js2, push-notification, react-native-voice, semantic-ui, google-maps-react, amplitude-js, and server-timing.",
      },
      {
        image: VariteyApp,
        heading: "Variety of apps",
        description:
          "Our React Native developers have created a wide range of applications for social media, e-gaming, e-learning, eCommerce, Shopify, health, and many more.",
      },
    ],
    [
      {
        image: TimelyDilevery,
        heading: "Timely delivery",
        description:
          "At haspper we strictly follow timelines and try to deliver defect-free, well optimized solutions, every time!",
      },
      {
        image: run5,
        heading: "Seamless Support",
        description:
          "Be it pre or post development issues or bugs, we are here to help you out. You just need to raise a support ticket with the concerned project manager and our technical support team will be assigned to it within an hour.",
      },
    ],
    [
      {
        image: EnterpriseApplication,
        heading: "Enterprise Applications",
        description:
          "Enterprises need exceptional solutions that can cater millions of users without compromising on the user experience. Keeping this in mind, we employ highly experienced and dedicated developers to build powerful and robust applications for enterprise level businesses.",
      },
      {
        image: Pricing,
        heading: "Competitive Pricing",
        description:
          "Another feature that distinguishes us is our competitive price, as we believe in providing services that are worth the money.",
      },
    ],
  ],
};
const projectIdeaData = {
  mainHeading: "HAVE AN",
  secondHeading: "AWESOME PROJECT IDEA",
  description: "AND NOT SURE HOW TO GET STARTED?",
  buttonText: "TALK TO OUR EXPERTS",
  buttonLink: "",
};
