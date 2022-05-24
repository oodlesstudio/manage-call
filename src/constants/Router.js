import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import TicketCentre from "../pages/TicketCentre";
import AgegingQueueWise from "../pages/AgegingQueueWise";
import AtmStatus from "../pages/AtmStatus";
import NewTicket from "../pages/NewTicket";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketCentre />} />
        <Route path="/dashboard/ageging-queue-wise" element={<AgegingQueueWise />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/dashboard/atm-status" element={<AtmStatus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
