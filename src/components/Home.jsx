import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[var(--cyber-black)]">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center bg-[var(--cyber-black)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--cyber-white)] mb-8 cyber-glitch">
            Welcome to Code4Impact
          </h1>
          <p className="text-[var(--cyber-white)] text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to mastering cutting-edge technologies and shaping the future of African tech innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/courses')}
              className="px-8 py-4 bg-[var(--cyber-green)] text-[var(--cyber-black)] rounded-lg font-medium text-base hover:bg-[var(--cyber-orange)] transition-colors duration-300 cyber-button"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-[var(--cyber-green)] text-[var(--cyber-green)] rounded-lg font-medium text-base hover:bg-[var(--cyber-green)] hover:text-[var(--cyber-black)] transition-colors duration-300 cyber-button"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative bg-[var(--cyber-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cyber-white)] mb-6 cyber-glitch">
              Our Mission
            </h2>
            <p className="text-[var(--cyber-white)] text-lg max-w-2xl mx-auto">
              Empowering the next generation of African developers through cutting-edge technology education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Cards */}
            {[
              {
                icon: '🎯',
                title: 'Education',
                description: 'Providing high-quality, accessible education in modern technologies.'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'Fostering innovation and creativity in the tech industry.'
              },
              {
                icon: '💡',
                title: 'Impact',
                description: 'Creating lasting impact in the African tech ecosystem.'
              }
            ].map((card, index) => (
              <div key={index} className="cyber-container">
                <div className="w-16 h-16 rounded-lg bg-[var(--cyber-dark)] flex items-center justify-center mx-auto mb-6 border-2 border-[var(--cyber-green)]">
                  <span className="text-4xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-center text-[var(--cyber-white)] mb-4">
                  {card.title}
                </h3>
                <p className="text-[var(--cyber-white)] text-base text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative bg-[var(--cyber-black)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cyber-white)] mb-6 cyber-glitch">
              Technologies You'll Master
            </h2>
            <p className="text-[var(--cyber-white)] text-lg max-w-2xl mx-auto">
              Learn the most in-demand technologies and frameworks in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript', 'Node.js', 'PHP', 'React.js', 'MySQL',
              'MongoDB', 'Laravel', 'Python', 'Machine Learning'
            ].map((tech, index) => (
              <div 
                key={index}
                className="cyber-container"
              >
                <span className="text-[var(--cyber-green)] text-base font-medium block text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative bg-[var(--cyber-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="cyber-container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cyber-white)] mb-6 cyber-glitch">
                Ready to Start Your Journey?
              </h2>
              <p className="text-[var(--cyber-white)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join our community of learners and start building your future in tech today.
              </p>
              <button 
                onClick={() => navigate('/courses')}
                className="px-8 py-4 bg-[var(--cyber-green)] text-[var(--cyber-black)] rounded-lg font-medium text-base hover:bg-[var(--cyber-orange)] transition-colors duration-300 cyber-button"
              >
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;