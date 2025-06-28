import React from 'react'

import '../Styles/TestingRow.css';

type Props = {};

export const TestingRow = () => {
  return (
    <div className="TestingWrapper">
    <div className="TestingRow">
  <div className="ShapeContainerMacro">
    <div className="AboutMacros">
        <div className="details">
        <h2>Macro Tracking</h2>
        <h4>Daily & weekly tracking of your macronutrients & micronutrients</h4>
    </div>
        <img
        src = "https://redefiningstrength.com/wp-content/uploads/2017/10/Fotolia_110518491_Subscription_Monthly_M.jpg"        className = "ImageMacros"
        alt = "image of macros"
        />
    </div>
  </div>
  <div className="ShapeContainerWeight">
        <div className="AboutWeight">
        <div className="details">
        <h2>Weight Tracking</h2>
        <h4>Track your daily weight goals with weighted averages.</h4>
    </div>
        <img
        src = "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2024/december-2024/nutrition/sustainable-weight-loss/sustainable-weight-loss-scales-ssnoexp-620x400.jpg?rev=ea25e801c1a64f6698c338d72a730154&hash=31A59F6547A332176BD029AFFEBE034D"
        alt = "image of macros"
        />
    </div>
  </div>
</div>
</div>
  )
}

export default TestingRow;
