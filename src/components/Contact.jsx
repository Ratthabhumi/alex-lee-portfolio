import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="container">
      <section className="contact-section">
        <h2>Let's Create Something Remarkable</h2>
        
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Connect Directly</h3>
            <p>studio@alexleedesign.com</p>
            <p>+1 (555) 234-5678</p>
            
            <div className="social-links">
              <a href="https://dribbble.com/alexlee">Dribbble</a>
              <a href="https://linkedin.com/in/alexlee">LinkedIn</a>
              <a href="https://instagram.com/alexleedesign">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;