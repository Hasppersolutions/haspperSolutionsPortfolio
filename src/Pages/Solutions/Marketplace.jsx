import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png";
import chatbot from "../../assets/img/Services/chatbot/chatbot.png";
import chatTesting from "../../assets/img/Services/chatbot/chatTesting.png";
import customer from "../../assets/img/Services/chatbot/customer.png";
import support from "../../assets/img/Services/chatbot/support.png";
import voiceAnable from "../../assets/img/Services/chatbot/voiceAnable.png";
import FeatureSection from "../../components/Services/Chatbot/FeatureSection";
import scale from "../../assets/img/Services/chatbot/scale.png";
import Group from "../../assets/img/Services/chatbot/Group.png";
import Vector from "../../assets/img/Services/chatbot/Vector.png";
import bot from "../../assets/img/Services/chatbot/bot.png";
import person from "../../assets/img/Services/chatbot/person.png";
import optimize from "../../assets/img/Services/chatbot/optimize.png";
import Stats from "../../components/Services/Stats";
import Technology from "../../components/Services/Technology";
import java from "../../assets/img/Services/chatbot/java.png";
import python from "../../assets/img/Services/chatbot/python.png";
import objectC from "../../assets/img/Services/chatbot/object-c.png";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import node from "../../assets/img/Services/chatbot/node.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
import securePay from "../../assets/img/Services/chatbot/secure-pay.png";
import amazonPay from "../../assets/img/Services/chatbot/amazon-pay.png";
import payPal from "../../assets/img/Services/chatbot/pay-pal.png";
import stripe from "../../assets/img/Services/chatbot/stripe.png";
import authorizeNet from "../../assets/img/Services/chatbot/authorize-net.png";
import WaveLine from "../../components/WaveLine";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import DividerComponent from "../../components/Solution/DividerComponent";
const Marketplace = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Banner data={bannerTextData} />
        <FeatureSection data={featureData} />
        <WaveLine/>
        <Potential data={potentialData} />
        <WaveLine/>
        <Stats data={statsData} />
        <Technology data={technologyData} />
        <DividerComponent data={DividerComponentData}/>
        <WaveLine/>
        <FAQ data={FAQData}/>
        <WaveLine/>
      </Box>
    </>
  );
};
export default Marketplace;
const bannerTextData = {
  mainHeading: "Intuitive Marketplaces",
  middleHeading: "For expanding",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
  `Providing extensive marketplace development services for web and mobile users backed with latest technologies.`,
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Why Choose Haspper for?",
  secondHeading: "Marketplace App Development",
  description:
   `We aim to be a reliable and trustworthy tech partner by reaching even the most involved development requirements and specifications of our clients`, 
  cardData: [
    {
      image: multilingualChatbots,
      title: "Secure software product",
      description:
      `To keep your marketplace safe from hacking, we deploy industry-leading security methods. All software flaws are discovered and fixed in a timely manner. Multiple QA and testing stages ensure that your marketplace is error-free.`,
    },
    {
      image: support,
      title: "User-friendly interfaces",
      description:
      `Our UI and UX designers use their knowledge to build a distinctive visual presentation for your marketplace in order to provide a fantastic user experience. Complex information and business logic are transformed into elegant web and mobile applications.`,
    },
    {
      image: customer,
      title: "Experienced developers",
      description:
       `We have a large pool of 250+ highly experienced developers who have considerable expertise building high-end markets for a variety of industries and are well-versed in cutting-edge technologies`,
    },
    {
      image: chatbot,
      title: "Quality and timely development",
      description:
      `You'll get a marketplace that is secure, scalable, user-friendly, and cost-effective, and it will exceed your expectations. In addition, we are 50 percent faster than our competition in delivering software solutions.`,
    },
    {
      image: chatbot,
      title: "Expertise in latest technologies",
      description:
       `We have the latest expertise and hands-on experience in the latest technology to construct really innovative marketplaces. To help you win your market, our experts will develop cutting-edge solutions.`, 
    }
  ],
};

const featureData = {
  mainHeading: "B2B, B2C, or C2C",
  subHeading: "Marketplace App Development",
  description:
    `
    To increase conversions, we create a B2B, B2C, or C2C marketplace website development services that considers business goals and meets user expectations. We handle marketplace scaling so that all of your users may use your app at any time: payment methods – we offer a variety of payment alternatives, including credit and debit cards, e-wallets, and mobile transactions. We also pay close attention to the security of your marketplace, offering multiple levels of protection.
    `,
  cardData: [
    {
      image: Group,
      text: "Custom Marketplace Development",
    },
    {
      image: Vector,
      text: "CMS marketplace development",
    },
    {
      image: bot,
      text: "SaaS-based front-end development",
    },
    {
      image: Group,
      text: "Integration and support for APIs",
    },
    {
      image: Vector,
      text: "Social media marketplaces",
    },
    {
      image: bot,
      text: "Secure software product",
    }
  ],
};

