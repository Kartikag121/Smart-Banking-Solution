import React from 'react';
// import logo from './img/logo.png';

function AboutUs() {
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: '#333',
    lineHeight: '1.6',
    padding: '2rem',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'justify',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#0056b3',
  };

  const imageStyle = {
    display: 'block',
    margin: 'auto',
    width: '150px',
  };

  const sectionStyle = {
    marginBottom: '1.5rem',
  };

  const highlightStyle = {
    color: '#007bff',
    fontWeight: 'bold',
  };
  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '1',
  };

  return (
    <div style={containerStyle}>
      {/* Logo */}
      {/* <img src={logo} alt="Smart Banking Solution Logo" style={imageStyle} /> */}

      {/* Header */}
      <h1 style={headerStyle}>About Us</h1>

      {/* Section 1 */}
      <div style={sectionStyle}>
        <h2 style={{ color: '#0056b3' }}>Welcome to Smart Banking Solution</h2>
        <p>
          At <span style={highlightStyle}>Smart Banking Solution</span>, we are committed to redefining the way
          you bank. With cutting-edge technology and customer-first solutions, we
          empower individuals and businesses to take charge of their finances
          efficiently and securely.
        </p>
      </div>

      {/* Section 2 */}
      <div style={sectionStyle}>
        <h2 style={{ color: '#0056b3' }}>Our Vision</h2>
        <p>
          Our vision is to create a seamless, inclusive, and innovative banking
          ecosystem where everyone has access to financial services that drive
          growth and prosperity.
        </p>
      </div>

      {/* Section 3 */}
      <div style={sectionStyle}>
        <h2 style={{ color: '#0056b3' }}>Why Choose Us?</h2>
        <ul>
          <li>
            <span style={highlightStyle}>Secure Banking:</span> Advanced security measures to protect your data.
          </li>
          <li>
            <span style={highlightStyle}>24/7 Support:</span> Customer assistance whenever you need it.
          </li>
          <li>
            <span style={highlightStyle}>Innovation:</span> Smart solutions for payments, savings, and loans.
          </li>
          <li>
            <span style={highlightStyle}>Accessibility:</span> User-friendly platforms for all devices.
          </li>
        </ul>
      </div>

      {/* Section 4 */}
      <div style={sectionStyle}>
        <h2 style={{ color: '#0056b3' }}>Contact Us</h2>
        <p>
          Have questions? Reach out to us at{' '}
          <a href="mailto:info@smartbanking.com" style={{ color: '#007bff' }}>
            info@smartbanking.com
          </a>{' '}
          or call us at{' '}
          <span style={highlightStyle}>+1-800-123-4567</span>. We are here to assist you.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#777' }}>
        <p>&copy; 2024 Smart Banking Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
