import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");


  const handleLogin = async () => {
    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }

    try {
      await fetch("https://localhost:7059/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 401){
          setLoginError("Invalid email or password");
          }
          throw response;
        })
        .then((data) => {
          console.log(data);
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
      <form
        className="login-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2 className="login-header">Login</h2>

        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // E.TARGET is input element, value is current content
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
{loginError && (
  <div className="login-error-message">
    {loginError}
  </div>
)}
        <div className="login-buttons">
          <button
            type="button"
            className="back-button"
            onClick={handleBack}
          >
            Back
          </button>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;