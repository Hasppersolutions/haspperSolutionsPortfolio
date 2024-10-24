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
const BlockChain = () => {
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
export default BlockChain;
const bannerTextData = {
  mainHeading: "Reliable,Exceptional",
  middleHeading: "Software Support Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
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
      image: multilingualChatbots,
      title: "Professional Support",
      description:
       `Strong developers, business analysts, and test engineers make up our tech support and maintenance team. They will talk with you and determine your requirements as a group. We will build the most successful plan for your project based on the software audit, your requirements, or business analysis.`,
    },
    {
      image: support,
      title: "Multiple Options",
      description:
      `We are one of the few software maintenance firms that offers such a diverse set of services. Our clients like having the option of choosing a convenient timetable for this service and matching their budget expectations with our options.`,
    },
    {
      image: customer,
      title: "Advanced Consulting",
      description:
      `We offer sophisticated consultation on innovation, digital transformation, and numerous enhancements, in addition to expert software support solutions and services. Our team can suggest ways to improve your software by interacting with it on a regular basis.`,
    },
    {
      image: chatbot,
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
      image: Group,
      text: "AVAILABLE 24 X 7",
    },
    {
      image: Vector,
      text: "COST-EFFECTIVE",
    },
    {
      image: bot,
      text: "WORK AUTOMATION",
    },
    {
      image: Group,
      text: "INCREASED CUSTOMER ENGAGEMENT",
    },
    {
      image: Vector,
      text: "PROACTIVE INTERACTION",
    },
    {
      image: bot,
      text: "KEEPING UP WITH THE TREND",
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
      number: "150+",
      label: "Developers",
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


  const DividerComponentData = {
    firstHeading: "Software Support",
    secondHeading: "Services we offer",
    description:
      `Navigating the digital era necessitates a pioneering mindset, and OnGraph, with its blockchain experience, provides customized, safe, and efficient solutions.`,
    cardData: [
      {
        image: multilingualChatbots,
        title: "Post-Development Support Services",
        description:
         `Our adaptive software maintenance assistance includes making changes to the managing functions of your software applications. Beyond the initial implementation, Ongraph will support you completely with a broad choice of services: maintenance plans tailored to your preferred level of incident resolution.`,
      },
      {
        image: support,
        title: "Application Upgrade & Improvements",
        description:
        `You already have your applications built but want to upgrade them to the latest technologies or OS Versions. The OnGraph team can help you quickly define a complete roadmap to upgrade your applications. We can also help you resolve any software-related errors and bugs, like rectifying misspelled words or sentences in your software’s interface, eliminating bugs & errors, and correcting any wrong algorithms in your software product. Our professional software maintenance team provides corrective software maintenance services, and can easily correct any.`,
        },
      {
        image: customer,
        title: "SLA Driven Resolution (L1, L2 & L3)",
        description:
         `You are already running your system and applications and your users are using them. We help you support your applications with L1, L2 and L3 24X7 support services to troubleshoot any problems, provide quick fixes and resolutions. Perfective software maintenance services support you to meet your customer’s requirements by improving your software application’s Performance, Maintainability, and Other Attributes. Our skilled support team improves your support experience for your users.`,
      },
      {
        image: chatbot,
        title: "Preventive Application Support Services",
        description:
        `It is always better to improve applications and systems before anyone faces any problem. OnGraph’s preventive software maintenance services aim at planning and incorporating solutions to meet future requirements and overcome problems that may arise in the long run. Our expert team is capable of effectively analyzing your software’s future needs and problems based on.`,  
      },
      {
        image: chatTesting,
        title: "Smart Contract Development",
        description:
        `Our full-stack blockchain consulting services include creating secure and compelling smart contracts and enhancing transaction processes.`,  
      },
      {
        image: voiceAnable,
        title: "Hyperledger Blockchain Development",
        description:
          `Specialized in Hyperledger to help you disrupt industries and explore undiscovered business opportunities.`,
        },

        {
          image: chatTesting,
          title: "Ethereum Blockchain Development",
          description:
          `With our personalized Ethereum blockchain solutions, we assist you in transforming into a cutting-edge Decentralized Autonomous Organization.`,
        },
        {
          image: voiceAnable,
          title: "POC Development",
          description:
            `Assisting in identifying potential project gaps through functional testing by providing detailed mock-ups based on your concepts.`,
          },
          {
            image: voiceAnable,
            title: "ICO Development Services",
            description:
              `Handling ICO smart contracts and maintaining the infrastructure for successful ICO campaigns while assisting you with your token offerings.`,
          }
    ],
  };