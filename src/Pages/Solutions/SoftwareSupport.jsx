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


import number1 from "../../assets/img/Solutions/Voicebot/number1.png"
 import number2 from "../../assets/img/Solutions/Voicebot/number2.png"
 import number3 from "../../assets/img/Solutions/Voicebot/number3.png"
 import number4 from "../../assets/img/Solutions/Voicebot/number4.png"

 import card1 from "../../assets/img/Solutions/Operation/card1.png"
import card2 from "../../assets/img/Solutions/Operation/card2.png"
import card3 from "../../assets/img/Solutions/Operation/card3.png"
import card4 from "../../assets/img/Solutions/Operation/card4.png"
import card5 from "../../assets/img/Solutions/Operation/card5.png"
import card6 from "../../assets/img/Solutions/Operation/card6.png"


import potential1 from "../../assets/img/Solutions/SoftwareSupport/potential1.png"
import potential2 from "../../assets/img/Solutions/SoftwareSupport/potential2.png"
import potential3 from "../../assets/img/Solutions/SoftwareSupport/potential3.png"
import potential4 from "../../assets/img/Solutions/SoftwareSupport/potential4.png"

import cardA from "../../assets/img/Solutions/SoftwareSupport/card1.png"
import cardB from "../../assets/img/Solutions/SoftwareSupport/card2.png"
import cardC from "../../assets/img/Solutions/SoftwareSupport/card3.png"
import cardD from "../../assets/img/Solutions/SoftwareSupport/card4.png"


import language1 from "../../assets/img/Solutions/Voicebot/language1.png"
import language2 from "../../assets/img/Solutions/Voicebot/language2.png"


import framework1 from "../../assets/img/Solutions/Voicebot/framework1.png"
 import framework2 from "../../assets/img/Solutions/Voicebot/framework2.png"
 import framework3 from "../../assets/img/Solutions/Voicebot/framework3.png"

 import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing";
 import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";

 import process1 from "../../assets/img/Solutions/Marketplace/process1.png";
 import process2 from "../../assets/img/Solutions/Marketplace/process2.png";
 import process3 from "../../assets/img/Solutions/Marketplace/process3.png";
 import process4 from "../../assets/img/Solutions/Marketplace/process4.png";
 import process5 from "../../assets/img/Solutions/Marketplace/process6.png";
 import process6 from "../../assets/img/Solutions/Marketplace/process7.png";
 import background from "../../assets/img/Solutions/SoftwareSupport/BackgroundImg.png"
 import { Contact} from "../../components/Homepage/Contact";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
