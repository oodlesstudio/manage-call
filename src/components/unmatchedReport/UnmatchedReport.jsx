import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./unmatchedReport.css";
// Components
import SidebarMain from "../common/SidebarMain";
import UnmatchedMainWindow from "./UnmatchedMainWindow";

const UnmatchedReport = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <UnmatchedMainWindow />
      </div>
    </div>
  );
};

export default UnmatchedReport;
