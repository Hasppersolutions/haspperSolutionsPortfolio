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
export default OperationStaffing;
const bannerTextData = {
  mainHeading: "Technical & Operations",
  middleHeading: "Staffing Solutions",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
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
      image: multilingualChatbots,
      title: "Enterprise Technical Staffing Services",
      description:
       `Our certified enterprise experts have a minimum of 5 years of experience in selection, architecture, deployment, customization or supporting a diverse range of enterprise products. They have worked on large scale implementations for many Fortune 5000 companies in the past. These experts are available on-demand at your premises or offshore to fulfill your staffing needs. We also offer Hybrid engagement consisting of onshore + offshore staffing to leverage flexible engagement and pricing models.`,
    },
    {
      image: support,
      title: "Application Development Staffing Services",
      description:
      `Whether you are developing or planning for internal or external software applications which can be mission-critical or handling huge data or providing information on the go or using the latest technologies, the OnGraph team can help you staff your technology teams within no time and help you leverage the best talent in the industry at reasonable prices. Our all talent is either experienced or certified to meet your desired skill sets and can be available on-premise or offshore as your engagement needs. We can fill all your positions within 30 days on-contract or contract-to-hire basis.`,
    },
    {
      image: customer,
      title: "Network & Infrastructure Staffing Services",
      description:
      `Whether you are planning to migrate to the cloud or managing your own dedicated infrastructure, OnGraph experience network and infrastructure engineers can help you plan your capacity well, deploy or move applications on the cloud, perform DevOps or continuous deployments, Administrator and monitor your applications for their 24X7 availability. Our talent has deployed and maintained large applications for fortune 5000 companies in the past and their experience will be handy for your business.`,
    },
    {
      image: chatbot,
      title: "Application Testing Staffing Services",
      description:
       `Our certified manual and automation testing engineers can help you test your software applications at reasonable prices from offshore models or global delivery models. Our experts work with you to test your mission-critical systems, continuous software releases, application functionality and user experience across devices. Our experts work with your technology departments on a day to day basis as part of their team from offshore or on-site locations.`,
    },
    {
      image: chatbot,
      title: "Business Process Staffing Services",
      description:
       `OnGraph has been helping clients globally in setting up a cost-effective dedicated 24X7 offshore team to support many business operations or lines of business. We can provide 100% managed offshore operations and can scale the team to 50 or 100 people in no time. We will take complete ownership of the business process, hire and train staff and work on SLAs as per your business needs. You have flexible engagement models to scale up or scale down teams as your business situation changes.`,
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
      image: Group,
      text: "AVAILABLE 24 X 7",
    },
    {
      image: Vector,
      text: "COST-EFFECTIVE",
    },
    {
      image: bot,
      text: "WORK AUTOMATION",
    },
    {
      image: Group,
      text: "INCREASED CUSTOMER ENGAGEMENT",
    },
    {
      image: Vector,
      text: "PROACTIVE INTERACTION",
    },
    {
      image: bot,
      text: "KEEPING UP WITH THE TREND",
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
      label: "Developers",
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
    name: "Blockchain Platforms",
    imgData: [
      "path/to/html5-icon",
      python,
      java,
      objectC,
      "path/to/swift-icon",
    ],
  },
  {
    name: "Languages",
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
    name: "System Architecture",
    imgData: [securePay, amazonPay, payPal, stripe, authorizeNet],
  },
];

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
        `Save time and reduce costs significantly when you outsource your development to OnGraph. We provide dedicated development teams and shared resources to work on your project full-time. Check out our article about offshore development teams.`,
      }

    ]
  }


  const DividerComponentData = {
    firstHeading: "Our technical staffing services have",
    secondHeading: "a number of advantages",
    description:
      `Our uniqueness is rooted in our basic principles and expressed on a daily basis through our actions and behaviors.`,
    cardData: [
      {
        image: multilingualChatbots,
        title: "Integrity",
        description:
         `We don’t play games and always do the right thing. Our charges are always clear. We hold ourselves to the highest ethical standards, which guide every decision we make.`,
      },
      {
        image: support,
        title: "Innovation",
        description:
        `All of our recruiters have undergone extensive technical training and are qualified in a variety of specialist technologies. Every member of our specialist recruiting teams has access to our Innovation Lab, which is dedicated to continual improvement and up-to-date training. We invest in cutting-edge technology to give our recruiters an advantage in locating the top candidates`,
      },
      {
        image: customer,
        title: "Speed",
        description:
         `This is a key value that we live and breathe. In a fast-changing IT landscape, a strong feeling of urgency is critical. Our tools and technology enable us to respond to your IT staffing needs faster than the competition.`,
      },
      {
        image: chatbot,
        title: "Strategy",
        description:
        `Our objective is to invest in our recruiting team in order to better serve our clients and applicants. To ensure that our clients are covered, we regularly arrange our recruiting resources in the most efficient way possible.`,
      }
      
    ],
  };