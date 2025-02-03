import React, { useState } from 'react';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '10%',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(25, 25, 25, 0.81)',
  };

  const headerStyle = {
    textAlign: 'center',
    paddingTop:'1rem',
    marginBottom: '1.5rem',
    color: '#0056b3',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '0.8rem',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.8rem',
    marginTop: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === 'admin@123.com' && password === 'admin123') {
      setError('');
      //alert('Login successful!');
      // Redirect to admin dashboard (Replace with actual navigation logic)
      window.location.href = '/AdminDashboard';
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={{height:'100vh',width:'100vw',paddingTop:'1rem', backgroundColor: 'rgba(25, 25, 25, 0.81)',}}>
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Login</h1>

      {error && <p style={errorStyle}>{error}</p>}

      <form style={formStyle} onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>

    </div>
  );
}

export default AdminLogin;
