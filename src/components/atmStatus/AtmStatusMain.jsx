import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import AtmStatusWindow from "./AtmStatusWindow";

const AtmStatusMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <AtmStatusWindow />
      </div>
    </div>
  );
};

export default AtmStatusMain;
