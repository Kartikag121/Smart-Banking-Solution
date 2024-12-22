import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const CustomerDashboard = () => {
    // State for account details, transactions, and services

    const navigate = useNavigate();
    const [accountDetails] = useState({
        accountNumber: '1234567890',
        accountType: 'Savings',
        balance: '$25,000',
    });

    const [transactions] = useState([
        { id: 1, date: '2024-12-18', description: 'Amazon Purchase', amount: '-$120.00' },
        { id: 2, date: '2024-12-16', description: 'Salary Credit', amount: '+$3,000.00' },
        { id: 3, date: '2024-12-14', description: 'Electricity Bill Payment', amount: '-$150.00' },
    ]);

    const [services] = useState([
        { id: 1, name: 'Fund Transfer', icon: '💸' },
        { id: 2, name: 'Bill Payments', icon: '💡' },
        { id: 3, name: 'Loan Services', icon: '🏦' },
        { id: 4, name: 'Support', icon: '📞' },
    ]);
    const handleServiceClick = () =>{
        navigate('/FundTransfer');
    };

    return (
        <div style={dashboardStyle}>
            {/* Welcome Header */}
            <header style={headerStyle}>
                <h1 style={titleStyle}>Welcome to Your Smart Banking Dashboard</h1>
                <p style={subtitleStyle}>
                    Manage your finances with ease and efficiency.
                </p>
            </header>

            {/* Account Summary */}
            <section style={accountSummaryStyle}>
                <h2 style={sectionTitleStyle}>Account Summary</h2>
                <div style={accountDetailsStyle}>
                    <p>Account Number: {accountDetails.accountNumber}</p>
                    <p>Account Type: {accountDetails.accountType}</p>
                    <p>Balance: {accountDetails.balance}</p>
                </div>
            </section>

            {/* Recent Transactions */}
            <section style={transactionsStyle}>
                <h2 style={sectionTitleStyle}>Recent Transactions</h2>
                <ul style={transactionsListStyle}>
                    {transactions.map((transaction) => (
                        <li key={transaction.id} style={transactionItemStyle}>
                            <span>{transaction.date}</span>
                            <span>{transaction.description}</span>
                            <span style={transactionAmountStyle(transaction.amount)}>
                                {transaction.amount}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Quick Services */}
            <section style={servicesStyle}>
                <h2 style={sectionTitleStyle}>Quick Services</h2>
                <div style={servicesGridStyle} onClick={ handleServiceClick }>
                    {services.map((service) => (
                        <div key={service.id} style={serviceCardStyle}>
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

const accountSummaryStyle = {
    marginBottom: '2rem',
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

const accountDetailsStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#444',
};

const transactionsStyle = {
    marginBottom: '2rem',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
};

const transactionsListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

const transactionItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #ddd',
    fontSize: '1rem',
};

const transactionAmountStyle = (amount) => ({
    color: amount.startsWith('-') ? 'red' : 'green',
    fontWeight: 'bold',
});

const servicesStyle = {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
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

const serviceCardHoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: '#007bff',
    color: '#ffffff',
};

const serviceIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    color: '#007bff',
};
