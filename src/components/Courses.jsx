import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-tech text-cyber-green text-center mb-8 md:mb-12 cyber-glitch">
        Available Courses
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="course-card bg-cyber-black/80 p-6 md:p-8 rounded-lg border border-dark-wheat/30 hover:border-cyber-green transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-tech text-cyber-green mb-4 cyber-glitch">JavaScript Stack</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['React', 'Node.js', 'MySQL', 'MongoDB'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-cyber-black text-cyber-orange px-3 py-1 md:px-4 md:py-2 text-sm md:text-base border border-cyber-orange rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-cyber-white text-base md:text-lg leading-relaxed">
              Master modern JavaScript ecosystem and full-stack development
            </p>
            <button 
              className="w-full md:w-auto bg-transparent text-cyber-green border border-cyber-green px-6 py-2 md:py-3 text-sm md:text-base font-tech hover:bg-cyber-green hover:text-cyber-black transition-all duration-300"
              onClick={() => navigate('/playground/js')}
            >
              Learn JavaScript
            </button>
          </div>
        </div>

        <div className="course-card bg-cyber-black/80 p-6 md:p-8 rounded-lg border border-dark-wheat/30 hover:border-cyber-green transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-tech text-cyber-green mb-4 cyber-glitch">PHP Stack</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Laravel', 'MySQL'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-cyber-black text-cyber-orange px-3 py-1 md:px-4 md:py-2 text-sm md:text-base border border-cyber-orange rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-cyber-white text-base md:text-lg leading-relaxed">
              Build powerful web applications with PHP and Laravel
            </p>
            <button 
              className="w-full md:w-auto bg-transparent text-cyber-green border border-cyber-green px-6 py-2 md:py-3 text-sm md:text-base font-tech hover:bg-cyber-green hover:text-cyber-black transition-all duration-300"
              onClick={() => navigate('/playground/php')}
            >
              Learn PHP
            </button>
          </div>
        </div>

        <div className="course-card bg-cyber-black/80 p-6 md:p-8 rounded-lg border border-dark-wheat/30 hover:border-cyber-green transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-tech text-cyber-green mb-4 cyber-glitch">Python & MachineLearning Stack</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Pandas', 'Numpy', 'Scikit-learn', 'Visualization', 'Mysql'].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-cyber-black text-cyber-orange px-3 py-1 md:px-4 md:py-2 text-sm md:text-base border border-cyber-orange rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-cyber-white text-base md:text-lg leading-relaxed">
              Build powerful web applications and Models with Python and MachineLearning Tools
            </p>
            <button 
              className="w-full md:w-auto bg-transparent text-cyber-green border border-cyber-green px-6 py-2 md:py-3 text-sm md:text-base font-tech hover:bg-cyber-green hover:text-cyber-black transition-all duration-300"
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