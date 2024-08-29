import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="navbar">
      <div className="first_part">
        <span className="chng">N</span>AV<span className="chng">B</span>AR
      </div>
      <ul className={`second_part ${isMenuOpen ? "show" : ""}`}>
        <li className="home"><a href=".home">Home</a></li>
        <li className="products"><a href=".home">Products<i className="arrow_down"></i></a></li>
        <li className="resources"><a href=".home">Resources<i className="arrow_down"></i></a></li>
        <li className="pricing"><a href=".home">Pricing</a></li>
      </ul>
      <div className="third_part">
        <button className="third_first_Button">Log In</button>
        <button className="third_second_Button">Sign up</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
      <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />

      </div>
    </nav>
  );
}

export default Navbar;
