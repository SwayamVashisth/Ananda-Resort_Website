import React from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BanquetHall from "./pages/BanquetHall";
import ConferenceHall from "./pages/ConferenceHall";
import SwimmingPool from "./pages/SwimmingPool";
import SpaAndWellness from "./pages/SpaAndWellness";
import GymAndYoga from "./pages/GymAndYoga";
import banner from "./assets/banner.png";
import AboutResort from "./components/AboutResort";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from"./pages/Blogs";
import RoomsSection from "./components/RoomsSection";
import Gallery from "./components/Gallery";
import BlogSection from "./components/BlogSection";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-64 object-cover"
        />
      </div>
       <AboutResort />
      <Gallery />
      <RoomsSection />
      
     
      <BlogSection />
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        <Route path="/pages/About" element={<About />} />

        <Route path="/pages/Blogs" element={<Blogs />} />

        
        <Route path="/pages/Contact" element={<Contact Us/>} />

        {/* Banquet Hall Page */}
        <Route path="/BanquetHall" element={<BanquetHall />} />

         <Route path="/ConferenceHall" element={<ConferenceHall />} />

         
         <Route path="/SwimmingPool" element={<SwimmingPool />} />

         <Route path="/SpaAndWellness" element={<SpaAndWellness />} />
         <Route path="/GymAndYoga" element={<GymAndYoga />} />

      </Routes>
      

      <Footer />
    </>
  );
};

export default App;