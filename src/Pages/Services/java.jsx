import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import javaIcon from "../../assets/img/javabg.png";
import WebPageDesc from "../../components/Services/WebAppDevelopment/WebPageDescription";
import WhyUsforWebDev from "../../components/Services/WebAppDevelopment/WhyUsforWebDev";
import TechnologyStack from "../../components/Services/WebAppDevelopment/TechnologyStack";
import DevelopmentServices from "../../components/Services/WebAppDevelopment/DevelopmentServices";
import phpdescriptionimg from "../../assets/img/phpdescriptionimg.svg";
import TechnologyAdv from "../../components/Services/WebAppDevelopment/TechnologyAdvantage";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ"
import crosspltfmPhp from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";
import cmswebdevphp from "../../assets/img/webDevelopmentService/customCMS.png"
import JavaWebDevelopment from "../../assets/img/webDevelopmentService/javawebdevelopment.png";
import JavaMigration from "../../assets/img/webDevelopmentService/javamigration.png";
import JavaJ2ee from "../../assets/img/webDevelopmentService/javaj2ee.png";
import JavaMobile from "../../assets/img/webDevelopmentService/javamobile.png";
import JavaCustom from "../../assets/img/webDevelopmentService/CustomJava.png";
import JavaEnterprise from "../../assets/img/webDevelopmentService/enterprise.png";
import JavaModern from "../../assets/img/webDevelopmentService/javadevelopers.png";
import JavaCustomer from "../../assets/img/webDevelopmentService/customersupport.png";
import JavaAgility from "../../assets/img/webDevelopmentService/agility.png";
import JavaFlexible from "../../assets/img/webDevelopmentService/flexibleengagement.png";
import modernTech from "../../assets/img/webDevelopmentService/reusecode.png";
import lessTime from "../../assets/img/webDevelopmentService/lesstime.png";
import threading from "../../assets/img/webDevelopmentService/threading.png";

const JavaDevelopment = () => {
    return(
        <>
        <Banner data={bannerTextData }/>
        <WebPageDesc data = {phpdescription }/>
        <TechnologyAdv data = { technologyAdv}/>
        <TechnologyStack data = {ourStack}/>
        <DevelopmentServices data = {developmentService}/> 
        < WhyUsforWebDev data ={whyUsForWebDev}/>
        <FAQ data = {faqData}/>
        </>
    );
};

export default JavaDevelopment;
const bannerTextData = {
    mainHeading: "Java",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: javaIcon,
  bottomHeading:
  "Harnessing the latest advancements in technology, we provide durable, high-quality Java J2EE development solutions that drive value and support long-term success.",
  button: "TALK TO OUR EXPERTS",
};

const phpdescription = {
  firstHeading: "Unleash the Potential of",
  secondHeading: "Java Development Services.",
  description: ["As Java software development emerges as a leading technology for enterprise applications, more businesses are eager to tap into its vast potential. From simple to complex applications, Java delivers seamless solutions. If you're seeking an expert Java web development partner, we're here to help. With years of experience, our dedicated team of Java J2EE developers has supported clients across diverse industries, implementing high-quality Java solutions powered by the latest technologies and frameworks. Our technical expertise and domain knowledge enable us to build cross-platform applications with cutting-edge Java technologies."],
  button: "",
  image: phpdescriptionimg,
};

const technologyAdv = {
  firstHeading: "Unlock Java’s Full Potential",
  secondHeading: "As the Perfect Solution for Your Product",
  cardData: [
    {
      image: lessTime,
      title: "Reduced Time-to-Market",
      description:
      "As a robust, object-oriented language, Java facilitates the creation of reusable code and modular applications. Its intuitive APIs streamline development, reducing both time and costs.",
    },
    {
      image: crosspltfmPhp,
      title: "Platform Independence",
      description:
      "Java allows applications to run seamlessly across different systems, a crucial feature for modern software solutions. Its dual independence—both at the binary and source levels—ensures adaptability and consistency across platforms.",
    },
    {
      image: threading,
      title: "Multithreaded",
      description:
      "Java's ability to handle multiple tasks within a single program makes it an ideal choice for developing high-load applications, enhancing both efficiency and ease in software development.",
    },
  ]
};

const ourStack = [
  { category: "Front-End", technologies: "PHP, Angular, Bootstrap, WPF, React, JQuery" },
  { category: "Back-End", technologies: ".NET, Java, PHP, C#, VB.NET" },
  { category: "Architecture", technologies: "MVP, MVC, MVVM, Microservices" },
  { category: "Deployment", technologies: "AWS, Docker, Azure, Google Cloud, Kubernetes" },
  { category: "Database", technologies: "Oracle, MySQL, PostgreSQL, MS-SQL, MongoDB, MariaDB" },
  { category: "Testing", technologies: "Katalon, Selenium Grid, Postman, Test Rail, Apache JMeter" },
  { category: "ORMs", technologies: "TypeORM, Sequelize, GraphQL" },
  { category: "Caching", technologies: "Memcached, Redis" },
  { category: "Project Management Tools", technologies: "Asana, Slack, Trello, Jira" },
];


