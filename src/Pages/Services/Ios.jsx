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

const Ios = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <OutSourcing data={outSourcingData} />
      <FAQ data={faqData} />
    </>
  );
};

export default Ios;
const bannerTextData = {
  mainHeading: "iOS App",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mobileDevelopmentRight,
  bottomHeading:
    "We help you develop next-gen iOS Applications that are smart, secure and user friendly",
  button: "TALK TO OUR EXPERTS",
};
const aiDescriptionData = {
  firstHeading: "iOS App Development Services",
  secondHeading: "",
  description: `Developing an iOS app is one of the biggest achievements for small businesses, startups or even for enterprises. It helps you expand your business to a large number of iPhone users throughout the globe. Be it an eCommerce business, messaging platform, or even an e-learning platform iOS app development is the need of the hour.<br />
    You would need a Mac computer with the latest version of Xcode installed on the machine to develop an iOS application. It is an Integrated Development Environment by Apple Inc.<br />
    The next big thing is to have a team of skilled, experienced and dedicated developers.
You can count on us for this. We have a pool of iOS app developers, and designers having years of experience in consulting, designing and developing outstanding solutions for mobile. We help you build applications that run on macOS, iPad, wearables, tvOS and other Apple products including Apple Watch.`,
  button: "",
  image: AiFeature,
};
const potentialData = {
  firstHeading: "Leverage The Potential of",
  secondHeading: "iOS App Development",
  cardData: [
    {
      image: revenue,
      title: "Better Revenue",
      description:
        "iPhone apps provide a higher return on investment than Android apps. Developing iPhone apps allows businesses to get the most out of their investments. In terms of bringing a brand to success, the iPhone is a far more sophisticated option than Android, with better access to targeted people.",
    },
    {
      image: revenue,
      title: "Enhanced Security",
      description:
        "One of the major advantages of developing an iOS app is, that it ensures utmost security. No iPhone app can pass the review process without following all security guidelines issued by the Apple app store. It helps you protect from malware, viruses or any threats that can affect your business and operations. At the same time, it ensures the safety of the end user’s devices and data.",
    },
    {
      image: revenue,
      title: "Ultimate Customer Experience",
      description:
        "User experience is another advantage of having an iOS app. Since Apple has strict UI guidelines in place and every application has to follow them, it makes the mobile app smooth, intuitive, and bug-free, and delivers the ultimate user experience, every time!",
    },
    {
      image: revenue,
      title: "User Interface",
      description:
        "For any mobile application, user interface is the key to success. It should be easy for the end user to use, navigate to different screens, and make in-app purchases. Apple app store ensures all.",
    },
    {
      image: revenue,
      title: "Updated tools and technologies",
      description:
        "Apple provides an exceptional IDE (Integrated Development Environment) for iOS app development. iOS app developers use Apple’s Xcode to develop, test, and launch apps. Xcode offers an incredible user experience particularly when it comes to building the app’s visual layout and testing it on various screen sizes and device types.",
    },
  ],
};
const developmentServicesData = {
  heading: "Explore Our iOS App Development Services",
  cardData: [
    {
      icon: revenue,
      title: "iOS App UI/UX",
      description:
        "We have experienced UI developers to ensure beautifully crafted user interfaces for mobile applications that deliver a smooth user experience in every compatible device. This includes re-designing, producing wireframes, and prototyping, among other things.",
    },
    {
      icon: revenue,
      title: "Enterprise iOS Apps",
      description:
        "Since the user base and app functionalities are quite high for enterprises, application development for enterprise-level businesses needs special attention. For enterprise businesses, we assign the development to our senior developers with the supervision of solution architects and CTO.",
    },
    {
      icon: revenue,
      title: "iOS App Consulting",
      description:
        "Before, during and after the development, you may need to consult for new features in any modules, performance improvement or even for upgrading the app. We made it easy for all our clients to have free consultations with solution architects as and when needed. You just need to schedule a call with us.",
    },
    {
      icon: revenue,
      title: "Custom iOS Apps",
      description:
        "Every business has different models, geographical audiences, products and services. One code can not work for all. Thus you need to develop a custom application as per your requirements. An app that serves your purpose and helps grow your business.",
    },
    {
      icon: revenue,
      title: "Support and Maintenance",
      description:
        "We believe that timely updates, bug fixes, and maintenance are critical components of a successful project. Once you are onboarded with us for an iOS app development, we take care of every aspect for support, maintenance and future upgrades.",
    },
    {
      icon: revenue,
      title: "iOS App Testing",
      description:
        "Testing makes an app completely functional and ensures that it is running properly. The QA and testers in our team test every single module as the development progresses. The final product will be bug-free, will have no crash issues, and will have a great performance with the ultimate user experience.",
    },
  ],
};
const outSourcingData = {
  firstHeading: "Trust Us for All Your",
  secondHeading: "iOS App Development Needs",
  // description: "",
  cardData: [
    [
      {
        image: CodeLibrary,
        heading: "Experience with Various Versions of iOS, Swift, Objective-C and Xcode",
        description:
          "Our pool of highly skilled developers has the capability and experience to work with Swift versions 1.0 – 5.5, Xcode versions 6.3 – 13.4 and iOS versions 5.1.1 – 15.5. The most recent Objective-C version we are using is 2.0.",
      },
      {
        image: CodeLibrary,
        heading: "Experience with Numerous Libraries",
        description:
          "Our iOS team uses several libraries such as Alamofire, Agora RTC, Razorpay, Stripe, Charts, GoogleWebRTC, and Firebase.",
      },
    ],
    [
      {
        image: CodeLibrary,
        heading: "Custom Agile Process",
        description:
          "We follow an agile methodology that ensures full transparency, increases development speed and reduces risk.",
      },
      {
        image: CodeLibrary,
        heading: "End-To-End Service",
        description:
          "Once we onboard you, the entire development process is our responsibility. Be it requirement gathering, consulting, designing, development and testing, we take care of all. We even help you submit it to the app store.",
      },
    ],
    [
      {
        image: CodeLibrary,
        heading: "Built Various Types of Applications",
        description:
          "Our iOS developers have built a broad spectrum of applications ranging from Expense Tracking Applications (Track My Pocket), E-Learning App for (Oakridge International School), Chat Applications (AllChat) to Dating Apps (Canine Buds), E-Commerce applications, Online Food Ordering Applications, Sports Betting Applications, Job Portal application & News application.",
      },
      {
        image: CodeLibrary,
        heading: "App Store Submission",
        description:
          "Once the development is complete, the next big thing is to apply to the app store. It can be tricky sometimes. But, we take care of the entire process and do it for you. We will help you pass the review process and make it to the app store. It is inclusive of our services.",
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
