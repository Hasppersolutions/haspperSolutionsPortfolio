import './App.css';
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner"
import Section from "./components/Section"
import ExpertServices from './components/ExpertServices';
import { Contact } from "./components/Contact";
import {Mailus} from "./components/Mailus"

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Section/>
      <ExpertServices/>
      <Mailus/>
      <Contact />
    </div>
  );
}

export default App;
