import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import enterprise from "../../assets/img/Services/productEngineer/enterprise.png";
import dataCollection from "../../assets/img/Services/productEngineer/dataCollection.png";
import dataBinding from "../../assets/img/Services/productEngineer/dataBinding.png";
import hassleFree from "../../assets/img/Services/productEngineer/hassleFree.png";
import delivery from "../../assets/img/Services/productEngineer/delivery.png";
import openSource from "../../assets/img/Services/productEngineer/openSource.png";
import dataMigration from "../../assets/img/Services/productEngineer/dataMigration.png";
import promosntional from "../../assets/img/Services/productEngineer/promosntional.png";
import DevelopmentProcess from "../../components/Services/Chatbot/DevelopmentProcess";
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
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ";
import support2 from "../../assets/img/Services/chatbot/support-1.png";
import ux from "../../assets/img/Services/chatbot/ux.png";
import quality from "../../assets/img/Services/chatbot/quality.png";
import planning from "../../assets/img/Services/chatbot/planning.png";
import research from "../../assets/img/Services/chatbot/research.png";
import development from "../../assets/img/Services/chatbot/development.png";
import Mailus from "../../components/Homepage/Mailus";
import ServicesAndStaffing from "../../components/Homepage/ServicesAndStaffing";
import multilingualChatbots from "../../assets/img/Services/chatbot/multilingualChatbots.png";
import FeatureSection from "../../components/Services/Chatbot/FeatureSection";
import WaveLine from "../../components/WaveLine.jsx";
import { Contact } from "../../components/Homepage/Contact";
import IndustriesServed from "../../components/Services/IndustriesServed";
import Outsourcing from "../../components/Services/CrossPlatform/OutSourcing";
import run1 from "../../assets/img/Services/CrossPlatform/React/run1.png"
import run2 from "../../assets/img/Services/CrossPlatform/React/run3.png"
import foodimage from "../../assets/img/Services/Startup/foodimage.png"
import fitnessApp from "../../assets/img/Services/Startup/fitnessApp.png"
import elearningsolution from "../../assets/img/Services/Startup/elearningsolution.png";
import mediaentertain from "../../assets/img/Services/Startup/mediaentertain.png";
import banking from "../../assets/img/Services/Startup/banking.png";
import DesignBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import VariteyApp from '../../assets/img/Services/CrossPlatform/VarietyApps.svg';
import TimelyDilevery from '../../assets/img/Services/CrossPlatform/TimelyDilevery.svg';
import Mission from '../../assets/img/Services/CrossPlatform/Mission.svg';
import run5 from "../../assets/img/Services/CrossPlatform/React/run5.png"

