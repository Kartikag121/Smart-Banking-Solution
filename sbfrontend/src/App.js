import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AdminLogin from './AdminPage/AdminLogin';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import CustomerDashboard from './CustomerComponent/CustomerDashboard';
import FundTransfer from './CustomerComponent/FundTransfer';
import AdminDashboard from './AdminPage/AdminDashboard';
import ComplainMang from './AdminPage/ComplainsMang';
import Services from './Components/Services';
import AccountManagement from './ServicesPage/AccountManagement';
import LoanOptions from './ServicesPage/LoanOption';
import NetBanking from './ServicesPage/NetBanking';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route path = "/AboutUs" element = {<AboutUs/>}/>
                <Route path = "/ContactUs" element = {<ContactUs/>} />
                <Route path='/CustomerDashboard' element = { <CustomerDashboard/> }/>
                <Route path='/FundTransfer' element = { <FundTransfer/> }/>
                <Route path='/AdminDashboard' element = { <AdminDashboard/> } />
                <Route path='/ComplainMang' element = { <ComplainMang/> }/>
                <Route path="/Services" element={<Services/>} />
                <Route path='/AccountManagement' element = {<AccountManagement/>} />
                <Route path='/LoanOptions' element = {<LoanOptions/>} />
                <Route path = '/NetBanking' element ={<NetBanking/>} />
            </Routes>
        </Router>
    );
}

export default App;
