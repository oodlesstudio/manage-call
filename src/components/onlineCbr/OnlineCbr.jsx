import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./onlineCbr.css";
// Components
import SidebarMain from "../common/SidebarMain";
import CbrMainWindow from "./CbrMainWindow";

const OnlineCbr = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <CbrMainWindow />
      </div>
    </div>
  );
};

export default OnlineCbr;
