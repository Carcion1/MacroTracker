import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Testing from './Components/Testing';
import AboutComponent from './Components/AboutComponent';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AboutMacros from './Components/AboutMacros';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <AboutComponent></AboutComponent>
      <AboutMacros></AboutMacros>
    </Router>
  );
}

export default App;
