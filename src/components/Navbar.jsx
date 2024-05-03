import React,{ useState} from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';
import LogoText from '../assets/logo_text.png'
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
function Navbar(){
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={Logo} alt="logo" />
        <img src={LogoText} alt="text" />
        </Link>
      </div>
      <div className={menuOpen?"menu-open":"menu-icon"} onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span className='cross'></span>
        <span className='cross'></span>
        <span className='cross'></span>
      </div>
      <ul className={menuOpen?"navbar-nav open":"navbar-nav"}>
        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/services">Our Services</NavLink></li>
        <li className="nav-item"><NavLink to="/about-us">About Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
