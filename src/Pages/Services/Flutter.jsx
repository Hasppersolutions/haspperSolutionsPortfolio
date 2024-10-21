import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mobileDevelopmentRight from "../../assets/img/Services/mobile-development-right.png";
import AiDescription from "../../components/Services/AiDescription";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import revenue from "../../assets/img/Services/ios/revenue.png";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";

const Android = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <FAQ data={faqData} />
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
  image: AiFeature,
};
const potentialData = {
  firstHeading: "Leverage The Potential",
  secondHeading: "of Flutter App Development",
  cardData: [
    {
      image: revenue,
      title: "Hot reload",
      description:
        "With a hot reload, it is possible to notice changes in the code instantly reflected on the UI. This expedites the process of working on the application’s outlook; in addition, it enables developers to resolve issues, which saves money and time.",
    },
    {
      image: revenue,
      title: "Native Performance",
      description:
        "Platform-specific widgets for Google Fuchsia, Android, and iOS are offered in Flutter. These widgets can be integrated into the Flutter application to use different platform-dependent functionalities. You can leverage existing Swift, Objective-C, and Java codes to access native capabilities like the camera and location. Therefore, Flutter makes it simple to use APIs and third-party integrations.",
    },
    {
      image: revenue,
      title: "Cross-platform development",
      description:
        "Flutter allows developers to write code that works on different platforms. Same code can be used to develop two different applications. The UI itself can be shared in addition to the UI code. Compared to maintaining several code bases for various platforms, maintaining a single codebase is much easier.",
    },
    {
      image: revenue,
      title: "Widget library",
      description:
        "In Flutter, everything is defined as a widget. Complex widgets can be created by Flutter and then customized to meet the app requirements. There are also built-in widgets that can be used. Examples of widget sets that offer a glitch-free user experience are the Cupertino bundle and Material Design.",
    },
    {
      image: revenue,
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
      icon: revenue,
      title: "Custom Flutter App Development",
      description:
        "Our team of Flutter app developers employs the flutter framework to create solutions that support your company’s needs and improve engagement. We quickly develop high-performance cross-platform apps by combining flutter’s game-changing value with our experience and insights.",
    },
    {
      icon: revenue,
      title: "UI/UX Design",
      description:
        "We build and implement cutting-edge UI/UX solutions based on flutter. With the use of Google’s Skia graphics and the platform-specific SDKs for flutter, we can create UIs that are easier to use and enhance user engagement.",
    },
    {
      icon: revenue,
      title: "API Development and Integration",
      description:
        "Our professionals design platform-specific APIs using flutter’s interloping abilities to increase the functionality of your apps and time-to-market. Our software solutions help you scale collaboration, creativity, and value to compete, supported by third-party connectors.",
    },
    {
      icon: revenue,
      title: "App Migration",
      description:
        "We are here for you if you want to migrate to flutter or upgrade to the most recent version. Our flutter migration services are specially designed to make your IT landscape as agile and effective as possible without sacrificing data or quality.",
    },
    {
      icon: revenue,
      title: "Flutter App Consulting",
      description:
        "To achieve ground-breaking results while improving productivity, our flutter consultants analyze your business requirements, explore the best solutions based on flutter, and develop the best strategy.",
    },
    {
      icon: revenue,
      title: "Maintenance and Support",
      description:
        "Our world-class development team assists you with all aspects of flutter app configuration and uses thorough examination to optimize functionality. To ensure complete uptime and sustainable performance, we also offer incremental upgrades.",
    },
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