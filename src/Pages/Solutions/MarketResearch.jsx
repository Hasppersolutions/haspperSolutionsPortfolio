import Banner from "../../components/Services/Banner";
import Challenges from "../../components/Services/Challenges";
import AiFeature from "../../assets/img/aiFeature.png";
import AiDescription from "../../components/Services/AiDescription";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import Stats from "../../components/Services/Stats";
import rebrandCities from "../../assets/img/Solutions/hrms/rebrandCities.png";
import Technologies from "../../components/Services/MobileAppDevelopment/Technologies.jsx";
import remoteWork from "../../assets/img/Solutions/marketResearch/remote-work.png";
import management from "../../assets/img/Solutions/marketResearch/management2.png";
import panel from "../../assets/img/Solutions/marketResearch/panel.png";
import fraud from "../../assets/img/Solutions/marketResearch/fraud.png";
import tools from "../../assets/img/Solutions/marketResearch/tools.png";
import survey from "../../assets/img/Solutions/marketResearch/survey.png";
import innovationBackImg from "../../assets/img/innovationBackImg.png";
import InnovationSection from "../../components/Services/Ai/InnovationSection.jsx";

const MarketResearch = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Challenges data={challengesData} />
      <InnovationSection data={innovationSectionData} />
      <Stats data={statsData} />
      <Technologies data={technologiesData} />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default MarketResearch;
const bannerTextData = {
  mainHeading: "Turn Market Data Into Strategy",
  middleHeading: "With Powerful Research Solutions",
  backgroundImage: rebrandCities,
  rightImage: AiFeature,
  bottomHeading:
    "Elevate Your Market Strategy with Innovative Research Solutions: Discover Hidden Trends, Track Shifting Consumer Preferences, and Make Confident, Data-Driven Decisions with Our Advanced Tools.",
  button: "Get Free Demo", //uncomment to add button to banner
  link: "", //uncomment to add link to button
};
const aiDescriptionData = {
  firstHeading: "Maximize Your Market Understanding With ",
  secondHeading: "Our Integrated Research Solutions",
  description: `Streamlining market research in a managed, secure, and highly-customized manner. Enjoy immense capabilities from managing projects internally, a panel website for connecting and managing multi-regional respondents, creating target-specific surveys with pre-built themes, mitigating survey frauds, and getting the freedom to run own projects at feasible prices with DIY tools.
  OnGraph is pushing boundaries to cover each endpoint of Market Research and making it better than ever. With our cutting-edge AI-based market research software development services, we can help you drive better and faster research for informed decisions by using artificial intelligence technology.
  Transform your diverse research requirements with our customized, white-label market research software solutions.`,
  button: "TALK TO OUR EXPERTS",
  image: remoteWork,
};
// Keep 6 max Steps data
const challengesData = {
  firstHeading: "Critical Market Research Challenges,",
  secondHeading: "Proven AI and ML-Led Market Research Solutions",
  description:
    "Hustling to drive the right business decisions! What challenges are stopping you from achieving your goals? Our expertise will help you deal with the toughest market research challenges.",
  stepsData: [
    {
      id: 1,
      icon: "",
      title: "Managing projects internally",
      position: {
        top: -24,
        left: -20,
      },
      side: "right",
    },
    {
      id: 2,
      icon: "",
      title: "Conducting and distributing surveys smoothly",
      position: {
        top: 180,
        left: 144,
      },
      side: "right",
    },
    {
      id: 3,
      icon: "",
      title: "Gathering the right respondent to make the survey worthwhile",
      position: {
        top: 450,
        left: 76,
      },
      side: "right",
    },
    {
      id: 4,
      icon: "",
      title: "Interactive interface to create customized surveys",
      position: {
        top: -36,
        left: -170,
      },
      side: "left",
    },
    {
      id: 5,
      icon: "",
      title: "An Extensive DIY tool",
      position: {
        top: 209,
        left: -256,
      },
      side: "left",
    },
    {
      id: 6,
      icon: "",
      title: "Actionable Insights",
      position: {
        top: 452,
        left: -81,
      },
      side: "left",
    },
  ],
};
const innovationSectionData = {
  firstHeading: " We’ve helped businesses complete 8M+ surveys",
  description:
    "OnGraph arms your business with the right tech-led solutions to tackle potential market research challenges. Bridging gaps between the client, suppliers, and respondents to generate targeted and reliable survey results. Trusted by top market brands. We are successful in delivering what matters the most- Quality and Reliability.",
  backgroundImage: innovationBackImg,
};
const technologiesData = {
  firstHeading: "Next-gen Solutions for Futuristic",
  secondHeading: "Market Research Needs",
  description:
    "Manage widespread Market Research with these tech-led solutions to enable faster and more reliable results.",
  technologies: [
    {
      title: "Project Management",
      description:
        "Manage widespread market research and internal projects from a single interface. Get everything in line, from creating bids to survey distribution and tracking invoices simultaneously",
      icon: management,
    },
    {
      title: "Panel Websites",
      description:
        "Next-gen tools for conducting meaningful surveys across industries and regions by integrating separate access for admins and respondents and field surveys for different countries.",
      icon: panel,
    },
    {
      title: "Fraud Detections",
      description:
        "Integrate the best fraud detection techniques to eliminate fraud profiles, duplicate respondents, and bots and find genuine respondents to conduct meaningful market surveys across industries, globally",
      icon: fraud,
    },
    {
      title: "Survey Creation Tools",
      description:
        "A great survey creation platform to customize every aspect of a survey while targeting a specific and valid set of respondents to get accurate, precise/detailed insights into the market",
      icon: survey,
    },
    {
      title: "DIY Tools",
      description:
        "A self-serve platform to create, manage, and field own Market Research projects at feasible prices with unlimited access to unique and valid respondents",
      icon: tools,
    },
  ],
};
const statsData = {
  cardData: [
    {
      number: "8M+",
      label: "Survey Completed",
    },
    {
      number: "65+",
      label: "Panel Integration",
    },
    {
      number: "5%",
      label: "Reconciliation Rate",
    },
    {
      number: "40+",
      label: "API Integrations",
    },
  ],
};
