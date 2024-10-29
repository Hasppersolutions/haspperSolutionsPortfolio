import Banner from "../../components/Services/Banner";
import KeyFeatures from "../../components/Solutions/KeyFeatures.jsx";
import AiDescription from "../../components/Services/AiDescription";
import xamarin from "../../assets/img/Services/chatbot/xamarin.png";
import ionic from "../../assets/img/Services/chatbot/ionic.png";
import laravel from "../../assets/img/Services/chatbot/laravel.png";
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
import Solutions from "../../components/Solutions/Solutions.jsx";
import performance from "../../assets/img/Solutions/hrms/performance.png";
import wallet from "../../assets/img/Solutions/banking/wallet.png";
import pos from "../../assets/img/Solutions/banking/pos.png";
import protection from "../../assets/img/Solutions/banking/protection.png";
import wealthManagement from "../../assets/img/Solutions/banking/wealth-management.png";
import investment from "../../assets/img/Solutions/banking/investment.png";
import fitness from "../../assets/img/Solutions/fitness/fitness.png";
import mongoDB from "../../assets/img/Solutions/fitness/MongoDB_Logo.png";
import mysql from "../../assets/img/Solutions/fitness/MySQL-Logo.png";
import sqlite from "../../assets/img/Solutions/fitness/sqlite-logo.png";
import sqlServer from "../../assets/img/Solutions/fitness/sql-server-logo.png";
import aspNet from "../../assets/img/Solutions/fitness/asp-net.png";
import flutter from "../../assets/img/Solutions/fitness/flutter.png";
import java from "../../assets/img/Solutions/fitness/java.png";
import python from "../../assets/img/Solutions/fitness/python.png";
import fitnessImg from "../../assets/img/Solutions/fitness/fitness-img.png";
import oracle from "../../assets/img/Solutions/food/oracle.png";
import html from "../../assets/img/Solutions/food/html.png";
import appDevelopment from "../../assets/img/Solutions/food/app-development.png";
import rating from "../../assets/img/Solutions/food/rating.png";
import experience from "../../assets/img/Solutions/food/experience.png";
import thumbUp from "../../assets/img/Solutions/food/thumb-up.png";

