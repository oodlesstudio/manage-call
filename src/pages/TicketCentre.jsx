import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/ticketCentre/ticketCentre.css";
// Components
import Header from "../components/common/Header";
import TicketMain from "../components/ticketCentre/TicketMain";
import Footer from "../components/common/Footer";

const TicketCentre = () => {
  return (
    <div>
      <Header />
      <TicketMain />
      <Footer />
    </div>
  );
};

export default TicketCentre;
