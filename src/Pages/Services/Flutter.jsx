import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mobileDevelopmentRight from "../../assets/img/Services/flutter/backgroundImg.png";
import AiDescription from "../../components/Services/AiDescription";
import aiImg from "../../assets/img/Services/flutter/aiImg.png";
import Potential from "../../components/Services/Ios/Potential";
import revenue from "../../assets/img/Services/ios/revenue.png";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing";
import CodeLibrary from "../../assets/img/Services/CrossPlatform/CodeLibrary.svg";
import card1 from "../../assets/img/Services/CrossPlatform/React/card1.png"
import card2 from "../../assets/img/Services/CrossPlatform/React/card2.png"
import card3 from "../../assets/img/Services/CrossPlatform/React/desc2.png"
import card4 from "../../assets/img/Services/CrossPlatform/React/desc6.svg"
import card5 from "../../assets/img/Services/CrossPlatform/React/run1.png"


import desc1 from "../../assets/img/Solutions/Marketplace/source5.png"
import desc2 from "../../assets/img/Solutions/SoftwareSupport/potential1.png"
import desc3 from "../../assets/img/Solutions/Marketplace/source1.png"
import desc4 from "../../assets/img/Solutions/Marketplace/process7.png"
import desc5 from "../../assets/img/Solutions/Marketplace/process6.png"
import desc6 from "../../assets/img/Services/CrossPlatform/React/run5.png"

import process1 from "../../assets/img/Services/flutter/process1.png";
import process2 from "../../assets/img/Services/flutter/process2.png";
import process3 from "../../assets/img/Services/flutter/process3.png";
import process4 from "../../assets/img/Services/flutter/process4.png";
import process5 from "../../assets/img/Services/flutter/process5.png";
import process6 from "../../assets/img/Services/flutter/process6.png";
import process7 from "../../assets/img/Services/flutter/process7.png";

import { Contact } from "../../components/Homepage/Contact";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
const Android = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <OutSourcing data={outSourcingData} />
      <FAQ data={faqData} />
      <Contact/>
      <Mailus/>
      <ServicesAndStaffing/>
    </>
  );
};

