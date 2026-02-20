import React from 'react'
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Home from './Pages/Home'
import AIToolkit from './Pages/AIToolKit'
import About from './Pages/About'
import Resources from './Pages/Resources'
import AIToolkitDiscovery from './Components/AIToolkitDiscovery';
import { Publication } from './Pages/Publication';
import ResourceHub from './Pages/ResourceHub';
import LicensePage from './Pages/LicensePage';
import LandingPages from './Pages/LandingPages';
import ProjectRegistry from './Pages/ProjectRegistry';
import BackgroundsFX from './Pages/BackgroundsFX';
import UIComponents from './Pages/UIComponents';
import SaaSStarterPack from './Pages/SaaSStarterPack';
import Terms from './Pages/Terms';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-toolkit" element={<AIToolkit />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/resourcehub" element={<ResourceHub />} />
        <Route path="/license-page" element={<LicensePage />} />
        <Route path="/landing-pages" element={<LandingPages />} />
        <Route path="/project-registry" element={<ProjectRegistry />} />
        <Route path="/backgrounds" element={<BackgroundsFX />} />
        <Route path="/uicomponents" element={<UIComponents />} />
        <Route path="/saasstarter" element={<SaaSStarterPack />} />
        <Route path="/terms"  element={<Terms/>}/>



      </Routes>
    </Router>
  )
}

export default App
