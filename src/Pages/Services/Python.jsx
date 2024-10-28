import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import pythonIcon from "../../assets/img/python.png";
import WebPageDesc from "../../components/Services/WebAppDevelopment/WebPageDescription";
import WhyUsforWebDev from "../../components/Services/WebAppDevelopment/WhyUsforWebDev";
import OurIndustryExperience from "../../components/Services/WebAppDevelopment/OurIndustryExperience";
import TechnologyStack from "../../components/Services/WebAppDevelopment/TechnologyStack";
import { Description } from "@mui/icons-material";
import DevelopmentServices from "../../components/Services/WebAppDevelopment/DevelopmentServices";
import phpdescriptionimg from "../../assets/img/phpdescriptionimg.svg";
import TechnologyAdv from "../../components/Services/WebAppDevelopment/TechnologyAdvantage";
import FAQ from "../../components/Services/CrossPlatform/Ionic/FAQ"
import dynamicIntPhp from "../../assets/img/webDevelopmentService/dynamicIntPhp.png";
import MultipleLangPhp from "../../assets/img/webDevelopmentService/MultipleLangPhp.png";
import easyDBphp from "../../assets/img/webDevelopmentService/easyDBphp.png";
import crosspltfmPhp from "../../assets/img/webDevelopmentService/crosspltfmPhp.png";
import Scalabilityphp from "../../assets/img/webDevelopmentService/Scalabilityphp.png";
import securityphp from "../../assets/img/webDevelopmentService/securityphp.png";
import cmswebdevphp from "../../assets/img/webDevelopmentService/customCMS.png"
import socialnetworkicon from "../../assets/img/webDevelopmentService/socialnetworkicon.png";
import Microservices from "../../assets/img/Microservices.svg";
import webbaseddev from "../../assets/img/webDevelopmentService/webbaseddev.png";
import API from "../../assets/img/API.svg";
import pythonchoice from "../../assets/img/webDevelopmentService/pythonchoice.png";
import pythoneasyintegration from "../../assets/img/webDevelopmentService/pythoneasyintegration.png";
import pythonready from "../../assets/img/webDevelopmentService/pythonready.png";
import pythonsimple from "../../assets/img/webDevelopmentService/pythonsimple.png";
import pythonversatile from "../../assets/img/webDevelopmentService/pythonversatile.png";
import pythonwidelibrary from "../../assets/img/webDevelopmentService/pythonwidelibrary.png";
import pythonmachine from "../../assets/img/webDevelopmentService/pythonmachine.png";
import pythonCMS from "../../assets/img/webDevelopmentService/pythonCMS.png";
import pythonweb from "../../assets/img/webDevelopmentService/webbaseddev.png";
import pythoncore from "../../assets/img/webDevelopmentService/javawebdevelopment.png";
import pythondjango from "../../assets/img/webDevelopmentService/pythonfull.png";
import pythoncustom from "../../assets/img/webDevelopmentService/pythoncustom.png";
import pythonmobile from "../../assets/img/webDevelopmentService/pythonmobile.png";
import python24support from "../../assets/img/webDevelopmentService/python24support.png";
import pythonEnterprise from "../../assets/img/webDevelopmentService/pythonEnterprise.png";
import pythonNextgen from "../../assets/img/webDevelopmentService/pythonNextgen.png";
import pythonSwift from "../../assets/img/webDevelopmentService/pythonSwift.png";
import pythondevelopers from "../../assets/img/webDevelopmentService/pythondevelopers.png";
import pythonserving from "../../assets/img/webDevelopmentService/pythonserving.png";
import djangoImage from "../../assets/img/webDevelopmentService/django.png";
import flaskImage from "../../assets/img/webDevelopmentService/flask.png";
import turboImage from "../../assets/img/webDevelopmentService/turbo.png";
import pandasImage from "../../assets/img/webDevelopmentService/pandas.png";
import web2pyImage from "../../assets/img/webDevelopmentService/web2py.png";
import cherryImage from "../../assets/img/webDevelopmentService/cherry.png";

