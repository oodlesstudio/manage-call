import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./fieldConfig.css";
// Components
import SidebarMain from "../common/SidebarMain";
import FieldMainWindow from "./FieldMainWindow";

const FieldConfig = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <FieldMainWindow />
      </div>
    </div>
  );
};

export default FieldConfig;
