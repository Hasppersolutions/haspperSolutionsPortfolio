import Banner from "../../components/Services/Banner";
import AiFeature from "../../assets/img/aiFeature.png";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
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
import Stats from "../../components/Services/Stats";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import aglie from "../../assets/img/Solutions/hrms/aglie.png";
import deliveryTime from "../../assets/img/Solutions/hrms/deliveryTime.png";
import elearning from "../../assets/img/Solutions/hrms/elearning.png";
import quality from "../../assets/img/Solutions/hrms/quality.png";
import softwareSolution from "../../assets/img/Solutions/hrms/softwareSolution.png";
import supportGear from "../../assets/img/Solutions/hrms/supportGear.png";
import Solutions from "../../components/Solutions/Solutions.jsx";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import appDevelopment from "../../assets/img/Solutions/food/app-development.png";
import rating from "../../assets/img/Solutions/food/rating.png";
import experience from "../../assets/img/Solutions/food/experience.png";
import thumbUp from "../../assets/img/Solutions/food/thumb-up.png";
import html from "../../assets/img/Solutions/food/html.png";
import phoneGap from "../../assets/img/Solutions/food/phone-gap.png";
import customerEngagement from "../../assets/img/Solutions/banking/customer-engagement.png";
import wallet from "../../assets/img/Solutions/banking/wallet.png";
import pos from "../../assets/img/Solutions/banking/pos.png";
import protection from "../../assets/img/Solutions/banking/protection.png";
import wealthManagement from "../../assets/img/Solutions/banking/wealth-management.png";
import investment from "../../assets/img/Solutions/banking/investment.png";
import keyFeatures from "../../assets/img/Solutions/keyFeature.png";

