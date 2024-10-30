import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import mlearning from "../../assets/img/Services/iot/mlearning.png";
import menu from "../../assets/img/Services/iot/menu.png";
import fleetManagement from "../../assets/img/Services/iot/fleetManagement.png";
import webPortal from "../../assets/img/Services/iot/webPortal.png";
import FeatureSection from "../../components/Services/Chatbot/FeatureSection";
import WaveLine from "../../components/WaveLine.jsx";
import Stats from "../../components/Services/Stats";
import Technology from "../../components/Services/Technology";
import IndustriesServed from "../../components/Services/IndustriesServed";
import Outsourcing from "../../components/Services/CrossPlatform/OutSourcing";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import { Contact } from "../../components/Homepage/Contact";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import VariteyApp from '../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../assets/img/Services/CrossPlatform/Mission.svg';
import EnterpriseApplication from '../../assets/img/Services/CrossPlatform/EnterpriceApplication.svg'
import Pricing from '../../assets/img/Services/CrossPlatform/Pricing.svg';
import run5 from "../../assets/img/Services/CrossPlatform/React/run5.png"
import support2 from "../../assets/img/Services/chatbot/support-1.png";
import ux from "../../assets/img/Services/chatbot/ux.png";
import quality from "../../assets/img/Services/chatbot/quality.png";
import planning from "../../assets/img/Services/chatbot/planning.png";
import research from "../../assets/img/Services/chatbot/research.png";
import development from "../../assets/img/Services/chatbot/development.png";
import run1 from "../../assets/img/Services/CrossPlatform/React/run1.png"
import run2 from "../../assets/img/Services/CrossPlatform/React/run3.png"
import foodimage from "../../assets/img/Services/Startup/foodimage.png"
import fitnessApp from "../../assets/img/Services/Startup/fitnessApp.png"
import elearningsolution from "../../assets/img/Services/Startup/elearningsolution.png";
import mediaentertain from "../../assets/img/Services/Startup/mediaentertain.png";
import banking from "../../assets/img/Services/Startup/banking.png";
import DesignBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import telecomedev from "../../assets/img/Services/Startup/telecomedev.png";
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
import Group from "../../assets/img/Services/chatbot/Group.png";
import Vector from "../../assets/img/Services/chatbot/Vector.png";
import bot from "../../assets/img/Services/chatbot/bot.png";
import person from "../../assets/img/Services/chatbot/person.png";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png";


