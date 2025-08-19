import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Playground from './components/Playground'
import Pricing from './components/Pricing'
import Transform from './components/Transform'
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    const cursorLight = document.createElement('div');
    cursorLight.className = 'cursor-light';
    document.body.appendChild(cursorLight);

    const trails = [];
    const numTrails = 5;

    for (let i = 0; i < numTrails; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push({
        element: trail,
        x: 0,
        y: 0,
        delay: i * 2
      });
    }

    const updateCursorLight = (e) => {
      cursorLight.style.left = e.clientX - 10 + 'px';
      cursorLight.style.top = e.clientY - 10 + 'px';

      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.x = e.clientX - 5;
          trail.y = e.clientY - 5;
          trail.element.style.left = trail.x + 'px';
          trail.element.style.top = trail.y + 'px';
          trail.element.style.opacity = 1 - (index / numTrails);
        }, trail.delay);
      });
    };

    document.addEventListener('mousemove', updateCursorLight);

    return () => {
      document.removeEventListener('mousemove', updateCursorLight);
      document.body.removeChild(cursorLight);
      trails.forEach(trail => document.body.removeChild(trail.element));
    };
  }, []);

  return (
    <div className="app-container min-h-screen flex flex-col bg-gradient-to-b from-dark-wheat/5 via-cyber-black/90 to-dark-wheat/5"> 
      <nav className="cyber-nav bg-cyber-black/90 px-4 py-3 md:px-6 md:py-4 sticky top-0 z-50 border-b border-dark-wheat/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="nav-brand text-2xl md:text-3xl font-tech text-cyber-green cyber-glitch">Code4Impact eLearning</div>
          <div className="nav-links flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">Home</Link>
            <Link to="/about" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">About</Link>
            <Link to="/courses" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">Courses</Link>
            <Link to="/contact" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">Contact</Link>
            <Link to="/transform" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">Transform</Link>
            <Link to="/pricing" className="cyber-link text-cyber-white hover:text-cyber-orange transition-all duration-300 text-sm md:text-base">Pricing</Link>
          </div>
        </div>
      </nav>

      <main className="main-content flex-1 px-4 py-6 md:px-6 md:py-8 max-w-7xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playground/:language" element={<Playground />} />
          <Route path="/transform" element={<Transform />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <footer className="cyber-footer bg-cyber-black py-4 px-4 md:px-6 text-center text-cyber-white text-sm md:text-base"> 
        <div className="max-w-7xl mx-auto">
          <p className="mb-2">© 2025 Code4Impact. All rights reserved.</p>
          <p>Rwanda Kigali Kicukiro Gatenga Kk595st</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
