import React from "react";
import MainSection from "../components/Homepage/MainSection";
import Section from "../components/Homepage/Section";
import Banner from "../components/Homepage/Banner";
import TheDifference from "../components/Homepage/TheDifference";
import ExpertServices from "../components/Homepage/ExpertServices";
import Mailus from "../components/Homepage/Mailus";
import { Contact } from "../components/Homepage/Contact";
import ServicesOffered from "../components/Homepage/ServiceOffered";
import Mission from "../components/Homepage/Mission";
import Certification from "../components/Homepage/Certification";
import Review from "../components/Homepage/Review";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";
import ServicesGrid from "../components/Homepage/HowCanWeHelp";

const Homepage = () => {
  return (
    <>
      <MainSection />
      <Section />
      <TheDifference/>
      <ExpertServices />
      <ServicesGrid />
      <Contact />
      <ServicesOffered />
      <Mission />
      <Certification />
      <Review />
      <Mailus />
      <ServicesAndStaffing />
    </>
  );
};

export default Homepage;
