import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import NewTicketWindow from "./NewTicketWindow";

const NewTicketMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <NewTicketWindow />
      </div>
    </div>
  );
};

export default NewTicketMain;
