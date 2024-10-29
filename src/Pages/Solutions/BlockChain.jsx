import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import Potential from "../../components/Services/Ios/Potential";
import FeatureSection from "../../components/Services/Chatbot/FeatureSection";
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
import blockchainImg from "../../assets/img/Solutions/Blockchain/backgroundImg.png"

import card1 from "../../assets/img/Solutions/Blockchain/card1.png"
import card2 from "../../assets/img/Solutions/Blockchain/card2.png"
import card3 from "../../assets/img/Solutions/Blockchain/card3.png"
import card4 from "../../assets/img/Solutions/Blockchain/card4.png"
import card8 from "../../assets/img/Solutions/Blockchain/card8.png"
import card5 from "../../assets/img/Solutions/Blockchain/card5.png"
import card6 from "../../assets/img/Solutions/Blockchain/card6.png"
import card7 from "../../assets/img/Solutions/Blockchain/card7.png"
import card9 from "../../assets/img/Solutions/Blockchain/card9.png"

import number1 from "../../assets/img/Solutions/Voicebot/number1.png"
 import number2 from "../../assets/img/Solutions/Voicebot/number2.png"
 import number3 from "../../assets/img/Solutions/Voicebot/number3.png"
 import number4 from "../../assets/img/Solutions/Voicebot/number4.png"


 import potential1 from "../../assets/img/Solutions/Blockchain/potential1.png"
import potential2 from "../../assets/img/Solutions/Blockchain/potential2.png"
import potential3 from "../../assets/img/Solutions/Blockchain/potential3.png"
import potential4 from "../../assets/img/Solutions/Blockchain/potential4.png"

import platform1 from "../../assets/img/Solutions/Blockchain/platform1.png"
import platform2 from "../../assets/img/Solutions/Blockchain/platform2.png"
import platform3 from "../../assets/img/Solutions/Blockchain/platform3.png"
import platform4 from "../../assets/img/Solutions/Blockchain/platform4.png"
import platform5 from "../../assets/img/Solutions/Blockchain/platform5.png"

import framework1 from "../../assets/img/Solutions/Voicebot/framework1.png"
 import framework2 from "../../assets/img/Solutions/Voicebot/framework2.png"
 import framework3 from "../../assets/img/Solutions/Voicebot/framework3.png"

 import arch1 from "../../assets/img/Solutions/Blockchain/arch1.png"
import arch2 from "../../assets/img/Solutions/Blockchain/arch2.png"
import arch3 from "../../assets/img/Solutions/Blockchain/arch3.png"
import arch4 from "../../assets/img/Solutions/Blockchain/arch4.png"
import arch5 from "../../assets/img/Solutions/Blockchain/arch5.png"

import process1 from "../../assets/img/Solutions/Marketplace/process1.png";
 import process2 from "../../assets/img/Solutions/Marketplace/process2.png";
 import process3 from "../../assets/img/Solutions/Marketplace/process3.png";
 import process4 from "../../assets/img/Solutions/Marketplace/process4.png";
 import process5 from "../../assets/img/Solutions/Marketplace/process6.png";
 import process6 from "../../assets/img/Solutions/Marketplace/process7.png";

 import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
