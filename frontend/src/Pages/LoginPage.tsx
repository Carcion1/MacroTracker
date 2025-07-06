import React from "react";
import "../Styles/LoginPage.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    //add login logic.
  };
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // if user navigates to login and then presses back, itll take them back to their original place.
    } else {
      navigate("/"); // if user lands directly on login page it'll take them back home
    }
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <div className="form-row">
          <h4>Email:</h4>
          <input type="email" className="input-field" />
        </div>
        <div className="form-row">
          <h4>Password:</h4>
          <input type="password" className="input-field" />
        </div>
        <div className="login-buttons">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
