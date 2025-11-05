import React from "react";
import "./Footer.css";
import { Link} from "react-router-dom";
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
            <li>
              <ChevronRight className="footer-icon" /><Link to="./Suite">Suite Room</Link>
            </li><li>
            <ChevronRight className="footer-icon" /><Link to="./Superior">Superior Room</Link>
            </li>
            <li>
              <ChevronRight className="footer-icon" /><Link to="./Standard ">Standard Economy</Link>
            </li>
            <li>
              <ChevronRight className="footer-icon" /><Link to="./Executive">Executive Room</Link>
            </li>
             
              
              
           
     
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
          
              <ChevronRight className="footer-icon" /><Link to ="./pages/About">About Us</Link>
            </li>
         <li>
          <ChevronRight className="footer-icon" /><Link to="./Wedding">Wedding Destination</Link>
         </li>
         <li>
          <ChevronRight className="footer-icon" /><Link to="./Party">Party Destination</Link>
         </li>
         <li>
          <ChevronRight className="footer-icon" /><Link to="./Contact">Contact Us</Link>
         </li>
              
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} The The Ananda Super Luxury Resort. All Rights Reserved.
      </div>
    </footer>
  );
}
