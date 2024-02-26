import { Link, animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <h3>SF</h3>
      <nav ref={navRef}>
        <Link to="home" smooth={true} offset={-80} duration={500}>Home</Link>
        <Link to="projects" smooth={true} offset={-50} duration={500}>Projects</Link>
        <Link to="services" smooth={true} offset={-50} duration={500}>Services</Link>
        <Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar