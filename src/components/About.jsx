import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaTelegram, FaWhatsapp, FaStackOverflow, FaEnvelope } from 'react-icons/fa';

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
      url: 'https://t.me/herrero3',
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
    <div className="about-container">
      <div className="about-content">
        <h1 className="cyber-glitch">About Me</h1>
        
        <div className="profile-section">
          <h2 className="name-title">Tuyizere Ibrahim</h2>
          <h3 className="role-title">Founder & Lead Developer at Code4Impact</h3>
          
          <div className="bio-text">
            <p>
              Tuyizere Ibrahim is a passionate software developer focused on empowering 
              communities with digital skills. Through Code4Impact, he aims to simplify 
              web development learning using real-world tools and live coding environments.
            </p>
          </div>
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.tooltip}
            >
              {link.icon}
              <span className="link-label">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;