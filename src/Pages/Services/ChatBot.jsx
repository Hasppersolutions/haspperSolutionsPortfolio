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
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
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
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import support2 from "../../assets/img/Services/chatbot/support-1.png";
import ux from "../../assets/img/Services/chatbot/ux.png";
import quality from "../../assets/img/Services/chatbot/quality.png";
import planning from "../../assets/img/Services/chatbot/planning.png";
import research from "../../assets/img/Services/chatbot/research.png";
import development from "../../assets/img/Services/chatbot/development.png";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import WaveLine from "../../components/WaveLine.jsx";
import { Contact } from "../../components/Homepage/Contact";
import Outsourcing from "../../components/Services/CrossPlatform/OutSourcing";
// import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
import VariteyApp from '../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../assets/img/Services/CrossPlatform/Mission.svg';
import EnterpriseApplication from '../../assets/img/Services/CrossPlatform/EnterpriceApplication.svg'
import Pricing from '../../assets/img/Services/CrossPlatform/Pricing.svg';
import run5 from "../../assets/img/Services/CrossPlatform/React/run5.png"

import run1 from "../../assets/img/Services/CrossPlatform/React/run1.png"
import run2 from "../../assets/img/Services/CrossPlatform/React/run3.png"
import IndustriesServed from "../../components/Services/IndustriesServed"
import foodimage from "../../assets/img/Services/Startup/foodimage.png"
import fitnessApp from "../../assets/img/Services/Startup/fitnessApp.png"
import elearningsolution from "../../assets/img/Services/Startup/elearningsolution.png";
import mediaentertain from "../../assets/img/Services/Startup/mediaentertain.png";
import banking from "../../assets/img/Services/Startup/banking.png";
import DesignBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import telecomedev from "../../assets/img/Services/Startup/telecomedev.png";





