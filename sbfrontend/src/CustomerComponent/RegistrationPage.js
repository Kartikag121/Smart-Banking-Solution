import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration Details:', formData);
    alert('Registration successful!');
    // Redirect to CustomerDashboard
    navigate('/CustomerDashboard');
  };

  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    color: '#fff',
    backgroundColor: '#1a1a2e',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const formContainerStyle = {
    backgroundColor: '#162447',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '20px',
    color: '#1e90ff',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #555',
    fontSize: '1rem',
    backgroundColor: '#0f3460',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1e90ff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    color: '#1e90ff',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Customer Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <a href="/login" style={linkStyle}>
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
};

export default RegistrationPage;
