import React from 'react';

function LoanOptions() {
    const loanOptions = [
        {
            title: 'Personal Loan',
            description: 'A loan that helps you meet personal expenses such as medical bills, home repairs, or travel.',
            interestRate: '8.5%',
            eligibility: 'Minimum income of $30,000/year',
        },
        {
            title: 'Home Loan',
            description: 'Get financial support for purchasing or renovating a home.',
            interestRate: '6.5%',
            eligibility: 'Good credit score, down payment of 20%',
        },
        {
            title: 'Car Loan',
            description: 'A loan to help you purchase a new or used car with flexible repayment options.',
            interestRate: '7.0%',
            eligibility: 'Valid driver\'s license and minimum monthly income of $2,000',
        },
        {
            title: 'Education Loan',
            description: 'A loan for students who wish to pursue higher education in local or international institutions.',
            interestRate: '5.5%',
            eligibility: 'Accepted to an accredited educational institution.',
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

    const detailsStyle = {
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: '#444',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Loan Options</h1>
            <div style={gridStyle}>
                {loanOptions.map((loan, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) => (e.currentTarget.style = cardHoverStyle)}
                        onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                    >
                        <div style={titleStyle}>{loan.title}</div>
                        <div style={descriptionStyle}>{loan.description}</div>
                        <div style={detailsStyle}>
                            <p><strong>Interest Rate:</strong> {loan.interestRate}</p>
                            <p><strong>Eligibility:</strong> {loan.eligibility}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoanOptions;
