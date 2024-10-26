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
  mainHeading: "Empowering Innovations <br/> With our",
  middleHeading: "Blockchain development <br/>Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
  `Dive into the transformative world of secure, reliable, and efficient solutions with our cutting-edge Blockchain technology development. Connect with our top developers for Custom Blockchain Development Services.`,
     // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Why Choose Haspper?",
  secondHeading: "Your Ultimate Ally in Blockchain App Development",
  description:
   `We aim to be a reliable and trustworthy tech partner, offering comprehensive blockchain app development services, by reaching even the most involved development requirements and specifications of our clients.`, 
  cardData: [
    {
      image: multilingualChatbots,
      title: "Cost-effective Development",
      description:
       `We provide cost-effective blockchain software development, assuring a secure and dependable procedure while not taxing your financial resources.`, 
    },
    {
      image: support,
      title: "Agile Development Process",
      description:
      `With our transparent Agile development process, you can stay informed and active throughout the lifecycle of your project.`,
    },
    {
      image: customer,
      title: "Experience in 15+ Industries",
      description:
       `Hire blockchain developers from OnGraph, bringing expertise across diverse sectors like healthcare, fintech, entertainment, education, and more.`,
    },
    {
      image: chatbot,
      title: "Round-the-clock Support",
      description:
        `We are your dependable partner, providing 24x7 support and maintenance to ensure smooth operations after delivery and implementation.`,
    }
  ],
};

const featureData = {
  mainHeading: "Leading the Blockchain Revolution: Your One-Stop",
  subHeading: "Blockchain Development Company",
  description:
    `
    Adopting decentralized technology such as blockchain is critical in today’s quickly expanding digital environment. Blockchain development has become the cornerstone of digital innovation, revolutionizing transactions, data management, and supply chains. It not only enhances security but also improves traceability and reduces operational inefficiencies.

 

As a reputable Blockchain Development Company in the USA, we have top web app developers and provide complete, customized solutions to help you traverse this disruptive journey. Our services vary from developing safe decentralized applications (dApps) to establishing robust blockchain integration services.

 

With our unique offerings, you can enhance your supply chain operations with blockchain for better traceability and efficiency. You can also hire blockchain developers who are well-versed in Ethereum and Hyperledger blockchain development and Blockchain security solutions.

 

At OnGraph, we don’t just provide services; we empower your company and spark industry change
    `,
  cardData: [
    {
      image: Group,
      text: "Pioneering Blockchain Development Services",
    },
    {
      image: Vector,
      text: "Blockchain Consulting Services",
    },
    {
      image: bot,
      text: "Coins & Wallets Development services",
    },
    {
      image: Group,
      text: "Decentralized application (dApp) development",
    },
    {
      image: Vector,
      text: "Smart Contract Development services",
    },
    {
      image: bot,
      text: "Hyperledger blockchain development",
    },{
      image: Group,
      text: "Ethereum blockchain development",
    },
    {
      image: Vector,
      text: "POC Development services",
    },
    {
      image: bot,
      text: "ICO Development Services",
    },
    {
      image: bot,
      text: "Fintech/Defi Application Development services",
    },
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
      number: "50+",
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
          "Q. What is the benefit of choosing Blockchain for business solutions? ",
        answer:
         `Blockchain technology is quite different from other emerging technologies. It has endless benefits to offer businesses. This decentralized technology records information with a unique hash value that makes tampering with the data impossible.

Key features of Blockchain Software Development are:

Peer-to-peer communication networks
Public-key cryptography
Encryption mechanisms`,
      },
      {
        question: 
         ` Q. What are your popular and successful Blockchain app development tools? `,
        answer:
          'At Haspper, we specialize as a Blockchain app development company and offer expertise in a wide range of technologies essential for your product’s success. Our developers are skilled in Hyperledger Fabric, Hyperledger Indy, Stellar, Tezos, Ripple, and Algorand, ensuring top-notch solutions for your blockchain-based projects.',
      },
      {
        question: 
        ` Q. How much do your Blockchain development services cost? `    ,                
        answer:
         "There is no clear-cut answer to this. Blockchain development services depend on features, so the cost of a custom project may vary based on specific requirements. Similarly, the development cost of a crypto exchange, wallet, and cryptocurrency will differ depending on various technical specifications."
      },
      {
        question: 
        " Q. Can I hire my preferred Blockchain Development Team?  "                      ,
        answer:
         `Yes, you can choose the blockchain development team according to your terms and needs. We will share the CVs of our blockchain developers with you. Then, you can hire the ones that match your requirements and that team of developers works dedicatedly on your project.`,
      },
      
    ]
  }


  const DividerComponentData = {
    firstHeading: "Leading the Charge:",
    secondHeading: "OnGraph's Pioneering Blockchain Development Services ",
    description:
      `Navigating the digital era necessitates a pioneering mindset, and OnGraph, with its blockchain experience, provides customized, safe, and efficient solutions.`,
    cardData: [
      {
        image: multilingualChatbots,
        title: "Blockchain App Development Services",
        description:
         `Assisting several industry verticals in securing and streamlining their processes by providing cutting-edge blockchain applications.`,   
      },
      {
        image: support,
        title: "Blockchain Consulting Services",
        description:
       `With our specialized blockchain consulting, we help you discover new prospects in the crypto realm.`, 
      },
      {
        image: customer,
        title: "Coins & Wallets",
        description:
         `Providing extensive software and infrastructure assistance to help you develop your own coin.`,
      },
      {
        image: chatbot,
        title: "Decentralized Application (dApp) Development",
        description:
          `Assisting your company in harnessing the power of the decentralized network for effective DApp development.`,
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