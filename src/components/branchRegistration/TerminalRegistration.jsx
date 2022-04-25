import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./branchRegistration.css";
// Components
import SidebarMain from "../common/SidebarMain";
import TerminalMainWindow from "./TerminalMainWindow";

const TerminalRegistration = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <TerminalMainWindow />
      </div>
    </div>
  );
};

export default TerminalRegistration;
