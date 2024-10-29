import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
import keyFeatures from "../../assets/img/Solutions/keyFeature.png";
import AiDescription from "../../components/Services/AiDescription";
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
import Technology from "../../components/Services/Technology";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png";
import Stats from "../../components/Services/Stats";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import hrms from "../../assets/img/Solutions/hrms/hrms.png";
import aglie from "../../assets/img/Solutions/hrms/aglie.png";
import deliveryTime from "../../assets/img/Solutions/hrms/deliveryTime.png";
import elearning from "../../assets/img/Solutions/hrms/elearning.png";
import quality from "../../assets/img/Solutions/hrms/quality.png";
import softwareSolution from "../../assets/img/Solutions/hrms/softwareSolution.png";
import supportGear from "../../assets/img/Solutions/hrms/supportGear.png";
import rebrandCities from "../../assets/img/Solutions/hrms/rebrandCities.png";
import wordpress from "../../assets/img/Solutions/ELearning/wordpress.png";
import onlineLearingPortal from "../../assets/img/Solutions/ELearning/onlineLearingPortal.png";
import Solutions from "../../components/Solutions/Solutions.jsx";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import wallet from "../../assets/img/Solutions/banking/wallet.png";
import pos from "../../assets/img/Solutions/banking/pos.png";
import protection from "../../assets/img/Solutions/banking/protection.png";
import wealthManagement from "../../assets/img/Solutions/banking/wealth-management.png";
import investment from "../../assets/img/Solutions/banking/investment.png";




const ELearning = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <Solutions data = {solutionsData}/>
      <Stats data={statsData} />
      <Technology data={technologyData} />
      <DevelopmentServices data={developmentServicesData} />
      <WaveLine />
      <KeyFeatures data={keyFeatureData}/>
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default ELearning;
const bannerTextData = {
  mainHeading:
    "Make your way into academia",
  middleHeading: "with interactive e-learning solutions",
  backgroundImage: rebrandCities,
  rightImage: AiFeature,
  bottomHeading:
    "We build bespoke courseware that engages your target audience and meets your business objectives in a timely and cost-effective manner, using our proven instructional design methodology.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "Custom e-Learning Solutions",
  secondHeading: "Ensure Maximum ROI for Your Company",
  description: `Being a leading e-learning development company, OnGraph has been reshaping the industry with its custom e-learning solutions. Our innovative design thinking and use of advanced technologies help educators, startups, corporates and organizations in creating effective online learning programs. We build highly interactive learning systems and portals to provide an enriching and individualized e-learning experience.

                OnGraph has an established track record of creating effective customized elearning solutions by turning instructor-led, PDF, PPT, and other paper-based learning content into custom interactive eLearning courses.`,
  button: "TALK TO OUR EXPERTS",
  image: hrms,
};

const keyFeatureData = {
  mainHeading: "Development Process",
  secondHeading: "We Follow",
  image: onlineLearingPortal,
  description:
    "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our mobile app development process to ensure we fulfill all your requirements.",
  leftSideData: [
    {
      heading: "Protecting Your Intellectual Property",
      description:
        "We safeguard your splendid idea by signing an NDA to protect your original concept and secure your application.",
    },
    {
      heading: "Design",
      description:
        "We create wireframe prototypes before transforming them into world-class UI designs.",
    },
    {
      heading: "Testing",
      description:
        "We do extensive testing to remove all the bugs and issues before making your app live.",
    },
  ],
  rightSideData: [
    {
      heading: "Discovery",
      description:
        "We research thoroughly and ask questions to know your detailed requirements and suggest the best solution.",
    },
    {
      heading: "Development",
      description:
        "We turn the designs into an app using the most advanced technology stacks and frameworks.",
    },
    {
      heading: "Support and Maintenance",
      description:
        "We continue to offer widespread support and maintenance to guarantee smooth operations.",
    },
  ],
};
const statsData = {
    cardData: [
      {
        number: "1500+",
        label: "Apps Developed",
      },
      {
        number: "150+",
        label: "Mobile App Developers",
      },
      {
        number: "1000+",
        label: "Clients Worldwide",
      },
      {
        number: "98%",
        label: "Success Rate",
      },
    ],
  };