const Banking = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <Solutions data={solutionsData} />
      <Stats data={statsData} />
      <Technology data={technologyData} />
      <DevelopmentServices data={developmentServicesData} />
      <KeyFeatures data={keyFeatureData} gridContainerClass="headingBoxWidth" />
      <WaveLine />
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Banking;
const bannerTextData = {
  mainHeading:
    "Banking in the Cloud: Scalable IT Solutions for Financial Institutions",
  middleHeading: "",
  rightImage: AiFeature,
  bottomHeading:
    "How AI-driven solutions are enhancing customer experiences, improving operational efficiency, and strengthening security across financial institutions.",
};
const aiDescriptionData = {
  firstHeading: "Banking Apps: How IT Solutions are",
  secondHeading: "Enhancing Customer Engagement",
  description: `Acquiring a software development company for banking services helps you turn your business challenges such as regulation and technology risk into opportunities such as effective risk management, next-generation customer experience, robust processes and data insights. The customer-centric approach of an established app development company lets you visualize the near future and enables you to make your banking and financial business and related processes future-proof.
  Banking experts and financial app developers help you streamline various banking processes such as mobile banking, payment system, and transaction-related processes and bring operational efficiencies. Whether you want to build a net-banking app or a data management solution, app developers make sure that you’re able to use the most out of the cutting-edge technologies.
`,
  image: customerEngagement,
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "The Role of IT in Building Resilient",
  secondHeading: "Banking Infrastructures",
  description:
    "We ensure to make our solutions for banks and financial institutions trustworthy. We focus on engaging users by crafting banking and financial apps with intuitive UI, fast performance, and real time data updates with the use of the latest mobile app development tools and frameworks.",
  stepsData: [
    {
      name: "Investment solutions",
      description:
        "Our fintech software developers have a competent knowledge of the investment industry and create solutions that let end users gather their portfolio values, the summary of holdings, insights into their investments etc.",
      image: investment,
    },
    {
      name: "Dynamic KYC Platforms",
      description:
        "We develop Know Your Customer (KYC) integrated technology platforms that efficiently manage all the KYC regulatory compliance and policies requirements from initial take-on right through the entire client lifecycle.",
      image: protection,
    },
    {
      name: "Fraud Prevention Mechanisms",
      description:
        "Our security-first developmental approach revolves around safeguarding the Domain and IP access, ensuring that all the unusual differences in user-profiles and transactions are monitored and mitigated in real-time.",
      image: performance,
    },
    {
      name: "Wealth Management software",
      description:
        "We are one of the finance app development service providers that understand what wealth means to every individual and provide a sophisticated solution for managing the same. We give your customers an avenue to track, manage, and grow their wealth.",
      image: wealthManagement,
    },
    {
      name: "POS Solutions",
      description:
        "We offer efficient POS solutions for retail management systems for making mobile payments for retail chain stores.",
      image: pos,
    },
    {
      name: "Digital Wallets",
      description:
        "Our experienced developers can create portable, secure Digital Wallets, which allows easy access and seamless transactions.",
      image: wallet,
    },
  ],
};
const statsData = {
  cardData: [
    {
      number: "250+",
      label: "Solution Provided",
    },
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "100+",
      label: "App Developers",
    },
    {
      number: "99+",
      label: "Customer Satisfaction",
    },
  ],
};
const keyFeatureData = {
  mainHeading: "Key Features of a Banking",
  secondHeading: "App Development Solutions",
  image: keyFeatures,
  description:
    "Banks and financial institutions can adhere to government regulations by developing state-of-the-art banking apps having all the enriching features.",
  leftSideData: [
    {
      heading: "Account Management",
      description:
        "Secure Login, Check Account Balances, and Transaction History",
    },
    {
      heading: "Banking Product Catalog",
      description:
        "Display a Complete List of Products and Services Offered By The Bank",
    },
    {
      heading: "Customizable Alerts",
      description:
        "Give Push Notifications For Bill Payment Reminders, Account and Security Alerts",
    },
  ],
  rightSideData: [
    {
      heading: "Funds Transfer",
      description:
        "Receive and Send Payments, Inter-Bank Transfers, Bill Payments and More",
    },
    {
      heading: "Location-Based Tracking",
      description:
        "Track Nearby ATMs and Bank Branches With Advanced GPS Technologies",
    },
    {
      heading: "Mobile CRM",
      description:
        "Live Chat Customer Support Via Chatbots To Extend 24X7 Customer Services",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [html, python, java, objectC, "path/to/swift-icon"],
  },
  {
    name: "Framework",
    imgData: [
      "path/to/flutter-icon",
      "angularJs",
      phoneGap,
      xamarin,
      ionic,
      node,
      laravel,
    ],
  },
  {
    name: "PAYMENT GATEWAY",
    imgData: [securePay, amazonPay, payPal, stripe, authorizeNet],
  },
];
const developmentServicesData = {
  heading: "Why Choose HASPPER for Banking App Development Solutions",
  description:
    "Haspper is one of the leading mobile banking application development companies in India that delivers reliable fintech solutions for various business needs.",
  cardData: [
    {
      icon: aglie,
      title: "Cross-platform omnichannel apps",
      description:
        "Available on iOS, Android & Windows smartphones and desktops",
    },
    {
      icon: quality,
      title: "Unmatched Performance",
      description:
        "Faster loading time and unparalleled UX helping in SEO campaigns",
    },
    {
      icon: softwareSolution,
      title: "Comprehensive Security",
      description: "For 3rd party integrations and secure payment gateways",
    },
    {
      icon: elearning,
      title: "Lower Maintenance Cost",
      description:
        "With a single code base for all digital assets and automation tool",
    },
    {
      icon: deliveryTime,
      title: "Flexible Deployment Options",
      description: "To deploy on-premise OR on cloud",
    },
    {
      icon: supportGear,
      title: "Highly Skilled Team",
      description:
        "With expertise in complex banking projects implementation with modern infrastructure",
    },
  ],
};
const faqData = {
  faqItems: [
    {
      question: "Q. What is a mobile banking application?",
      answer:
        "It’s a FinTech software solution designed for mobile devices like smartphones or tablets. Mobile banking app developers create such digital tools to provide banking functions through mobile channels. Via mobile apps, users can interact with the bank, check accounts, transfer money, access other available banking products like deposits, loans, etc.",
    },
    {
      question: "Q. What are the types of mobile banking?",
      answer:
        "Apart from banking app development, there are more mobile options that provide access to banking services. These include SMS and USSD connections through which users can receive and send text messages. As well, banks can create mobile-optimized versions of their websites to provide services without dedicated mobile apps.",
    },
    {
      question: "Q. How do you develop mobile banking apps?",
      answer: `Our mobile banking app developers have experience in modern and innovative technologies and industries. We build various modules, including AI-based services, RPA for banks, advanced data warehouses, etc. Depending on your requirements, we change banking app development processes and suggest the most efficient technologies.`,
    },
    {
      question: "Q. How do you keep the data in the app secured?",
      answer:
        "There are several approaches to preventing data and money from being stolen, such as data encryption, password, fingerprints, multi-factor authentication, inactivity timer, etc.",
    },
    {
      question:
        "Q. Can we sync the app with the website or other bank software?",
      answer:
        "We always ensure that a banking website and mobile app are synced with each other and provide a consistent online experience at each point of the end-user interaction with the company.",
    },
  ],
};
