import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
    const navigate = useNavigate();
    
    const services = [
        { id: 1, name: 'Show Account Details', icon: '📋', path: '/account-details' },
        { id: 2, name: 'Create New Bank Account', icon: '🆕', path: '/create-account' },
        { id: 3, name: 'Cross Border Payment', icon: '🌍', path: '/cross-border-payment' },
        { id: 4, name: 'Delete Account', icon: '❌', path: '/delete-account' },
        { id: 5, name: 'Fund Transfer', icon: '💸', path: '/FundTransfer' },
        { id: 6, name: 'Bill Payments', icon: '💡', path: '/BillPayments' },
        { id: 7, name: 'Loan Services', icon: '🏦', path: '/LoanOptions' },
        { id: 8, name: 'Support', icon: '📞', path: '/support' },
    ];

    const handleServiceClick = (path) => {
        navigate(path);
    };

    return (
        <div style={dashboardStyle}>
            <header style={headerStyle}>
                <h1 style={titleStyle}>Welcome to Your Smart Banking Dashboard</h1>
                <p style={subtitleStyle}>
                    Manage your finances with ease and efficiency.
                </p>
            </header>
            
            <section style={servicesStyle}>
                <h2 style={sectionTitleStyle}>Quick Services</h2>
                <div style={servicesGridStyle}>
                    {services.map((service) => (
                        <div key={service.id} style={serviceCardStyle} onClick={() => handleServiceClick(service.path)}>
                            <span style={serviceIconStyle}>{service.icon}</span>
                            <p>{service.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CustomerDashboard;

const dashboardStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    color: '#333',
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#007bff',
};

const subtitleStyle = {
    fontSize: '1rem',
    color: '#555',
};

const servicesStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
};

const sectionTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem',
    color: '#333',
};

const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
};

const serviceCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
};

const serviceIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: '#007bff',
};