const SoftwareSupport = () => {
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
        <OutSourcing data={outSoutceData}/>
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
export default SoftwareSupport;
const bannerTextData = {
  mainHeading: "Reliable,Exceptional",
  middleHeading: "Software Support Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: background,
  bottomHeading:
  `Managing,Monitoring,Upgrading and Maintaining Your Applications 24X7`,
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Our software maintenance and support",
  secondHeading: "services have a number of advantages",
  description:
   `For speedy troubleshooting, digital transformation, and different enhancements, we provide dependable software maintenance and support services. Please contact us to discuss your requirements. Discover how expert software support has benefited hundreds of our clients.`,
  cardData: [
    {
      image: potential1,
      title: "Professional Support",
      description:
       `Strong developers, business analysts, and test engineers make up our tech support and maintenance team. They will talk with you and determine your requirements as a group. We will build the most successful plan for your project based on the software audit, your requirements, or business analysis.`,
    },
    {
      image: potential2,
      title: "Multiple Options",
      description:
      `We are one of the few software maintenance firms that offers such a diverse set of services. Our clients like having the option of choosing a convenient timetable for this service and matching their budget expectations with our options.`,
    },
    {
      image: potential3,
      title: "Advanced Consulting",
      description:
      `We offer sophisticated consultation on innovation, digital transformation, and numerous enhancements, in addition to expert software support solutions and services. Our team can suggest ways to improve your software by interacting with it on a regular basis.`,
    },
    {
      image: potential4,
      title: "Transparent Cooperation",
      description:
        `
We are committed to offering high-quality services, which is why, depending on the service type you receive as a customer, you will receive regular reports. We'll keep you updated on troubleshooting, bug fixes, new functionality releases, issues, and other changes.`,
    }
  ],
};

const featureData = {
  mainHeading: "Highest Quality Software",
  subHeading: "Services pre and post-development",
  description:
   `Technical support or break/fix services for specific software products are referred to as software support services. Long-term technical support contracts or pay-as-you-go, incident-based help are examples of these services. Remote troubleshooting, installation assistance, and basic usability advice are all common features of software support services. Remote troubleshooting skills can be supplied by phone and online communication medium, or without human aid using automated mechanisms that reside on the customer’s device or are accessible via the Internet.`,
  cardData: [
    {
      image: card1,
      text: "AVAILABLE 24 X 7",
    },
    {
      image: card2,
      text: "COST-EFFECTIVE",
    },
    {
      image: card3,
      text: "WORK AUTOMATION",
    },
    {
      image: card4,
      text: "INCREASED CUSTOMER ENGAGEMENT",
    },
    {
      image: card5,
      text: "PROACTIVE INTERACTION",
    },
    {
      image: card6,
      text: "KEEPING UP WITH THE TREND",
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
      number: "150+",
      label: "Developers",
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
    name: "Payment Gateway",
    imgData: [securePay, amazonPay, payPal, stripe, authorizeNet],
  },
];

const FAQData = {
    faqItems: [
      {
        question:
        " Q. How do I hire developers or a team?  ",
        answer:
        `First of all – you should gather all the tasks for the developer which you want them to do for you.
        Based on the chosen developer and technology, finalize the agreement with the sales team.
        Upon your confirmation, we will set up everything, and connect you with the developer.`,
      },
      {
        question: 
         ` Q. What can your developers do for us? `,
        answer:
        `Our developers can help you build feature-rich apps that work effortlessly across different platforms. Here are some of the services we offer:

Product Consultation
Product Design
Product Development
Product Testing
Product Migration
Maintenance and Support`,  
      },
      {
        question: 
        `  Q. Can I hire a developer for hourly or project-based tasks?  `    ,                
        answer:
         `Yes, if you know the task to get done from the developer, then you can hire a developer on an hourly or project/task basis. Even we give the flexibility to change the hiring model at a later stage.`,
      },
      {
        question: 
        "  Q. How will the apps be secure from external hacks?   "                      ,
        answer:
        `Of Course, we consider various security standards when creating applications. Our testing parameters ensure that the android app performs perfectly without any difficulties.`, 
      },

      
      {
        question: 
        " Q. Is there any hidden cost?  " ,
        answer:
        `No, once we discuss with you your website requirements and then price. We work hard so that the outlined price quote is strictly maintained the same.`,
      },

      {
        question: 
        " Q. Why should I outsource my development to Haspper  " ,
        answer:
        `Save time and reduce costs significantly when you outsource your development to OnGraph. We provide dedicated development teams and shared resources to work on your project full-time. Check out our article about offshore development teams.`,
      }

    ]
  }


  


  const outSoutceData = {
    firstHeading: "Software Support",
    secondHeading: "Services we offer",
    description:
      `We offer both basic and expert software support. Our specialists have experience maintaining software after a project is completed, as well as supporting legacy systems and third-party applications.`,
     cardData: [
      [
      {
        image: cardA,
        heading: "Post-Development Support Services",
        description:
         `Our adaptive software maintenance assistance includes making changes to the managing functions of your software applications. Beyond the initial implementation, Ongraph will support you completely with a broad choice of services: maintenance plans tailored to your preferred level of incident resolution.`,
      },
      {
        image: cardB,
        heading: "Application Upgrade & Improvements",
        description:
        `You already have your applications built but want to upgrade them to the latest technologies or OS Versions. The OnGraph team can help you quickly define a complete roadmap to upgrade your applications. We can also help you resolve any software-related errors and bugs, like rectifying misspelled words or sentences in your software’s interface, eliminating bugs & errors, and correcting any wrong algorithms in your software product. Our professional software maintenance team provides corrective software maintenance services, and can easily correct any.`,
        },
      ],
      [
      {
        image: cardC,
        heading: "SLA Driven Resolution (L1, L2 & L3)",
        description:
         `You are already running your system and applications and your users are using them. We help you support your applications with L1, L2 and L3 24X7 support services to troubleshoot any problems, provide quick fixes and resolutions. Perfective software maintenance services support you to meet your customer’s requirements by improving your software application’s Performance, Maintainability, and Other Attributes. Our skilled support team improves your support experience for your users.`,
      },
      {
        image: cardD,
        heading: "Preventive Application Support Services",
        description:
        `It is always better to improve applications and systems before anyone faces any problem. OnGraph’s preventive software maintenance services aim at planning and incorporating solutions to meet future requirements and overcome problems that may arise in the long run. Our expert team is capable of effectively analyzing your software’s future needs and problems based on.`,  
      },
    ]
    ],
  };

  const developmentProcessData = {
    firstHeading: "Blockchain Development",
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