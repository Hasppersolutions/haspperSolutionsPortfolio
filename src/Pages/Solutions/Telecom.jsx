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
import telecomSolutions from "../../assets/img/Solutions/telecom/Telecom-solutions.png";

const Telecom = () => {
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

export default Telecom;
const bannerTextData = {
  mainHeading: "We bring people  ",
  middleHeading: "together, forever",
  rightImage: AiFeature,
  bottomHeading:
    "Create brand value with our telecom development solutions while enhancing customer experience to connect instantly.",
};
const aiDescriptionData = {
  firstHeading: "Generate Revenue and",
  secondHeading: "Enhance Brand Position ",
  description: `People’s communication methods are evolving rapidly, which is why the telecom sector must reconsider and reformulate its fundamental services in order to keep up with the next difficulties. Designing creative solutions allows you to develop long-term revenue streams, grow your customer base, and provide customers with essential services.
  With so many providers competing for the attention of consumers, it’s critical for the telecom sector to develop a solution that is not only cost-effective but also efficient in handling various operations. Hiring an app development firm with specialized expertise will address all concerns and save you time, allowing you to provide exceptional customer experience.
`,
  image: customerEngagement,
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "Telecom value",
  secondHeading: "added solutions",
  description:
    "We understand that the telecom industry's most valuable asset is its customers. We work with the telecom industry to develop solutions that enhance the customer experience while also increasing brand value and income.",
  stepsData: [
    {
      name: "Web Portal Development",
      description:
        "Our team has a lot of expertise building secure and trustworthy corporate portals and websites for telecom firms all over the world.",
      image: investment,
    },
    {
      name: "Smart Radio",
      description:
        "From smart radio applications to streaming services, we are passionate about producing dependable and easy-to-use solutions geared at offering great content to end-users.",
      image: protection,
    },
    {
      name: "Customer Loyalty Systems",
      description:
        "We provide customer loyalty systems and app development to assure a high-quality user experience for your customers.",
      image: performance,
    },
    {
      name: "IPTV Solutions",
      description:
        "We develop IPTV solutions that allow consumers to watch their favorite TV shows on any device they want, including smartphones, computers, and tablets.",
      image: wealthManagement,
    },
    {
      name: "Telematics Solutions",
      description:
        "We offer the creation of telematics systems focused on monitoring vehicle whereabouts, fleet management, and assuring the safety of drivers and cargoes, utilizing our IoT knowledge.",
      image: pos,
    },
    {
      name: "Web Portal Development",
      description:
        "Our team has a lot of expertise building secure and trustworthy corporate portals and websites for telecom firms all over the world.",
      image: wallet,
    },
  ],
};
const statsData = {
  cardData: [
    {
      icon: appDevelopment,
      number: "250+",
      label: "Solution Provided",
    },
    {
      icon: experience,
      number: "10+",
      label: "Years of Experience",
    },
    {
      icon: thumbUp,
      number: "100+",
      label: "App Developers",
    },
    {
      icon: rating,
      number: "99+",
      label: "Customer Satisfaction",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [html, python, java, objectC, "path/to/swift-icon"],
  },
  {
    name: "Database",
    imgData: [phoneGap, xamarin, ionic, node, laravel],
  },
  {
    name: "PAYMENT GATEWAY",
    imgData: [securePay, amazonPay, payPal, stripe, authorizeNet],
  },
];
const developmentServicesData = {
  heading: "Why Choose HASPPER for Telecom App Development Solution",
  description:
    "With our custom telecom software, we can give any firm of any size or stature a competitive and progressive advantage in changing and scaling.",
  cardData: [
    {
      icon: aglie,
      title: "Workflow optimization",
      description:
        "We reduce your IT expenditures by taking on all of your tasks, big or small, routine or one-of-a-kind.",
    },
    {
      icon: quality,
      title: "Increasing growth",
      description:
        "Haspper is notable for improving the scalability of high-load systems.",
    },
    {
      icon: softwareSolution,
      title: "User-friendliness",
      description:
        "We use our software engineering expertise to examine and improve your solution.",
    },
    {
      icon: deliveryTime,
      title: "Observance of security standards",
      description:
        "We take the time to conduct a comprehensive end-to-end evaluation of your system before making security recommendations.",
    },
    {
      icon: supportGear,
      title: "Interoperability",
      description:
        "With completely integrated capabilities, you can increase your productivity and efficiency.",
    },
    {
      icon: supportGear,
      title: "Qualitative systems integration",
      description:
        "The techniques we suggest are focused at increasing the redundancy and fault tolerance of your telecoms software system.",
    },
    {
      icon: supportGear,
      title: "Quality Assurance",
      description:
        "We use complicated testing frameworks to connect our custom telecom solutions with industry standards as part of our commitment to telecom QA excellence.",
    },
  ],
};
const keyFeatureData = {
  mainHeading: "Key Features of",
  secondHeading: "a Telecom App",
  image: telecomSolutions,
  description:
    "Hiring telecommunication experts is a smart choice when you’re focusing on developing an app that consists of business-specific and customer-centric features. To build a high-performing app that caters to the needs of the telecom industry, a thorough analysis of the latest market trends and knowledge of business requirements is important. Some features that make your application more than worth are:",
  leftSideData: [
    {
      heading: "Secure Payment",
      description:
        "We ensure secure payment options that help you to pay for the order online from the app.",
    },
    {
      heading: "Notification",
      description:
        "Our quick notification service helps you receive up to date information around you including offers",
    },
    {
      heading: "Feedback Forms",
      description:
        "There are feedback forms for customers to rate their app usage experience.",
    },
  ],
  rightSideData: [
    {
      heading: "Funds Transfer",
      description:
        "Receive and Send Payments, Inter-Bank Transfers, Bill Payments and More",
    },
    {
      heading: "Offers & Discounts",
      description:
        "Enable a special discount and offer to attract more customers to purchase a more useful package.",
    },
    {
      heading: "Payment update",
      description:
        "A reminder for you to pay your monthly, quarterly, and yearly subscription bills",
    },
  ],
};
const faqData = {
  faqItems: [
    {
      question:
        "Q. Why should we use Haspper over another agency for telecom app development?",
      answer:
        "Our clients choose us because of our broad capabilities to successfully deliver complex app and online portal development projects. We have over fourteen years of experience in solving all kinds of problems, such as working alongside existing development teams, working with legacy systems to support new app developments, building technically complex features, and bringing together systems, processes and applications with seamless integration.",
    },
    {
      question: "Q. Can you give me a fixed-price quote?",
      answer: `Yes, we can.
Before we begin your project, we work with you to write a detailed project specification and then provide you with a fixed-price quote to deliver the work. This fixed price and specification protects you: you can hold us accountable to deliver exactly what has been put to paper, for that exact cost. No hidden charges, no sneaky fees, everything is clear and concise.`,
    },
    {
      question: "Q. I have got an idea, where do I start?",
      answer: `Talk to us. If you share your idea here, one of our team will respond within one working day by email or phone.`,
    },
    {
      question:
        "Q. How do you make sure you build what I want, and don’t get it wrong?",
      answer: `We don’t just blindly begin building your requirements; we start by having a meeting to understand the commercial factors that are driving the need for your project. We want to get to a position very quickly where we know enough to challenge you on the assumptions you’ve made about the features you require.
Once we understand your business, we go to a lot of effort at the start of a project to work with you and scope out your requirements in detail.
You don’t just want us to tell you that we understand your project, we need to prove it to you.`,
    },
  ],
};
