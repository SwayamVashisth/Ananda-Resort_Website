import React from "react";
import "./Footer.css";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h2>Contact Info</h2>
          <p>
            <MapPin className="footer-icon" /> The Ananda Super Luxury Resort
            <br />
            Vikasnagar, Dehradun, Uttarakhand-248009
          </p>
          <p>
            <Phone className="footer-icon" /> 8445533538
          </p>
          <p>
            <Mail className="footer-icon" /> swayamvashisth54@gmail.com
          </p>
        </div>

        {/* Our Rooms */}
        <div className="footer-section">
          <h2>Our Rooms</h2>
          <ul>
            {[
                "Suite Room",
              "Superior Room",
              "Executive Room",
              "Standard Economy",
              
            ].map((room) => (
              <li key={room}>
                <ChevronRight className="footer-icon" /> {room}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            {[
              "About Us",
              "Wedding Destination",
              "Party Destination",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <ChevronRight className="footer-icon" /> {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} The The Ananda Super Luxury Resort. All Rights Reserved.
      </div>
    </footer>
  );
}
