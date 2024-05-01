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
      <h3 className='logo'>Mango's</h3>
      <nav ref={navRef}>
        <Link to="home" onClick={showNavbar} smooth={true} offset={-80} duration={500}>Home</Link>
        <Link to="projects" onClick={showNavbar} smooth={true} offset={-50} duration={500}>Projects</Link>
        <Link to="services" onClick={showNavbar} smooth={true} offset={-50} duration={500}>Services</Link>
        <Link to="contact" onClick={showNavbar} smooth={true} offset={-50} duration={500}>Contact</Link>
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