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
      </Routes>
    </Router>
  )
}

export default App
