import React, { useState } from 'react'
import './navbar.css'
import logo from '../../img/logo.png';
import contact from '../../img/contact.png';
import menu from '../../img/menu.png';
import close from '../../img/close.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="intro" smooth={true} duration={500}>Home</Link>
        <Link className="desktopMenuListItem" to="about" smooth={true} duration={500}>About Me</Link>
        <Link className="desktopMenuListItem" to="works" smooth={true} duration={500}>Projects</Link>
        <Link className="desktopMenuListItem" to="certificates" smooth={true} duration={500}>Certificates</Link>
        <Link className="desktopMenuListItem" to="clubs" smooth={true} duration={500}>Clubs</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contact} alt="" className="desktopMenuImg" />Contact Me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link
          className="listItem"
          to="intro"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          className="listItem"
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          About Me
        </Link>
        <Link
          className="listItem"
          to="works"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          className="listItem"
          to="certificates"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Certificates
        </Link>
        <Link
          className="listItem"
          to="clubs"
          smooth={true}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Clubs
        </Link>
        <img
          src={close}
          alt="Close"
          className="mobMenuClose"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </nav>

  )

}

export default Navbar
