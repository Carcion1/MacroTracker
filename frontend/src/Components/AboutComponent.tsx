import React from "react";
import "../Styles/AboutComponent.css";

// ✅ Define props type (empty for now, but ready for future use)
type AboutComponentProps = {};

// ✅ Use React.FC with the props type
const AboutComponent: React.FC = () => {
  return (
    <div className="AboutWrapper" id="about">
      <div className="AboutComponent">
        <img
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMn7oTwJB0Mc65HoQJ2JId5zLLcbX-ByR6cXWTxgKtfKUbjUZQ53vnFR-QMn0XX85KjGoORahtChsqRNL2vIxsV5i9cfNkE8lFNf-Z7M9FvtuIrM8J0PZcwBgbdVezFFKO-5Bq3s0&usqp=CAc"
          className="ImageAuthor"
          alt="Image of author"
        />
        <div className="AboutDetails">
          <h4>
            Hi, my name is Tom. I am a software developer who has a hobby of
            going to the gym. I dedicated this project to help gym goers such as
            myself to help track their macros, calories & fitness related goals.
            I hope it can be of use to you as it is for me. Enjoy!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
