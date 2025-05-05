import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="cyber-container">
      <h1 className="cyber-glitch">Available Courses</h1>
      <div className="courses-grid">
        <div className="course-card">
          <h2 className="cyber-glitch">JavaScript Stack</h2>
          <div className="course-content">
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">MySQL</span>
              <span className="tech-item">MongoDB</span>
            </div>
            <p>Master modern JavaScript ecosystem and full-stack development</p>
            <button 
              className="cyber-button"
              onClick={() => navigate('/playground/js')}
            >
              Learn JavaScript
            </button>
          </div>
        </div>

        <div className="course-card">
          <h2 className="cyber-glitch">PHP Stack</h2>
          <div className="course-content">
            <div className="tech-stack">
              <span className="tech-item">Laravel</span>
              <span className="tech-item">MySQL</span>
            </div>
            <p>Build powerful web applications with PHP and Laravel</p>
            <button 
              className="cyber-button"
              onClick={() => navigate('/playground/php')}
            >
              Learn PHP
            </button>
          </div>
        </div>

        <div className="course-card">
          <h2 className="cyber-glitch">Python & MachineLearning Stack</h2>
          <div className="course-content">
            <div className="tech-stack">
              <span className="tech-item">Pandas</span>
              <span className="tech-item">Numpy</span>
              <span className="tech-item">Scikit-learn</span>  
              <span className="tech-item">Visualization</span>
              <span className="tech-item">Mysql</span>
            </div>
            <p>Build powerful web applications and Models with Python and MachineLearning Tools</p>
            <button 
              className="cyber-button"
              onClick={() => navigate('/playground/python')}
            >
              Learn Python
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;