import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutComponent from './Components/AboutComponent';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AboutMacros from './Components/AboutMacros';
import AboutWeight from './Components/AboutWeight';
import TestingRow from "./Components/TestingRow";

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
      {/*<AboutMacros></AboutMacros>
      <AboutWeight></AboutWeight>*/}
      <TestingRow></TestingRow>
    </Router>
  );
}

export default App;
