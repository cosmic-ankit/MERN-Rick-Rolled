import React from 'react';
import './Header.css'; // Import your CSS file
import Home from './Home';
import About from './About';

const Header = () => {
  return (
    <header>
      <h1>My Blog</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
