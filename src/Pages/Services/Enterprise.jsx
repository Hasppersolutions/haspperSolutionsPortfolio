import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/Services/Enterprise/ServiceBackgroudImage.png";
import Potential from "../../components/Services/Ios/Potential";
import agileDevOps from "../../assets/img/Services/Startup/agileDevOps.png";
import cloudcomputing from "../../assets/img/Services/Startup/cloudcomputing.png";
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
import developmentPlanning from "../../assets/img/Services/Startup/developmentPlanning.png";
import python from "../../assets/img/Services/chatbot/python.png";
import objectC from "../../assets/img/Services/chatbot/object-c.png";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import node from "../../assets/img/Services/chatbot/node.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
import monogoDb from "../../assets/img/Services/Startup/monogoDb.png";
import mysql from "../../assets/img/Services/Startup/mysql.png";
import ai from "../../assets/img/Services/Startup/ai.png";
import testingQuality from "../../assets/img/Services/Startup/testingQuality.png";
import oracle from "../../assets/img/Services/Startup/oracle.png";
import sqlLite from "../../assets/img/Services/Startup/sqlLite.png";
import telecomedev from "../../assets/img/Services/Startup/telecomedev.png";
import IndustriesServed from "../../components/Services/IndustriesServed"
import DividerComponent from "../../components/Solutions/DividerComponent";
import ux from "../../assets/img/Services/chatbot/ux.png";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
import Mailus from "../../components/Homepage/Mailus";
import foodimage from "../../assets/img/Services/Startup/foodimage.png"
import fitnessApp from "../../assets/img/Services/Startup/fitnessApp.png"
import iot from "../../assets/img/Services/Startup/iot.png";
import elearningsolution from "../../assets/img/Services/Startup/elearningsolution.png";
import mediaentertain from "../../assets/img/Services/Startup/mediaentertain.png";
import banking from "../../assets/img/Services/Startup/banking.png";
import blockchian from "../../assets/img/Services/Startup/blockchain.png";
import growth from "../../assets/img/Services/Startup/growth.png";
import solutiondelivered from "../../assets/img/Services/Startup/solutiondelivered.png";
import threestar from "../../assets/img/Services/Startup/threestar.png";
import thumsup from "../../assets/img/Services/Startup/thumsup.png";
import customerErp from "../../assets/img/Services/Enterprise/customerErp.png";
import apiIntegration from "../../assets/img/Services/Enterprise/apiIntegration.png";
import businessContinuity from "../../assets/img/Services/Enterprise/businessContinuity.png";
import detailedPlannig from "../../assets/img/Services/Enterprise/detailedPlannig.png";
import maintaince from "../../assets/img/Services/Enterprise/maintaince.png";
import initialConsultation from "../../assets/img/Services/Enterprise/initialConsultation.png";
import itCompliance from "../../assets/img/Services/Enterprise/itCompliance.png";
import DesignBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import html from "../../assets/img/Services/Startup/html.png";
import flutter from "../../assets/img/Services/Startup/flutter.png";
import swift from "../../assets/img/Services/Startup/swift.png";
import angularJs from "../../assets/img/Services/Startup/angularJs.png";
import phoneGap from "../../assets/img/Services/Startup/phoneGap.png"; 


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
        image: customerErp,
        title: "Custom ERP Solutions",
        description:
          "Our team designs and implements custom ERP solutions to streamline your enterprise operations, integrating everything from supply chain to human resources.",
      },
      {
        image: ai,
        title: "Artificial Intelligence and Machine Learning Services",
        description:
          "Harness the power of AI and ML to make data-driven decisions and automate complex processes. Our expert team can guide you through AI/ML implementation and management.",
      },
      {
        image: apiIntegration,
        title: "API Integration Services",
        description:
          "We offer API integration services to ensure seamless communication between your different enterprise software applications, leading to greater efficiency and data sharing.",
      },
      {
        image: businessContinuity,
        title: "Business Continuity Services",
        description:
          "Ensure your operations never hit a snag with our business continuity services. From data backup to disaster recovery, we've got you covered.",
      },
      {
        image: itCompliance,
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
      icon: solutiondelivered,
      number: "150+",
      label: "Enterprise Solutions Delivered",
    },
    {
      icon: growth,
      number: "5+",
      label: "Years of Experience",
    },
    {
      icon: thumsup,
      number: "250+",
      label: "Enterprise Solutions Experts",
    },
    {
      icon: threestar,
      number: "98%",
      label: "Success Rate",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [
      html,
      python,
      java,
      objectC,
      swift,
    ],
  },
  {
    name: "Framework",
    imgData: [
      angularJs,
      phoneGap,
      flutter,
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
      }
      
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
        image: blockchian,
        title: "Blockchain Consulting Services",
        description:
       `With our specialized blockchain consulting, we help you discover new prospects in the crypto realm.`, 
      },
      {
        image: ai,
        title: "Artificial Intelligence",
        description:
         `Utilize AI for smart automation, data analysis, and consumer interactions, revolutionizing your startup’s capabilities.`,
      },
      {
        image: iot,
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
          "Q. Can you handle large-scale data migrations?",
        answer:
          "Yes, we specialize in seamless, secure large-scale data migrations, ensuring minimal downtime and business disruptions.",
      },
      {
        question: "Q. Do you offer enterprise-level security solutions?",
        answer:
          "Absolutely. We implement multi-layered security protocols and adhere to all compliance standards relevant to your industry.",
      },
      {
        question: "Q. What kind of support do you offer for enterprise",
        answer:
          "We offer 24/7 support services, including troubleshooting, maintenance, and upgrades, ensuring your enterprise operations run smoothly."
      },
      {
        question:
          "Q. Can you integrate our existing enterprise systems?",
        answer:
          "Yes, we can seamlessly integrate your existing systems into our solutions, maintaining business continuity and efficiency.",
      },
      {
        question:
          "Q. Do you offer industry-specific solutions?",
        answer:
          "Yes, we offer tailored solutions that are aligned with the unique requirements and challenges of your enterprise's industry.",
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
        icon: initialConsultation,
      },
      {
        title: "Detailed Planning and Roadmap",
        description:
          "Following the initial consultation, we'll create a meticulous project plan that outlines the specific milestones, deadlines, and resource allocation.",
        icon: detailedPlannig,
      },
      {
        title: "Enterprise-Centric UI/UX Design",
        description:
          "Our design experts will consult with you to create user interfaces that align with enterprise-level requirements and your corporate brand.",
        icon: ux,
      },
      {
        title: "Scalable Development",
        description:
          "Utilizing robust frameworks, our seasoned developers will ensure that your enterprise app scales seamlessly across multiple platforms, all while following an Agile development approach.",
        icon: developmentPlanning,
      },
      {
        title: "Rigorous Testing and QA",
        description:
          "With a focus on enterprise-level security and performance, our ISO-certified QA process ensures your app meets the stringent requirements necessary for enterprise operations.",
        icon: testingQuality,
      },
      {
        title: "Continuous Maintenance and Upgrades",
        description:
          "We offer round-the-clock support and regular software updates to ensure your enterprise solution remains compatible with evolving technologies.",
        icon: maintaince,
      },
    ],
  };