const ProductEngineer = () => {
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
        <WaveLine />
        <Stats data={statsData} />
        <Technology data={technologyData} />
        <IndustriesServed data={industries} />
        <Outsourcing data={outSoutceData} />
        <DevelopmentProcess data={developmentProcessData} />
        <WaveLine />
        <FAQ data={faqData}/>
        <Contact />
        <Mailus />
        <ServicesAndStaffing />
      </Box>
    </>
  );
};
export default ProductEngineer;
const bannerTextData = {
  mainHeading: "Enterprise Product ",
  middleHeading: "Engineering",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
    "Accelerating Product Engineering for Enterprises",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
    firstHeading: "Enterprise Product",
    secondHeading: "Engineering Solutions",
    description: "Our product engineering services are provided using a hybrid framework that is well-suited to the client's ecosystem, procedures, and requirements. In a distributed agile development paradigm, we use our tools and accelerators to ensure effective delivery, governance, and knowledge coverage.",
    cardData: [
      {
        image: enterprise,
        title: "Enterprise Resource Planning",
        description:
          "With Ongraph, businesses can efficiently address the challenges that are associated with enterprise integration. We not only analyze your existing enterprise-to-cloud and cloud-to-cloud integration requirements but also, present a flexible platform that can quickly adapt to your future business needs. We use technologies like Oracle, Salesforce, SAP, MS Dynamics, Biztalk Services, Mulesoft for seamless integration.",
      },
      {
        image: hassleFree,
        title: "Customer Relationship management",
        description:
          "Ongraph's Customer Relationship Management solutions leverage techniques like predictive modeling, gathering intelligent insights through forecasting, data mining, and text mining to put the customer at the center of everything. We help our clients accelerate their CRM transformation initiatives to increase sales, boost productivity and improve customer service – while reducing operational cost and increasing time-to-market.",
      },
      {
        image: delivery,
        title: "Supply Chain Management",
        description:
          "Creating a resilient and responsive supply chain is critical to sensing and reacting to customer demand. As global competition escalates, companies seek to reduce manufacturing lead times, increase asset utilization and cooperate better with suppliers. Our supply chain management solutions assist you to keep purchasing, manufacturing, and distribution aligned.",
      },
      {
        image: openSource,
        title: "Business Operations Management",
        description:
          "As your company’s operations management partners, it is our goal to encourage you to push through the tough challenges of creating and implementing change. From setting up and instructing on Work, Etc. Our success comes from your success. We aim to help you create, design and build an extraordinary business.",
      },
      {
        image: dataMigration,
        title: "Cloud & Data Center Management",
        description:
          "Cloud with its universal nature is becoming the clear choice for enterprises for the development and scalable performance of applications. With a track record of helping customers transform products into Cloud, migrate or enable their product for Cloud access, Ongraph can help you leverage the power of Cloud for your business.",
      },
      {
        image: promosntional,
        title: "Marketing Automation Systems",
        description:
          "Ongraph offers innovative services that optimize your marketing automation by linking Marketing and IT processes with technology. This technology includes: campaign management, interactive marketing, marketing resource management, multi-channel and marketing measurement solutions to achieve a particular view of the customer and dramatically increase the ROI of your marketing efforts.",
      },
      {
        image: dataBinding,
        title: "Big Data Intelligence",
        description:
          "Ongraph's Big Data Intelligence enables organizations to conceptualize and execute a well-thought-out big data program over multiple domains and converge areas. We help our clients account for scale and platform willingness while developing Big Data Engineering capabilities to encourage vision and value.",
      },
      {
        image: dataCollection,
        title: "Data, Backup, Security",
        description:
          "We work as your adviser to know your business and unique requirements to support both technology and business processes to assure that your business’ critical data is backed up in the cloud, moderate risks for your business and assure that your business is secure.",
      },
    ],
  };
  const faqData = {
    faqItems: [
      {
        question:
          "Q. What are the security measures you take to make a project secure?                        ",
        answer:
          "Startups, SMBs, and enterprises are among our clients, and we sign an NDA to safeguard the project and product’s idea’s complete security and secrecy.",
      },
      {
        question: "Q. What percentage of the project do I own outright?",
        answer:
          "You will own the complete developed project in its entirety, including the copyright, source code, and intellectual property rights.",
      },
      {
        question: "Q. How can I ensure that I am not overcharged?                        ",
        answer:
          "Our enterprise product engineering procedure is completely transparent. We allow you to keep track of every stage of development. At the moment the project is begun and accepted by you, the project scope of work is pre-defined in full. If you determine that only a few more modifications are required, these will be made. We are firm believers in long-term partnerships.",
      },
      {
        question:
          "Q. Do you assign a project manager to supervise the resources?",
        answer:
          "Once the resources are in place, each customer is allocated an executive. And, absolutely, the allocated executive–project manager is free of charge. The project manager will serve as a single point of contact for regular communication, answering your queries and keeping you informed about the status of your project.",
      }
    ]
  }
  const developmentProcessData = {
    firstHeading: "Development Process",
    secondHeading: "We Follow",
    description:
      "We take all the worry so that you can relax and see your ideas turning into reality! We follow a comprehensive approach in our enterprise product development process to ensure we fulfill all your requirements.",
    stepsData: [
      {
        title: "Protecting Your Intellectual Property",
        description:
          "We safeguard your splendid idea by signing an NDA to protect your original concept and secure your application.",
        icon: ux,
      },
      {
        title: "Discovery",
        description:
          "We research thoroughly and ask questions to know your detailed requirements and suggest the best solution.",
        icon: research,
      },
      {
        title: "Design",
        description:
          "We create wireframe prototypes before transforming them into world-class UI designs.",
        icon: development,
      },
      {
        title: "Development",
        description:
          "We turn the designs into an app using the most advanced technology stacks and frameworks.",
        icon: planning,
      },
      {
        title: "Testing",
        description:
          "We do extensive testing to remove all the bugs and issues before making your app live.",
        icon: support2,
      },
      {
        title: "Support and Maintenance",
        description:
          "We continue to offer widespread support and maintenance to guarantee smooth operations.",
        icon: quality,
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
        label: "Mobile App Developers",
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
  const featureData = {
    mainHeading: "",
    subHeading: "Enterprise Product Engineering Solutions To Achieve Your Objectives",
    description:
      "Product engineering leaders are discovering scale-out opportunities in automation, innovation, and related technology development in the ever-changing technology business. While many of these technology companies keep their core engineering efforts in-house, they rely on partners to construct, extend, alter, or support their products. <br/>Product engineering, transformation, and maintenance are all specialist disciplines at OnGraph. We solve the complexity of establishing and extending products that demand a variety of user experiences and must be architected for spikes in usage kinds, performance, and availability by leveraging our knowledge. We provide our clients a range of flexible, dependable, and high-quality product development and transformation services to meet their specific business requirements, including innovation, scalability, talents, multi-location, cost arbitrage, and more.",
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
  const industries = {
    firstHeading: "Industries We Serve",
    description: "We build Chatbot solutions for every niche",
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
        image: banking,
        title: "Banking",
        description: "Secure and scalable solutions for banking.",
      },
      {
        image: mediaentertain,
        title: "Media and Entertainment",
        description: "Solutions for digital media and entertainment platforms.",
      },
      {
        image: mediaentertain,
        title: "HRMS",
        description: "Custom Feature-Packed HRMS Development Solution.",
      },
    ],
  };
  const outSoutceData = {
    firstHeading: "Why choose",
    secondHeading: "OnGraph?",
    description:
      "Our product engineering services are a one-stop-shop that can help you with everything from concept to development and deployment, support and enhancement, and market promotion.",
    cardData: [
      [
        {
          image: run1,
          heading: "Extensive experience",
          description:
            "Our combined expertise of 14+ years in the field of IT solutions delivery and technology provides us an advantage when it comes to delivering startup IT services and solutions, giving them a competitive advantage.",
        },
        {
          image: Mission,
          heading: "Client confidentiality",
          description:
            "As the market becomes more competitive, we recognize the value of privacy. As a result, we go to great lengths to keep your product concept and information private and secure.",
        },
      ],
      [
        {
          image: run2,
          heading: "Cost-effective",
          description:
            "We understand that startups face funding constraints and a difficult road ahead. As a result, we draw on our extensive experience to develop the most cost-effective solutions for them to get started and support them along their growth path.",
        },
        {
          image: VariteyApp,
          heading: "Execution flexibility",
          description:
            "We recognize that the road ahead may be uncertain, and we’ll help you sort it out by working with you to achieve your objectives. We’ll work around your changing requirements to create a product that delivers results.",
        },
      ],
    ],
  };

  