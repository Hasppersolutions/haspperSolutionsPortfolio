import React from "react";
import Banner from "../components/Services/Banner";
import AiDescription from "../components/Services/AiDescription";
import Outsourcing from "../components/Services/CrossPlatform/OutSourcing";
import FAQ from "../components/Services/CrossPlatform/Ionic/FAQ";
import Project from "../components/Services/CrossPlatform/Project";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
import ServiceBackgroudImage from "../assets/img/ServiceBackgroudImage.png";
import AiBannerIcon from "../assets/img/AiBannerIcon.png";
import AiFeature from "../assets/img/aiFeature.png";
import Potential from "../components/Services/Ios/Potential";
import revenue from "../assets/img/Services/ios/revenue.png";
import DevelopmentServices from "../components/Services/Ios/DevelopmentServices";
import CodeLibrary from "../assets/img/Services/CrossPlatform/CodeLibrary.svg";
import Mailus from "../components/Homepage/Mailus";
import ionic from "../assets/img/Services/ionic.png";
const Ionic = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
      <Outsourcing data={outSoutceData} />
      <FAQ data={faqData} />
      <Project data={projectIdeaData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Ionic;
const bannerTextData = {
  mainHeading: "Ionic App",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiBannerIcon,
  bottomHeading:
    "Ionic helps you build full-fledged iOS and Android App Development using the same code base.",
  button: "Talk to our expert", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "What is Ionic App",
  secondHeading: "Development?",
  description: `Created by Drifty Co. in 2013, Ionic is an Open-Source SDK for cross-platform Mobile App Development. The initial alpha version of Ionic was released in November 2013 followed by the beta 1.0 in March 2014. Using familiar web libraries, frameworks, and languages, Ionic provides a set of tools that help developers to build native iOS, Android, and progressive web applications.

Backed by a dedicated team of Ionic developers we at OnGraph help you build outstanding cross-platform application development that works perfectly in Android, iOS, and progressive web. Get in touch with us today for a free consultation and start your Ionic development.`,
  button: "GET FREE DEMO",
  image: ionic,
};
const faqData = {
  faqItems: [
    {
      question:
        "Q. How can I ascertain Ionic is the right platform for my application development?",
      answer:
        "It depends on the project requirements. Ionic builds outstanding cross-platform mobile, web, and desktop applications using one single code base and open web standard. So, if you want to develop an application that works for mobile, web, and desktop Ionic is the perfect option for you.",
    },
    {
      question: "Q. Will I get the source code of the project?",
      answer:
        "Yes, you are the sole owner of the source code of the application developed by us. It includes intellectual property rights. You can re-use, modify or develop any other application using this code.",
    },
    {
      question: "Q. How do I hire a dedicated developer?",
      answer:
        "We’ll help you select a suitable developer for your project. Based on the requirements, we will arrange interviews with your technical team and you can choose if the developer certainly meets your requirements. Once you finalize, the developer will work dedicatedly on your project only.",
    },
    {
      question:
        "Q. What are the pricing models to develop an Ionic application?",
      answer: `There are primality 3 pricing models
        Dedicate team- If your project requires complete attention and you want to complete the development in a specific timeline, go with a dedicated team of developers.
        Controlled Agile- If there is a budget constraint, and you might need some changes in the future, the agile model suits you well.
        Time and Material – If the requirements are not clearly defined and there may be changes in the scope of your project, go with the cost per hour of development. It will help you save money and you will be just paying for the hours we work for you.`,
    },
    {
      question:
        "Q. How do you assure quality of the code and the entire project",
      answer: `Be assured of the quality and testing part. Once a module is developed, our internal QA team will thoroughly test the code if everything is working properly or not. It will then only push to the production server.

          There will be several other tests by the QA and UI/UX teams to ascertain if everything looks great.`,
    },
  ],
};

const potentialData = {
  firstHeading: "Why choose",
  secondHeading: "Ionic App Development?",
  cardData: [
    {
      image: revenue,
      title: "Single codebase",
      description:
        "Write once, use anywhere- the first and foremost feature of Ionic is the shared code base. It saves you time, money, and effort and you can develop native iOS, Android, and web applications using the same code base.",
    },
    {
      image: revenue,
      title: "Quick Development",
      description:
        "Ionic offers quick development compared to native iOS and Android development.",
    },
    {
      image: revenue,
      title: "Plugins",
      description:
        "There are plenty of plugins available in Ionic that allow you to use the features of smartphones such as camera, geolocation, NFC, fingerprint sensors, etc.",
    },
    {
      image: revenue,
      title: "User interface",
      description:
        "Thanks to the wide range of web libraries Ionic provides platform-specific user interface (UI) elements for iOS, Android, and progressive applications.",
    },
    {
      image: revenue,
      title: "Easy testing",
      description:
        "Mobile app testing is far easier with Ionic. You could test in on a desktop browser or even perform simulator testing for both iOS and Android apps using Cordova commands.",
    },
    {
      image: revenue,
      title: "Large community",
      description:
        "The best part about the Ionic Framework is that it has a large and active community that is eager to help on different forums or specialized YouTube channels.",
    },
  ],
};
const developmentServicesData = {
  heading:
    "Build Feature-rich Mobile Applications with our Ionic App Development Services",
  description: "",
  cardData: [
    {
      icon: revenue,
      title: "Custom Ionic App Development",
      description:
        "Get us your requirement and our solution architects will formulate a custom application development for you. It will have customized features based on audience requirements and will offer optimum solutions.",
    },
    {
      icon: revenue,
      title: "Ionic App Design",
      description: `App designers with decades of experience will be working dedicatedly to design each screen of the application and maintain consistency throughout the entire application.`,
    },
    {
      icon: revenue,
      title: "Support & Maintenance",
      description:
        "We ensure support and maintenance services during and even after the development process. In case of any future enhancements in any module of the application or any maintenance, up-gradation we will be on standby for you.",
    },
    {
      icon: revenue,
      title: "QA and Testing",
      description:
        "We have an experienced team of QA engineers to ensure the application’s functionality and user experience. We test it using Selenium automation testing, Katalon, Jenkins, and Apache.",
    },
    {
      icon: revenue,
      title: "Ionic Widget Development",
      description:
        "We are capable enough to help you create Ionic widgets with various functionalities, including templates, CSS, locale resources, and others that enhance your apps with cutting-edge features.",
    },
    {
      icon: revenue,
      title: "Ionic App Migration",
      description:
        "We can help you migrate your existing native app into a hybrid Ionic application. This too in a time-bound manner.",
    },
  ],
};
const outSoutceData = {
  firstHeading: "Perks of Hiring",
  secondHeading: "Ionic App Developer from Haspper",
  // description: "",
  cardData: [
    [
      {
        image: CodeLibrary,
        heading: "Rapid Delivery",
        description:
          "We ensure the rapid delivery of your project as our skilled and experienced Ionic app developers leave no stone unturned to complete your project within the given time.",
      },
      {
        image: CodeLibrary,
        heading: "Proficient Developers",
        description:
          "Our proficient Ionic developers know why they are doing something in a certain way. They take full responsibility for their tasks. Having enough experience to get stuff done, they know how to be competent in the web app development world. Hire Ionic developers with and build intuitive, smart solutions.",
      },
    ],
    [
      {
        image: CodeLibrary,
        heading: "100% Customer Satisfaction",
        description:
          "Customer satisfaction is our only priority. We make sure that we fulfil all the requirements mentioned by our clients and give them what they want.",
      },
      {
        image: CodeLibrary,
        heading: "Competitive Pricing",
        description:
          "We offer different competitive pricing models to meet the diverse needs of our clients located around the globe. We ideally consider an organized pricing method and thus follow only the best approach and policies.",
      },
    ],
    [
      {
        image: CodeLibrary,
        heading: "Active Support and Maintenance",
        description:
          "We actively maintain and assure the quality of the app we build. Our developers are there 24/7 to assist you when needed.",
      },
      {
        image: CodeLibrary,
        heading: "Dedicated Developers",
        description:
          "Our dedicated developers aim to reduce the time to market your product by delivering a feature-rich app, which meets your requirements, on-time.",
      },
    ],
    [
      {
        image: CodeLibrary,
        heading: "Serve across globe",
        description:
          "We serve all types of customers around the world, from small enterprises to medium and large ones. We have our clients in almost every industry vertical.",
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
