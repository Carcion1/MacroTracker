import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      await fetch("https://localhost:7059/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //Tells server that we are sending JSON data in request body
        },
        body: JSON.stringify({ email, password }), // converts the object {email, password} into json string
      })
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
          throw response; // mainly for error handling to display for debugging.
        })
        .then((data) => {
          console.log(data); // data just a variable.
          navigate("/login-home");
        });
    } catch (response) {
      console.log(response);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        <h2 className="login-header">Login</h2>

        <div className="form-row">
          <h4>Email:</h4>
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h4>Password:</h4>
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-buttons">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
