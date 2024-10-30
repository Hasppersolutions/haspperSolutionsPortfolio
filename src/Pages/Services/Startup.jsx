import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/Services/Startup/ServiceBackgroudImage.png";
import Potential from "../../components/Services/Ios/Potential";
import agileDevOps from "../../assets/img/Services/Startup/agileDevOps.png";
import cyberSecurity from "../../assets/img/Services/Startup/cyberSecurity.png";
import dataAnalytics from "../../assets/img/Services/Startup/dataanlytics.png";
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
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png"
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
import marketresarch from "../../assets/img/Services/Startup/marketresearch.png";
import mediaentertain from "../../assets/img/Services/Startup/mediaentertain.png";
import banking from "../../assets/img/Services/Startup/banking.png";
import blockchian from "../../assets/img/Services/Startup/blockchain.png";
import growth from "../../assets/img/Services/Startup/growth.png";
import solutiondelivered from "../../assets/img/Services/Startup/solutiondelivered.png";
import threestar from "../../assets/img/Services/Startup/threestar.png";
import thumsup from "../../assets/img/Services/Startup/thumsup.png";
import DesignBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import Support from "../../assets/img/Services/Startup/support.png"
import html from "../../assets/img/Services/Startup/html.png";
import flutter from "../../assets/img/Services/Startup/flutter.png";
import swift from "../../assets/img/Services/Startup/swift.png";
import angularJs from "../../assets/img/Services/Startup/angularJs.png";
import phoneGap from "../../assets/img/Services/Startup/phoneGap.png";

const Startup = () => {
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
export default Startup;
const bannerTextData = {
  mainHeading: "Innovative Startup ",
  middleHeading: "IT Solutions",
  backgroundImage: ServiceBackgroudImage,
  bottomHeading:
    "Take the entrepreneurial leap and thrive in today's competitive landscape with  our cutting-edge startup IT solutions.",
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
        title: "Agile Product Development Services",
        description:
          "Our experts tailor cloud-based solutions for startups, focusing on scalability and cost-effectiveness. We deploy and manage services in AWS, Azure, and Google Cloud platforms.",
      },
      {
        image: cloudcomputing,
        title: "Cloud Infrastructure Services",
        description:
          "Our experts tailor cloud-based solutions for startups, focusing on scalability and cost-effectiveness. We deploy and manage services in AWS, Azure, and Google Cloud platforms.",
      },
      {
        image: dataAnalytics,
        title: "Data Analytics Services",
        description:
          "Leverage our data analytics services to get actionable insights into customer behavior and market trends. We use cutting-edge tools to analyze data, optimizing your startup's operations.",
      },
      {
        image: mobileDevelopment,
        title: "Mobile App Development Services",
        description:
          "Our development team specializes in creating engaging mobile apps for startups using languages like Swift for iOS and Kotlin for Android, ensuring a native experience across platforms.",
      },
      {
        image: cyberSecurity,
        title: "Cybersecurity Services",
        description:
          "Protect your startup's valuable data with our robust cybersecurity solutions. We offer comprehensive services from threat identification to prevention and recovery.",
      },
      {
        image: strategicTransformation,
        title: "Digital Marketing Services",
        description:
          "Gain visibility and traction with our startup-focused digital marketing services. From SEO to social media campaigns, we cover all your digital marketing needs.",
      }
    ],
};

const featureData = {
  mainHeading: "Revolutionary Business IT Solutions",
  subHeading: "From Concept to Scale",
  description:
    "Startup IT Solutions are agile services specifically geared towards emerging businesses.These solutions encompass everything from initial concept validation to scaling technology infrastructure. Key elements of our managed IT solutions include MVP development, market analysis, and specialized IT solutions consulting for rapid growth. Support can be delivered remotely or on-site, focusing on flexible, scalable small business IT solutions that evolve as your startup grows. We offer both subscription-based models for ongoing support as well as one-off service packages tailored to specific development milestones.",
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
      number: "100+",
      label: "Startup Solutions Delivered",
    },
    {
      icon: growth,
      number: "5+",
      label: "Years of Experience",
    },
    {
      icon: thumsup,
      number: "150+",
      label: "Startup Experts",
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
    firstHeading: "Fast-Track Your Startup Success in",
    secondHeading: "Just 6 Agile Steps!",
    description:
      "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our mobile app development process to ensure we fulfill all your requirements.",
    stepsData: [
      {
        title: "Ideation and Market Research",
        description:
          "We work hand-in-hand with you to define the scope and requirements of your startup's tech project. A precise roadmap, complete with milestones and budget estimations.",
        icon: marketresarch,
      },
      {
        title: "UI/UX Design",
        description:
          "Our creative team will collaborate with you to build a design that embodies your startup's vision. From wireframes to interactive prototypes.",
        icon: ux,
      },
      {
        title: "Development Planning",
        description:
          "We create wireframe prototypes before transforming them into world-class UI designs.",
        icon: developmentPlanning,
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
        icon: testingQuality,
      },
      {
        title: "Ongoing Support and Optimization",
        description:
          "Post-launch, we continue to monitor performance analytics and roll-out updates, ensuring your startup solution stays ahead of the curve and operates flawlessly.",
        icon: Support,
      },
    ],
  };