const Fitness = () => {
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
      <WaveLine />
      <FAQ data={faqData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Fitness;
const bannerTextData = {
  mainHeading: "Solutions that help users",
  middleHeading: "meet their fitness goals",
  rightImage: fitness,
  bottomHeading:
    "Industry leader in developing and releasing entertaining, intuitive, and advanced fitness apps that allow users to track and monitor their health in real time, as well as forecast health patterns. Join us in launching a fitness revolution for millions of people!",
};
const aiDescriptionData = {
  firstHeading: "Increase Customer Retention",
  secondHeading: "with Well-crafted Fitness Apps",
  description: `A fitness app needs to be smart enough to track all the users’ activities including high-intensity workouts, number of steps, food intake and so on. It should give users the capability to understand their daily calorie intake and also let them customize their fitness regime according to their age, sex, and body weight.
Haspper is a Digital Specialist with expertise in digital fitness and wellness solutions that help businesses grow by increasing app awareness and increasing revenue. We also assist fitness buffs in finding the best workout expert in the quickest amount of time.`,
  button: "TALK TO OUR EXPERTS",
  link: "",
  image: hrms,
};
// Keep 6 Steps max
const solutionsData = {
  firstHeading: "Ultimate Fitness",
  secondHeading: "App Development Solutions",
  description:
    "Hire the best fitness app development company that can offer solutions, which enhance your fitness business on a wider scale. Make sure you build an app that has a great UI/UX, design and MVP testing criteria.",
  stepsData: [
    {
      name: "Gym Instruction App",
      description:
        "We'll make a virtual gym trainer app featuring health, fitness, and nutrition videos to provide consumers a virtual gym experience.",
      image: investment,
    },
    {
      name: "Diet Planning App",
      description:
        "A complete diet planning software with advanced features such as supplement specifics, nutritional information, and diet charts that focus on results.",
      image: protection,
    },
    {
      name: "Wearable Apps",
      description:
        "For fitness businesses, we can develop robust wearable apps that allow customers to track their progress and receive real-time information about exercises, diets, and more.",
      image: performance,
    },
    {
      name: "Activity Tracking App",
      description:
        "The trainers may monitor and track the user's fitness-related activities, as well as provide daily, weekly, and monthly information.",
      image: wealthManagement,
    },
    {
      name: "Gym Partner App",
      description:
        "We'll create a community-powered gym partner app that allows you to find nearby health enthusiasts who want to go to the gym and do physical exercises with you.",
      image: pos,
    },
    {
      name: "Yoga App",
      description:
        "Our Yoga app will be a one-stop platform for all yoga-related techniques, exercises, and information. Yoga can be done from the convenience of one's own home, and users can get in shape.",
      image: wallet,
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
      label: "Fitness App Developers",
    },
    {
      number: "99+",
      label: "Customer Satisfaction",
    },
  ],
};
const technologyData = [
  {
    name: "Languages",
    imgData: [html, aspNet, java, python],
  },
  {
    name: "FrameWorks",
    imgData: [xamarin, ionic, laravel, flutter],
  },
  {
    name: "Database",
    imgData: [sqlServer, sqlite, mysql, mongoDB, oracle],
  },
];
const developmentServicesData = {
  heading: "Why choose OnGraph for Fitness App Development?",
  description:
    "We aim to be a reliable and trustworthy tech partner by reaching even the most involved development requirements and specifications of our clients",
  cardData: [
    {
      icon: aglie,
      title: "Customer Satisfaction",
      description:
        "We leverage the most up-to-date frameworks and technologies to provide you with user-friendly, scalable, secure, and innovative business solutions.",
    },
    {
      icon: quality,
      title: "Agile Procedure",
      description:
        "We use the Agile methodology and hold scrum events on a regular basis to improve our processes and procedures and give the best results.",
    },
    {
      icon: softwareSolution,
      title: "Dedicated Teams",
      description:
        "We have a dedicated development team that is experienced in developing high-end fitness app development solutions using a variety of frameworks and technologies.",
    },
    {
      icon: elearning,
      title: "Integrity & Transparency",
      description:
        "We value your ideas and vision, give you every project detail on a frequent basis, and consider your valuable input as needed.",
    },
    {
      icon: deliveryTime,
      title: "Flexible Engagement Models",
      description:
        "Rather than operating within unwelcomed tight and rigorous limits, we allow our clients to choose from a variety of engagement and employment models.",
    },
    {
      icon: supportGear,
      title: "Competitive Pricing",
      description:
        "To ensure the lowest pricing in our segment, we offer an optimal blend of cost-effective rates and exceptional quality.",
    },
  ],
};
const keyFeatureData = {
  mainHeading: "Key features of",
  secondHeading: "our Fitness app",
  image: fitnessImg,
  description:
    "Our fitness app development services include a number of features, some of which are listed below.",
  leftSideData: [
    {
      heading: "Simplified Interface",
      description:
        "All of our health and fitness app solutions offer a user-friendly design that makes it simple for trainers and users to manage their accounts.",
    },
    {
      heading: "Location",
      description:
        "Users can utilize this tool to locate all nearby gyms, running tracks, and fitness centers. They can also share their location with friends and family so that they can all work out together.",
    },
    {
      heading: "Activity Tracker",
      description:
        "It's important to keep track of all your daily physical activity in order to stay fit and healthy. This feature allows users to keep track of their heart rate, number of steps taken per day, pulse rate, and other data.",
    },
  ],
  rightSideData: [
    {
      heading: "Easy Sharing",
      description:
        "Users can now simply share their workout videos and diet plans across all of their social media sites, allowing them to collaborate and work out with their pals.",
    },
    {
      heading: "Notifications",
      description:
        "Things are made a lot easier with push notifications. This tool sends customers notifications about their fitness schedules, weekly activities, diet plans, membership, payment reminders, and more.",
    },
    {
      heading: "Calorie Counter",
      description:
        "It is critical to track and monitor your calorie consumption in order to get the most out of your workout. Users can upload their calorie intake and have trainers build diet regimens based on it.",
    },
  ],
};
const faqData = {
  faqItems: [
    {
      question: "Q. What are the benefits of fitness app development?",
      answer:
        "With fitness apps, gym trainers and health coaches can offer feature-rich services to their users and clients such as fitness tracking, health monitoring, health analytics, diet plans, customized fitness plans, and more.",
    },
    {
      question: "Q. Why Haspper for fitness app development?",
      answer:
        "Haspper is a global leader in delivering next-gen, cutting-edge digital transformation services that empower businesses to generate more revenues, attract millions of new users, and trigger a revolution in their respective industries. We deliver success, consistently.",
    },
    {
      question: "Q. Will you provide maintenance and support?",
      answer: `Yes, definitely. We provide advanced and professional maintenance and support services, wherein we track and monitor your fitness app’s health and performance and ensure a seamless user experience for all your customers.`,
    },
    {
      question: "Q. What about data security and safety?",
      answer:
        "We deploy advanced data safety and security mechanisms such as encryption, secured keys, and firewalls to ensure 100% data security and user privacy.",
    },
    {
      question: "Q. How big is the fitness app market, globally?",
      answer:
        "The Fitness app market is expected to cross $13 billion in revenues by 2025. With more than 80 million users expected by 2022, fitness and health are a booming industry right now.",
    },
    {
      question:
        "Q. Will you provide documentation for the fitness app development? Do I own the code?",
      answer:
        "Yes. As soon as we close our deal, we sign a contract in which we promise to provide complete documentation for the mobile app software or solution that we develop for your business. Being a leading mobile app development agency, we sign a non-disclosure agreement with all the clients. At the end of the project, you own the code of your app or mobile solution.",
    },
  ],
};
