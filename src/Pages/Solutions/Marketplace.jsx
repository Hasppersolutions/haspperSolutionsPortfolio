import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import Potential from "../../components/Services/Ios/Potential";
import FeatureSection from "../../components/Services/Chatbot/FeatureSection";
import Group from "../../assets/img/Services/chatbot/Group.png";
import Vector from "../../assets/img/Services/chatbot/Vector.png";
import bot from "../../assets/img/Services/chatbot/bot.png";import optimize from "../../assets/img/Services/chatbot/optimize.png";
import Stats from "../../components/Services/Stats";
import Technology from "../../components/Services/Technology";
import java from "../../assets/img/Services/chatbot/java.png";
import python from "../../assets/img/Services/chatbot/python.png";
import objectC from "../../assets/img/Services/chatbot/object-c.png";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import node from "../../assets/img/Services/chatbot/node.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
import WaveLine from "../../components/WaveLine";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";

import marketplaceImg from "../../assets/img/Solutions/Marketplace/makretplaceImg.png";

import number1 from "../../assets/img/Solutions/Voicebot/number1.png"
 import number2 from "../../assets/img/Solutions/Voicebot/number2.png"
 import number3 from "../../assets/img/Solutions/Voicebot/number3.png"
 import number4 from "../../assets/img/Solutions/Voicebot/number4.png"

 import language1 from "../../assets/img/Solutions/Voicebot/language1.png"
import language2 from "../../assets/img/Solutions/Voicebot/language2.png"


import framework1 from "../../assets/img/Solutions/Voicebot/framework1.png"
 import framework2 from "../../assets/img/Solutions/Voicebot/framework2.png"
 import framework3 from "../../assets/img/Solutions/Voicebot/framework3.png"


 import db1 from "../../assets/img/Solutions/Marketplace/db1.png";
 import db2 from "../../assets/img/Solutions/Marketplace/db2.png";
 import db3 from "../../assets/img/Solutions/Marketplace/db3.png";
 import db4 from "../../assets/img/Solutions/Marketplace/db4.png";
 import db5 from "../../assets/img/Solutions/Marketplace/db5.png";


 import card1 from "../../assets/img/Solutions/Marketplace/card1.png";
 import card2 from "../../assets/img/Solutions/Marketplace/card2.png";
 import card3 from "../../assets/img/Solutions/Marketplace/card3.png";
 import card4 from "../../assets/img/Solutions/Marketplace/card4.png";
 import card5 from "../../assets/img/Solutions/Marketplace/card5.svg";

 import source1 from "../../assets/img/Solutions/Marketplace/source1.png";
 import source2 from "../../assets/img/Solutions/Marketplace/source2.png";
 import source3 from "../../assets/img/Solutions/Marketplace/source3.png";
 import source4 from "../../assets/img/Solutions/Marketplace/source4.png";
 import source5 from "../../assets/img/Solutions/Marketplace/source5.png";


 import process1 from "../../assets/img/Solutions/Marketplace/process1.png";
 import process2 from "../../assets/img/Solutions/Marketplace/process2.png";
 import process3 from "../../assets/img/Solutions/Marketplace/process3.png";
 import process4 from "../../assets/img/Solutions/Marketplace/process4.png";
 import process5 from "../../assets/img/Solutions/Marketplace/process6.png";
 import process6 from "../../assets/img/Solutions/Marketplace/process7.png";

 import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing";

 import { Contact} from "../../components/Homepage/Contact";
 import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
 import Mailus from "../../components/Homepage/Mailus";
 import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
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
       
        <Potential data={potentialData} />
        <WaveLine/>
        <Stats data={statsData} />
        <Technology data={technologyData} />
        <OutSourcing data={outSourceData}/>
        <DevelopmentProcess data={developmentProcessData}/>
        <WaveLine/>
        <FAQ data={FAQData}/>
        <WaveLine/>
        <Contact/>
        <Mailus/>
        <ServicesAndStaffing/>
      </Box>
    </>
  );
};
export default Marketplace;
const bannerTextData = {
  mainHeading: "Intuitive Marketplaces",
  middleHeading: "For expanding",
  backgroundImage: ServiceBackgroudImage,
  rightImage: marketplaceImg,
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
      image: card1,
      title: "Secure software product",
      description:
      `To keep your marketplace safe from hacking, we deploy industry-leading security methods. All software flaws are discovered and fixed in a timely manner. Multiple QA and testing stages ensure that your marketplace is error-free.`,
    },
    {
      image: card2,
      title: "User-friendly interfaces",
      description:
      `Our UI and UX designers use their knowledge to build a distinctive visual presentation for your marketplace in order to provide a fantastic user experience. Complex information and business logic are transformed into elegant web and mobile applications.`,
    },
    {
      image: card3,
      title: "Experienced developers",
      description:
       `We have a large pool of 250+ highly experienced developers who have considerable expertise building high-end markets for a variety of industries and are well-versed in cutting-edge technologies`,
    },
    {
      image: card4,
      title: "Quality and timely development",
      description:
      `You'll get a marketplace that is secure, scalable, user-friendly, and cost-effective, and it will exceed your expectations. In addition, we are 50 percent faster than our competition in delivering software solutions.`,
    },
  
    {
      image: card5,
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
      icon: number1,
      number: "1500+",
      label: "Apps Developed",
    },
    {
      icon: number2,
      number: "20+",
      label: "Blockchain App Developers",
    },
    {
      icon: number3,
      number: "1000+",
      label: "Clients Worldwide",
    },
    {
      icon: number4,
      number: "98%",
      label: "Success Rate",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [
      language1,
      python,
      java,
      objectC,
      language2,
    ],
  },
  {
    name: "Framework",
    imgData: [
      framework1,
      framework2,
      framework3,
      xamarin,
      ionic,
      node,
      laravel,
    ],
  },
  {
    name: "Database",
    imgData: [db1, db2, db3, db4, db5],
  },
];

