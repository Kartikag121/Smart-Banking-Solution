import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeVideo from './img/homeVideo.mp4';
import logo from './img/Logo.png';
import CustomerDashboard from './CustomerComponent/CustomerDashboard';
import AdminLogin from './AdminPage/AdminLogin';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate(); // Initialize the navigation hook
   

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const switchToSignIn = () => {
        setIsSignIn(true);
      };
    
      const switchToSignUp = () => {
        setIsSignIn(false);
      };

      const openSignIn = () => {
        setIsSignIn(true);
        toggleModal();
    };

    const openSignUp = () => {
        setIsSignIn(false);
        toggleModal();
    };

      const tabStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
        borderBottom: "2px solid #ddd",
      };
    
      const tabButtonStyle = (active) => ({
        padding: "0.5rem 1.5rem",
        cursor: "pointer",
        fontWeight: "bold",
        color: active ? "#007bff" : "#333",
        borderBottom: active ? "3px solid #007bff" : "none",
      });
    
      const inputStyle = {
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
      };
    
      const buttonStyle = {
        width: "100%",
        padding: "0.7rem",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
      };

    const handleAboutUs = () =>{
        navigate('/AboutUs');
    };

    const handleContactUs = () => {
        navigate('/ContactUs');
    };

    const handleServices = () => {
      navigate('/Services');
    }
    const handleDashBoard =() => {
        navigate('/'); // Redirect to home page (dashboard)
        toggleMenu(); // Close the menu
    };

    const style = {
      //  backgroundImage: `url(${home})`,
       // backgroundSize: 'cover',
       // backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
    };

    const videoStyle = {

      position: 'absolute',   // Makes the video fill the entire viewport
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',     // Ensures the video covers the background
      zIndex: -1,            // Keeps the video in the background
  };
  
  // Existing contentStyle for overlay content on top of the video
  const contentStyle = {
      position: 'relative',
      zIndex: 1,             // Keeps content above the video
      color: 'white',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
  };

    const headerStyle = {
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        border: '1px solid white',
        borderRadius: '8px',
        padding: '0.5rem 1rem',
    };

    const logoStyle = {
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        width: '125px',
        height: 'auto',
    };

    const BankingSolution = {
        fontWeight: 'bold',
        fontSize: '1rem',
        textTransform: 'uppercase',
        margin: '0',
    };

    const menuStyle = {
        fontSize: '1.5rem',
        cursor: 'pointer',
        marginLeft: 'auto',
    };

    const overlayStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        zIndex: '1000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem', // Reduced padding
        boxSizing: 'border-box',
        transition: 'transform 0.5s ease-in-out',
        transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        overflowY: 'auto', // Prevent content from going out
    };
    
    const closeButtonStyle = {
        position: "absolute",
        top: "1rem",
        right: "1rem",
        fontSize: "2rem",
        cursor: "pointer",
        color: "#ff0000", // Bright red for better visibility
        fontWeight: "bold",
        transition: "color 0.3s ease-in-out",
      };

    const modalStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        zIndex: 1001,
        width: "400px",
      };
    

    const menuItemsStyle = {
        listStyle: 'none',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        padding: '0',
        margin: '0',
        lineHeight: '4rem',
        letterSpacing: '2px',
        cursor: 'pointer',
    };

    const menuItemLineStyle = (delay, isFirst = false) => ({
        borderTop: isFirst ? 'none' : '1px solid white',
        paddingTop: '1rem',
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s`,
    });

    const handleSignInSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      navigate('/CustomerDashboard'); // Redirect to CustomerDashboard
  };
  const handleAdminLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    navigate('/AdminLogin'); // Redirect to AdminLogin page
};
  

    return (
        <div style={style}>

          {/* Background Video */}
        <video autoPlay loop muted style={videoStyle}> {/* Added video tag */}
            <source src={homeVideo} type="video/mp4" /> {/* Use the imported video */}
            Your browser does not support the video tag.
        </video>

            {/* Logo at Top-Left */}
            <img src={logo} alt="Logo" style={logoStyle} />

            {/* Top Header Section */}
            <div style={headerStyle}>
                <span style={BankingSolution}>Banking Solutions</span>
                <div style={{ borderLeft: '1px solid white', height: '1.5rem' }}></div>
                <div style={menuStyle} onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>

            {/* Overlay Menu */}
            <div style={overlayStyle}>
                <img src={logo} alt="Logo"
                    style={{ ...logoStyle, position: 'absolute', top: '2rem', left: '2rem'}}
                />

                <div style={closeButtonStyle} onClick={toggleMenu}>
                &times;
                </div>

                <ul style={menuItemsStyle}>
                
                <li
                        style={{
                          ...menuItemLineStyle(0.1, true),
                          marginTop: '10vh',
                      }}
                        onClick={openSignIn}// Redirect on click
                    >
                        SIGN IN / SIGN UP
                    </li>
                    <li style={menuItemLineStyle(0.9)} onClick = {handleDashBoard}>DASHBOARD</li>
                    <li style={menuItemLineStyle(0.3)} onClick = {handleServices}>SERVICES</li>
                    <li style={menuItemLineStyle(0.5)} onClick = {handleAboutUs}>ABOUT US</li>
                    <li style={menuItemLineStyle(0.7)} onClick = {handleContactUs}>HELP</li>
                    <li style={menuItemLineStyle(0.9)} onClick = { handleAdminLogin }>Admin Login</li>
                </ul>
            </div>

            {/* Modal for Sign In/Sign Up */}
      {showModal && (
          <div style={modalStyle}>
          {/* Close Button */}
          <span style={closeButtonStyle} onClick={toggleModal}>
            &times;
          </span>

          {/* Highlighted Message */}
          <h2 style={{ color: "#333", marginBottom: "1rem", fontWeight: "bold" }}>
            Please Login To Continue
          </h2>

          {/* Tabs for Sign In / Sign Up */}
          <div style={tabStyle}>
            <span
              style={tabButtonStyle(isSignIn)}
              onClick={switchToSignIn}
            >
              Sign In
            </span>
            <span
              style={tabButtonStyle(!isSignIn)}
              onClick={switchToSignUp}
            >
              Sign Up
            </span>
          </div>

          {/* Form */}
          <form action={ CustomerDashboard }>
            {/* Sign In Form */}
            {isSignIn && (
              <>
                <input
                  type="text"
                  placeholder="Username or Email"
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  style={inputStyle}
                />
                <div style={{ textAlign: "left", marginBottom: "1rem", display:'flex',justifyContent:'space-between' }}>
                <label style={{ color: 'black' }}>
                  <input type="checkbox" /> Remember me
                </label>
                <label >
                  <a href='www.google.co.in' style={{ color: 'black' , textDecoration:'none' }}> Forget password </a>
                </label>
                </div>
                
                <button type="submit" style={buttonStyle} onClick={handleSignInSubmit}>
                  Sign In
                </button>
              </>
            )}

            {/* Sign Up Form */}
            {!isSignIn && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Phone No."
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Email"
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  style={inputStyle}
                />
                <button type="submit" style={buttonStyle} onClick={handleSignInSubmit}>
                  Sign Up
                </button>
              </>
            )}
          </form>
        </div>
      )}

            {/* Heading Section */}
            <div>
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0' }}>
                    Bank Smart, Live Smarter
                </h1>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                    Empowering your financial journey with smarter solutions
                </p>
            </div>
        </div>
        
    
  );
}

export default Home;