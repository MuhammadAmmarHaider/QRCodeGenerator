import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../src/Components/Header';
import LandingPage from '../src/Components/Landing';
import Features from '../src/Components/Features';
import Team from '../src/Components/Team';
import Signup from '../src/Components/Signup';
import About from '../src/Components/About';
import ContactUs from '../src/Components/ContactUs';
import QrCodeGenerator from './Components/CodeGenerator';
import LoginPage from './Components/Login';

function App() {
    const [url, setUrl] = useState("");
    const [isLogedIn, setIsLogedIn] = useState(false);

    function handleLogin() {
        setIsLogedIn(true);
    }

    return (
        <Router>
            <Header onLogin={handleLogin} />
            <Routes>
                <Route path="/" element={isLogedIn ? <LandingPage setQrCodeUrl={setUrl} /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage setIsLogedIn={setIsLogedIn} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/features" element={<Features />} />
                <Route path="/company" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/generate" element={url ? <QrCodeGenerator url={url} /> : <LandingPage setQrCodeUrl={setUrl} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
