import React from 'react';

function NetBanking() {
    const features = [
        {
            title: 'Access Your Account Anytime',
            description: 'Log in to your account from any device and access your banking details 24/7.',
            icon: '📱',
        },
        {
            title: 'Transfer Funds Easily',
            description: 'Send money to your friends, family, or businesses with just a few clicks.',
            icon: '💸',
        },
        {
            title: 'View Transaction History',
            description: 'Check your past transactions, account balances, and download statements.',
            icon: '📜',
        },
        {
            title: 'Pay Bills',
            description: 'Easily pay your bills online, including electricity, water, and broadband.',
            icon: '💡',
        },
        {
            title: 'Secure Transactions',
            description: 'Your online banking experience is secured with end-to-end encryption.',
            icon: '🔒',
        },
        {
            title: 'Customer Support',
            description: 'Get support for any issues you may face through live chat or email.',
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
            <h1 style={headingStyle}>Net Banking</h1>
            <div style={gridStyle}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) => (e.currentTarget.style = cardHoverStyle)}
                        onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                    >
                        <div style={iconStyle}>{feature.icon}</div>
                        <div style={titleStyle}>{feature.title}</div>
                        <div style={descriptionStyle}>{feature.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NetBanking;
