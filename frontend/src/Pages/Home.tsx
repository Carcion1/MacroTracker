import React from "react";
import AboutComponent from "../Components/AboutComponent";
import TestingRow from "../Components/TestingRow";
import ContactBar from "../Components/ContactBar";

const Home: React.FC = () => {
  return (
    <>
      <AboutComponent />
      <TestingRow />
      <ContactBar />
    </>
  );
};

export default Home;