const PythonDevelopment = () => {
    return(
        <>
        <Banner data={bannerTextData }/>
        <WebPageDesc data = {pythondescription }/>
        <TechnologyAdv data = { technologyAdv}/>
        <TechnologyStack data = {pythonStack}/>
        <DevelopmentServices data = {developmentService}/> 
        < WhyUsforWebDev data ={whyUsForWebDev}/>
        < OurIndustryExperience data = {ourIndustryExperience} />
        <FAQ data = {faqData}/>
        </>
    );
};

export default PythonDevelopment;
const bannerTextData = {
    mainHeading: "Python",
  middleHeading: "Development Company",
  backgroundImage: ServiceBackgroudImage,
  rightImage: pythonIcon,
  bottomHeading:
  "At Haspper, we specialize in delivering robust and scalable Python development solutions tailored to meet your unique business needs. With Python's versatility and powerful libraries, our experienced developers create everything from dynamic web applications to complex data analysis tools.",
  button: "TALK TO OUR EXPERTS",
};

const pythondescription = {
  firstHeading: "Python Development Solutions",
  secondHeading: "For Creating Dynamic Applications",
  description: [
    "Python has become the preferred choice for entrepreneurs and growing businesses seeking to develop applications in data science, dynamic web platforms, artificial intelligence, machine learning, and next-generation digital solutions. Its seamless compatibility with a wide array of frameworks, packages, and libraries allows for rapid application development, enabling the creation of both native and cross-platform applications.",
    "With Python, you can develop a diverse range of applications, including command-line tools, multimedia applications, business software, machine learning solutions, games, and blockchain applications. Notable examples of applications built using Python include Instagram, Uber, Dropbox, Spotify, Reddit, and Pinterest.",
    "At Haspper, we offer comprehensive Python web app development services that encompass feature-rich web applications, engaging mobile apps, data aggregation tools, analytics solutions, and web crawlers across various industries, including Fintech, Healthcare, E-commerce, and Enterprise solutions. As a leading Python development company with over ten years of industry experience, OnGraph leverages top-tier Python tools and frameworks like Django, TurboGears, and Flask to harness the full potential of scalable and robust Python solutions tailored for your business needs."
],
  button: "",
  image: phpdescriptionimg,
};

const technologyAdv = {
  firstHeading: "Why We Recommend",
  secondHeading: "Python Web Development Services",
  description: ["With innumerable benefits like swift prototyping, massive library, frameworks, and scalability, implementing Python development services speeds up your ROI and allows you to gain a competitive edge."],
  cardData: [
    {
      image: pythonready,
      title: "Ready-to-Use Solutions",
      description:
      "Python boasts a large and active developer community that has created a wealth of open-source libraries. If you're looking to develop with Python, you'll undoubtedly find ready-to-use solutions to help you achieve your goals.",
    },
    {
      image: pythoneasyintegration,
      title: "Easy Integration",
      description:
      "Python is often referred to as a \"glue language\" because of its ease of integration with various components, including other frameworks, programming languages, existing infrastructures, and external services.",
    },
    {
      image: pythonsimple,
      title: "Simple and Powerful",
      description:
      "Python includes built-in tools for image processing, mathematical computations, and creating interfaces across different operating systems, allowing for rapid development with minimal effort.",
    },
    {
      image: pythonversatile,
      title: "Versatile",
      description:
      "Python allows you to create everything from single-page web applications to complex enterprise solutions without altering the core components of the application.",
    },
    {
      image: pythonwidelibrary,
      title: "Wide Library Support",
      description:
      "Python provides valuable libraries and built-in modules such as Theano, Scikit-Learn, Pandas, and TensorFlow, which can help streamline the early stages of development and save time and effort.",
    },
    {
      image: pythonchoice,
      title: "Choice of Startups and Several Billion-Dollar Corporations",
      description:
      "Python is an ideal option for companies facing tight deadlines or developing highly sophisticated applications that need to adhere to stringent security standards.",
    },
  ]
};

