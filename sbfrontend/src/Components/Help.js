import React, { useState } from 'react';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Query:', formData);
    alert('Your query has been submitted. We will get back to you soon!');
    setFormData({ name: '', email: '', query: '' });
  };

  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: '#fff', // Text color adjusted for black background
    backgroundColor: '#000', // Background color set to black
    minHeight: '100vh', // Full viewport height
    display: 'flex', // Flexbox for centering
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    padding: '20px', // Padding for responsiveness
  };

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e90ff', // Blue color for header text
  };

  const sectionStyle = {
    marginBottom: '20px',
    backgroundColor: '#222', // Dark gray for section backgrounds
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(255, 255, 255, 0.1)', // Subtle shadow effect
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #555', // Gray border for inputs
    fontSize: '1rem',
    backgroundColor: '#333', // Darker background for inputs
    color: '#fff', // Text color for inputs
  };

  const buttonStyle = {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1e90ff', // Bright blue for button
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Help & Support</h1>

        <section style={sectionStyle}>
          <h2>FAQs</h2>
          <div>
            <p><strong>Q: How do I reset my password?</strong></p>
            <p>A: Go to the login page, click on "Forgot Password," and follow the instructions.</p>

            <p><strong>Q: How can I update my contact details?</strong></p>
            <p>A: Log in to your account, navigate to "Profile Settings," and update your details.</p>

            <p><strong>Q: What should I do if I suspect fraudulent activity?</strong></p>
            <p>A: Contact our support team immediately at +1-800-123-4567 or email fraudsupport@smartbank.com.</p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2>Contact Support</h2>
          <p>For any assistance, please contact us:</p>
          <ul>
            <li><strong>Phone:</strong> +1-800-123-4567</li>
            <li><strong>Email:</strong> support@smartbank.com</li>
            <li><strong>Live Chat:</strong> Available 24/7 on our website</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2>Submit a Query</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              style={inputStyle}
            />
            <textarea
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              placeholder="Your Query"
              rows="5"
              required
              style={inputStyle}
            ></textarea>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;
