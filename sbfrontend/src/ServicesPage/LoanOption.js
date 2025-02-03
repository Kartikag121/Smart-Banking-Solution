import React, { useState } from 'react';

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

    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered index

    const containerStyle = {
        padding: '1rem 0rem',
        height:'auto',
        fontFamily: "'Poppins', sans-serif",
        
        backgroundColor: 'rgba(25, 25, 25, 0.81)',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: 'rgba(255, 255, 255, 0.75)',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '6rem',
        padding:'2rem 5rem',
    };

    const cardStyle = {
        height:'12rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor:'rgba(29, 29, 29, 0.63)',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effects
        cursor: 'pointer',
    };

    const cardHoverStyle = {
        scale: '1.1',
        transition:'all ease 0.3s',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Apply additional shadow on hover
    };

    const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: 'rgba(255, 255, 255, 0.86)',
    };

    const descriptionStyle = {
        fontSize: '1rem',
        color: 'rgba(227, 227, 227, 0.63)',
    };

    const detailsStyle = {
        marginTop: '1rem',
        fontSize: '0.9rem',
        color: 'rgba(227, 227, 227, 0.63)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Loan Options</h1>
            <div style={gridStyle}>
                {loanOptions.map((loan, index) => (
                    <div
                        key={index}
                        style={{
                            ...cardStyle,
                            ...(hoveredIndex === index ? cardHoverStyle : {}),
                        }}
                        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
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
