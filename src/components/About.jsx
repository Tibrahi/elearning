import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord, FaTelegram, FaWhatsapp, FaStackOverflow, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
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
    <div className="min-h-screen bg-[var(--cyber-black)] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--cyber-dark)] p-8 flex flex-col items-center border-r-2 border-[var(--cyber-green)]">
        <img src={profileImage} alt="Tuyizere Ibrahim" className="w-24 h-24 rounded-full mb-4 border-2 border-[var(--cyber-green)]" />
        <h2 className="text-xl font-bold text-[var(--cyber-white)] mb-2">Tuyizere Ibrahim</h2>
        <h3 className="text-base text-[var(--cyber-green)] mb-4">Founder & Lead Developer</h3>
        <a
          href="https://portfolio-two-omega-75.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[var(--cyber-green)] text-[var(--cyber-black)] rounded-lg font-medium transition-all duration-300 hover:bg-[var(--cyber-orange)] flex items-center gap-2"
        >
          Portfolio <FaExternalLinkAlt />
        </a>
      </aside>
      {/* Main Dashboard Content */}
      <main className="flex-1 p-8 flex flex-col gap-8">
        <section className="mb-0">
          <h1 className="text-3xl font-bold text-[var(--cyber-white)] mb-4">About Code4Impact</h1>
          <p className="text-[var(--cyber-white)] text-lg mb-2">
            Code4Impact is a platform dedicated to empowering African developers with modern tech skills and real-world coding experience.
          </p>
          <p className="text-[var(--cyber-white)] text-base">
            Our mission is to simplify web development learning and foster innovation through hands-on projects and community support.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-[var(--cyber-green)] mb-4">Connect & Collaborate</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        </section>
      </main>
    </div>
  );
};

export default About;