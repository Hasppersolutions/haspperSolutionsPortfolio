import { Box } from "@mui/material";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import mlearning from "../../assets/img/Services/iot/mlearning.png";
import menu from "../../assets/img/Services/iot/menu.png";
import fleetManagement from "../../assets/img/Services/iot/fleetManagement.png";
import webPortal from "../../assets/img/Services/iot/webPortal.png";

const IotDevelopment = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Banner data={bannerTextData} />
        <Potential data={potentialData} />
      </Box>
    </>
  );
};
export default IotDevelopment;
const bannerTextData = {
  mainHeading: "AI based IoT & IIoT Solutions to",
  middleHeading: "Unlock Faster Time to Market and Value",
  backgroundImage: ServiceBackgroudImage,
  rightImage: AiFeature,
  bottomHeading:
    "With an unmatched spectrum of development tools, processor designs, and a world-class ecosystem of partners that allow AI and end-to-end security, we are the industry standard for IoT and embedded devices.",
  // button: "Get Free Demo", //uncomment to add button to banner
  // link: "link" //uncomment to add link to button
};
const potentialData = {
    firstHeading: "360 Degree End-to-End",
    secondHeading: "IoT & IIoT Services",
    description: "OnGraph delivers Product Design and Development across industry verticals. Our experts assist you from concept to production that enables you to focus on product strategy and management. Backed by skilled and proficient experts, we make use of the most advanced technology and tools to design and develop IoT products that meet your business model as well as focus on end consumer needs.",
    cardData: [
      {
        image: mlearning,
        title: "Product Requirement Analysis",
        description:
          "The purpose of requirements analysis is to make sure that all the product requirements accurately represent the client's needs and requirements. When executed correctly, requirements analysis results in a set of product requirements that, when met, will result in a deliverable that matches client’s expectations.",
      },
      {
        image: menu,
        title: "Product Architecture & Design",
        description:
          "Favorable results in the development stage precede large-scale production and commercialization. Here, the business launches its promotion campaign for the new product. The market research conducted during the conception stage influences the timing and location of the product launch.",
      },
      {
        image: fleetManagement,
        title: "Product Deployment & Enhancement",
        description:
          "If any of our clients is non-technical and require assistance, we provide complete chatbot consulting services. We have over 15 years of experience delivering chatbot consultation to clients all over the world, earning us the title of one of World's most influential chatbot development companies.",
      },
      {
        image: webPortal,
        title: "End-To-End Product Development",
        description:
          "Product development entails the actual design and manufacture of the product. Development commences with the manufacture of a prototype that facilitates market testing. Based upon the results of the tests, we decide on whether to undertake large-scale production or not.",
      }
    ],
  };