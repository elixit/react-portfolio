import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import components
import MyNav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Render navigation component */}
      <MyNav />

      {/* Define routes for different components */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Render footer component */}
      <Footer />
    </div>
  );
}

export default App;