const FAQData = {
    faqItems: [
      {
        question:
          " Q. What is the best method to create a reliable marketplace mobile app?   ",
        answer:
         `There are three main options:

Hire an agency, such as Haspper, to create a specialized marketplace for you. It will include all of the functionality you require for your specific requirements.
Use a ready-made solution. It will have all of the basic functions, but you will need a developer on your team to make the necessary adjustments.
Use a software-as-a-service (SaaS) solution. Although this is likely the cheapest option, you will be limited to conventional functionality with few possibilities for adding additional features.`,
      },
      {
        question: 
         `Q. What is the best way for me to create a marketplace?   `,
        answer:
         `There are three main options:

Hire an agency, such as Haspper, to create a specialized marketplace for you. It will include all of the functionality you require for your specific requirements.
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


  

  const outSourceData = {
    firstHeading: "Why choose Haspper for",
    secondHeading: "VoiceBot app development?",
    description:
      `You just sit back in your office or home and enjoy your app development journey with us. You can trust us for all your Voicebot app development requirements`,
   
      cardData: [
        [
        {
          image: source1,
          heading: "Custom Marketplace Development",
          description:`This kind of marketplace development allows you to create your own application logic, as well as control the back end and front end. These services are available for special business cases that require a high level of customization. Add your own functionality, content, and IT solutions with ease.`, 
        },
        {
          image: source2,
          heading: "CMS marketplace development",
          description:`To turn a customer’s idea into a one-of-a-kind software product by providing effective answers to problems and giving unrivaled value that surpasses competition. We believe that this is the finest long-term strategy for our company’s expansion.`, 
        },
      ],
      [
        {
          image: source3,
          heading: "SaaS-based front-end development",
          description:
           `You may get the back end and APIs for your marketplace ready by using SaaS marketplace providers. It simply takes a few minutes to develop an intuitive front-end that is tailored to your company’s needs and tastes. We provide front-end marketplace development as well as UI and UX design services to give your app the style and feel you want.`,
        },
        {
          image: source4,
          heading: "Integration and support for APIs",
          description:
            `To avoid any product faults, we combine sturdy technologies, our experience, and well-proven methods. Part of our experience is connecting third-party applications and services via custom-built or existing APIs. E-mail services, payment gateways, and social sharing connectors all improve the performance and end-user experience of your app.`,
        },
      ],
      [
        {
          image: source5,
          heading: "Social media marketplaces",
          description:
          `A social media marketplace is more than just a platform for B2B, B2C, or C2C transactions. Businesses can use it to start direct-to-customer conversations while presenting their products and cultivating a loyal following. Create your own social media marketplace and set yourself out from the competition!`,
        }
      ],
      ],
  };


  const developmentProcessData = {
    firstHeading: "Marketplace Development",
    secondHeading: "Process We Follow",
    description:
      "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our Chatbot App Development process to ensure we fulfill all your requirements",
    stepsData: [
      {
        title: "Protecting Your Intellectual Property",
        description:
          "We safeguard your splendid idea by signing an NDA to protect your original concept and secure your application.",
        icon: process1,
      },
      {
        title: "Discovery",
        description:
          "We research thoroughly and ask questions to know your detailed requirements and suggest the best solution",
        icon: process2,
      },
      {
        title: "Design",
        description:
          "We create wireframe prototypes before transforming them into world-class UI designs.",
        icon: process3,
      },
      {
        title: "Development",
        description:
          "We turn the designs into an app using the most advanced technology stacks and frameworks.",
        icon: process4,
      },
      {
        title: "Testing",
        description:
          "We do extensive testing to remove all the bugs and issues before making your app live.",
        icon: process5,
      },
      {
        title: "Support and Maintenance",
        description:
          "We continue to offer widespread support and maintenance to guarantee smooth operations.",
        icon: process6,
      },
    ],
  };