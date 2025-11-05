import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="social-icons">
          <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://in.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="contact-info">
          <i className="fas fa-envelope"></i> swayamvashisth54@gmail.com
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <img src={logo} alt="logo" className="logo" />

        <nav className="nav-links">
          <a href="/">Home</a>
          
         <Link to ="./pages/About">About Us</Link>

          {/* Amenities Dropdown */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="/" className="nav-link">
              Amenities <i className="fas fa-caret-down small-arrow"></i>
            </a>

            <div className= "dropdown-menu">
              <Link to ="/BanquetHall">BanquetHall</Link>
              <Link to ="/ConferenceHall">ConferenceHall</Link>
              
              <Link to ="/SwimmingPool">SwimmingPool</Link>
              <Link to ="/SpaAndWellness">SpaAndWellness</Link>
               <Link to ="/GymAndYoga">GymAndYoga</Link>

              
             
            </div>
          </div>

           <Link to ="./pages/Blogs">Blogs</Link>
          <a href="/">Contact Us</a>
        </nav>

        <div className="phone">
          <i className="fas fa-phone"></i> +91 8445533538
        </div>
      </div>
    </header>
  );
};

export default Header;