import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages-main/Home';
import About from './components/pages-sub/About';
import Contact from './components/pages-sub/Contact';
import Resources from './components/pages-sub/Resources';
import Dronesurvey from './components/pages-sub/Dronesurvey';
import ProjectMnagementServices from './components/pages-main/ProjectManagmentServices';
import MepConsulancyServices from './components/pages-main/MepConsulancyServices';
import DesignServices from './components/pages-main/DesignService';
import Technicaltraning from './components/pages-sub/Tecnicaltraining';
import Vishualization from './components/pages-sub/Vishualization';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
         <Route path="/vishualization" element={<Vishualization/>} />
         <Route path="/resources" element={<Resources/>} />
         <Route path="/contact-us" element={<Contact/>} />
         <Route path='/technical-training' element={<Technicaltraning/>}/>
         <Route path="/project-management-services" element={<ProjectMnagementServices/>} />
         <Route path="/mep-consultancy-services" element={<MepConsulancyServices/>} />
         <Route path="/design-services" element={<DesignServices/>} />
         <Route path="/drone-survey" element={<Dronesurvey/>} />

      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
