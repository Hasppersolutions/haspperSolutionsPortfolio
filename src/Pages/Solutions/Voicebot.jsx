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
export default Voicebot;
const bannerTextData = {
  mainHeading: "Tasks made Easy with",
  middleHeading: "VoiceBot Development",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
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
      image: multilingualChatbots,
      title: "Automated",
      description:
        `With AI assistance, voice calls are automatically promoted to prospects, reducing the number of manual calls and promoting automation`
    },
    {
      image: support,
      title: "Personalized",
      description:
      `Customers will get the best calling experience with individualized conversation, language, and the correct context that will keep them engaged.`,  
    },
    {
      image: customer,
      title: "Time-saving",
      description:
       `Our voice bot helps you save time by making multiple calls at once. This reduces your staff's contact volume and increases productivity in your call center.`,
    },
    {
      image: chatbot,
      title: "Cost-saving",
      description:
        `Eliminates the need for several call agents and staff, resulting in significant cost savings for your company.`,
    },
    {
      image: chatTesting,
      title: "Customizable",
      description:
        `With the help of our fully customizable Voicebot technology, you may customize your Voicebot to meet your specific company needs.`,    
    },
    {
      image: voiceAnable,
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
      image: Group,
      text: "Voice Recognition",
    },
    {
      image: Vector,
      text: "Server Response Generation",
    },
    {
      image: bot,
      text: "Buisness Logic & Testing",
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
      number: "50+",
      label: "Voicebot App Developers",
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
    name: "Languages",
    imgData: [
      "path/to/html5-icon",
      python,
      java,
      objectC,
      "path/to/swift-icon",
    ],
  },
  {
    name: "Framework",
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


  const DividerComponentData = {
    firstHeading: "Why choose Haspper for",
    secondHeading: "VoiceBot app development ",
    description:
      `You just sit back in your office or home and enjoy your app development journey with us. You can trust us for all your Voicebot app development requirements`,
    cardData: [
      {
        image: multilingualChatbots,
        title: "Automated",
        description:
          `With AI assistance, voice calls are automatically promoted to prospects, reducing the number of manual calls and promoting automation`
      },
      {
        image: support,
        title: "Personalized",
        description:
        `Customers will get the best calling experience with individualized conversation, language, and the correct context that will keep them engaged.`,  
      },
      {
        image: customer,
        title: "Time-saving",
        description:
         `Our voice bot helps you save time by making multiple calls at once. This reduces your staff's contact volume and increases productivity in your call center.`,
      },
      {
        image: chatbot,
        title: "Cost-saving",
        description:
          `Eliminates the need for several call agents and staff, resulting in significant cost savings for your company.`,
      },
      {
        image: chatTesting,
        title: "Customizable",
        description:
          `With the help of our fully customizable Voicebot technology, you may customize your Voicebot to meet your specific company needs.`,    
      },
      {
        image: voiceAnable,
        title: "Highly Secure",
        description:
          `Our voicebot system is built on innovative technologies and monitored by in-house developers throughout the day, ensuring that all of your data is kept safe and secure.`,    
      },
    ],
  };