import Banner from "../../components/Services/Banner";
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
import Solutions from "../../components/Solutions/Solutions.jsx";
import onBoarding from "../../assets/img/Solutions/hrms/onBoarding.png";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import recruitingTools from "../../assets/img/Solutions/hrms/recruiting-tools.png";
import acquisition from "../../assets/img/Solutions/hrms/acquisition.png";
import employee from "../../assets/img/Solutions/hrms/employee.png";
import payroll from "../../assets/img/Solutions/hrms/payroll.png";

const Hrms = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <WaveLine />
      <Solutions data={solutionsData} />
      <Stats data={statsData} />
      <Technology data={technologyData} />
      <DevelopmentServices data={developmentServicesData} />
      <WaveLine />
      <KeyFeatures data={keyFeatureData} />
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Hrms;
const bannerTextData = {
  mainHeading:
    "Optimize Workforce Efficiency with a Comprehensive HRMS Platform",
  middleHeading: "",
  backgroundImage: rebrandCities,
  rightImage: AiFeature,
  bottomHeading:
    "HR management—from recruiting and onboarding to payroll, time tracking, and performance reviews. Empower your HR team to work smarter with intuitive self-service tools, reducing administrative burden and enhancing employee engagement. With real-time analytics and customizable workflows, you'll gain actionable insights into workforce trends and make more informed decisions.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "Empowering HR Teams with",
  secondHeading: "Next-Gen HRMS Technology",
  description: `Simplify Workforce Management, Automate Core HR Functions, and Enhance Employee Engagement with Our All-in-One Platform. From Streamlined Recruitment and Onboarding to Efficient Payroll, Benefits Administration, and Performance Tracking, Our HRMS Offers a Seamless Experience for HR Teams and Employees Alike. With Powerful Analytics, Self-Service Tools, and Real-Time Reporting, You'll Gain Deeper Insights into Your Workforce and Make Data-Driven Decisions. Scalable and Secure, Our HRMS is Built to Support Your Growing Business and Optimize HR Processes for Greater Efficiency and Productivity.`,
  button: "TALK TO OUR EXPERTS",
  image: hrms,
};
const keyFeatureData = {
  mainHeading: "KEY FEATURES OF",
  secondHeading: "our HRMS Solution",
  image: keyFeatures,
  description:
    "Our HRMS solution services include a number of features, some of which are listed below.",
  leftSideData: [
    {
      heading: "Staff Management",
      description:
        "Employ Hiring with their roles and permissions and their enrollment",
    },
    {
      heading: "Payroll",
      description:
        "The automated payroll system of HRM Software which automatically gathers all the information like time and attendance of all the employees, make calculations, apply deductions and taxes if any, and generate salary of the employees and system manages hourly wages",
    },
    {
      heading: "Project Manager",
      description:
        "Assign projects and tasks to employees and track the progress report of the project on a day to day basis. Customers login ID can be created for customers to login and check there project report and progress",
    },
  ],
  rightSideData: [
    {
      heading: "Timesheet",
      description:
        "With HRM you can manage your attendance, holidays, half-days, leaves on a single click",
    },
    {
      heading: "HR calendar",
      description:
        "To keep a track of upcoming events and appraisals of an individual. It can be also used for day to day up-gradation within the organization",
    },
    {
      heading: "Recruitment",
      description:
        "Post a job profile on the company website and get the application imported within the software. By using the HRM Software the recruitment Process for candidates",
    },
  ],
};
const statsData = {
  cardData: [
    {
      // icon: multilingualChatbots,
      number: "1500+",
      label: "Apps Developed",
    },
    {
      // icon: multilingualChatbots,
      number: "150+",
      label: "Mobile App Developers",
    },
    {
      // icon: multilingualChatbots,
      number: "1000+",
      label: "Clients Worldwide",
    },
    {
      // icon: multilingualChatbots,
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
      question: "Q. What hR software do you build ?",
      answer:
        "Our full-stack team provides a comprehensive suite of software development services, including tailor-made HR software, recruitment management software, as well as HRM integration and modernizing legacy solutions.",
    },
    {
      question: "Q. is there any NDA process you follow ?",
      answer: "Yes, we follow an NDA process with all the clients.",
    },
    {
      question: "Q. how long does it take to deliver a full-fledged product ?",
      answer: `The development time varies depending on the project complexity. On average, it typically takes nearly six weeks to build an HR application.`,
    },
    {
      question: "Q. what are the unique features of HR software ?",
      answer:
        "The HR Software has a unique feature known as an alert and notification system used for managing events and through which the admin can manage the whole process for each event that is happening in the organization.",
    },
    {
      question: "Q. will this software work for my industry ?",
      answer:
        "Yes, the HR Software can be defined sector-wise and as per the organization needs.",
    },
  ],
};
const developmentServicesData = {
  heading: "Why choose HASPPER for HRMS App Development?",
  description:
    "We aim to be a reliable and trustworthy tech partner by reaching even the most involved development requirements and specifications of our clients",
  cardData: [
    {
      icon: aglie,
      title: "Agile Development Approach",
      description:
        "The Agile development model helps us to continuously improve products with every iteration having team members on the same page and providing timely deliverables.",
    },
    {
      icon: quality,
      title: "15+ Years Of Experience",
      description:
        "With 15+ years of expertise, we know what it takes to build one-of-a-kind solutions for your manufacturing business. With viable solutions, we strive to deliver the best for your business.",
    },
    {
      icon: softwareSolution,
      title: "End-To-End Software Development Solutions",
      description:
        "Get a full-stack development solution from our experienced and expert team of developers, designers, marketers, testing, and sales. Bring great minds together to develop quality software.",
    },
    {
      icon: elearning,
      title: "Continuous Learning Approach",
      description:
        "We carry out regular training sessions and workshops for our employees which keep them updated with the latest technologies in the market.",
    },
    {
      icon: deliveryTime,
      title: "Continuous Project Delivery",
      description:
        "Easy to follow development process makes it even easier for our team to work in sync and provide continuous delivery be it in the office or remote.",
    },
    {
      icon: supportGear,
      title: "24x7 Support And Maintenance",
      description:
        "Get round-the-clock support from our team to resolve problems and timely maintenance. It keeps your software up-to-date.",
    },
  ],
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "Our HR Software",
  secondHeading: "Development Solutions",
  description:
    "Custom HRMS and HRIS solutions are the backbones of a successful HR operation. We can equip you with a full set of features from data analytics and employee workflow automation.",
  stepsData: [
    {
      name: "Employee engagement",
      description:
        "We develop sophisticated employee engagement platforms oriented at the company’s crucial KPIs. Our solutions can also help companies to evolve their corporate culture.",
      image: employee,
    },
    {
      name: "Onboarding",
      description:
        "Turbo-charge your team onboarding with a new digital hiring experience provided by our talented HR developers.",
      image: onBoarding,
    },
    {
      name: "Performance management",
      description:
        "Our team develops performance management solutions that harness process automation, data collection, and every company’s essential HR needs.",
      image: performance,
    },
    {
      name: "Payroll services",
      description:
        "We can provide you with your own fully-compliant payroll solution that will redefine the core of your workforce management.",
      image: payroll,
    },
    {
      name: "Recruiting tools",
      description:
        "Our company will help you optimize the hiring process with our innovative recruitment software products. Start hiring and win over the top candidates.",
      image: recruitingTools,
    },
    {
      name: "Recruiting/talent acquisition",
      description:
        "The recruiting software landscape is developing at a rapid pace. With our digital talent acquisition tools, your HR experts will be able to automate initial hiring and sales efforts.",
      image: acquisition,
    },
  ],
};
