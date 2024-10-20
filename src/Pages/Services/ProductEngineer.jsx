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

const ProductEngineer = () => {
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