import React from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Suite from "./pages/Suite";
import Superior from "./pages/Superior";
import Standard from "./pages/Standard";
import Executive from "./pages/Executive";
import Wedding from "./pages/Wedding";
import Party from "./pages/Party";
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
        {/* Conference Hall Page */}
         <Route path="/ConferenceHall" element={<ConferenceHall />} />

        {/* Swimming Pool Page*/} 
         <Route path="/SwimmingPool" element={<SwimmingPool />} />
        {/* Spa And Wellness Page */}
         <Route path="/SpaAndWellness" element={<SpaAndWellness />} />
         {/* Gym And Yoga */}
         <Route path="/GymAndYoga" element={<GymAndYoga />} />
         
        <Route path="/Suite" element ={<Suite Room /> } />
        <Route path="/Superior" element ={<Superior Room /> } />
        <Route path="/Standard" element ={<Standard Economy Room /> } />
        <Route path="/Executive" element ={<Executive Room /> } />
        <Route path="/Wedding" element ={<Wedding Destination /> } />
        <Route path="/Party" element ={<Party Destination /> } />
        <Route path="/Contact" element={<Contact Us/>} />
         
      </Routes>
      

      <Footer />
    </>
  );
};

export default App;