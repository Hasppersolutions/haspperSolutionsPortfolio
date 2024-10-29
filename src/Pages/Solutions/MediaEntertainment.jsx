import Banner from "../../components/Services/Banner";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
import AiDescription from "../../components/Services/AiDescription";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
import Technology from "../../components/Services/Technology";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import Stats from "../../components/Services/Stats";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import aglie from "../../assets/img/Solutions/hrms/aglie.png";
import deliveryTime from "../../assets/img/Solutions/hrms/deliveryTime.png";
import elearning from "../../assets/img/Solutions/hrms/elearning.png";
import quality from "../../assets/img/Solutions/hrms/quality.png";
import softwareSolution from "../../assets/img/Solutions/hrms/softwareSolution.png";
import supportGear from "../../assets/img/Solutions/hrms/supportGear.png";
import Solutions from "../../components/Solutions/Solutions.jsx";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import wallet from "../../assets/img/Solutions/banking/wallet.png";
import pos from "../../assets/img/Solutions/banking/pos.png";
import protection from "../../assets/img/Solutions/banking/protection.png";
import wealthManagement from "../../assets/img/Solutions/banking/wealth-management.png";
import investment from "../../assets/img/Solutions/banking/investment.png";
import mongoDB from "../../assets/img/Solutions/fitness/MongoDB_Logo.png";
import mysql from "../../assets/img/Solutions/fitness/MySQL-Logo.png";
import sqlite from "../../assets/img/Solutions/fitness/sqlite-logo.png";
import sqlServer from "../../assets/img/Solutions/fitness/sql-server-logo.png";
import aspNet from "../../assets/img/Solutions/fitness/asp-net.png";
import flutter from "../../assets/img/Solutions/fitness/flutter.png";
import java from "../../assets/img/Solutions/fitness/java.png";
import python from "../../assets/img/Solutions/fitness/python.png";
import oracle from "../../assets/img/Solutions/food/oracle.png";
import html from "../../assets/img/Solutions/food/html.png";
import appDevelopment from "../../assets/img/Solutions/food/app-development.png";
import rating from "../../assets/img/Solutions/food/rating.png";
import experience from "../../assets/img/Solutions/food/experience.png";
import thumbUp from "../../assets/img/Solutions/food/thumb-up.png";
import mediaAndEntertainment from "../../assets/img/Solutions/media/media-and-entainment.png";
import media from "../../assets/img/Solutions/media/media-and-entainment-1.png";
import mediaBanner from "../../assets/img/Solutions/media/media.png";

