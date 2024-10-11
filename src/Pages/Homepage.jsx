import React from "react";
import MainSection from "../components/Homepage/MainSection";
import Section from "../components/Homepage/Section";
import Banner from "../components/Homepage/Banner";
import ExpertServices from "../components/Homepage/ExpertServices";
import Mailus from "../components/Homepage/Mailus";
import { Contact } from "../components/Homepage/Contact";
import { ProjectEstimate } from "../components/Homepage/ProjectEstimate";
import ServicesOffered from "../components/Homepage/ServiceOffered";
import Mission from "../components/Homepage/Mission";
import Certification from "../components/Homepage/Certification";
import Review from "../components/Homepage/Review";
import ServicesAndStaffing from "../components/Homepage/ServicesAndStaffing";

const Homepage = () => {
  return (
    <>
      <MainSection />
      <Section />
      <Banner />
      <ExpertServices />
      <Mailus />
      <Contact />
      <ProjectEstimate />
      <ServicesOffered />
      <Mission />
      <Certification />
      <Review />
      <ServicesAndStaffing />
    </>
  );
};

export default Homepage;
