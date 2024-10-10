import React from "react";
import { NavBar } from "../components/NavBar";
import MainSection from "../components/MainSection";
import Section from "../components/Section";
import Banner from "../components/Banner";
import ExpertServices from "../components/ExpertServices";
import Mailus from "../components/Mailus";
import { Contact } from "../components/Contact";
import { ProjectEstimate } from "../components/ProjectEstimate";
import ServicesOffered from "../components/ServiceOffered";
import Mission from "../components/Mission";
import Certification from "../components/Certification";
import Review from "../components/Review";
import ServicesAndStaffing from "../components/ServicesAndStaffing";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      {/* <NavBar /> */}
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
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
