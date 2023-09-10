// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="#">E-Commerce</Link>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/product/search">Search</Link></li>
      <li><Link to="/">Cart</Link></li>
      <li><Link to="/">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
