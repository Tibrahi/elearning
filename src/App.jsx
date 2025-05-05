import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Playground from './components/Playground'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'     

function App() {
  useEffect(() => {
    // Create cursor light element
    const cursorLight = document.createElement('div');
    cursorLight.className = 'cursor-light';
    document.body.appendChild(cursorLight);

    // Create array to store trail elements
    const trails = [];
    const numTrails = 5;

    // Create trail elements
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

    // Update cursor light position
    const updateCursorLight = (e) => {
      cursorLight.style.left = e.clientX - 10 + 'px';
      cursorLight.style.top = e.clientY - 10 + 'px';
      
      // Update trail positions with delay
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

    // Add event listeners
    document.addEventListener('mousemove', updateCursorLight);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorLight);
      document.body.removeChild(cursorLight);
      trails.forEach(trail => document.body.removeChild(trail.element));
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <nav className="cyber-nav">
          <div className="nav-brand cyber-glitch">Code4Impact eLearning</div>
          <div className="nav-links">
            <Link to="/" className="cyber-link">Home</Link>
            <Link to="/about" className="cyber-link">About</Link>
            <Link to="/courses" className="cyber-link">Courses</Link>
            <Link to="/contact" className="cyber-link">Contact</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playground/:language" element={<Playground />} />
          </Routes>
        </main>

        <footer className="cyber-footer">
          <p>© 2025 Code4Impact. All rights reserved.</p>
          <p>Rwanda Kigali Kicukiro Gatenga Kk595st</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
