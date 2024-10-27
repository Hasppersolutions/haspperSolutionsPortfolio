import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/Services/Startup/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import agileDevOps from "../../assets/img/Services/Startup/agileDevOps.png";
import cyberSecurity from "../../assets/img/Services/Startup/cyberSecurity.png";
import dataAnalytics from "../../assets/img/Services/Startup/dataAnalytics.png";
import mobileDevelopment from "../../assets/img/Services/Startup/mobileDevelopment.png";
import cloudcomputing from "../../assets/img/Services/Startup/cloudcomputing.png";
import strategicTransformation from "../../assets/img/Services/Startup/strategicTransformation.png";
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
import monogoDb from "../../assets/img/Services/Startup/monogoDb.png";
import mysql from "../../assets/img/Services/Startup/mysql.png";
import oracle from "../../assets/img/Services/Startup/oracle.png";
import sqlLite from "../../assets/img/Services/Startup/sqlLite.png";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png"
import IndustriesServed from "../../components/Services/IndustriesServed"
import DividerComponent from "../../components/Solutions/DividerComponent";
import ux from "../../assets/img/Services/chatbot/ux.png";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
import Mailus from "../../components/Homepage/Mailus";


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
        <Stats data={statsData} />
        <Technology data={technologyData} />
        <IndustriesServed data={industries} />
        <DividerComponent data={DividerComponentData}/>
        <DevelopmentProcess data={developmentProcessData} />
        <WaveLine />
        <FAQ data={faqData}/>
        <Mailus />
        <ServicesAndStaffing />

      </Box>
    </>
  );
};
export default ChatBot;
const bannerTextData = {
  mainHeading: "Enterprise Software Development",
  middleHeading: "Services & IT Solutions",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
    "Drive smarter decision-making and operational excellence with our data-driven enterprise solutions and software development.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Future-Proof Your Startup with Our",
  secondHeading: "All-Inclusive IT Services",
  description:
    "Turn your vision into a disruptive reality. Our suite of IT services is precisely engineered to propel startups into industry leaders.",
  cardData: [
    {
        image: agileDevOps,
        title: "End-to-End Software Maintenance Services",
        description:
          "Our development expertise comes from our 12+ years of building enterprise IT solutions. We have a team of top developers which enables you to build solutions faster and grow exponentially.",
      },
      {
        image: cloudcomputing,
        title: "Custom ERP Solutions",
        description:
          "Our team designs and implements custom ERP solutions to streamline your enterprise operations, integrating everything from supply chain to human resources.",
      },
      {
        image: dataAnalytics,
        title: "Artificial Intelligence and Machine Learning Services",
        description:
          "Harness the power of AI and ML to make data-driven decisions and automate complex processes. Our expert team can guide you through AI/ML implementation and management.",
      },
      {
        image: mobileDevelopment,
        title: "API Integration Services",
        description:
          "We offer API integration services to ensure seamless communication between your different enterprise software applications, leading to greater efficiency and data sharing.",
      },
      {
        image: cyberSecurity,
        title: "Business Continuity Services",
        description:
          "Ensure your operations never hit a snag with our business continuity services. From data backup to disaster recovery, we've got you covered.",
      },
      {
        image: strategicTransformation,
        title: "IT Compliance and Governance",
        description:
          "Maintain the highest standards of IT compliance and governance with our specialized services, keeping your enterprise aligned with industry regulations and best practices.",
      }
    ],
};

const featureData = {
  mainHeading: "Unparalleled Enterprise IT",
  subHeading: "Solutions Before and After Implementation",
  description:
    "Enterprise IT Solutions are tailored services designed to meet the specific needs of established organizations. These services range from strategic consulting to end-to-end implementation, management, and support. Features of our Enterprise IT Solutions include comprehensive audits, risk assessments, and dedicated round-the-clock service desks. Our specialists can provide on-site or remote support, harnessing the latest technological advancements to ensure optimal performance and business continuity. Our solutions can be customized under both long-term service level agreements or shorter, project-based contracts.",
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
      number: "150+",
      label: "Enterprise Solutions Delivered",
    },
    {
      icon: multilingualChatbots,
      number: "12+",
      label: "Years of Experience",
    },
    {
      icon: multilingualChatbots,
      number: "250+",
      label: "Enterprise Solutions Experts",
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
    name: "Database",
    imgData: [monogoDb, mysql, oracle, sqlLite],
  },

];
const industries= {
  firstHeading: "Startup Landscapes We Transform",
  backgroundImage: ServiceBackgroudImage,
  cardData: [
    {
      image: mysql,
      title: "Fitness App Development Solutions",
      description: "Custom app solutions for fitness startups.",
    },
    {
      image: mysql,
      title: "Custom E-Learning Solutions",
      description: "Innovative e-learning platforms tailored to your needs.",
    },
    {
      image: mysql,
      title: "Food",
      description: "Digital solutions for the food industry.",
    },
    {
      image: mysql,
      title: "Telecom App Development Solutions",
      description: "Cutting-edge apps for the telecom sector.",
    },
    {
      image: mysql,
      title: "Banking",
      description: "Secure and scalable solutions for banking.",
    },
    {
      image: mysql,
      title: "Media and Entertainment",
      description: "Solutions for digital media and entertainment platforms.",
    },
    {
      image: mysql,
      title: "Media and Entertainment",
      description: "Solutions for digital media and entertainment platforms.",
    },
    
  ],
};

