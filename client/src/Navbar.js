// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic if needed
        // For simplicity, let's just navigate to the login page
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="/">
                        YouTube Player
                    </a>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Logout Button */}
                <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
