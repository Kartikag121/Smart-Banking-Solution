import React, { useState } from 'react';

const FundTransfer = () => {
    const [senderAccount, setSenderAccount] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [note, setNote] = useState('');
    const [transferStatus, setTransferStatus] = useState('');

    const handleTransfer = (e) => {
        e.preventDefault();

        // Basic validation
        if (!senderAccount || !recipientAccount || !transferAmount || transferAmount <= 0) {
            setTransferStatus('Please fill out all fields correctly.');
            return;
        }

        // Simulated fund transfer logic
        // Replace this with a backend API call
        setTimeout(() => {
            setTransferStatus(`Transfer of $${transferAmount} from Account ${senderAccount} to Account ${recipientAccount} was successful.`);
            setSenderAccount('');
            setRecipientAccount('');
            setTransferAmount('');
            setNote('');
        }, 2000);
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Fund Transfer</h1>
            <form onSubmit={handleTransfer} style={formStyle}>
                {/* Sender Account */}
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Sender Account</label>
                    <input
                        type="text"
                        value={senderAccount}
                        onChange={(e) => setSenderAccount(e.target.value)}
                        placeholder="Enter your account number"
                        style={inputStyle}
                        required
                    />
                </div>

                {/* Recipient Account */}
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Recipient Account</label>
                    <input
                        type="text"
                        value={recipientAccount}
                        onChange={(e) => setRecipientAccount(e.target.value)}
                        placeholder="Enter recipient's account number"
                        style={inputStyle}
                        required
                    />
                </div>

                {/* Transfer Amount */}
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Amount</label>
                    <input
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)}
                        placeholder="Enter amount to transfer"
                        style={inputStyle}
                        required
                    />
                </div>

                {/* Note */}
                <div style={formGroupStyle}>
                    <label style={labelStyle}>Note (Optional)</label>
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter a note for the transaction"
                        style={inputStyle}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" style={buttonStyle}>
                    Transfer Funds
                </button>
            </form>

            {/* Transfer Status */}
            {transferStatus && <p style={statusStyle}>{transferStatus}</p>}
        </div>
    );
};

export default FundTransfer;

const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#007bff',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
};

const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
};

const inputStyle = {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
};

const buttonStyle = {
    padding: '0.8rem',
    backgroundColor: '#28a745',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const statusStyle = {
    marginTop: '1rem',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#28a745',
};

