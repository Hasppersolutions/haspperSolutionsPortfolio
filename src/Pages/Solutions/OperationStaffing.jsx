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
import backgroundImg from "../../assets/img/Solutions/Operation/BackgroundImg.png"

import card1 from "../../assets/img/Solutions/Operation/card1.png"
import card2 from "../../assets/img/Solutions/Operation/card2.png"
import card3 from "../../assets/img/Solutions/Operation/card3.png"
import card4 from "../../assets/img/Solutions/Operation/card4.png"
import card5 from "../../assets/img/Solutions/Operation/card5.png"
import card6 from "../../assets/img/Solutions/Operation/card6.png"

import potential1 from "../../assets/img/Solutions/Operation/potential1.png"
import potential2 from "../../assets/img/Solutions/Operation/potential2.png"
import potential3 from "../../assets/img/Solutions/Operation/potential3.png"
import potential4 from "../../assets/img/Solutions/Operation/potential4.png"
import potential5 from "../../assets/img/Solutions/Operation/potential5.png"

import number1 from "../../assets/img/Solutions/Voicebot/number1.png"
 import number2 from "../../assets/img/Solutions/Voicebot/number2.png"
 import number3 from "../../assets/img/Solutions/Voicebot/number3.png"
 import number4 from "../../assets/img/Solutions/Voicebot/number4.png"

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

import desc1 from "../../assets/img/Solutions/Operation/desc1.png"
import desc2 from "../../assets/img/Solutions/Operation/desc2.png"
import desc3 from "../../assets/img/Solutions/Operation/desc3.png"
import desc4 from "../../assets/img/Solutions/Operation/desc4.png"

import OutSourcing from "../../components/Services/CrossPlatform/OutSourcing";

import { Contact } from "../../components/Homepage/Contact";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";

import process1 from "../../assets/img/Solutions/Marketplace/process1.png";
 import process2 from "../../assets/img/Solutions/Marketplace/process2.png";
 import process3 from "../../assets/img/Solutions/Marketplace/process3.png";
 import process4 from "../../assets/img/Solutions/Marketplace/process4.png";
 import process5 from "../../assets/img/Solutions/Marketplace/process6.png";
 import process6 from "../../assets/img/Solutions/Marketplace/process7.png";

