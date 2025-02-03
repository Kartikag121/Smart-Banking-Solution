import React from 'react';
// import logo from './img/logo.png';

function AboutUs() {
  const containerStyle = {
    backgroundColor: 'rgba(25, 25, 25, 0.81)',

    fontFamily: "'Poppins', sans-serif",
    color: '#333',
    lineHeight: '1.6',
    padding: '2rem',
    width: '95vw',
    margin: 'auto',
    textAlign: 'justify',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'rgba(255, 255, 255, 0.75)',
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
    color: 'rgba(255, 255, 255, 0.75)',
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
        <h2 style={{ color: 'rgba(0, 221, 255, 0.87)' }}>Welcome to Smart Banking Solution</h2>
        <p style={{color: 'rgba(227, 227, 227, 0.97)'}}>
          At <span style={highlightStyle}>Smart Banking Solution</span>, we are committed to redefining the way
          you bank. With cutting-edge technology and customer-first solutions, we
          empower individuals and businesses to take charge of their finances
          efficiently and securely.
        </p>
      </div>

      {/* Section 2 */}
      <div style={sectionStyle}>
        <h2 style={{ color: 'rgba(0, 221, 255, 0.87)' }}>Our Vision</h2>
        <p style={{color: 'rgba(227, 227, 227, 0.97)'}}>
          Our vision is to create a seamless, inclusive, and innovative banking
          ecosystem where everyone has access to financial services that drive
          growth and prosperity.
        </p>
      </div>

      {/* Section 3 */}
      <div style={sectionStyle}>
        <h2 style={{ color: 'rgba(0, 221, 255, 0.87)' }}>Why Choose Us?</h2>
        <ul>
          <li style={{color:'rgba(227, 227, 227, 0.97)'}}>
            <p style={{color: 'rgba(227, 227, 227, 0.97)'}}><span style={highlightStyle}>Secure Banking:</span> Advanced security measures to protect your data.</p>
          </li>
          <li style={{color:'rgba(227, 227, 227, 0.97)'}}>
            <p style={{color: 'rgba(227, 227, 227, 0.97)'}}><span style={highlightStyle}>24/7 Support:</span> Customer assistance whenever you need it.
          </p></li>
          <li style={{color:'rgba(227, 227, 227, 0.97)'}}>
            <p style={{color: 'rgba(227, 227, 227, 0.97)'}}><span style={highlightStyle}>Innovation:</span> Smart solutions for payments, savings, and loans.
          </p></li>
          <li style={{color:'rgba(227, 227, 227, 0.97)'}}>
            <p style={{color: 'rgba(227, 227, 227, 0.97)'}}><span style={highlightStyle}>Accessibility:</span> User-friendly platforms for all devices.
          </p></li>
        </ul>
      </div>

      {/* Section 4 */}
      <div style={sectionStyle}>
        <h2 style={{  color: 'rgba(0, 221, 255, 0.87)'  }}>Contact Us</h2>
        <p style={{color: 'rgba(227, 227, 227, 0.97)'}}>
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
        <p style={{color: 'rgba(227, 227, 227, 0.97)'}}>&copy; 2024 Smart Banking Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
