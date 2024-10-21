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

const ChatBot = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Banner data={bannerTextData} />
        <FeatureSection data = {featureData}/>
        <Potential data={potentialData} />
      </Box>
    </>
  );
};
export default ChatBot;
const bannerTextData = {
  mainHeading: "AI Chatbot",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
    "AI and NLP-powered Chatbots to use in the most popular consumer and business communication channels. Transform your business with our AI chatbot development company.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
    firstHeading: "Enterprise-grade Chatbot",
    secondHeading: "Development Services",
    description: "Having an experienced team of developers, we leverage artificial intelligence (AI) tools to build custom chatbots for your business. Our developers customize your chatbots to enable full visibility into the customer journey through real-time data analysis.",
    cardData: [
      {
        image: multilingualChatbots,
        title: "Multilingual Chatbots",
        description:
          "We use our 15+ years of chatbot development knowledge to implement translation tools that allow bots to engage customers in many languages. We create multilingual chatbots that assist businesses overcome language hurdles and expand their customer base globally.",
      },
      {
        image: support,
        title: "Custom Chatbot Development",
        description:
          "We are among India's leading chatbot development companies, helping start-ups, businesses, and entrepreneurs in developing customized and tailor-made chatbot solutions to meet the needs of customers.",
      },
      {
        image: customer,
        title: "Chatbot Consulting",
        description:
          "If any of our clients is non-technical and require assistance, we provide complete chatbot consulting services. We have over 15 years of experience delivering chatbot consultation to clients all over the world, earning us the title of one of World's most influential chatbot development companies.",
      },
      {
        image: chatbot,
        title: "Facebook Chatbot Development",
        description:
          "Our team has years of experience designing Facebook chatbots that end up creating a boulevard for thousands and millions of users across the world. You can provide automated and excellent customer service with our Facebook chatbots.",
      },
      {
        image: chatTesting,
        title: "Chatbot Testing",
        description:
          "Using powerful tools and technology, our remote Chatbot team can undertake manual and automated testing of Chatbot applications to deliver proficient and error-free solutions.",
      },
      {
        image: voiceAnable,
        title: "Voice-enable Chatbots",
        description:
          "Not only do we build chatbots, but we also develop highly interactive, customizable, high-quality, and efficient voice-enabled chatbots for businesses that want to provide comprehensive services to its customers.",
      },
    ],
  };

  const featureData = {
    mainHeading: "AI-Powered",
    subHeading: "Chatbot development company",
    description: "We have created several virtual assistants that give enterprises the first-mover advantage and instantly add value to industries and functions like sales, service, IT Help Desk, retail banking, and eCommerce. With our Chatbot App Development Services, we build a personal assistant, which is ready to be deployed, extending easily to company-specific needs. As a top-rated Chatbot development company, we can state a few benefits of AI-powered chatbots, and they are as follows:",
    cardData: [
      {
        image: Group,
        text: "Available 24 X 7"
      },
      {
        image: Vector,
        text: "Cost-Effective"
      },
      {
        image: bot,
        text: "Work Automation"
      },
      {
        image: person,
        text: "Increased Customer Engagement"
      },
      {
        image: optimize,
        text: "Proactive Interaction"
      },
      {
        image: scale,
        text: "Keeping Up With The Trend"
      },
    ]
  }