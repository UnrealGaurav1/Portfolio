import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import ReadMore from './Pages/ReadMore'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About-ReadMore" element={<ReadMore />}></Route>
      </Routes>
      <Footer />
    </Router> 
    </>
  );
}

export default App;