const technologyData = [
  {
    name: "CMS",
    imgData: [
      "path/to/html5-icon",
      python,
      java,
      objectC,
      "path/to/swift-icon",
    ],
  },
  {
    name: "Database",
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
        "Q. How much does it cost to create educational apps?",
      answer:
        "When it comes to educational app creation, there are several main categories to consider. As a result, the cost of development is determined by the sort of learning app you want to create, its features, the technology stack, and, ultimately, the location of your mLearning app development partner.",
    },
    {
      question: "Q. How long will it take to create an e-Learning app?",
      answer:
        "The length of time it takes to construct an e-learning app is determined by the features and functionalities chosen, as well as the app development company’s competence. A business like OnGraph will make certain that all of the agreed-upon features are given according to your preferences and at the best possible time.",
    },
    {
      question: "Q. How do you pick the right eLearning app development company?",
      answer: `Your choice of the top eLearning app development business should be based on the company’s and team members’ experience and knowledge. OnGraph offers a staff of competent and dependable education app engineers who work diligently on each project and take it to the next level, according to your specifications. To create compelling e-learning apps, we mix our highly competent and inventive programming with accuracy.`,
    },
    {
      question:
        "Q. Is the face of education changing as a result of mobile learning apps?",
      answer:
        `Mobile learning apps are transforming the education business in a variety of ways, including:

        ✅Available 24 hours a day, 7 days a week
        ✅Enhanced engagement
        ✅Access at any time, regardless of location or time
        ✅Regular updates
        ✅Learning is more enjoyable when it is done in a playful manner
        ✅Increasing collaboration in the classroom
        ✅Instant feedback`,
    },
    {
      question:
        "Q. Where can I find reliable developers who can create a mobile learning app?",
      answer:
        "Yes, the HR Software can be defined sector-wise and as per the organization needs.",
    },
  ],
};
const developmentServicesData = {
    heading: "Why choose Haspper for a custom e-learning solution?",
    description: "Your search for an e-learning development partner ends here. With our unmatched experience in the industry and IT skills, we bring a seasoned and learner-centric approach while prioritizing your compliance, security, integration and reporting needs.",
    cardData: [
      {
        icon: aglie,
        title: "Compliance",
        description:
          "We ensure compliance with SCORM, AICC, IMS Learning Tools Interoperability, CMI-5, xAPI & Section 508 standards.",
      },
      {
        icon: quality,
        title: "Security",
        description:
          "We build highly secure e-learning solutions and protect your digital content, user data and payments against security threats.",
      },
      {
        icon: softwareSolution,
        title: "Online Assessment",
        description:
          "With our automated test assembly and reporting tools, you can quickly create auto-grade assignments and online tests.",
      },
      {
        icon: elearning,
        title: "Microlearning",
        description:
          "We break down courses into focused, bite-sized information for high knowledge retention and completion rates.",
      },
      {
        icon: deliveryTime,
        title: "Reportingy",
        description:
          "With advanced reporting tools, you can easily track the learning effectiveness of courses and learners’ performance.",
      },
      {
        icon: supportGear,
        title: "Integratione",
        description:
          "For a well-connected e-learning ecosystem, we integrate collaboration tools, CRMs, payment systems and social networks."
      }
    ],
  };
  // Keep 6 Steps max
const solutionsData = {
    firstHeading: "Bespoke E-learning",
    secondHeading: "development solutions",
    description:
      "Our custom e-learning development services are designed to build intuitive learning solutions. Our experts will help you identify your e-learning needs, build strategy, analyze solutions, build storyboards, develop specific content modules and create real-life classroom experiences for online learners.",
    stepsData: [
      {
        name: "Learning Management System (LMS)",
        description:
          "Based on your training needs, we build and customize open source & cloud-based LMS. Our LMS development entails content management modules, course planners, progress trackers, automated self-assessment tests and communication channels to meet your business goals.",
        image: investment,
      },
      {
        name: "Online Learning Portals & MOOCs",
        description:
          "We build online learning portals capable of hosting Massive Open Online Courses (MOOCs). We build advanced features for managing courses, learners, tutors, billing and payments, The extensive reporting modules are also added to easily track the learning effectiveness of MOOC courses.",
        image: protection,
      },
      {
        name: "mLearning Solutions",
        description:
          "We help to learn programs to reach their on-the-go audience with iOS and Android compatible learning apps. Built with comprehensive features, our mlearning solutions allow learners to access digital content such as study material and video tutorials even in offline mode.",
        image: performance,
      },
      {
        name: "School Management System",
        description:
          "To meet your vast school administration needs, we build school management systems with comprehensive modules that allow you to manage online courses, schedules, attendance, assignments, online tests, grades, fees & online payments and parent-teacher collaboration",
        image: wealthManagement,
      },
      {
        name: "Localization & Translation",
        description:
          "Our comprehensive translation services for businesses enable multilingual learners to deliver text and video translations.",
        image: pos,
      },
      {
        name: "Instructor Led Training",
        description:
          "During corporate training sessions, we seek to bring the efficient use of trainers, either online or in a classroom setting, to resolve the learner's challenges.",
        image: wallet,
      },
    ],
  };
   
