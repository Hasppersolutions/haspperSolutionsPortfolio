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
import ReactNative from "./Pages/ReactNative"
import Ionic from "./Pages/Ionic"
// import Flutter from "./Pages/Flutter"
import Ios from './Pages/Services/Ios';
import Android from './Pages/Services/Android';
import Flutter from './Pages/Services/Flutter';
import ProductEngineer from './Pages/Services/ProductEngineer';
import ChatBot from './Pages/Services/ChatBot';
import IotDevelopment from './Pages/Services/IotDevelopment';
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
            <Route path='/services/ios-app-development' element={<Ios />} />
            <Route path='/services/android-application-development' element={<Android />} />
            <Route path='/services/flutter-app-development' element={<Flutter />} />
            <Route path='/chatbot-development' element={<ChatBot />} />
            <Route path='/iot-development' element={<IotDevelopment />} />
            <Route path='/product-engineer-development' element={<ProductEngineer />} />
            <Route path='/react-native-app-development' element={<ReactNative />}/>
            <Route path='/ionic-app-development' element={<Ionic />}/>
            {/* <Route path='flutter-app-development' element={<Flutter />}/> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

