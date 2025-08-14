import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
// import '../animate.css';

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
    <div className="min-h-screen w-full animate-fadeIn">
      <main className="flex flex-col w-full h-full items-center justify-center py-16 px-2 md:px-0 gap-12">
        {/* Hero Section */}
        <section className="w-full max-w-3xl text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-500 mb-6 tracking-tight">Welcome to Code4Impact</h2>
          <p className="text-white text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">Your gateway to mastering cutting-edge technologies and shaping the future of African tech innovation.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/courses')} className="px-8 py-4 bg-green-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-white hover:text-green-500 transition-colors duration-300">Explore Courses</button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border-2 border-green-500 text-green-500 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-500 hover:text-white transition-colors duration-300">Get Started</button>
          </div>
        </section>

        {/* Mission & Technologies Section - Flex Grid Column */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <section className="rounded-2xl p-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Our Mission</h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">Empowering the next generation of African developers through cutting-edge technology education.</p>
            <div className="grid grid-cols-1 gap-6 w-full">
              {/* Mission Cards */}
              {[
                { icon: '🎯', title: 'Education', description: 'High-quality, accessible education in modern technologies.' },
                { icon: '🚀', title: 'Innovation', description: 'Fostering innovation and creativity in the tech industry.' },
                { icon: '💡', title: 'Impact', description: 'Creating lasting impact in the African tech ecosystem.' }
              ].map((card, index) => (
                <div key={index} className="bg-green-500 rounded-xl p-6 flex flex-col items-center shadow-md">
                  <span className="text-4xl mb-2 text-white">{card.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white text-base text-center">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="rounded-2xl p-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Technologies You'll Master</h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">Learn the most in-demand technologies and frameworks in the industry.</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full">
              {[
                'JavaScript', 'Node.js', 'PHP', 'React.js', 'MySQL',
                'MongoDB', 'Laravel', 'Python', 'Machine Learning'
              ].map((tech, index) => (
                <div key={index} className="bg-green-500 rounded-xl p-4 flex items-center justify-center shadow-md">
                  <span className="text-white text-base font-semibold block text-center">{tech}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action Section */}
        <section className="w-full max-w-3xl text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Join our community of learners and start building your future in tech today.</p>
          <button onClick={() => navigate('/courses')} className="px-8 py-4 bg-green-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-white hover:text-green-500 transition-colors duration-300">Browse Courses</button>
        </section>
      </main>
    </div>
  );
};

export default Home;