import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutComponent from "./Components/AboutComponent";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import AboutMacros from "./Components/AboutMacros";
import AboutWeight from "./Components/AboutWeight";
import TestingRow from "./Components/TestingRow";
import ContactBar from "./Components/ContactBar";
import LoginPage from "./Pages/LoginPage";
import LoginHome from "./Pages/LoginHome";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-home" element={<LoginHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
