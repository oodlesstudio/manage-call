import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";

const SideBar = (props) => {
  let path = useLocation().pathname;

  // Card Operation Path
  let dashboardPath = matchPath("/dashboard/*", path);
  if (dashboardPath) {
    dashboardPath = dashboardPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === dashboardPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === dashboardPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === dashboardPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Dashboard */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={activeBtnClass("/dashboard")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={activeAriaExpand("/dashboard")}
              aria-controls="collapseTwo"
            >
              <span className="icon-Icon-21 sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={activeAccordionBodyClass("/dashboard")}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Current Availability Status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Month Wise Dpwn Calls Status
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/ageging-queue-wise"
                    className={activeLink("/dashboard/ageging-queue-wise")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">Ageging - Queue Wise</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/atm-status"
                    className={activeLink("/dashboard/atm-status")}
                  >
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
                    <span className="subMenuRight">
                      MTD Availability Phase Wise
                    </span>
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
                    <span className="subMenuRight">
                      Open Calls Ageing Dashboard
                    </span>
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
            </div>
          </div>
        </div>

        {/* Ticket Centre */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <Link to="/" className={activeLink("/")}>
              <button className="accordion-button collapsed" type="button">
                <span className="icon-Ticket-Centre sidebarIconSize"></span>
                <span className="fontSize14 ms-2">Ticket Centre</span>
              </button>
            </Link>
          </h2>
        </div>

        {/* New Ticket */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <Link to="/new-ticket" className={activeLink("/new-ticket")}>
              <button className="accordion-button collapsed" type="button">
                <span className="icon-New-Ticket sidebarIconSize"></span>
                <span className="fontSize14 ms-2">New Ticket</span>
              </button>
            </Link>
          </h2>
        </div>

        {/* Ticket History */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Ticket-History sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Ticket History</span>
            </button>
          </h2>
        </div>

        {/* Terminal Status */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Terminal-Status sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Terminal Status</span>
            </button>
          </h2>
        </div>

        {/* Reports */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingReports">
            <button
              className={activeBtnClass("/dummy-link")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseReports"
              aria-expanded={activeAriaExpand("/dummy-link")}
              aria-controls="collapseReports"
            >
              <span className="icon-Reports sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Reports</span>
            </button>
          </h2>
          <div
            id="collapseReports"
            className={activeAccordionBodyClass("/dummy-link")}
            aria-labelledby="headingReports"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
                    <span className="subMenuRight">
                      Availability(Peak/Non-Peak)
                    </span>
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
                    <span className="subMenuRight">
                      Current Down ATMs Report
                    </span>
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
                    <span className="subMenuRight">
                      Uptime Performance Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="subMenuLeft">
                      <span className="icon-Icon-2"></span>
                    </span>
                    <span className="subMenuRight">
                      Export Ticket History Report
                    </span>
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
            </div>
          </div>
        </div>

        {/* Uploads */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingUploads">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUploads"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseUploads"
            >
              <span className="icon-Uploads sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Uploads</span>
            </button>
          </h2>
          <div
            id="collapseUploads"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingUploads"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
            </div>
          </div>
        </div>

        {/* Housekeeping Activity */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Housekeeping-Activity sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Housekeeping Activity</span>
            </button>
          </h2>
        </div>

        {/* Manual */}
        <div className="accordion-item">
          <h2 className="accordion-header hideArrowIcon" id="headingHome">
            <button className="accordion-button collapsed" type="button">
              <span className="icon-Manual sidebarIconSize"></span>
              <span className="fontSize14 ms-2">Manual</span>
            </button>
          </h2>
        </div>
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
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
