import Banner from "../../components/Services/Banner";
import AiFeature from "../../assets/img/aiFeature.png";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
import foodIndustries from "../../assets/img/Solutions/food/food-industry.png";
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
import stripe from "../../assets/img/Services/chatbot/stripe.png";
import authorizeNet from "../../assets/img/Services/chatbot/authorize-net.png";
import Technology from "../../components/Services/Technology";
import WaveLine from "../../components/WaveLine.jsx";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import Stats from "../../components/Services/Stats";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";
import choosingFood from "../../assets/img/Solutions/food/choosing-food.png";
import aglie from "../../assets/img/Solutions/hrms/aglie.png";
import deliveryTime from "../../assets/img/Solutions/hrms/deliveryTime.png";
import elearning from "../../assets/img/Solutions/hrms/elearning.png";
import quality from "../../assets/img/Solutions/hrms/quality.png";
import softwareSolution from "../../assets/img/Solutions/hrms/softwareSolution.png";
import supportGear from "../../assets/img/Solutions/hrms/supportGear.png";
import Solutions from "../../components/Solutions/Solutions.jsx";
import onBoarding from "../../assets/img/Solutions/hrms/onBoarding.png";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import recruitingTools from "../../assets/img/Solutions/hrms/recruiting-tools.png";
import acquisition from "../../assets/img/Solutions/hrms/acquisition.png";
import employee from "../../assets/img/Solutions/hrms/employee.png";
import payroll from "../../assets/img/Solutions/hrms/payroll.png";
import appDevelopment from "../../assets/img/Solutions/food/app-development.png";
import rating from "../../assets/img/Solutions/food/rating.png";
import experience from "../../assets/img/Solutions/food/experience.png";
import thumbUp from "../../assets/img/Solutions/food/thumb-up.png";
import html from "../../assets/img/Solutions/food/html.png";
import phoneGap from "../../assets/img/Solutions/food/phone-gap.png";
import oracle from "../../assets/img/Solutions/food/oracle.png";

