import './App.css';
import {NavBar} from './components/NavBar';
import Banner from "./components/Banner"
import Section from "./components/Section"
import ExpertServices from './components/ExpertServices';
import { Contact } from "./components/Contact";
import { ProjectEstimate } from "./components/ProjectEstimate";
import {Mailus} from "./components/Mailus"
import Mission from './components/Mission';
import Certification from './components/Certification';
import Review from './components/Review';
import ServicesOffered from './components/ServiceOffered';
import MainSection from './components/MainSection';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection/>
      <Section/>
      <Banner />
      <ExpertServices/>
      <Mailus/>
      <Contact />
      <ProjectEstimate/>
      <ServicesOffered/>
      <Mission/>
      <Certification/>
      <Review/>
    </div>
  );
}

export default App;
