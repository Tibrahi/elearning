import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_rjuaj1a',
        'template_l4j4r4d',
        form.current,
        'ZUrx5yuwUN5c538nb'
      );
      
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      const notification = document.createElement('div');
      notification.className = 'cyber-notification success animate__animated animate__fadeIn';
      notification.textContent = 'Message sent successfully!';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('animate__fadeOut');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
      
      const notification = document.createElement('div');
      notification.className = 'cyber-notification error animate__animated animate__fadeIn';
      notification.textContent = 'Failed to send message';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('animate__fadeOut');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--cyber-black)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <div className="cyber-container animate__animated animate__fadeIn">
          <h1 className="cyber-glitch text-4xl md:text-5xl text-center mb-8">Contact Us</h1>
          
          <div className="cyber-container bg-[var(--cyber-dark)] p-8 rounded-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group relative" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-[var(--cyber-green)]" />
                </div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[var(--cyber-black)] border-2 border-[var(--cyber-green)] text-[var(--cyber-white)] rounded-lg focus:outline-none focus:border-[var(--cyber-orange)] transition-colors duration-300"
                />
              </div>

              <div className="form-group relative" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-[var(--cyber-green)]" />
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[var(--cyber-black)] border-2 border-[var(--cyber-green)] text-[var(--cyber-white)] rounded-lg focus:outline-none focus:border-[var(--cyber-orange)] transition-colors duration-300"
                />
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-[var(--cyber-black)] border-2 border-[var(--cyber-green)] text-[var(--cyber-white)] rounded-lg focus:outline-none focus:border-[var(--cyber-orange)] transition-colors duration-300 min-h-[150px]"
                />
              </div>

              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <button 
                  type="submit" 
                  className="cyber-button group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-[var(--cyber-green)] text-[var(--cyber-black)] hover:bg-[var(--cyber-orange)] hover:text-[var(--cyber-black)]"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--cyber-orange)] group-hover:translate-x-0 ease">
                    <FaPaperPlane className="w-6 h-6" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                    Send Message
                  </span>
                  <span className="relative invisible">Send Message</span>
                </button>
              </div>

              {status && (
                <p className={`text-center mt-4 ${status.includes('success') ? 'text-[var(--cyber-green)]' : 'text-[var(--cyber-orange)]'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;