const statsData = {
  cardData: [
    {
      icon: multilingualChatbots,
      number: "1500+",
      label: "Apps Developed",
    },
    {
      icon: multilingualChatbots,
      number: "20+",
      label: "Blockchain App Developers",
    },
    {
      icon: multilingualChatbots,
      number: "1000+",
      label: "Clients Worldwide",
    },
    {
      icon: multilingualChatbots,
      number: "98%",
      label: "Success Rate",
    },
  ],
};
const technologyData = [
  {
    name: "Blockchain Platforms",
    imgData: [
      "path/to/html5-icon",
      python,
      java,
      objectC,
      "path/to/swift-icon",
    ],
  },
  {
    name: "Languages",
    imgData: [
      "path/to/flutter-icon",
      "path/to/flutter-icon",
      "path/to/flutter-icon",
      xamarin,
      ionic,
      node,
      laravel,
    ],
  },
  {
    name: "System Architecture",
    imgData: [securePay, amazonPay, payPal, stripe, authorizeNet],
  },
];

const FAQData = {
    faqItems: [
      {
        question:
          " Q. What is the best method to create a reliable marketplace mobile app?   ",
        answer:
         `There are three main options:

Hire an agency, such as OnGraph, to create a specialized marketplace for you. It will include all of the functionality you require for your specific requirements.
Use a ready-made solution. It will have all of the basic functions, but you will need a developer on your team to make the necessary adjustments.
Use a software-as-a-service (SaaS) solution. Although this is likely the cheapest option, you will be limited to conventional functionality with few possibilities for adding additional features.`,
      },
      {
        question: 
         `Q. What is the best way for me to create a marketplace?   `,
        answer:
         `There are three main options:

Hire an agency, such as OnGraph, to create a specialized marketplace for you. It will include all of the functionality you require for your specific requirements.
Use a ready-made solution. It will have all of the basic functions, but you will need a developer on your team to make the necessary adjustments.
Use a software-as-a-service (SaaS) solution. Although this is likely the cheapest option, you will be limited to conventional functionality with few possibilities for adding additional features.`, 
      },
      {
        question: 
        ` Q. What does it cost to set up an online marketplace? `    ,                
        answer:
        `It depends on the type of marketplace you intend to create (B2B, B2C, C2C, or social media) as well as the number of people who will use it. The service provider and the client are usually the two main stakeholders in a marketplace.`, 
      },
      {
        question: 
        "  Q. Can you create a marketplace app that works on both mobile devices and Websites?                         "                      ,
        answer:
         `Yes, Haspper Solutions can create mobile apps as well as a website where you can buy and sell things online.`,
         },
      {
        question: 
        " Q. Do you offer after-sales support?   "                      ,
        answer:
         `We give after-sales support based on the web and app development bundle you select. Please feel free to contact us at any time.`,
      }
    ]
  }


  const DividerComponentData = {
    firstHeading: "Comprehensive Marketplace",
    secondHeading: "Development Services ",
    description:
    `It's a difficult route to take, from IT consultation to post-release maintenance. As a result, we become a technological partner to whom you can entrust the development of your business-centric solution. Select the online marketplace app development option that best suits your needs:`,  
    cardData: [
      {
        image: multilingualChatbots,
        title: "Custom Marketplace Development",
        description:`This kind of marketplace development allows you to create your own application logic, as well as control the back end and front end. These services are available for special business cases that require a high level of customization. Add your own functionality, content, and IT solutions with ease.`, 
      },
      {
        image: support,
        title: "CMS marketplace development",
        description:`To turn a customer’s idea into a one-of-a-kind software product by providing effective answers to problems and giving unrivaled value that surpasses competition. We believe that this is the finest long-term strategy for our company’s expansion.`, 
      },
      {
        image: customer,
        title: "SaaS-based front-end development",
        description:
         `You may get the back end and APIs for your marketplace ready by using SaaS marketplace providers. It simply takes a few minutes to develop an intuitive front-end that is tailored to your company’s needs and tastes. We provide front-end marketplace development as well as UI and UX design services to give your app the style and feel you want.`,
      },
      {
        image: chatbot,
        title: "Integration and support for APIs",
        description:
          `To avoid any product faults, we combine sturdy technologies, our experience, and well-proven methods. Part of our experience is connecting third-party applications and services via custom-built or existing APIs. E-mail services, payment gateways, and social sharing connectors all improve the performance and end-user experience of your app.`,
      },
      {
        image: chatTesting,
        title: "Social media marketplaces",
        description:
        `A social media marketplace is more than just a platform for B2B, B2C, or C2C transactions. Businesses can use it to start direct-to-customer conversations while presenting their products and cultivating a loyal following. Create your own social media marketplace and set yourself out from the competition!`,
      }
    ],
  };