export default Android;
const bannerTextData = {
  mainHeading: "Flutter App Development Company",
  middleHeading: "",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mobileDevelopmentRight,
  bottomHeading:
    "Build scalable, rich, and feature-loaded applications using the business logic and tech skills of our Flutter app developers. We are top flutter app development company specializes in creating cost-effective and efficient applications.",
  button: "TALK TO OUR EXPERTS",
};
const aiDescriptionData = {
  firstHeading: "Build Your Next Mobile App With",
  secondHeading: "Flutter App Development Company",
  description: `Created by Google in 2017, Flutter is an open-source, cross-platform application development framework. It is used to develop native iOS, Android, and web applications, high-quality apps, without having to write the code for the two apps separately. With Flutter App Development, you need only one codebase for both platforms. Not only this but also it speeds up <a href='' class='link'>mobile app development</a>, reduces bugs, and increases your ROI.<br />
    The Dart programming language, which was also created by Google, forms the foundation of the Flutter SDK. <br />
    Since its release, the open-source framework Flutter has attracted a large and active developer community. This community continuously publishes helpful code samples and helps programmers in creating new, creative, stunning cross-platform applications.`,
  button: "",
  image: aiImg,
};
const potentialData = {
  firstHeading: "Leverage The Potential",
  secondHeading: "of Flutter App Development",
  cardData: [
    {
      image: card1,
      title: "Hot reload",
      description:
        "With a hot reload, it is possible to notice changes in the code instantly reflected on the UI. This expedites the process of working on the application’s outlook; in addition, it enables developers to resolve issues, which saves money and time.",
    },
    {
      image: card2,
      title: "Native Performance",
      description:
        "Platform-specific widgets for Google Fuchsia, Android, and iOS are offered in Flutter. These widgets can be integrated into the Flutter application to use different platform-dependent functionalities. You can leverage existing Swift, Objective-C, and Java codes to access native capabilities like the camera and location. Therefore, Flutter makes it simple to use APIs and third-party integrations.",
    },
    {
      image: card3,
      title: "Cross-platform development",
      description:
        "Flutter allows developers to write code that works on different platforms. Same code can be used to develop two different applications. The UI itself can be shared in addition to the UI code. Compared to maintaining several code bases for various platforms, maintaining a single codebase is much easier.",
    },
    {
      image: card4,
      title: "Widget library",
      description:
        "In Flutter, everything is defined as a widget. Complex widgets can be created by Flutter and then customized to meet the app requirements. There are also built-in widgets that can be used. Examples of widget sets that offer a glitch-free user experience are the Cupertino bundle and Material Design.",
    },
    {
      image: card5,
      title: "Open-source",
      description:
        "Flutter was introduced as an open-source platform by Google. To create Flutter applications, developers can explore a variety of design alternatives. Flutter is free to use and has comprehensive documentation and communities available online. Its active and supportive community is always available to answer and discuss questions related to the Flutter framework.",
    },
  ],
};
const developmentServicesData = {
  heading: "Flutter App Development Services Offered by Us",
  description: "",
  cardData: [
    {
      icon: desc1,
      title: "Custom Flutter App Development",
      description:
        "Our team of Flutter app developers employs the flutter framework to create solutions that support your company’s needs and improve engagement. We quickly develop high-performance cross-platform apps by combining flutter’s game-changing value with our experience and insights.",
    },
    {
      icon: desc5,
      title: "UI/UX Design",
      description:
        "We build and implement cutting-edge UI/UX solutions based on flutter. With the use of Google’s Skia graphics and the platform-specific SDKs for flutter, we can create UIs that are easier to use and enhance user engagement.",
    },
    {
      icon: desc3,
      title: "API Development and Integration",
      description:
        "Our professionals design platform-specific APIs using flutter’s interloping abilities to increase the functionality of your apps and time-to-market. Our software solutions help you scale collaboration, creativity, and value to compete, supported by third-party connectors.",
    },
    {
      icon: desc4,
      title: "App Migration",
      description:
        "We are here for you if you want to migrate to flutter or upgrade to the most recent version. Our flutter migration services are specially designed to make your IT landscape as agile and effective as possible without sacrificing data or quality.",
    },
    {
      icon: desc2,
      title: "Flutter App Consulting",
      description:
        "To achieve ground-breaking results while improving productivity, our flutter consultants analyze your business requirements, explore the best solutions based on flutter, and develop the best strategy.",
    },
    {
      icon: desc6,
      title: "Maintenance and Support",
      description:
        "Our world-class development team assists you with all aspects of flutter app configuration and uses thorough examination to optimize functionality. To ensure complete uptime and sustainable performance, we also offer incremental upgrades.",
    },
  ],
};
const outSourcingData = {
  firstHeading: "Why choose us for all your",
  secondHeading: "Flutter app development needs?",
  cardData: [
    [
      {
        image: process1,
        heading: "On-time Delivery",
        description:
          "Our developers understand the value of time and business requirements and therefore plan the tasks accordingly. We divide tasks according to deadlines and uphold the principle of always delivering the Flutter app on time!",
      },
      {
        image: process2,
        heading: "Secure Apps",
        description:
          "These days, apps are more exposed to security risks and breaches since they are frequently accessible over many networks and connected to the cloud. In light of this, we design mobile apps with cutting-edge security and privacy features.",
      },
    ],
    [
      {
        image: process3,
        heading: "Quality Solutions",
        description:
          "One important aspect is on-time delivery. The quality of the application is the other. By compromising the quality of the app, it serves no purpose to deliver it on time. Our skilled developers not only deliver on time but also take care of the quality of the app.",
      },
      {
        image: process4,
        heading: "Flutter app Development Expertise",
        description:
          "Our Flutter app development team holds experience in deploying Flutter apps to various sectors and for a wide range of use cases. Knowing this, they are aware of the potential pros and cons of Flutter app development and prepare the process accordingly.",
      },
    ],
    [
      {
        image: process5,
        heading: "Successful Methodologies",
        description:
          "Our flutter app development agency believes that success comes by following a streamlined process with proven methodologies. Keeping this in mind, our experts follow proven approaches and agile methodology to fulfill the client’s requirements.",
      },
      {
        image: process6,
        heading: "Active Support & Maintenance",
        description:
          "We provide both pre and post-launch support. To ensure that the app ideas are thoroughly validated before the web app development and the app has no potential errors after launch. Additionally, we provide free app maintenance for a limited time after which you have to pay a reasonable fee for our support and maintenance services.",
      },
    ],
    [
      {
        image: process7,
        heading: "Skilled and Experienced Developers",
        description: "When we say that we have the industry-best team of Flutter app developers, we mean it. They are well-skilled and experienced to succeed in any professional environment. They are trained to create high-quality apps with rich features and can manage any challenge that comes in the way.",
      }
    ]
  ],
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
  ]
}