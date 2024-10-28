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
import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing";
import CodeLibrary from "../../assets/img/Services/CrossPlatform/CodeLibrary.svg";
import backgroundImg from "../../assets/img/Services/android/backgroundImg.png"
import aiImg from "../../assets/img/Services/android/aiImg.png"

import card1 from "../../assets/img/Solutions/Voicebot/card1.png"
import card2 from "../../assets/img/Solutions/Voicebot/outsource2.png"
import card3 from "../../assets/img/Solutions/SoftwareSupport/potential2.png"
import card6 from "../../assets/img/Solutions/SoftwareSupport/card4.png"
import card5 from "../../assets/img/Solutions/Operation/card6.png"
import card4 from "../../assets/img/Solutions/Operation/desc4.png"

import desc1 from "../../assets/img/Solutions/Marketplace/source5.png"
import desc2 from "../../assets/img/Solutions/SoftwareSupport/potential1.png"
import desc3 from "../../assets/img/Solutions/Marketplace/source1.png"
import desc4 from "../../assets/img/Solutions/Marketplace/process7.png"
import desc5 from "../../assets/img/Solutions/Marketplace/process6.png"

import outsource3 from "../../assets/img/Services/ios/card1.png"
import outsource2 from "../../assets/img/Services/ios/app3.png"
import outsource1 from "../../assets/img/Services/ios/app2.png"
import outsource5 from "../../assets/img/Services/CrossPlatform/React/desc5.png"
import outsource6 from "../../assets/img/Services/CrossPlatform/React/desc6.png"
import outsource4 from "../../assets/img/Services/CrossPlatform/Pricing.svg"

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
  mainHeading: "Android App Development Company",
  middleHeading: "",
  backgroundImage: ServiceBackgroudImage,
  rightImage: backgroundImg,
  bottomHeading:
    "Helping businesses reach a wider audience through our most dynamic Android app development services",
  button: "TALK TO OUR EXPERTS",
};
const aiDescriptionData = {
  firstHeading: "Android",
  secondHeading: "App Development Services",
  description: `Android is a widely installed platform among other platforms around the globe. The operating system is ruling the global market and this trend is only rising with each passing day. <br />
    Android is an open-source and Linux-based operating system that is used to build powerful and robust mobile applications. <br />
    Google says, using the Android SDK, Android applications can be coded using Kotlin, Java, and C++ languages, while using other languages is also possible.<br />
    Being a leading Android app development company, OnGraph works closely with businesses to know their app idea, business objectives, and app requirements to develop a detailed roadmap for creating tailor-made mobile apps. `,
  button: "",
  image: aiImg,
};
const potentialData = {
  firstHeading: "Why choose",
  secondHeading: "Android app development?",
  cardData: [
    {
      image: card1,
      title: "User Interface",
      description:
        "The UI of Android OS is quite easy and simple therefore it makes it very user-friendly. Also, the UI of Android is customizable.",
    },
    {
      image: card2,
      title: "Multiple Language Support",
      description:
        "Android has multiple language support in its OS. Users can change the language as per their requirements. The international languages supported by Android are English, Chinese, French, German, Korean, and so on.",
    },
    {
      image: card3,
      title: "Scalable and Versatile",
      description:
        "The scalability and flexibility of Android have increased since the introduction of Android Studio. Using Android Studio, you can integrate your Android app with the entire Android ecosystem, including tablets, smartphones, Android TV, and wearables.",
    },
    {
      image: card4,
      title: "Scope for innovation",
      description:
        "The Android platform’s greatest strength is its global reach. If you wish to target a specific audience with innovative features, Android app developers can assist you by using advanced tools and technological innovations.",
    },
    {
      image: card5,
      title: "Growing platform",
      description:
        "Android is a platform that will never stop growing due to its large community support. Several well-known companies manufacture Android smartphones. They continue to introduce new features to remain competitive and the Android developer community quickly adapts them.",
    },
    {
      image: card6,
      title: "Easy Customization",
      description:
        "Android is a versatile platform with a bunch of customization options. All you get is a unique and intriguing mobile app with a variety of features. This platform addresses your business requirements and provides you with tailor-made app solutions.",
    },
  ],
};
const developmentServicesData = {
  heading:
    "We turn your ideas into reality with our Android app development services",
  description:
    "To meet the requirements of our clients and provide high-quality Android app development services, our Android developers use a wide range of programming languages and frameworks such as Java, React Native, Flutter, Kotlin, C++, and so on.",
  cardData: [
    {
      icon: desc1,
      title: "Design and development",
      description:
        "Having more than a decade of experience in Android app development, our team of dedicated developers adds icons, features, and graphics to the app. Also, the team adds the required functions and elements to make the app full-fledged and cutting-edge. ",
    },
    {
      icon: desc2,
      title: "Android app consultation",
      description:
        "Our Android app consultants have significant years of experience in the market and give you the best advice on different aspects of Android app development. .",
    },
    {
      icon: desc3,
      title: "Custom android app development",
      description:
        "We have a team of dedicated android app developers who hold expertise in building scalable and robust mobile apps. According to the business requirements provided by you, we create custom android solutions to help you reach the top.",
    },
    {
      icon: desc4,
      title: "Support and maintenance",
      description:
        "Apart from feature-rich android app development services, we also provide 24/7 support and maintenance to our clients. Our team makes sure that none of your queries remain unresolved. ",
    },
    {
      icon: desc5,
      title: "QA and testing",
      description:
        "We have a team of QA experts to make sure that your app is glitch-free and has zero errors. They will always keep an eye on the app to see if the app is performing smoothly on all the dedicated platforms.  ",
    },
  ],
};
const outSourcingData = {
  firstHeading: "Why to choose our",
  secondHeading: "Android app development services?",
  cardData: [
    [
      {
        image: outsource1,
        heading: "Reliable and skilled developers",
        description:
          "We have the finest and most reliable team of in-house developers who will work dedicatedly to build an app that will be loved worldwide.",
      },
      {
        image: outsource2,
        heading: "Agile Methodology",
        description:
          "We follow agile methodology to help deliver the project in a timely manner and get feedback on every stage of development to ensure optimum, defect-free deliveries. ",
      },
    ],
    [
      {
        image: outsource3,
        heading: "Competitive Cost",
        description:
          "In comparison to other companies, our low operating costs make us incredibly reasonable. We give adequate resources at a significantly reduced price.",
      },
      {
        image: outsource4,
        heading: "Result Oriented",
        description:
          "Our top priority is to focus on your goals and help you achieve them online. We guarantee you exceptional results, including increased traffic, enhanced brand loyalty, and a large number of new leads.",
      },
    ],
    [
      {
        image: outsource5,
        heading: "24×7 Assistance",
        description:
          "As an offshore provider, we understand the need for time zone alignment and provide support in your time zone.",
      },
      {
        image: outsource6,
        heading: "Full transparency",
        description:
          "We offer transparency through the development process. Therefore, we keep our clients updated about the progress of the project and take suggestions at every step. We keep the process easy and simple to avoid any further issues.",
      },
    ],
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
  ],
};
