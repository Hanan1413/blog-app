import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import image from "../../assets/design.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    if (window.innerWidth < 600) {
      setMenuOpen(false); // Close the menu when a menu item is clicked, only if on mobile
    }  };


  return (
    <nav className="navbar-main">
      <div className="navbar-main-i"></div>
      <div className="navbar-header">
        <a href="#" >
          <img className="logo" src={image} alt="" />
        </a>

        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="flex-wrapper">
        <ul className={menuOpen ? "open" : ""}>
          {/* Link to user react router */}
          <li onClick={handleMenuItemClick}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li onClick={handleMenuItemClick}>
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </li>

          <li onClick={handleMenuItemClick}>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li onClick={handleMenuItemClick}>
            <Link to="/contact" className="nav-link">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
