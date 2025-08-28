import React, { useState } from 'react';
import '../styles/navbar.css';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav className="navbar">
      <div className="logo">Nidhekshaa</div>

      {isMobile ? (
        <>
          <button className="hamburger" onClick={toggleMenu}>☰</button>
          {menuOpen && (
            <ul className="mobile-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
        </>
      ) : (
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
