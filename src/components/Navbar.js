import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="burger" onClick={toggleBurger}>
      <span class="material-symbols-outlined">
      menu
      </span>
      </div>
    </nav>
  );
};

export default Navbar;