const IotDevelopment = () => {
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
        <FAQ data={faqData} />
        <Contact />
        <Mailus />
        <ServicesAndStaffing />
      </Box>
    </>
  );
};
export default IotDevelopment;
const bannerTextData = {
  mainHeading: "AI based IoT & IIoT Solutions to",
  middleHeading: "Unlock Faster Time to Market and Value",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
    "With an unmatched spectrum of development tools, processor designs, and a world-class ecosystem of partners that allow AI and end-to-end security, we are the industry standard for IoT and embedded devices.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "360 Degree End-to-End",
  secondHeading: "IoT & IIoT Services",
  description:
    "OnGraph delivers Product Design and Development across industry verticals. Our experts assist you from concept to production that enables you to focus on product strategy and management. Backed by skilled and proficient experts, we make use of the most advanced technology and tools to design and develop IoT products that meet your business model as well as focus on end consumer needs.",
  cardData: [
    {
      image: mlearning,
      title: "Product Requirement Analysis",
      description:
        "The purpose of requirements analysis is to make sure that all the product requirements accurately represent the client's needs and requirements. When executed correctly, requirements analysis results in a set of product requirements that, when met, will result in a deliverable that matches client’s expectations.",
    },
    {
      image: menu,
      title: "Product Architecture & Design",
      description:
        "Favorable results in the development stage precede large-scale production and commercialization. Here, the business launches its promotion campaign for the new product. The market research conducted during the conception stage influences the timing and location of the product launch.",
    },
    {
      image: fleetManagement,
      title: "Product Deployment & Enhancement",
      description:
        "If any of our clients is non-technical and require assistance, we provide complete chatbot consulting services. We have over 15 years of experience delivering chatbot consultation to clients all over the world, earning us the title of one of World's most influential chatbot development companies.",
    },
    {
      image: webPortal,
      title: "End-To-End Product Development",
      description:
        "Product development entails the actual design and manufacture of the product. Development commences with the manufacture of a prototype that facilitates market testing. Based upon the results of the tests, we decide on whether to undertake large-scale production or not.",
    },
  ],
};
const featureData = {
  mainHeading: "Intelligent IoT & IIoT Solutions That Connect",
  subHeading: "Devices, People and Processes over Cloud",
  description:
    "IoT center of excellence (CoE) specializes in humanizing information exchange between humans and machines over cloud-based solutions. We develop industry-focused IoT solutions which solve real business use cases and provide seamless integration. We not only integrate systems but allow them to bring insights and make decisions autonomously. We bring AI to the IoT world to make it ever learning applications that can help you control costs or improve business operations. We help you bring predictability to your business and allow you to fully control it.",
  cardData: [
    {
      image: Group,
      text: "Use Case Analysis",
    },
    {
      image: Vector,
      text: "Plan, Strategy and Roadmap",
    },
    {
      image: bot,
      text: "Proof of Concept or Full Development",
    },
    {
      image: person,
      text: "Deployment, Monitoring and Support",
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
        "Q. How do I hire developers or a team?",
      answer:
        `✅First of all – you should gather all the tasks for the developer which you want them to do for you.
        ✅Based on the chosen developer and technology, finalize the agreement with the sales team.
        ✅Upon your confirmation, we will set up everything, and connect you with the developer.`
    },
    {
      question: "Q. What can your developers do for you?",
      answer:
        `Our developers can help you build feature-rich apps that work effortlessly across different platforms. Here are some of the services we offer:
        ✅Product Consultation
        ✅Product Design
        ✅Product Development
        ✅Product Testing
        ✅Product Migration
        ✅Maintenance and Support`
    },
    {
      question: "Q. Can I hire a developer for hourly or project based tasks?",
      answer: `Yes, if you know the task to get done from the developer, then you can hire a developer on an hourly or project/task basis. Even we give the flexibility to change the hire model at a later stage.`,
    },
    {
      question:
        "Q. How much does it cost to hire a developer?",
      answer:
        "There is no straightforward answer to this question. The cost to hire a developer depends on many factors like the development platform, the type of app, complexity of the design, number of pages, features and functions, maintenance cost, etc. You can hire offshore developers on an hourly or fixed cost basis.",
    },
    {
      question:
        "Q. How will the apps be secure from external hacks?",
      answer:
        "Of Course, we consider various security standards when creating applications. Our testing parameters ensure that the android app performs perfectly without any difficulties.",
    },
    {
      question:
        "Q. Is there any hidden cost?",
      answer:
        "No, once we discuss with you your website requirements and then price. We work hard so that the outlined price quote is strictly maintained the same.",
    },
    {
      question:
        "Q. Why should I outsource my development to OnGraph?",
      answer:
        "Save time and reduce costs significantly when you outsource your development to OnGraph. We provide dedicated development teams and shared resources to work on your project full-time. Check out our article about offshore development teams.",
    },
    {
      question:
        "Q. What if I'm not happy with the results that were delivered?",
      answer:
        "Right from the beginning, we make sure to keep you in the loop by providing progress updates on your project’s development. During that time you can provide feedback and we’ll implement it. This process repeats until you are satisfied with the final result.",
    },
    {
      question:
        "Q. What about maintenance after my product is launched?",
      answer:
        "After successfully launching your product, we provide an open and dedicated support team to ensure any problems that arise are resolved quickly and efficiently. We can implement suggested updates or feature requests at an additional cost or as part of a monthly plan – find out more by contacting us.",
    },
  ],
};
//Keep 6 max step data
const developmentProcessData = {
  firstHeading: "Development Process",
  secondHeading: "We Follow",
  description:
    "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our IoT Solution process to ensure we fulfill all your requirements.",
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
  firstHeading: "Full IoT applications",
  secondHeading: "Stack Expertise",
  description:
    "OnGraph engineering tech talent has solid expertise across all technologies related to IoT and IIoT world. We have expertise in IoT applications that can pick sensor data from cloud servers and build intelligent applications (having informative visualizations) for web and mobile interfaces. Our app solutions can help you decipher business insights and can perform 2-way information exchange between your apps and installed devices to perform actions like switch-on or switch-off etc.",
  cardData: [
    [
      {
        image: run1,
        heading: "Connectivity",
        description:
          "NFC, Bluetooth, WiFi, 4G LTE, BLE etc",
      },
      {
        image: Mission,
        heading: "Protocols",
        description:
          "HTTPS, HTTP, UDP, TCP, MQTT, SNMP, XMPP etc",
      },
    ],
    [
      {
        image: run2,
        heading: "Platforms & Standards",
        description:
          "Nest,OPENIoT, Thread, HomeKit etc",
      },
      {
        image: VariteyApp,
        heading: "Data Visualization",
        description:
          "Big Data, D3, PowerBI, Tableau etc",
      },
    ],
    [
      {
        image: TimelyDilevery,
        heading: "Cloud",
        description:
          "Amazon AWS, Google Cloud, Windows Azure, DigitalOcean etc",
      },
      {
        image: run5,
        heading: "Operating Systems",
        description:
          "iOS, Android, Windows, Mac, Ubuntu etc",
      },
    ],
  ],
};
const industries = {
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
    },
  ],
};
