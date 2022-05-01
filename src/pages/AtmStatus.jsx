import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/atmStatus/atmStatus.css";
// Components
import Header from "../components/common/Header";
import AtmStatusMain from "../components/atmStatus/AtmStatusMain";
import Footer from "../components/common/Footer";

const AtmStatus = () => {
  return (
    <div>
      <Header />
      <AtmStatusMain />
      <Footer />
    </div>
  );
};

export default AtmStatus;
