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
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
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
        <img
          src={close}
          alt="Close"
          className="mobMenuClose"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
