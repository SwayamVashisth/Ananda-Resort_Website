import React from "react";

import "../components/AboutResort.css";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image Section */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="\images\room.png"
            
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>About Our Resort</h2>
          <p>
            Nestled between lush tropical gardens and pristine ocean views, our
            resort is a sanctuary of peace, beauty, and luxury. From the moment
            you arrive, you’ll be immersed in the spirit of island hospitality —
            where every sunrise invites adventure, and every sunset whispers
            serenity.
          </p>
          <p>
            Whether you’re seeking romantic seclusion, family adventures, or a
            wellness escape, our resort offers curated experiences designed to
            rejuvenate your body and soul. Enjoy world-class dining, holistic
            spa treatments, and the magic of nature right outside your suite.
          </p>
           <a
      href="https://www.google.co.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      
    
          <button className="about-button">Learn More</button></a>
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default About;
