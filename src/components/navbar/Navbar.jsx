import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Toggle } from "..";
const Navbar = () => {
  return (
    <div className="nav-wrapper" id="Navbar">
      {/* left */}
      <div className="nav-left">
        <div className="nav-name">Hassan</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            {/* <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li> */}
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button nav-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