const MediaEntertainment = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <Solutions data={solutionsData} />
      <Stats data={statsData} />
      <Technology data={technologyData} />
      <DevelopmentServices data={developmentServicesData} />
      <WaveLine />
      <KeyFeatures data={keyFeatureData} />
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default MediaEntertainment;
const bannerTextData = {
  mainHeading: "Providing entertainment at",
  middleHeading: "your fingertips",
  rightImage: mediaBanner,
  bottomHeading:
    "Set a benchmark with our customized media and entertainment mobile app development services and stream the best for customers.",
};
const aiDescriptionData = {
  firstHeading: "Make your Business",
  secondHeading: "Smarter and Faster",
  description: `The M&E industry has revolutionized exceptionally after the introduction of the latest innovations. The emerging media ecosystem has transformed everything from broadcasting radio channels to live TV entertainment and digital gaming to interactive videos with the invention of wireless technology. Managing and sharing media content have now become super easy using device mushrooming technology.
Create custom solutions to deploy unimaginable solutions. Simply start with consulting and probing and carry forward it to production, broadcasting, distribution and maintenance. Restructure your media and entertainment business by creating suitable delivery platforms and remodeling entertainment offerings.`,
  button: "TALK TO OUR EXPERTS",
  link: "",
  image: mediaAndEntertainment,
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "Our range of efficient media and",
  secondHeading: "entertainment app development services",
  description:
    "Proficient Media & Entertainment App Development Services can assist you in profitably expanding your entertainment business.",
  stepsData: [
    {
      name: "Video streaming apps",
      description:
        "We create online video streaming apps that are ready to take on the Netflix frenzy and can work in a variety of internet network environments.",
      image: investment,
    },
    {
      name: "Music Streaming Apps",
      description:
        "Our apps prepare your company to handle tens of thousands of active listeners in real-time, without any lags or screen hangs.",
      image: protection,
    },
    {
      name: "Photo Editing And Sharing Apps",
      description:
        "We can assist you in creating an Instagram-like app by utilizing both the app's clone functionality as well as advanced features like AI-based geo-tagging.",
      image: performance,
    },
    {
      name: "Content Aggregation App",
      description:
        "We create apps that become the world's singular source of entertainment and information.",
      image: wealthManagement,
    },
    {
      name: "Video streaming apps",
      description:
        "We create online video streaming apps that are ready to take on the Netflix frenzy and can work in a variety of internet network environments.",
      image: wallet,
    },
    {
      name: "Music Streaming Apps",
      description:
        "Our apps prepare your company to handle tens of thousands of active listeners in real-time, without any lags or screen hangs.",
      image: pos,
    },
  ],
};
const statsData = {
  cardData: [
    {
      icon: appDevelopment,
      number: "250+",
      label: "Apps Developed",
    },
    {
      icon: experience,
      number: "10+",
      label: "Years of Experience",
    },
    {
      icon: thumbUp,
      number: "100+",
      label: "Developers",
    },
    {
      icon: rating,
      number: "99+",
      label: "Customer Satisfaction",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [html, java, python, aspNet],
  },
  {
    name: "Database",
    imgData: [sqlServer, sqlite, mysql, mongoDB, oracle],
  },
  {
    name: "FrameWorks",
    imgData: [xamarin, ionic, laravel, flutter],
  },
];
const developmentServicesData = {
  heading:
    "Why Choose Haspper for Media and Entertainment App Development Solution",
  description:
    "Streaming App Development Company to help you Evolve your Brand and Services for the New Normal",
  cardData: [
    {
      icon: aglie,
      title: "Customer Satisfaction",
      description:
        "We leverage the most up-to-date frameworks and technologies to provide you with user-friendly, scalable, secure, and innovative business solutions.",
    },
    {
      icon: quality,
      title: "Agile Procedure",
      description:
        "We use the Agile methodology and hold scrum events on a regular basis to improve our processes and procedures and give the best results.",
    },
    {
      icon: softwareSolution,
      title: "Dedicated Teams",
      description:
        "We have a dedicated development team that is experienced in developing high-end fitness app development solutions using a variety of frameworks and technologies.",
    },
    {
      icon: elearning,
      title: "Integrity & Transparency",
      description:
        "We value your ideas and vision, give you every project detail on a frequent basis, and consider your valuable input as needed.",
    },
    {
      icon: deliveryTime,
      title: "Flexible Engagement Models",
      description:
        "Rather than operating within unwelcomed tight and rigorous limits, we allow our clients to choose from a variety of engagement and employment models.",
    },
    {
      icon: supportGear,
      title: "Competitive Pricing",
      description:
        "To ensure the lowest pricing in our segment, we offer an optimal blend of cost-effective rates and exceptional quality.",
    },
  ],
};
const keyFeatureData = {
  mainHeading: "Key features of a",
  secondHeading: "Media and Entertainment App",
  image: media,
  description:
    "With an incredible media and entertainment app solution you can not only generate huge revenue by streaming music, mobile games, and movies but can also reach out to consumers to promote your brand. Simply adhere to standard coding guidelines, project solutions that offer seamless integration with other codes and APIs to serve your advertisers, creators, viewers, and broadcasters with utmost excellence.",
  leftSideData: [
    {
      heading: "Audio & video streaming",
      description:
        "You can watch and listen to unlimited content on media and entertainment apps.",
    },
    {
      heading: "In-app purchases",
      description:
        "To have access to premium audio and videos, you can buy a monthly, quarterly, or yearly subscription.",
    },
    {
      heading: "Live chatting",
      description:
        "There is an option of live chatting for all the users who are live on the app and watching their favorite shows.",
    },
  ],
  rightSideData: [
    {
      heading: "Content recommendations",
      description:
        "Based on your current location and previous searches, you get the best content recommended by the app.",
    },
    {
      heading: "Social media integration",
      description:
        "All the apps are integrated with various social media platforms to have better engagement with customers.",
    },
    {
      heading: "Reminders",
      description:
        "There are regular updates and reminders about your favorite content and subscriptions so that you don't miss anything.",
    },
  ],
};
const faqData = {
  faqItems: [
    {
      question:
        "Q. What does the media and entertainment industry's future hold?",
      answer:
        "As technology advances, the media and entertainment business will have a bright future. The IT industry has ushered in a huge transformation in media and entertainment, bringing with it more convenience, better options, interest-based content, and high availability.",
    },
    {
      question:
        "Q. Why is it necessary for the media and entertainment business to have mobile apps?",
      answer:
        "Mobile apps are extremely essential since they provide consumers with additional accessibility, flexibility, and exposure to entertainment. Furthermore, today’s mobile devices are all built to have a huge screen, and a full-screen view is more appealing. The best examples are the Netflix and Amazon smartphone apps.",
    },
    {
      question:
        "Q. What is the average time it takes to develop a media and entertainment app?",
      answer: `There is no definite response to this question because the amount of time it takes to design a media and entertainment app is highly dependent on the sort of functionality and the UI Designer’s level of experience.`,
    },
    {
      question:
        "Q. What is the cost of developing a media and entertainment app?",
      answer:
        "Because the cost of developing a media and entertainment app is dependent on the software development approach, features, 3rd party to be used, the developer’s expertise, level of UI/UX, and server costs, there is no perfect answer to this question. Send us your project specifications to get an estimate for designing an app.",
    },
    {
      question:
        "Q. Should I invest in Media and Entertainment App Development?",
      answer:
        "Today the M & E industry is a key part of our lives. And, it has evolved as a newer mobile apps revolution, especially for young people, who want to entertain themselves while on the go. Today entertainment is one of the buzzwords and catering to the user’s demand, we at Haspper have created numerous video, music and audio apps.",
    },
  ],
};