const pythonStack = [
    { category: "Web Development", technologies: "Django, Flask, Pyramid, TurboGears, Bottle, Web2Py" },
    { category: "Database", technologies: "MySQL, MongoDB, PostgreSQL, Oracle, SQLite, MS SQL" },
    { category: "Software Development", technologies: "Roundup, Buildbot" },
    { category: "Libraries", technologies: "Pillow/PIL, Pika, Gdata, Fabric, Urlib2, Requests" },
    { category: "Tools/Utilities", technologies: "NumPy, PyQt, Celery, Memcached, Asyncio, Virtualenv" },
    { category: "GUI Development", technologies: "Kivy, WxPython, pyGObject, PySide, PyQt, Tkinter" },
    { category: "System Administration", technologies: "OpenStack, Ansible, Salt" },
    { category: "Scientific/Numeric", technologies: "Pandas, SciPy, Ipython" },
  ];
  

  const ourIndustryExperience = {
    firstHeading: "Popular Python Tools and",
    secondHeading: "Frameworks We Work With",
    description:
      "Our team of Python developers possesses extensive knowledge and expertise in crafting engaging applications using various Python frameworks and libraries.",
    technologies: [
      {
        icon: djangoImage,
        title: "Django Framework",
        description:
          "Django is considered the premier choice for Python development. With most modules pre-installed, Django developers can easily select what they need and hit the ground running.",
      },
      {
        icon: flaskImage,
        title: "Flask Framework",
        description:
          "Flask is the ideal microframework for developing web applications in Python. It comes with a built-in server and debugger, along with RESTful request dispatching, making it easy to add features quickly to web apps.",
      },
      {
        icon: web2pyImage,
        title: "Web2Py Framework",
        description:
          "Web2Py is a leading cross-platform framework for Python web development. It includes a debugger, deployment tools, and a code editor, making Python web app development more accessible while supporting the MVC paradigm.",
      },
      {
        icon: turboImage,
        title: "TurboGears Framework",
        description:
          "TurboGears is a comprehensive framework designed for large-scale applications. It serves as a rapid web development framework, built on top of various frameworks and featuring designer-friendly templates and an MVC model.",
      },
      {
        icon: cherryImage,
        title: "CherryPy Framework",
        description:
          "CherryPy simplifies project management for developers through a web browser interface. It integrates CRUD (Create, Retrieve, Update, and Delete) functionality into applications and supports an extensible plugin system.",
      },
      {
        icon: pandasImage,
        title: "Pandas Library",
        description:
          "Pandas is a powerful Python library offering easy-to-use data analytics tools and structures, widely applied in both commercial and academic fields, including statistics and finance.",
      },
    ],
  };
  
  

  const whyUsForWebDev = {
    mainHeading: "Why Choose Haspper for Python Development?",
    description: ["With over 14 years of industry experience and 500+ successful projects, OnGraph has earned the trust of more than 210 clients. Our proficient team of 250+ Python developers excels in creating customized and scalable solutions across various domains."],
    cards: [
      {
        image: pythondevelopers,
        title: "Skilled Python Developers",
        description: "At OnGraph, our Python developers write clean, efficient, and high-quality code tailored for your applications using the right frameworks, libraries, and tools."
      },
      {
        image: pythonNextgen,
        title: "Next-Generation Python Practices",
        description: "All aspects of our custom Python development services adhere to strict international standards and regulations."
      },
      {
        image: python24support,
        title: "24/7 Support",
        description: "We offer continuous support for our Python development services, ensuring accessible communication during and after your application's deployment."
      },
      {
        image: pythonserving,
        title: "Serving Various Industries",
        description: "As a trusted Python development company, OnGraph brings over 14 years of expertise in delivering services across numerous sectors, including eCommerce, Finance, E-learning, Advertising, and IoT."
      },
      {
        image: pythonEnterprise,
        title: "Advanced Enterprise-Level Applications",
        description: "Our experienced in-house Python developers are adept at utilizing various technical stacks to create secure and reliable applications."
      },
      {
        image: pythonSwift,
        title: "Timely Delivery",
        description: "We pride ourselves on keeping our commitments, ensuring that our Python products and development services are delivered on schedule."
      },
    ]
  };
  