const OperationStaffing = () => {
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
export default OperationStaffing;
const bannerTextData = {
  mainHeading: "Technical & Operations",
  middleHeading: "Staffing Solutions",
  backgroundImage: ServiceBackgroudImage,
  rightImage: backgroundImg,
  bottomHeading:
  `We help you with your Technical and Buisness contingent Staffing needs`,
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
  firstHeading: "Technical Staffing Services",
  secondHeading: "we offer",
  description:
   `
We have a reputation for attracting highly qualified people, having recruited expert workers for some of the world's largest corporations. Here are the technical staffing services offered by us!`,
  cardData: [
    {
      image: potential1,
      title: "Enterprise Technical Staffing Services",
      description:
       `Our certified enterprise experts have a minimum of 5 years of experience in selection, architecture, deployment, customization or supporting a diverse range of enterprise products. They have worked on large scale implementations for many Fortune 5000 companies in the past. These experts are available on-demand at your premises or offshore to fulfill your staffing needs. We also offer Hybrid engagement consisting of onshore + offshore staffing to leverage flexible engagement and pricing models.`,
    },
    {
      image: potential2,
      title: "Application Development Staffing Services",
      description:
      `Whether you are developing or planning for internal or external software applications which can be mission-critical or handling huge data or providing information on the go or using the latest technologies, the Haspper team can help you staff your technology teams within no time and help you leverage the best talent in the industry at reasonable prices. Our all talent is either experienced or certified to meet your desired skill sets and can be available on-premise or offshore as your engagement needs. We can fill all your positions within 30 days on-contract or contract-to-hire basis.`,
    },
    {
      image: potential3,
      title: "Network & Infrastructure Staffing Services",
      description:
      `Whether you are planning to migrate to the cloud or managing your own dedicated infrastructure, Haspper experience network and infrastructure engineers can help you plan your capacity well, deploy or move applications on the cloud, perform DevOps or continuous deployments, Administrator and monitor your applications for their 24X7 availability. Our talent has deployed and maintained large applications for fortune 5000 companies in the past and their experience will be handy for your business.`,
    },
    {
      image: potential4,
      title: "Application Testing Staffing Services",
      description:
       `Our certified manual and automation testing engineers can help you test your software applications at reasonable prices from offshore models or global delivery models. Our experts work with you to test your mission-critical systems, continuous software releases, application functionality and user experience across devices. Our experts work with your technology departments on a day to day basis as part of their team from offshore or on-site locations.`,
    },
    {
      image: potential5,
      title: "Business Process Staffing Services",
      description:
       `Haspper has been helping clients globally in setting up a cost-effective dedicated 24X7 offshore team to support many business operations or lines of business. We can provide 100% managed offshore operations and can scale the team to 50 or 100 people in no time. We will take complete ownership of the business process, hire and train staff and work on SLAs as per your business needs. You have flexible engagement models to scale up or scale down teams as your business situation changes.`,
    }
  ],
};

const featureData = {
  mainHeading: "Technical & operations staffing solutions that",
  subHeading: "understand your company",
  description:
   `Companies must hire qualified technical specialists to meet the technical staffing demands of complicated projects. Recruitment actions for highly specialized skill sets are frequently global. Companies may also be required to use local expertise whenever possible.

We recruit highly qualified and experienced technical employees for the world’s major corporations as a leading global supplier of technical staffing services. Our assistance does not end with recruitment. We provide a complete Total Quality Assurance solution for you and your workers, as well as crucial support services. Our goal is to be your partner, handling all of your technical hiring needs while saving you time and money by lowering both recruitment time and expenditure, allowing you to focus on your main business.`,
  cardData: [
    {
      image: card1,
      text: "AVAILABLE 24 X 7",
    },
    {
      image: card2,
      text: "COST-EFFECTIVE",
    },
    {
      image: card3,
      text: "WORK AUTOMATION",
    },
    {
      image: card4,
      text: "INCREASED CUSTOMER ENGAGEMENT",
    },
    {
      image: card5,
      text: "PROACTIVE INTERACTION",
    },
    {
      image: card6,
      text: "KEEPING UP WITH THE TREND",
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
      number: "150+",
      label: "Developers",
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
]

const FAQData = {
    faqItems: [
      {
        question:
        " Q. How do I hire developers or a team?  ",
        answer:
        `First of all – you should gather all the tasks for the developer which you want them to do for you.
        Based on the chosen developer and technology, finalize the agreement with the sales team.
        Upon your confirmation, we will set up everything, and connect you with the developer.`,
      },
      {
        question: 
         ` Q. What can your developers do for us? `,
        answer:
        `Our developers can help you build feature-rich apps that work effortlessly across different platforms. Here are some of the services we offer:

Product Consultation
Product Design
Product Development
Product Testing
Product Migration
Maintenance and Support`,  
      },
      {
        question: 
        `  Q. Can I hire a developer for hourly or project-based tasks?  `    ,                
        answer:
         `Yes, if you know the task to get done from the developer, then you can hire a developer on an hourly or project/task basis. Even we give the flexibility to change the hiring model at a later stage.`,
      },
      {
        question: 
        "  Q. How will the apps be secure from external hacks?   "                      ,
        answer:
        `Of Course, we consider various security standards when creating applications. Our testing parameters ensure that the android app performs perfectly without any difficulties.`, 
      },

      
      {
        question: 
        " Q. Is there any hidden cost?  " ,
        answer:
        `No, once we discuss with you your website requirements and then price. We work hard so that the outlined price quote is strictly maintained the same.`,
      },

      {
        question: 
        " Q. Why should I outsource my development to Haspper  " ,
        answer:
        `Save time and reduce costs significantly when you outsource your development to Haspper. We provide dedicated development teams and shared resources to work on your project full-time. Check out our article about offshore development teams.`,
      }

    ]
  }


  

  const outSourceData = {
    firstHeading: "Our technical staffing services have",
    secondHeading: "a number of advantages",
    description:
      `Our uniqueness is rooted in our basic principles and expressed on a daily basis through our actions and behaviors.`,
    cardData: [
      [
      {
        image: desc1,
        heading: "Integrity",
        description:
         `We don’t play games and always do the right thing. Our charges are always clear. We hold ourselves to the highest ethical standards, which guide every decision we make.`,
      },
      {
        image: desc2,
        heading: "Innovation",
        description:
        `All of our recruiters have undergone extensive technical training and are qualified in a variety of specialist technologies. Every member of our specialist recruiting teams has access to our Innovation Lab, which is dedicated to continual improvement and up-to-date training. We invest in cutting-edge technology to give our recruiters an advantage in locating the top candidates`,
      },
    ],
    [
      {
        image: desc3,
        heading: "Speed",
        description:
         `This is a key value that we live and breathe. In a fast-changing IT landscape, a strong feeling of urgency is critical. Our tools and technology enable us to respond to your IT staffing needs faster than the competition.`,
      },
      {
        image: desc4,
        heading: "Strategy",
        description:
        `Our objective is to invest in our recruiting team in order to better serve our clients and applicants. To ensure that our clients are covered, we regularly arrange our recruiting resources in the most efficient way possible.`,
      }
    ]
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