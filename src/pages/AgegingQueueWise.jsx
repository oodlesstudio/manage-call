import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/agegingQueueWise/ageging.css";
// Components
import Header from "../components/common/Header";
import AgegingMain from "../components/agegingQueueWise/AgegingMain";
import Footer from "../components/common/Footer";

const AgegingQueueWise = () => {
  return (
    <div>
      <Header />
      <AgegingMain />
      <Footer />
    </div>
  );
};

export default AgegingQueueWise;
