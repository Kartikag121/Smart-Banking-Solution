import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate = useNavigate(); // Initialize the navigation hook

    const services = [
        {
            title: 'Online Payments',
            description: 'Easily make payments online using our secure platform.',
            icon: '💳',
        },
        {
            title: 'Net Banking',
            description: 'Access your account anytime, anywhere with our net banking services.',
            icon: '🌐',
            action: () => navigate('/NetBanking'),
        },
        {
            title: 'Loan Options',
            description: 'Choose from a variety of loan options tailored to your needs.',
            icon: '🏦',
            action: () => navigate('/LoanOptions'),
        },
        {
            title: 'Account Management',
            description: 'Manage your accounts, check balances, and download statements.',
            icon: '📜',
            action: () => navigate('/AccountManagement'), // Navigate to AccountManagement page
        },
        {
            title: 'Investments',
            description: 'Explore investment opportunities and grow your wealth.',
            icon: '📈',
        },
        {
            title: 'Customer Support',
            description: '24/7 customer support to assist you with all your banking needs.',
            icon: '📞',
        },
    ];

    const containerStyle = {
        padding: '2rem',
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#f8f9fa',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#333',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    };

    const cardHoverStyle = {
        ...cardStyle,
        transform: 'translateY(-5px)',
    };

    const iconStyle = {
        fontSize: '3rem',
        color: '#007bff',
        marginBottom: '1rem',
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#333',
    };

    const descriptionStyle = {
        fontSize: '1rem',
        color: '#666',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Our Services</h1>
            <div style={gridStyle}>
                {services.map((service, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) => (e.currentTarget.style = cardHoverStyle)}
                        onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        onClick={service.action} // Trigger the action (navigation) when clicked
                    >
                        <div style={iconStyle}>{service.icon}</div>
                        <div style={titleStyle}>{service.title}</div>
                        <div style={descriptionStyle}>{service.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
