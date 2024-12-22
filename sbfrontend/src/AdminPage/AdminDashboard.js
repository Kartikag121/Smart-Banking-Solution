import React from 'react';

function AdminDashboard() {
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: '2rem',
    maxWidth: '1200px',
    margin: 'auto',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#0056b3',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const cardHeaderStyle = {
    fontSize: '1.2rem',
    color: '#0056b3',
    marginBottom: '0.5rem',
  };

  const buttonStyle = {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '1rem',
  };

  const navMenuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#0056b3',
    color: '#fff',
    borderRadius: '8px',
  };

  const navItemStyle = {
    margin: '0 1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#777',
  };

  return (
    <div style={containerStyle}>
      {/* Navigation Menu */}
      <div style={navMenuStyle}>
        <a href="/dashboard" style={navItemStyle}>
          Dashboard
        </a>
        <a href="/users" style={navItemStyle}>
          Manage Users
        </a>
        <a href="/transactions" style={navItemStyle}>
          Transactions
        </a>
        <a href="/settings" style={navItemStyle}>
          Settings
        </a>
        <a href="/logout" style={navItemStyle}>
          Logout
        </a>
      </div>

      {/* Header */}
      <h1 style={headerStyle}>Admin Dashboard</h1>

      {/* Key Statistics */}
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Total Users</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,245</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Active Accounts</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,120</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Pending Requests</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>23</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Total Transactions</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>32,345</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Manage Users</h2>
          <p>View, edit, or remove user accounts.</p>
          <a href="/users" style={buttonStyle}>
            Go to Users
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Transactions</h2>
          <p>Monitor and approve transactions.</p>
          <a href="/transactions" style={buttonStyle}>
            View Transactions
          </a>
        </div>
        <div style={cardStyle}>
          <h2 style={cardHeaderStyle}>Settings</h2>
          <p>Configure system preferences.</p>
          <a href="/settings" style={buttonStyle}>
            Open Settings
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Smart Banking Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AdminDashboard;
