import React, { useState } from 'react';

function AccountManagement() {
    const [accountInfo, setAccountInfo] = useState({
        accountNumber: '1234-5678-9012-3456',
        accountType: 'Savings',
        balance: 12500.75,
    });

    const handleDownloadStatement = () => {
        // Logic to download a statement
        alert('Statement downloaded successfully!');
    };

    const handleUpdateSettings = () => {
        // Logic to update account settings
        alert('Account settings updated successfully!');
    };

    const containerStyle = {
        padding: '2rem',
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: 'rgba(25, 25, 25, 0.81)',
        minHeight: '100vh',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: 'rgba(255, 255, 255, 0.75)',
    };

    const cardStyle = {
        backgroundColor:'rgba(29, 29, 29, 0.63)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        margin: '1rem 0',
        fontSize: '1rem',
    };

    const buttonStyle = {
        padding: '0.7rem 1.5rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        marginRight: '1rem',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Account Management</h1>
            <div style={cardStyle}>
                <h2 style={{color: 'rgba(255, 255, 255, 0.86)'}}>Account Information</h2>
                <p style={{color: 'rgba(255, 255, 255, 0.86)'}}><strong>Account Number:</strong> {accountInfo.accountNumber}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.86)'}}><strong>Account Type:</strong> {accountInfo.accountType}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.86)'}}><strong>Current Balance:</strong> ${accountInfo.balance.toFixed(2)}</p>
            </div>
            <div style={cardStyle}>
                <h2 style={{color: 'rgba(255, 255, 255, 0.86)'}}>Actions</h2>
                <button style={buttonStyle} onClick={handleDownloadStatement}>
                    Download Statement
                </button>
                <button style={buttonStyle} onClick={handleUpdateSettings}>
                    Update Settings
                </button>
            </div>
        </div>
    );
}

export default AccountManagement;
