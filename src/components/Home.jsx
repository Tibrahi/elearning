import React from 'react';


const Home = () => {
  return (
    <div className="cyber-container">
      <h1 className="cyber-glitch">Welcome to Code4Impact eLearning</h1>
      <div className="courses-grid">
        <div className="course-card">
          <h2>Our Mission</h2>
          <p>Empowering the next generation of African developers through cutting-edge technology education.</p>
        </div>
        
        <div className="course-card">
          <h2>What You'll Learn</h2>
          <div className="tech-stack">
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">PHP</span>
            <span className="tech-item">React.js</span>
            <span className="tech-item">MySQL</span>
            <span className="tech-item">MongoDB</span>
            <span className="tech-item">Laravel</span>
            <span className="tech-item">Python</span>
            <span className="tech-item">Machine Learning</span>
          </div>
        </div>

        <div className="course-card">
          <h2>Transform Your Future</h2>
          <p>Join us in the digital revolution. Learn, Build, Impact.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;