const ChatBot = () => {
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
        <WaveLine />
        <Stats data={statsData} />
        <Technology data={technologyData} />
        <IndustriesServed data={industries} />
        <Outsourcing data={outSoutceData} />
        <DevelopmentProcess data={developmentProcessData} />
        <WaveLine />
        <FAQ data={faqData}/>
        <Contact />
        <Mailus />
        <ServicesAndStaffing />
        {/* <KeyFeatures /> */}
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
  description:
    "Having an experienced team of developers, we leverage artificial intelligence (AI) tools to build custom chatbots for your business. Our developers customize your chatbots to enable full visibility into the customer journey through real-time data analysis.",
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
  description:
    "We have created several virtual assistants that give enterprises the first-mover advantage and instantly add value to industries and functions like sales, service, IT Help Desk, retail banking, and eCommerce. With our Chatbot App Development Services, we build a personal assistant, which is ready to be deployed, extending easily to company-specific needs. As a top-rated Chatbot development company, we can state a few benefits of AI-powered chatbots, and they are as follows:",
  cardData: [
    {
      image: Group,
      text: "Available 24 X 7",
    },
    {
      image: Vector,
      text: "Cost-Effective",
    },
    {
      image: bot,
      text: "Work Automation",
    },
    {
      image: person,
      text: "Increased Customer Engagement",
    },
    {
      image: optimize,
      text: "Proactive Interaction",
    },
    {
      image: scale,
      text: "Keeping Up With The Trend",
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
      number: "150+",
      label: "Mobile App Developers",
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

const faqData = {
  faqItems: [
    {
      question:
        "Q. When it comes to creating a chatbot, how long does it take?",
      answer:
        "The time it takes to create a chatbot has no fixed value. As a result, it is preferable to contact professionals to determine the timing for developing a chatbot that meets your company’s requirements.",
    },
    {
      question: "Q. What does it cost to develop a chatbot?",
      answer:
        "The cost of developing a chatbot is determined by a number of factors, including the type of bot and the sector it serves just like the cost of developing an app. Therefore, consulting with a professional to receive a cost estimate on your chatbot development needs is useful.",
    },
    {
      question: "Q. Can chatbots be used to improve customer service?",
      answer:
        `If you’re having trouble improving customer service, you’ll almost certainly need a chatbot. More than 67 percent of internet firms in the globe employ chatbots. Self-help features, quick responses, and real-time engaged discussion are all advantages of the chatbot.

        Here are a few more advantages:

        ✅Chatbots provide users with a quick answer
        ✅Chatbots save time and money
        ✅A chatbot is available 24 hours a day, 7 days a week.
        ✅It can handle a large number of inquiries at once
        ✅It supports multiple languages
        `,
    },
    {
      question:
        "Q. Is it possible to have a safe and secure discussion with a chatbot?",
      answer:
        "Yes, a chatbot does safeguard the security of live chats. The majority of chatbots ensure that conversations are conducted in a secure, encrypted environment from beginning to end. Furthermore, chatbot security has been improved by using cutting-edge technologies such as facial recognition, artificial intelligence, and encrypted messaging.",
    },
    {
      question:
        "Q. Which programming language is ideal for creating a customer-service chatbot?",
      answer:
        "Building a chatbot with AI (Artificial Intelligence) characteristics is the greatest solution for businesses. Programming languages including Java, Python, C++, PHP, Ruby, and Lisp are ideal for creating AI chatbots.",
    },
  ]
}
//Keep 6 max step data
const developmentProcessData = {
  firstHeading: "Chatbot Development",
  secondHeading: "Process We Follow",
  description:
    "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our Chatbot App Development process to ensure we fulfill all your requirements",
  stepsData: [
    {
      title: "Protecting Your Intellectual Property",
      description:
        "We safeguard your splendid idea by signing an NDA to protect your original concept and secure your application.",
      icon: ux,
    },
    {
      title: "Discovery",
      description:
        "We research thoroughly and ask questions to know your detailed requirements and suggest the best solution",
      icon: research,
    },
    {
      title: "Design",
      description:
        "We create wireframe prototypes before transforming them into world-class UI designs.",
      icon: development,
    },
    {
      title: "Development",
      description:
        "We turn the designs into an app using the most advanced technology stacks and frameworks.",
      icon: planning,
    },
    {
      title: "Testing",
      description:
        "We do extensive testing to remove all the bugs and issues before making your app live.",
      icon: support2,
    },
    {
      title: "Support and Maintenance",
      description:
        "We continue to offer widespread support and maintenance to guarantee smooth operations.",
      icon: quality,
    },
  ],
};

const outSoutceData = {
  firstHeading: "Technologies empowering",
  secondHeading: "a Chatbot",
  description: "Our AI and NLP-powered Chatbots are enterprise-grade for use in the most popular consumer and business communication channels. Let us share technologies which empower a personal assistant to perform human-centric conversations.",
  cardData: [
    [
      {
        image: run1,
        heading: "Dialogue Management",
        description:
          "We train an AI-powered bot that lets it be context-aware and look back into the conversational history to predict the next action.",
      },
      {
        image: Mission,
        heading: "Fluid Conversations",
        description:
          "Depending on the action predicted by the dialogue manager, the respective template message is invoked.",
      },
    ],
    [
      {
        image: run2,
        heading: "Rich & Interactive Content",
        description:
          "We provide our smart Chatbot conversational UX design that enables them to respond to users with different types of structured messages like buttons, images, lists, quick replies, etc.",
      },
      {
        image: VariteyApp,
        heading: "Human Handover",
        description:
          "We perform bot development with a button to begin a “live chat session” when Chatbot doesn’t understand, or when a user wants to.",
      },
    ],
    [
      {
        image: TimelyDilevery,
        heading: "API Integration",
        description:
          "Our custom bots development services include coding of Bot logic, which makes it easier to integrate third parties via web services.",
      },
      {
        image: run5,
        heading: "Language Support",
        description:
          "AI Chatbots Development includes multilingual support that helps you serve a different targeted audience.",
      },
    ],
    [
      {
        image: EnterpriseApplication,
        heading: "Enterprise Capabilities",
        description:
          "We propose Chatbots that are built for enterprise requirements and stand up parallel to your existing systems.",
      },
      {
        image: Pricing,
        heading: "Platform Intelligence",
        description:
          "Our smart Bot enriches digital experiences. The intelligent engine of Chatbots understand, remember, and learn from the information gathered during each interaction.",
      },
    ],
  ],
  
};
const industries= {
  firstHeading: "Industries We Serve",
  description: "We build Chatbot solutions for every niche",
  backgroundImage: DesignBackgroudImage,
  cardData: [
    {
      image: fitnessApp,
      title: "Fitness App Development Solutions",
      description: "Custom app solutions for fitness startups.",
    },
    {
      image: elearningsolution,
      title: "Custom E-Learning Solutions",
      description: "Innovative e-learning platforms tailored to your needs.",
    },
    {
      image: foodimage,
      title: "Food",
      description: "Digital solutions for the food industry.",
    },
    {
      image: telecomedev,
      title: "Telecom App Development Solutions",
      description: "Cutting-edge apps for the telecom sector.",
    },
    {
      image: banking,
      title: "Banking",
      description: "Secure and scalable solutions for banking.",
    },
    {
      image: mediaentertain,
      title: "Media and Entertainment",
      description: "Solutions for digital media and entertainment platforms.",
    },
    {
      image: mediaentertain,
      title: "HRMS",
      description: "Custom Feature-Packed HRMS Development Solution.",
    }
    
  ],
};
