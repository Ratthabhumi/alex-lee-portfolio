import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setSubmitError('');
      // Simulate form submission
      setTimeout(() => {
        setLoading(false);
        // Simulate a successful submission
        console.log('Form submitted:', formData);
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!data.message) errors.message = 'Project details are required';
    return errors;
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
              {errors.name && <span className="error">{errors.name}</span>}
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
              {errors.email && <span className="error">{errors.email}</span>}
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
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitError && <span className="error">{submitError}</span>}
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