const developmentService = {
    heading: "Python Development Services We Offer",
    description: ["Being a premier Python Development Company, we at OnGraph are agile, resourceful, and dedicated to turning your vision into a reality. Our expertise in diverse industry verticals enables us to keep you ahead of the competition by promising to provide beyond expectations."],
    cardData: [
     {
        icon: pythonmachine,
        title: "Machine Learning Solutions",
        description: "Leveraging advanced machine learning algorithms to build predictive models and data-driven applications that enhance decision-making and drive innovation."
     },  
     {
        icon: pythonweb,
        title: "Python Web Development",
        description: "Creating dynamic, secure, and scalable web applications tailored to meet your business goals."
      },
      {
        icon: pythoncustom,
        title: "Custom Python Development",
        description: "Delivering unique Python solutions designed specifically for your business requirements and objectives."
      },
      {
        icon: pythonCMS,
        title: "Enterprise Applications",
        description: "Developing robust and high-performance enterprise applications optimized for complex business processes."
      },
      {
        icon: pythondjango,
        title: "Django Development",
        description: "Utilizing the Django framework to build scalable, feature-rich applications with rapid development cycles."
      },
      {
        icon: pythoncore,
        title: "Flask Development",
        description: "Crafting lightweight web applications using the Flask framework for maximum flexibility and simplicity."
      },
      {
        icon: pythonmobile,
        title: "Python Mobile Applications",
        description: "Designing versatile mobile applications that provide seamless functionality across various devices."
      },
      {
        icon: pythoneasyintegration,
        title: "Python Integration and Migration",
        description: "Facilitating smooth integration and migration of applications into Python environments for improved performance and compatibility."
      },
    ]
  };
  

  const faqData = {
    faqItems: [
      {
        question: "Q. Why should I choose Python for web development?",
        answer:
          "Python is known for its simplicity and readability, making it a great choice for rapid development. With a wide range of frameworks like Django and Flask, Python is highly adaptable for building scalable, secure, and high-performance web applications."
      },
      {
        question: "Q. How secure is Python for web applications?",
        answer:
          "Python offers robust security features and libraries to protect against threats like SQL injection, XSS, and CSRF attacks. Security largely depends on best practices, and frameworks like Django come with built-in tools to further enhance application security."
      },
      {
        question: "Q. What types of applications can I build with Python?",
        answer:
          "Python is incredibly versatile, supporting a wide range of applications from web apps and enterprise-level solutions to AI/ML-powered applications, data analytics tools, scientific computing, APIs, and more."
      },
      {
        question: "Q. How long does it take to build a Python web application?",
        answer:
          "The timeline varies based on project complexity and requirements, but many Python web applications can be built within 2 to 6 months. Using Python’s robust frameworks like Django can speed up development without compromising quality."
      },
      {
        question: "Q. Can Python handle large-scale applications?",
        answer:
          "Yes, Python is highly scalable and can manage large-scale applications efficiently. Frameworks like Django and Flask, paired with technologies like load balancing and caching, allow Python applications to handle heavy traffic and complex processes."
      },
      {
        question: "Q. How much does it cost to develop a Python application?",
        answer:
          "The cost depends on the project’s complexity, scope, and features. Python’s open-source ecosystem and large developer community help keep development costs reasonable, especially when compared to proprietary software stacks."
      },
    ],
  };
  
