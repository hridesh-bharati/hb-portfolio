import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Header/Header';
import Home from './assets/Home';
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import Footer from './assets/Footer/Footer';
import Projects from './assets/Projects/All_projects';
import Soursecode from './assets/Sourcedata/Sourcedata';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sourse/code" element={<Soursecode />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
