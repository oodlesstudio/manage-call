import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

const activeLink = (arr) => {};

const dashboardPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Current Availability Status</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Month Wise Dpwn Calls Status</span>
          </Link>
        </li>
        <li>
          <Link
            to="/ageging-queue-wise"
            className={activeLink("/ageging-queue-wise")}
          >
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Ageging - Queue Wise</span>
          </Link>
        </li>
        <li>
          <Link to="/atm-status">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">ATM Status</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              ATM Availability Trend Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Availablity Status</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Current Monitoring Alert Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MTD Availability Phase Wise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Call Type Wise Monitor</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">SLM Monitor</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Open Calls Ageing Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Machine Down Call Ageing Dashboard
            </span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const reportsPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Actual Downtime</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Uptime Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Uptime Report - LHO</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Availability(Peak/Non-Peak)</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Dispatch Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Comments Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Current Down ATMs Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Sub category Wise Ageing Report
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Exclusion Downtime</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Penalty Calculation</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Uptime Performance Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Export Ticket History Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">SMS Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">SMS Details</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const uploadsPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bulk Comments Update</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BulkTicket Closure</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Comment Followup and ETA Update
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Bulk Category & Delay Reason Change
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span className="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bulk Ticket Creation</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  return (
    <div className="sidebarSmall">
      {/* Dashboard */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardPopover}
          rootClose
        >
          <span className="icon-Icon-21 sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Ticket Centre */}
      <div className="sidebarSmallImg">
        <Link to="/" className={activeLink("/")}>
          <span className="icon-Ticket-Centre sidebarIconSize"></span>
        </Link>
      </div>

      {/* New Ticket */}
      <div className="sidebarSmallImg">
        <Link to="/new-ticket" className={activeLink("/new-ticket")}>
          <span className="icon-New-Ticket sidebarIconSize"></span>
        </Link>
      </div>

      {/* Ticket History */}
      <div className="sidebarSmallImg">
        <Link to="/ticket-history" className={activeLink("/ticket-history")}>
          <span className="icon-Ticket-History sidebarIconSize"></span>
        </Link>
      </div>

      {/* Terminal Status */}
      <div className="sidebarSmallImg">
        <Link to="/terminal-status" className={activeLink("/terminal-status")}>
          <span className="icon-Terminal-Status sidebarIconSize"></span>
        </Link>
      </div>

      {/* Reports */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={reportsPopover}
          rootClose
        >
          <span className="icon-Reports sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Uploads */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={uploadsPopover}
          rootClose
        >
          <span className="icon-Uploads sidebarIconSize"></span>
        </OverlayTrigger>
      </div>

      {/* Housekeeping Activity */}
      <div className="sidebarSmallImg">
        <Link
          to="/housekeeping-activity"
          className={activeLink("/housekeeping-activity")}
        >
          <span className="icon-Housekeeping-Activity sidebarIconSize"></span>
        </Link>
      </div>

      {/* Manual */}
      <div className="sidebarSmallImg">
        <Link to="/manual" className={activeLink("/manual")}>
          <span className="icon-Manual sidebarIconSize"></span>
        </Link>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