const Food = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <Solutions data={solutionsData} />
      <Stats data={statsData} />
      <Technology data={technologyData} />
      <DevelopmentServices data={developmentServicesData} />
      <KeyFeatures data={keyFeatureData} />
      <WaveLine />
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Food;
const bannerTextData = {
  mainHeading:
    "Food It App Brings Smart Ordering and Personalized Dining Recommendations to Your Fingertips",
  middleHeading: "",
  //   backgroundImage: rebrandCities,
  rightImage: AiFeature,
  bottomHeading:
    "A deep dive into how industry-leading food apps use a combination of cutting-edge design principles, smart interfaces, and user-focused innovation to improve engagement and satisfaction.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "Building the Future of Food Delivery: Key",
  secondHeading:
    "Features That Enhance Convenience, Speed, and Personalization",
  description: `Make your food and restaurant business convenient and flexible for customers by offering them features such as digital menu cards, home delivery or takeaway options, and tracking orders on the go. The digital solutions will not only help you serve your customers better but also let you build your brand image and spread word of mouth. Expert app development companies not only help to inject the digital adrenaline to grow your business rapidly but also offer splendid solutions that are a blend of innovation and elegance. Whether you specifically want to develop a customer panel, restaurant panel or design an entire application that is apt for your business, hire professional app development services to get the best results.
`,
  image: choosingFood,
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "Ultimate Food Delivery",
  secondHeading: "App Solutions",
  description:
    "Understand how a focus on clean, visually compelling design and easy-to-navigate interfaces is making food delivery apps more accessible, efficient, and delightful for users.",
  stepsData: [
    {
      name: "Full Fledged Food Ordering App",
      description:
        "We will design and develop a full-fledged food ordering app from scratch, incubating a human-centric design for a delightful user experience.",
      image: employee,
    },
    {
      name: "Order Management",
      description:
        "We will develop an advanced order management platform that can be incorporated into your existing mobile app or web platform.",
      image: onBoarding,
    },
    {
      name: "In-App Payment System",
      description:
        "User-friendly and seamless In-app payment mechanism which is customized and tailor-made for your food business.",
      image: performance,
    },
    {
      name: "Real-Time Tracking System",
      description:
        "We will design a highly advanced Real-Time Tracking System (RTTS) for tracking and monitoring all food deliveries for optimal performance and customer satisfaction.",
      image: payroll,
    },
    {
      name: "Fleet Management",
      description:
        "Our robust fleet management platform will empower food entrepreneurs to optimally utilize delivery resources for fast and seamless performance.",
      image: recruitingTools,
    },
    {
      name: "Menu & Deals Platform",
      description:
        "We will set up a menu and deals platform for your food business that can be updated and edited in real-time, giving a fabulous user experience.",
      image: acquisition,
    },
  ],
};
const statsData = {
  cardData: [
    {
      number: "250+",
      label: "Apps Developed",
    },
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "100+",
      label: "Food App Developers",
    },
    {
      number: "99+",
      label: "Customer Satisfaction",
    },
  ],
};
const keyFeatureData = {
  mainHeading: "Key Features of a",
  secondHeading: "Food and Restaurant App",
  image: foodIndustries,
  description:
    "Developing apps that focus on users’ demand and are built with the amalgamation of modern technologies are of utmost importance. Such apps expand your business reach, build user engagement, and deliver high ROI to your food and restaurant business. Add features that make your app smarter, efficient, and easy-to-use, such as:",
  leftSideData: [
    {
      heading: "Advanced Search",
      description:
        "Find a food item, restaurant, or other queries to browse and add the item of purchase to your cart",
    },
    {
      heading: "Secure Payment",
      description:
        "We ensure secure payment options that help you to pay for the order online from the app",
    },
    {
      heading: "Live Tracking",
      description:
        "Our live tracking feature guides you to know the current status of your confirmed order from your app",
    },
  ],
  rightSideData: [
    {
      heading: "Review & Rating",
      description:
        "After successful delivery of food, the user can able to rate and review the restaurant and delivery executive",
    },
    {
      heading: "Offers & Discounts",
      description:
        "Enable a special discount and offers to attract more customers to place an order through the app",
    },
    {
      heading: "Notification",
      description:
        "Our quick notification service helps you receive up to date information around you including offers",
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
    name: "Database",
    imgData: [securePay, amazonPay, oracle, stripe, authorizeNet],
  },
];
const developmentServicesData = {
  heading: "Why Choose HASPPER for Food App Development Solution",
  description:
    "Restaurant App Development Company to help you Evolve your Brand and Services for the New Normal",
  cardData: [
    {
      icon: aglie,
      title: "Top Restaurant Mobile App Developers",
      description: "Agile app development with quicker delivery",
    },
    {
      icon: quality,
      title: "Customized Apps",
      description: "Apps for Customer, Admin, and Delivery personnel",
    },
    {
      icon: softwareSolution,
      title: "State of the Art Design",
      description: "Contemporary UI for enhanced app engagement",
    },
    {
      icon: elearning,
      title: "Unmatched Performance",
      description:
        "Faster loading time and unparalleled UX helping in SEO campaigns",
    },
    {
      icon: deliveryTime,
      title: "Maximum App Security and Scalability",
      description: "High-security plugins for protection from malware",
    },
    {
      icon: supportGear,
      title: "More than two decades of strong experience",
      description: "Proven expertise in IT Services and Solutions",
    },
  ],
};
const faqData = {
  faqItems: [
    {
      question: "Q. How Much Does It Cost To Develop A Food Delivery App?",
      answer:
        "It depends on your requirements and needs. If you’re looking for a ready to go on-demand food delivery solution then cost can be minimal, but if you’re looking for a custom solution then you need to have a good budget. It also depends on the complexity and features that you want to have in your app. Please contact us to know more in detail.",
    },
    {
      question:
        "Q. How Much Time Will It Take To Develop Your Food Delivery App? ",
      answer:
        "The development of food delivery and ordering solutions depends on the complexity of the app. If you’re looking for custom and unique features then it will increase the development time whereas a simple ready to go delivery solution can be built within 1 to 2 months with basic features.",
    },
    {
      question: "Q. How Food Delivery Apps Make Money ?",
      answer: `The food delivery and ordering apps earn revenue by charging commissions from the partner restaurants based on the order placed through their food delivery platform. They also earn by delivery fee or convenience charges.The other model can be to charge partner restaurants for paid listings and sponsored ads to offer better reach.`,
    },
    {
      question: "Q. How Does a Food Delivery App Work?",
      answer:
        "Food delivery apps allow your customer to order food online at their availability and convenience from nearby restaurants. The customer gets the option whether they can pick up the food from the restaurant or get it delivered at their doorsteps. The food delivery and ordering platform brings restaurants to customers’ mobile phones allowing them to increase sales by building a valuable customer base.",
    },
    {
      question: "Q. How to select the best food app development company?",
      answer:
        "First and foremost, check their customer reviews and ratings on renowned listing portals such as Clutch, and find out their market sentiments via a quick Google search. Talk with their ex-clients and find out more about their existing customers.",
    },
  ],
};
