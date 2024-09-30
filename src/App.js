import './App.css';
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner"
import Section from "./components/Section"
import ExpertServices from './components/ExpertServices';
import { Contact } from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Section/>
      <ExpertServices/>
      <Contact />
    </div>
  );
}

export default App;
