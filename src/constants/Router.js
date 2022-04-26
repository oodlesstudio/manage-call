import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgegingQueueWise from "../pages/AgegingQueueWise";
// Components
import TicketCentre from "../pages/TicketCentre";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketCentre />} />
        <Route path="/ageging-queue-wise" element={<AgegingQueueWise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
