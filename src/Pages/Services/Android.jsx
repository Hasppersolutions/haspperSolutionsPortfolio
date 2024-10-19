import React from "react";
import Banner from "../../components/Services/Banner";
import ServiceBackgroudImage from "../../assets/img/ServiceBackgroudImage.png";
import mobileDevelopmentRight from "../../assets/img/Services/mobile-development-right.png";
import AiDescription from "../../components/Services/AiDescription";
import AiFeature from "../../assets/img/aiFeature.png";
import Potential from "../../components/Services/Ios/Potential";
import revenue from "../../assets/img/Services/ios/revenue.png";
import DevelopmentServices from "../../components/Services/Ios/DevelopmentServices";

const Android = () => {
  return (
    <>
      <Banner data={bannerTextData} />
      <AiDescription data={aiDescriptionData} />
      <Potential data={potentialData} />
      <DevelopmentServices data={developmentServicesData} />
    </>
  );
};

export default Android;
const bannerTextData = {
  mainHeading: "Android App Development Company",
  middleHeading: "",
  backgroundImage: ServiceBackgroudImage,
  rightImage: mobileDevelopmentRight,
  bottomHeading:
    "Helping businesses reach a wider audience through our most dynamic Android app development services",
  button: "TALK TO OUR EXPERTS",
};
const aiDescriptionData = {
  firstHeading: "Android",
  secondHeading: "App Development Services",
  description: `Android is a widely installed platform among other platforms around the globe. The operating system is ruling the global market and this trend is only rising with each passing day. <br />
    Android is an open-source and Linux-based operating system that is used to build powerful and robust mobile applications. <br />
    Google says, using the Android SDK, Android applications can be coded using Kotlin, Java, and C++ languages, while using other languages is also possible.<br />
    Being a leading Android app development company, OnGraph works closely with businesses to know their app idea, business objectives, and app requirements to develop a detailed roadmap for creating tailor-made mobile apps. `,
  button: "",
  image: AiFeature,
};
const potentialData = {
  firstHeading: "Why choose",
  secondHeading: "Android app development?",
  cardData: [
    {
      image: revenue,
      title: "User Interface",
      description:
        "The UI of Android OS is quite easy and simple therefore it makes it very user-friendly. Also, the UI of Android is customizable.",
    },
    {
      image: revenue,
      title: "Multiple Language Support",
      description:
        "Android has multiple language support in its OS. Users can change the language as per their requirements. The international languages supported by Android are English, Chinese, French, German, Korean, and so on.",
    },
    {
      image: revenue,
      title: "Scalable and Versatile",
      description:
        "The scalability and flexibility of Android have increased since the introduction of Android Studio. Using Android Studio, you can integrate your Android app with the entire Android ecosystem, including tablets, smartphones, Android TV, and wearables.",
    },
    {
      image: revenue,
      title: "Scope for innovation",
      description:
        "The Android platform’s greatest strength is its global reach. If you wish to target a specific audience with innovative features, Android app developers can assist you by using advanced tools and technological innovations.",
    },
    {
      image: revenue,
      title: "Growing platform",
      description:
        "Android is a platform that will never stop growing due to its large community support. Several well-known companies manufacture Android smartphones. They continue to introduce new features to remain competitive and the Android developer community quickly adapts them.",
    },
    {
      image: revenue,
      title: "Easy Customization",
      description:
        "Android is a versatile platform with a bunch of customization options. All you get is a unique and intriguing mobile app with a variety of features. This platform addresses your business requirements and provides you with tailor-made app solutions.",
    },
  ],
};
const developmentServicesData = {
  heading:
    "We turn your ideas into reality with our Android app development services",
  description:
    "To meet the requirements of our clients and provide high-quality Android app development services, our Android developers use a wide range of programming languages and frameworks such as Java, React Native, Flutter, Kotlin, C++, and so on.",
  cardData: [
    {
      icon: revenue,
      title: "Design and development",
      description:
        "Having more than a decade of experience in Android app development, our team of dedicated developers adds icons, features, and graphics to the app. Also, the team adds the required functions and elements to make the app full-fledged and cutting-edge. ",
    },
    {
      icon: revenue,
      title: "Android app consultation",
      description:
        "Our Android app consultants have significant years of experience in the market and give you the best advice on different aspects of Android app development. .",
    },
    {
      icon: revenue,
      title: "Custom android app development",
      description:
        "We have a team of dedicated android app developers who hold expertise in building scalable and robust mobile apps. According to the business requirements provided by you, we create custom android solutions to help you reach the top.",
    },
    {
      icon: revenue,
      title: "Support and maintenance",
      description:
        "Apart from feature-rich android app development services, we also provide 24/7 support and maintenance to our clients. Our team makes sure that none of your queries remain unresolved. ",
    },
    {
      icon: revenue,
      title: "QA and testing",
      description:
        "We have a team of QA experts to make sure that your app is glitch-free and has zero errors. They will always keep an eye on the app to see if the app is performing smoothly on all the dedicated platforms.  ",
    },
  ],
};
