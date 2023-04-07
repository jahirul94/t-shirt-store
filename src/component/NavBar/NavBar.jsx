import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
             <Link to="/">Home</Link>
             <Link to="/review">Order-Review</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default NavBar;