const DividerComponentData = {
    firstHeading: "Powering Up with Futuristic Tech for",
    secondHeading: "Tomorrow's Startups",
    cardData: [
      {
        image: cloudcomputing,
        title: "Cloud Computing",
        description:
         `Harness the cloud’s scalability and flexibility to fuel your startup’s growth and agility.`,   
      },
      {
        image: mysql,
        title: "Blockchain Consulting Services",
        description:
       `With our specialized blockchain consulting, we help you discover new prospects in the crypto realm.`, 
      },
      {
        image: mysql,
        title: "Artificial Intelligence",
        description:
         `Utilize AI for smart automation, data analysis, and consumer interactions, revolutionizing your startup’s capabilities.`,
      },
      {
        image: mysql,
        title: "Internet of Things (IoT)",
        description:
          `Connect devices and systems seamlessly, opening new avenues for control and data collection.`,
      }
    ],
  };
  const faqData = {
    faqItems: [
      {
        question:
          "Q. What is a typical timeline for a startup project?",
        answer:
          "The timeline varies depending on the project’s complexity and requirements. However, a typical small-scale web or mobile application can be developed within 3 to 6 months.",
      },
      {
        question: "Q. Can you integrate third-party API's?",
        answer:
          "Yes, we can seamlessly integrate third-party APIs into your application, making sure they align perfectly with your startup’s needs and functionalities.",
      },
      {
        question: "Q. How secure my startup's data with your solutions?",
        answer:
          "Security is our top priority. We employ robust encryption techniques and adhere to industry standards to ensure your data is secure."
      },
      {
        question:
          "Q. Do you offer post-launch support?",
        answer:
          "Yes, we offer a range of post-launch services including software maintenance, updates, and customer support, ensuring your startup’s continuous growth.",
      },
      {
        question:
          "Q. How scalable are your solutions?",
        answer:
          "Our Startup IT Solutions are built with scalability in mind to accommodate your startup’s rapid growth and changing needs.",
      },
      {
        question:
          "Q. What's your payment structure?",
        answer:
          "We offer flexible payment options tailored to suit startups, which can include milestone-based payments or a retainer model.",
      },
    ]
  }
  //Keep 6 max step data
  const developmentProcessData = {
    firstHeading: "Elevate Your Enterprise Operations in",
    secondHeading: "Just 6 Proven Steps!",
    stepsData: [
      {
        title: "Initial Consultation and Strategy Formation",
        description:
          "In the first step, we will engage in detailed discussions to understand the unique requirements and challenges that your enterprise faces.",
        icon: ux,
      },
      {
        title: "Detailed Planning and Roadmap",
        description:
          "Following the initial consultation, we'll create a meticulous project plan that outlines the specific milestones, deadlines, and resource allocation.",
        icon: ux,
      },
      {
        title: "Enterprise-Centric UI/UX Design",
        description:
          "Our design experts will consult with you to create user interfaces that align with enterprise-level requirements and your corporate brand.",
        icon: ux,
      },
      {
        title: "Development and Iteration",
        description:
          "Using cutting-edge frameworks like React Native and Flutter, our expert developers will create a solution tailored for your startup, all while adhering to Agile principles.",
        icon: ux,
      },
      {
        title: "Testing and Quality Assurance",
        description:
          "Our rigorous, startup-optimized QA process will vet the functionality and stability of your solution, ensuring it meets all quality standards before being staged for final approval.",
        icon: ux,
      },
      {
        title: "Ongoing Support and Optimization",
        description:
          "Post-launch, we continue to monitor performance analytics and roll-out updates, ensuring your startup solution stays ahead of the curve and operates flawlessly.",
        icon: ux,
      },
    ],
  };