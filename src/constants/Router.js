import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import BranchTerminalRegistration from "../pages/BranchTerminalRegistration";
import FieldIdentificationConfig from "../pages/FieldIdentificationConfig";
import OnlineCbrEntry from "../pages/OnlineCbrEntry";
import TicketCentre from "../pages/TicketCentre";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/branch-terminal-registration"
          element={<BranchTerminalRegistration />}
        />
        <Route
          path="/field-identification-config"
          element={<FieldIdentificationConfig />}
        />
        <Route path="/online-cbr-entry" element={<OnlineCbrEntry />} />
        <Route path="/" element={<TicketCentre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
