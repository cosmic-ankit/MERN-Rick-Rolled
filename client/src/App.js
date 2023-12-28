// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
      
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
               
                {isLoggedIn && <Navbar onLogout={handleLogout} />}

                {/* Routing */}
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
