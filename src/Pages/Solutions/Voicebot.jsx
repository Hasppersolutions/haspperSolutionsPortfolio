import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import Potential from "../../components/Services/Ios/Potential";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png";
import chatbot from "../../assets/img/Services/chatbot/chatbot.png";
import chatTesting from "../../assets/img/Services/chatbot/chatTesting.png";
import customer from "../../assets/img/Services/chatbot/customer.png";
import support from "../../assets/img/Services/chatbot/support.png";
import voiceAnable from "../../assets/img/Services/chatbot/voiceAnable.png";
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
import securePay from "../../assets/img/Services/chatbot/secure-pay.png";
import amazonPay from "../../assets/img/Services/chatbot/amazon-pay.png";
import payPal from "../../assets/img/Services/chatbot/pay-pal.png";
import stripe from "../../assets/img/Services/chatbot/stripe.png";
import authorizeNet from "../../assets/img/Services/chatbot/authorize-net.png";
import WaveLine from "../../components/WaveLine";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import workflow1 from "../../assets/img/Solutions/Voicebot/workflow1.png"
import workflow2 from "../../assets/img/Solutions/Voicebot/workflow2.png"
import workflow3 from "../../assets/img/Solutions/Voicebot/workflow3.png"

import card1 from "../../assets/img/Solutions/Voicebot/card1.png"
import card2 from "../../assets/img/Solutions/Voicebot/card2.png"
import card3 from "../../assets/img/Solutions/Voicebot/card3.png"
import card4 from "../../assets/img/Solutions/Voicebot/card4.png"
import card5 from "../../assets/img/Solutions/Voicebot/card5.png"
import card6 from "../../assets/img/Solutions/Voicebot/card6.png"

 import number1 from "../../assets/img/Solutions/Voicebot/number1.png"
 import number2 from "../../assets/img/Solutions/Voicebot/number2.png"
 import number3 from "../../assets/img/Solutions/Voicebot/number3.png"
 import number4 from "../../assets/img/Solutions/Voicebot/number4.png"


import language1 from "../../assets/img/Solutions/Voicebot/language1.png"
import language2 from "../../assets/img/Solutions/Voicebot/language2.png"


import framework1 from "../../assets/img/Solutions/Voicebot/framework1.png"
import framework2 from "../../assets/img/Solutions/Voicebot/framework2.png"
import framework3 from "../../assets/img/Solutions/Voicebot/framework3.png"

import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing.jsx"

import outsource1 from "../../assets/img/Solutions/Voicebot/outsource1.png"
import outsource2 from "../../assets/img/Solutions/Voicebot/outsource2.png"
import outsource3 from "../../assets/img/Solutions/Voicebot/outsource3.png"
import outsource4 from "../../assets/img/Solutions/Voicebot/outsource4.png"
import outsource5 from "../../assets/img/Solutions/Voicebot/outsource5.png"
import outsource8 from "../../assets/img/Solutions/Voicebot/outsource8.png"
import outsource9 from "../../assets/img/Solutions/Voicebot/outsource9.png"
 
import backgroundImg from "../../assets/img/Solutions/Voicebot/backgroundrightImg.png"
import { Contact } from "../../components/Homepage/Contact.js";
import Mailus from "../../components/Homepage/Mailus.js";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing.js";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess.jsx";

import process1 from "../../assets/img/Solutions/Marketplace/process1.png";
 import process2 from "../../assets/img/Solutions/Marketplace/process2.png";
 import process3 from "../../assets/img/Solutions/Marketplace/process3.png";
 import process4 from "../../assets/img/Solutions/Marketplace/process4.png";
 import process5 from "../../assets/img/Solutions/Marketplace/process6.png";
 import process6 from "../../assets/img/Solutions/Marketplace/process7.png";