import outsource2 from "../../assets/img/Solutions/Blockchain/outsource2.png"
import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing.jsx"
import { Contact } from "../../components/Homepage/Contact";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import Mailus from "../../components/Homepage/Mailus.js";
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
        
        <Potential data={potentialData} />
        
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
export default BlockChain;
const bannerTextData = {
  mainHeading: "Empowering Innovations With our",
  middleHeading: "Blockchain Development Services",
  backgroundImage: ServiceBackgroudImage,
  rightImage: blockchainImg,
  bottomHeading:
  `Dive into the transformative world of secure, reliable, and efficient solutions with our cutting-edge Blockchain technology development. Connect with our top developers for Custom Blockchain Development Services.`,
};
const potentialData = {
  firstHeading: "Why Choose Haspper?",
  secondHeading: "Your Ultimate Ally in Blockchain App Development",
  description:
   `We aim to be a reliable and trustworthy tech partner, offering comprehensive blockchain app development services, by reaching even the most involved development requirements and specifications of our clients.`, 
  cardData: [
    {
      image: potential1,
      title: "Cost-effective Development",
      description:
       `We provide cost-effective blockchain software development, assuring a secure and dependable procedure while not taxing your financial resources.`, 
    },
    {
      image: potential2,
      title: "Agile Development Process",
      description:
      `With our transparent Agile development process, you can stay informed and active throughout the lifecycle of your project.`,
    },
    {
      image: potential3,
      title: "Experience in 15+ Industries",
      description:
       `Hire blockchain developers from OnGraph, bringing expertise across diverse sectors like healthcare, fintech, entertainment, education, and more.`,
    },
    {
      image: potential4,
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
      image: card1,
      text: "Pioneering Blockchain Development Services",
    },
    {
      image: card2,
      text: "Blockchain Consulting Services",
    },
    {
      image: card3,
      text: "Coins & Wallets Development services",
    },
    {
      image: card4,
      text: "Decentralized application (dApp) development",
    },
    {
      image: card5,
      text: "Smart Contract Development services",
    },
    {
      image: card6,
      text: "Hyperledger blockchain development",
    },{
      image: card7,
      text: "Ethereum blockchain development",
    },
    {
      image: card8,
      text: "POC Development services",
    },
    {
      image: card9,
      text: "ICO Development Services",
    },
    {
      image: card4,
      text: "Fintech/Defi Application Development services",
    },
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
      number: "50+",
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
    name: "Blockchain Platforms",
    imgData: [
      platform1,
      platform2,
      platform3,
      platform4,
      platform5
    ],
  },
  {
    name: "Languages",
    imgData: [
      framework1,
      framework2,
      framework3,
      xamarin,
      ionic,
      node,
      laravel,
      python,
      java,
      objectC,
    ],
  },
  {
    name: "System Architecture",
    imgData: [arch1, arch2, arch3, arch4, arch5],
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


  

  const outSourceData = {
    firstHeading: "Why choose Haspper for",
    secondHeading: "VoiceBot app development?",
    description:
      `You just sit back in your office or home and enjoy your app development journey with us. You can trust us for all your Voicebot app development requirements`,
   
      cardData: [
        [
        {
          image: card1,
          heading: "Blockchain App Development Services",
          description:
           `Assisting several industry verticals in securing and streamlining their processes by providing cutting-edge blockchain applications.`,   
        },
        {
          image: outsource2,
          heading: "Blockchain Consulting Services",
          description:
         `With our specialized blockchain consulting, we help you discover new prospects in the crypto realm.`, 
        },
      ],
      [
        {
          image: card3,
          heading: "Coins & Wallets",
          description:
           `Providing extensive software and infrastructure assistance to help you develop your own coin.`,
        },
        {
          image: potential2,
          heading: "Decentralized Application (dApp) Development",
          description:
            `Assisting your company in harnessing the power of the decentralized network for effective DApp development.`,
        },
      ],
      [
        {
          image: potential3,
          heading: "Smart Contract Development",
          description:
          `Our full-stack blockchain consulting services include creating secure and compelling smart contracts and enhancing transaction processes.`,  
        },
        {
          image: card4,
          heading: "Hyperledger Blockchain Development",
          description:
            `Specialized in Hyperledger to help you disrupt industries and explore undiscovered business opportunities.`,
          },
        ],
        [
          {
            image: card7,
            heading: "Ethereum Blockchain Development",
            description:
            `With our personalized Ethereum blockchain solutions, we assist you in transforming into a cutting-edge Decentralized Autonomous Organization.`,
          },
          {
            image: card6,
            heading: "POC Development",
            description:
              `Assisting in identifying potential project gaps through functional testing by providing detailed mock-ups based on your concepts.`,
            },
            {
              image: card9,
              heading: "ICO Development Services",
              description:
                `Handling ICO smart contracts and maintaining the infrastructure for successful ICO campaigns while assisting you with your token offerings.`,
            }
      ],
    ]
  };

  const developmentProcessData = {
    firstHeading: "Blockchain Development",
    secondHeading: "Process We Follow",
    description:
      "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our Chatbot App Development process to ensure we fulfill all your requirements",
    stepsData: [
      {
        title: "Blockchain Consultancy",
        description:
          "We do market research to help our clients to identify the potential of blockchain for their organizations.",
        icon: process1,
      },
      {
        title: "Discovery",
        description:
          "We research thoroughly and ask questions to know your detailed requirements and suggest the best solution.",
        icon: process2,
      },
      {
        title: "User Experience and Technical Design",
        description:
          "As a Blockchain development company in the USA, we deliver high-quality designs while securing a seamless user experience",
        icon: process3,
      },
      {
        title: " Blockchain Development",
        description:
          "From design to development, our blockchain developers develop the finest applications to accelerate the time to market and increase ROI.",
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
          "We monitor, maintain and provide 24x7 support for running new OS releases, 3rd party upgrades, and new releases.",
        icon: process6,
      },
    ],
  };