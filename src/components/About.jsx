import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaTelegram, FaWhatsapp, FaStackOverflow, FaEnvelope } from 'react-icons/fa';
import profileImage from '../images/Profile.jpg';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/tuyizere-ibrahim-89ba8b275/',
      tooltip: 'Follow on LinkedIn'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Tibrahi',
      tooltip: 'See projects on GitHub'
    },
    {
      name: 'Discord',
      icon: <FaDiscord />,
      url: 'https://discord.gg/r8Df7c3c',
      tooltip: 'Join our learning community'
    },
    {
      name: 'Telegram',
      icon: <FaTelegram />,
      url: 'https://t.me/herrero4',
      tooltip: 'Chat via Telegram'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/250725931245',
      tooltip: 'Contact via WhatsApp'
    },
    {
      name: 'StackOverflow',
      icon: <FaStackOverflow />,
      url: 'https://stackoverflow.com/users/23764077/ibrahim',
      tooltip: 'Follow me on StackOverflow'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:herreroblack33@gmail.com',
      tooltip: 'Send me an email'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--cyber-black)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="cyber-container animate__animated animate__fadeIn">
          <h1 className="cyber-glitch text-4xl md:text-5xl text-center mb-12" data-aos="fade-up">About Me</h1>
          
          {/* Profile Image Section */}
          <div className="profile-image-section relative mb-12" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyber-green)]/20 to-[var(--cyber-orange)]/20 rounded-full blur-xl animate-pulse"></div>
            
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[var(--cyber-green)]/50 shadow-lg shadow-[var(--cyber-green)]/20 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyber-green)]/20 to-[var(--cyber-orange)]/20 animate-pulse"></div>
              <img 
                src={profileImage}
                alt="Tuyizere Ibrahim"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[var(--cyber-green)] to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-t from-[var(--cyber-orange)] to-transparent"></div>
          </div>
          
          <div className="profile-section text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-bold text-[var(--cyber-white)] mb-4 cyber-glitch">Tuyizere Ibrahim</h2>
            <h3 className="text-xl text-[var(--cyber-green)] mb-6">Founder & Lead Developer at Code4Impact</h3>
            
            <div className="bio-text max-w-2xl mx-auto">
              <p className="text-[var(--cyber-white)] text-lg leading-relaxed">
                Tuyizere Ibrahim is a passionate software developer focused on empowering 
                communities with digital skills. Through Code4Impact, he aims to simplify 
                web development learning using real-world tools and live coding environments.
              </p>
            </div>
          </div>

          <div className="social-links grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="400">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-container group relative overflow-hidden p-4 text-center transition-all duration-300 hover:scale-105"
                title={link.tooltip}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyber-green)]/10 to-[var(--cyber-orange)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <span className="text-2xl text-[var(--cyber-green)] group-hover:text-[var(--cyber-orange)] transition-colors duration-300">
                    {link.icon}
                  </span>
                  <span className="block mt-2 text-sm text-[var(--cyber-white)] group-hover:text-[var(--cyber-green)] transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;