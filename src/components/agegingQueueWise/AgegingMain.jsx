import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import AgegingWindow from "./AgegingWindow";

const AgegingMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <AgegingWindow />
      </div>
    </div>
  );
};

export default AgegingMain;
