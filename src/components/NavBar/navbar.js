import React, { useState } from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import menu from '../../img/menu.png';
import close from '../../img/close.png';
import { Link } from 'react-scroll';

const sections = [
  ['about', 'About Me'],
  ['works', 'Projects'],
  ['certificates', 'Certificates'],
  ['clubs', 'Clubs'],
  ['contactPage', 'Contact'],
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="intro" smooth={true} duration={500} className="logoLink" aria-label="Go to home">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        {sections.map(([id, label]) => (
          <Link key={id} className="desktopMenuListItem" activeClass="active" spy={true} offset={-100} to={id} smooth={true} duration={500}>
            {label}
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="mobMenu"
        aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={showMenu}
        aria-controls="mobile-navigation"
        onClick={() => setShowMenu((isOpen) => !isOpen)}
      >
        <img src={menu} alt="" aria-hidden="true" />
      </button>
      <div
        id="mobile-navigation"
        className="navMenu"
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        {sections.map(([id, label]) => (
          <Link
            key={id}
            className="listItem"
            activeClass="active"
            spy={true}
            offset={-100}
            to={id}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            {label}
          </Link>
        ))}
        <button
          type="button"
          className="mobMenuClose"
          aria-label="Close navigation menu"
          onClick={() => setShowMenu(false)}
        >
          <img src={close} alt="" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