const Voicebot = () => {
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
export default Voicebot;
const bannerTextData = {
  mainHeading: "Tasks made Easy with",
  middleHeading: "VoiceBot Development",
  backgroundImage: ServiceBackgroudImage,
  rightImage: backgroundImg,
  bottomHeading:
    "We build highly intelligent NLP-enabled Voice Assistants for Amazon Alexa, Google Home, and Apple Pod.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Why choose Haspper for",
  secondHeading: "VoiceBot app development ",
  description:
    `You just sit back in your office or home and enjoy your app development journey with us. You can trust us for all your Voicebot app development requirements`,
  cardData: [
    {
      image: card1,
      title: "Automated",
      description:
        `With AI assistance, voice calls are automatically promoted to prospects, reducing the number of manual calls and promoting automation`
    },
    {
      image: card2,
      title: "Personalized",
      description:
      `Customers will get the best calling experience with individualized conversation, language, and the correct context that will keep them engaged.`,  
    },
    {
      image: card3,
      title: "Time-saving",
      description:
       `Our voice bot helps you save time by making multiple calls at once. This reduces your staff's contact volume and increases productivity in your call center.`,
    },
    {
      image: card4,
      title: "Cost-saving",
      description:
        `Eliminates the need for several call agents and staff, resulting in significant cost savings for your company.`,
    },
    {
      image: card5,
      title: "Customizable",
      description:
        `With the help of our fully customizable Voicebot technology, you may customize your Voicebot to meet your specific company needs.`,    
    },
    {
      image: card6,
      title: "Highly Secure",
      description:
        `Our voicebot system is built on innovative technologies and monitored by in-house developers throughout the day, ensuring that all of your data is kept safe and secure.`,    
    },
  ],
};

const featureData = {
  mainHeading: "VoiceBot Development for",
  subHeading: "Smart and Efficent Workflow",
  description:
    `Voice Bots have become a must-have for most businesses today in order to meet customer requests. In terms of customer engagement, it outperforms chatbots. To speak with clients across digital channels utilizing human voice, voicebots use artificial intelligence, machine learning, data analytics, and natural language processing. They have the unique capacity to recognise a customer’s demands throughout a conversation and reply intelligently to the questions posed. They accomplish this by turning built-in text into speech scripts and programmes designed to handle a wide range of interactions.

`,
  cardData: [
    {
      image: workflow1,
      text: "Voice Recognition",
    },
    {
      image: workflow2,
      text: "Server Response Generation",
    },
    {
      image: workflow3,
      text: "Buisness Logic & Testing",
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
      number: "50+",
      label: "Voicebot App Developers",
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
          "Q. When it comes to creating a Voicebot, how long does it take? ",
        answer:
          "The time it takes to create a Voicebot has no fixed value. As a result, it is preferable to contact professionals to determine the timing for developing a voicebot that meets your company’s requirements."
    },
      {
        question: 
       " Q. What does it cost to develop a voicebot?" ,
        answer:
          "The cost of developing a voicebot is determined by a number of factors, including the type of bot and the sector it serves just like the cost of developing an app. Therefore, consulting with a professional to receive a cost estimate on your voicebot development needs is useful."
    },
      {
        question: 
        "Q. Can voicebots be used to improve customer service?"    ,                
        answer:
          "If you’re having trouble improving customer service, you’ll almost certainly need a voicebot. More than 67 percent of internet firms in the globe employ voicebots. Self-help features, quick responses, and real-time engaged discussion are all advantages of the voicebot."
    },
      {
        question: 
        "Q. Which programming language is ideal for creating a customer-service Voicebot?  "                      ,
        answer:
         "Building a Voicebot with AI (Artificial Intelligence) characteristics is the greatest solution for businesses. Programming languages including Java, Python, C++, PHP, Ruby, and Lisp are ideal for creating AI voice bots." 
    },
      
    ]
  }

  const outSoutceData = {
    firstHeading: "Why choose Haspper for",
    secondHeading: "VoiceBot app development?",
    description:
      `You just sit back in your office or home and enjoy your app development journey with us. You can trust us for all your Voicebot app development requirements`,
   
    cardData: [
      [
        {
          image: outsource1,
          heading: "Fully Automated Calling",
          description:
            "With the support of predetermined data saved in our strong voicebot system, our AI-powered callbot performs routine calls to all of your customers automatically.",
        },
        {
          image: outsource2,
          heading: "Supports Multiple Languages",
          description:
            "Our Voicebot is multilingual, allowing businesses to communicate with their target audience in their preferred language."
        },
      ],
      [
        {
          image: outsource3,
          heading: "Conversion-optimized",
          description:
            "Our voicebot helps telemarketing teams close more sales and leads by using machine learning to convert more call attendants into quick purchasers."
        },
        {
          image: outsource4,
          heading: "AI-enabled",
          description:
            "Our AI-powered Voicebots make automated voice calls to prospects at the perfect time, when conversions are most likely."
        },
      ],
      [
        {
          image: outsource5,
          heading: "Multiple Business Applications",
          description:
          "All key business functions, such as sales, telemarketing, service, customer support, and contact center, can benefit from our multi-purpose voicebot"
        },
        {
          image: outsource1,
          heading: "Mass Calling",
          description:
            "Our voicebot is designed for mass calling and is extremely scalable, so you can make bulk calls to your vast audience at any time, whether it’s 500, 1000, or 100,000 each day."
        },
      ],
      [
        {
          image: outsource4,
          heading: "Natural Language",
          description:
            "Voice Bots are intelligent robots that converse with your consumers in natural language without the need for human intervention."
        },
        {
          image: outsource8,
          heading: "Customizable Scripts",
          description:
            "Pre-written scripts that are customisable to your company’s demands and specifications can help you communicate with your consumers."
        },
        {
          image: outsource9,
          heading: "In-depth Data & Analytics",
          description:
           "Our actionable data, analytics, and insights help you better nurture your customers and make more profitable business decisions." 
        }
      ],
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