// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';

import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
    

    return (
        <Router>
            <div>
                {/* Navbar Component */}
                <Navbar />

                {/* Routing */}
                <Routes>
                 <Route path="/" element={<Login/>}></Route>
                    <Route path="/home" element={
                       <Home />
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
