import React from "react";
import "../Styles/AboutMacros.css";

type Props = {};

export const AboutMacros = () => {
  return (
    <div className="ShapeContainerMacro">
      <div className="AboutMacrosWrapper">
        <div className="AboutMacros">
          <div className="details">
            <h2>Macro Tracking</h2>
            <h4>
              Daily & weekly tracking of your macronutrients & micronutrients
            </h4>
          </div>
          <img
            src="https://redefiningstrength.com/wp-content/uploads/2017/10/Fotolia_110518491_Subscription_Monthly_M.jpg"
            className="ImageMacros"
            alt="image of macros"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMacros;
