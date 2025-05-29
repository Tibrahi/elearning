import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      // Initialize EmailJS with your public key
      // emailjs.init("YOUR_PUBLIC_KEY");
      
      await emailjs.sendForm(
        'service_rjuaj1a',
        'template_l4j4r4d',
        form.current,
        'ZUrx5yuwUN5c538nb'
      );
      
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Show notification
      const notification = document.createElement('div');
      notification.className = 'cyber-notification success';
      notification.textContent = 'Message sent successfully!';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
      
      // Show error notification
      const notification = document.createElement('div');
      notification.className = 'cyber-notification error';
      notification.textContent = 'Failed to send message';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);
    }
  };

  return (
    <div className="cyber-container">
      <h1 className="cyber-glitch">Contact Us</h1>
      <div className="course-card contact-card">
        <form ref={form} onSubmit={handleSubmit} className="cyber-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="cyber-button">Send Message</button>
          {status && <p className={status.includes('success') ? 'success-message' : 'error-message'}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;