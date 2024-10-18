import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import WhyHaspper from './Pages/WhyHaspper';
import ContactUs from './Pages/ContactUs';
import GetProjectEstimate from './Pages/GetProjectEstimate';
import ArtificialIntelligence from './Pages/ArtificialIntelligence';
import MobileAppDevelopment from './Pages/Services/MobileAppDevelopment';
import Layout from "./components/Layout/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/why-haspper' element={<WhyHaspper />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/project-estimate' element={<GetProjectEstimate />} />
            <Route path='/artificial-intelligence' element={<ArtificialIntelligence />} />
            <Route path='/mobile-app-development' element={<MobileAppDevelopment />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