const whyUsForWebDev = {
  mainHeading: "We Are Your Reliable Java Ally",
  cards: [
      {
          image: JavaModern,
          title: "Proficient Java Developers",
          description: "When you seek to collaborate with experts, our seasoned team of Java software developers is here to assist you in delivering high-performing applications."
      },
      {
          image: JavaAgility,
          title: "Agility and Cost-Effectiveness",
          description: "Our committed developers collaborate using your preferred methodology while ensuring cost-effective and time-efficient management."
      },
      {
          image : modernTech,
          title: "Modern Technology Practice",
          description: "Java is viewed as a solution for the varied technological demands of businesses. By simply modernizing your approach, you can achieve a competitive edge."
      },
      {
          image : JavaCustomer,
          title: "On-Priority Customer Support",
          description: "Our subscription packages are tailored to meet your specific needs, and our team is always available to provide reliable support around the clock."
      },
      {
          image : JavaFlexible,
          title: "Flexible Engagement Models",
          description: "You can engage Java developers on an hourly, part-time, or full-time basis, choosing to work off-site or on-site through our flexible hiring options."
      },
      {
          image : modernTech,
          title: "Source Code Security Agreement",
          description: "Our team guarantees a secure development process from the outset by implementing industry-appropriate policies, guidelines, and standards."
      },
  ]
};

const developmentService = {
  heading: "Discover Our Comprehensive, 360-Degree Java Development Services",
  cardData: [
      {
          icon: JavaWebDevelopment,
          title: "Java Web Development",
          description: "Crafting dynamic, scalable, and secure web applications tailored to meet business objectives."
      },
      {
          icon: JavaCustom,
          title: "Custom Java Development",
          description: "Building unique Java solutions tailored to specific business requirements and goals."
      },
      {
          icon: JavaEnterprise,
          title: "Enterprise Apps",
          description: "Developing robust, high-performance enterprise applications designed for complex business environments."
      },
      {
          icon: JavaJ2ee,
          title: "Java J2EE Development",
          description: "Utilizing J2EE frameworks to create scalable, multi-tiered Java applications for enterprise-level needs."
      },
      {
          icon: cmswebdevphp,
          title: "Java CMS Development",
          description: "Implementing flexible, user-friendly content management systems to streamline content workflows."
      },
      {
          icon: JavaMobile,
          title: "Java Mobile Apllications",
          description: "Designing versatile mobile applications for seamless functionality across devices."
      },
      {
        icon: JavaMigration,
        title: "Java Integeration and Migration",
        description: "Ensuring smooth integration and migration of applications into Java environments for enhanced performance and compatibility."
    },
  ]
};

const faqData = {
  faqItems: [
    {
      question: "Q. What is Java Development used for?",
      answer:
        "The Java programming language was developed by Sun Microsystems in the early 1990s. While it is primarily utilized for web-based applications, Java is a versatile, efficient, and user-friendly language suitable for various purposes.",
    },
    {
      question: "Q. Is Java Front-end or Back-end?",
      answer:
        "The front end of an application is commonly known as the \"client-side,\" while the back end is referred to as the \"server-side.\" Backend web development involves programming languages such as Python, Ruby, .NET, PHP, and Java. In contrast, the primary languages used for front-end development include JavaScript, CSS, and HTML.",
    },
    {
      question: "Q. What are the advantages of Java?",
      answer:
        "Java offers numerous benefits, including security, robustness, platform independence, object orientation, portability, and distribution capabilities.",
    },
    {
      question: "Q. Can Java be used for Mobile Development?",
      answer:
        "Yes, Java can be used to develop Android-based mobile applications.",
    },
    {
      question: "Q. What kind of Application can you build using Java?",
      answer:
        "With Java, Hibernate, and Spring, you can develop a wide range of applications, including CRM systems, IoT-based solutions, financial applications, eCommerce platforms, marketplace systems, social commerce applications, and various domain-specific solutions.",
    },
    {
      question: "Q. Is Java still a Good Option when it comes to a Software Development?",
      answer:
        "Java software development boasts over 25 years of extensive experience and continues to evolve with each new release. By incorporating cutting-edge features like strong typing, improved multithreading, and lambda expressions, Java's popularity continues to rise. Many Java development firms still rely on Java to create middleware platforms, solidifying its status as one of the most favored programming languages in the development community.",
    },
    {
        question: "Q. How Java is used as the Backe-end Tool",
        answer:
          "As a compiled language that follows object-oriented principles, Java allows you to write code once and execute it on any platform, including Mac OS, Linux, or Windows. This versatility makes it an excellent choice for various applications, such as .NET development, networking, mobile software development, database connectivity, and much more.",
    },
    {
        question: "Q. How much does Java Development Cost",
        answer:
          "The cost of a Java web development project is influenced by several factors, including the project's complexity and scope, the number of Java developers needed, the technology stack required, the chosen engagement model, and various other considerations. Therefore, it is impossible to accurately determine the cost of a specific project without understanding its details. When selecting a Java development company, your primary focus should not be solely on costs. Instead, you should seek a provider that offers a balance of quality and affordability. This is a standard that only reputable firms like Haspper can consistently provide.",
    },
  ],
};
