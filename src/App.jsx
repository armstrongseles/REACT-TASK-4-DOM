import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Navbar from './components/NavBar';
import './styles/global.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fullstack" element={<FullStackDevelopment />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
};

export default App;
