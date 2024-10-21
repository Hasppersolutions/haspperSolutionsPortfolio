import React from "react";
import MainSection from "../components/Services/CrossPlatform/Ionic/MainSection";
import Section from "../components/Services/CrossPlatform/Ionic/Section";
import FeaturesSection from "../components/Services/CrossPlatform/Ionic/FeaturesSection";
import CardSection from "../components/Services/CrossPlatform/Ionic/CardSection";
import Outsourcing from "../components/Services/CrossPlatform/Ionic/OutSourcing";
import FAQ from "../components/Services/CrossPlatform/Ionic/FAQ";
import Project from "../components/Services/CrossPlatform/Ionic/Project";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
const ReactNative = () => {
  return (
    <>
      
      
      <MainSection />
      <Section/>
      <FeaturesSection/>
      <CardSection/>
      <Outsourcing/>
      <FAQ data={faqData}/>
      <Project/>
      <ServicesAndStaffing/>

    </>
  );
};

export default ReactNative;
const faqData = {
  faqItems: [
    {
      question:
        "Q. Why should I choose React Native over native app development?",
      answer:
        "React Native allows for faster development with reusable components, cross-platform capabilities, and a large developer community.",
    },
    {
      question: "Q. What's the difference between React and React Native?",
      answer:
        "React is used for building web applications, while React Native is for building mobile applications using native components.",
    },
    {
      question: "Q. How long does it take to build a React Native application?",
      answer:
        "The time to develop a React Native app depends on the complexity, but it typically takes around 2-6 months.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        "The cost of building an app using React Native varies depending on the app complexity, team size, and features.",
    },
    {
      question:
        "Q. How much does it cost to build an application using React Native?",
      answer:
        "The cost of building an app using React Native varies depending on the app complexity, team size, and features.",
    },
  ]
}