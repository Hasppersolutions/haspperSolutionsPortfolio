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
import Ios from './Pages/Services/Ios';
import Android from './Pages/Services/Android';
import Flutter from './Pages/Services/Flutter';
import ProductEngineer from './Pages/Services/ProductEngineer';
import ChatBot from './Pages/Services/ChatBot';
import IotDevelopment from './Pages/Services/IotDevelopment';
import Hrms from './Pages/Solutions/Hrms';
import PhpDevelopment from './Pages/Services/Php';
import DotnetDevelopment from './Pages/Services/DotNet';
import VueDevelopment from './Pages/Services/Vuejs';
import ReactWebDevelopment from './Pages/Services/ReactWebDev';
import Startup from './Pages/Services/Startup';
import Enterprise from './Pages/Services/Enterprise';
import JavaDevelopment from './Pages/Services/java';
import PythonDevelopment from './Pages/Services/Python';
import AngularDevelopment from './Pages/Services/Angular';
import NodeJsDevelopment from './Pages/Services/NodeJs';
import BlockChain from './Pages/Solutions/BlockChain';
import Voicebot from './Pages/Solutions/Voicebot';
import SoftwareSupport from './Pages/Solutions/SoftwareSupport';
import OperationStaffing from './Pages/Solutions/OperationStaffing';
import CloudComputing from './Pages/Solutions/CloudComputing';
import Marketplace from './Pages/Solutions/Marketplace';
import ELearning from './Pages/Solutions/ELearning';
import MarketResearch from './Pages/Solutions/MarketResearch';
import Food from './Pages/Solutions/Food';
import Banking from './Pages/Solutions/Banking';
import Telecom from './Pages/Solutions/Telecom';
import Fitness from './Pages/Solutions/Fitness';
import MediaEntertainment from './Pages/Solutions/MediaEntertainment';

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
            <Route path='/services/react-native-app-development' element={<ReactNative />} />
            <Route path='/services/ionic-app-development' element={<Ionic />} />
            <Route path='/solutions/hrms-development' element={<Hrms />} />
            <Route path='/php-development' element={< PhpDevelopment />} />
            <Route path='/services/dotnet-development' element={< DotnetDevelopment />} />
            <Route path='/services/vuejs-development' element={<VueDevelopment />} />
            <Route path='/services/react-web-development' element={<ReactWebDevelopment />} />
            <Route path='/services/java-development' element={<JavaDevelopment />} />
            <Route path='/services/python-development' element={<PythonDevelopment />} />
            <Route path='/services/angular-development' element={<AngularDevelopment />} />
            <Route path='/services/nodejs-development' element={<NodeJsDevelopment />} />
            <Route path='/services/Blockchain' element={<BlockChain />} />
            <Route path='/services/Voicebot' element={<Voicebot />} />
            <Route path='/services/OperationStaffing' element={<OperationStaffing />} />
            <Route path='/services/SoftwareSupport' element={<SoftwareSupport />} />
            <Route path='/services/CloudComputing' element={<CloudComputing />} />
            <Route path='/services/marketplace' element={<Marketplace />} />
            <Route path='/solutions/e-learning-development' element={<ELearning />} />
            <Route path='/services/react-native-app-development' element={<ReactNative />} />
            <Route path='/services/ionic-app-development' element={<Ionic />} />
            <Route path='/solutions/hrms-development' element={<Hrms />} />
            <Route path='/solutions/market-research' element={<MarketResearch />} />
            <Route path='/solutions/food' element={<Food />} />
            <Route path='/solutions/banking' element={<Banking />} />
            <Route path='/solutions/telecom' element={<Telecom />} />
            <Route path='/solutions/fitness' element={<Fitness />} />
            <Route path='/solutions/media-entertainment' element={<MediaEntertainment />} />
            <Route path='/services/php-development' element={< PhpDevelopment />} />
            <Route path='/services/dotnet-development' element={< DotnetDevelopment />} />
            <Route path='/services/vuejs-development' element={<VueDevelopment />} />
            <Route path='/services/block-chain' element={<BlockChain />} />
            <Route path='/services/voicebot' element={<Voicebot />} />
            <Route path='/services/operation-staffing' element={<OperationStaffing />} />
            <Route path='/services/software-support' element={<SoftwareSupport />} />
            <Route path='/services/cloud-computing' element={<CloudComputing />} />
            <Route path='/services/marketplace' element={<Marketplace />} />
             <Route path = '/startup-it-solutions' element = { <Startup/>}/>
            <Route path = '/enterprise-it-solutions' element = { <Enterprise/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

