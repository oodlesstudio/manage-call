import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "react-bootstrap";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import ActiveImg from "../../images/common/Active.svg";
import InActiveImg from "../../images/common/InActive.svg";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const NewTicketWindow = () => {
  const [channelType, setChannelType] = useState(false);
  const changeChannelType = () => setChannelType(true);

  const [atmActive, setAtmActive] = useState(false);
  const [atmInactive, setAtmInactive] = useState(false);

  const [editModal, setEditModal] = useState(false);

  // Modal
  const [dispatchHistory, setDispatchHistory] = useState(false);

  // dropdown

  const [terminalDetails, setTerminalDetails] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [selectedOption, setSelectedOption] = useState(null);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  const moreActionTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      More Action
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">New Ticket</h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <p className="fontSize12">New Ticket</p>
        </div>
      </div>

      {/* Alert */}
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>CAN:</strong> Feed delay from 0H:38M
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {/* Search Criteria */}
      <div className="configLeftTop searchCriteriaBox">
        <div className="position-relative">
          <div className="lightBlueBox configTopBlueBox configTopBlueBox-2 newTicketFirstBlueBox">
            <div className="configSelectBoxTop row">
              <div className="clientNameSelect col-sm-12 col-md-3">
                <label htmlFor="terminalCode">Site ID</label>
                <input
                  type="text"
                  name="terminalCode"
                  id="terminalCode"
                  placeholder="NA"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-12 col-md-3">
                <label htmlFor="terminalCode">ATM ID</label>
                <input
                  type="text"
                  name="terminalCode"
                  id="terminalCode"
                  placeholder="S1ECD183901"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-12 col-md-3">
                <label htmlFor="terminalCode">Serial Number</label>
                <input
                  type="text"
                  name="terminalCode"
                  id="terminalCode"
                  placeholder="Onsite"
                  className="inputTextBox"
                />
              </div>

              <div className="clientNameSelect col-sm-12 col-md-3">
                <label htmlFor="terminalCode text-wrap">
                  Mobile/Account Number
                </label>
                <input
                  type="text"
                  name="terminalCode"
                  id="terminalCode"
                  className="inputTextBox"
                />
              </div>
            </div>

            <div className="text-center btnsBtm">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setAtmActive(!atmActive)}
              >
                Heartbeat
              </button>
              <button
                type="button"
                className="btnPrimaryOutline ms-2"
                onClick={() => setAtmInactive(!atmInactive)}
              >
                Heartbeat
              </button>
              <button type="button" className="btnPrimary ms-2">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Atm Active */}
        {atmActive && (
          <Modal
            show={atmActive}
            onHide={() => setAtmActive(!atmActive)}
            centered
            className="defaultThemeModal saveFiltersModal mobile-defaultThemeModal errorFiltersModal atmActiveModal centeredModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                HeartBeat
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={ActiveImg} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                ATM Is Currently Active
              </p>
            </Modal.Body>
          </Modal>
        )}

        {/* Atm Inactive */}
        {atmInactive && (
          <Modal
            show={atmInactive}
            onHide={() => setAtmInactive(!atmInactive)}
            centered
            className="defaultThemeModal saveFiltersModal mobile-defaultThemeModal atmActiveModal centeredModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                HeartBeat
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={InActiveImg} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                ATM Is Currently Inactive
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Site Health Box */}
      <div className="configLeftBottom newTicketLastTable">
        <div className="tableBorderBox pt-0 pb-3">
          <div className="row siteDetailsBox">
            <div className="col-lg-3 col-sm-4 col-xs-12">
              <p className="siteDetailsHeading">Site Details</p>
              <p className="siteDetailsText">
                S1ECD183901 <br /> Karur Vysya Bank Platinum, <br /> OKI, On
                Site, Semi Urban
              </p>
              <p className="ipHead">
                IP:<span>10.94.229.100</span>
              </p>
              <p className="ipHead">
                Router IP:<span>10.94.229.100</span>
              </p>
              <p className="ipHead">
                VSAT Code:<span>Chennai, Tamil Nadu</span>
              </p>
            </div>

            <div className="col-lg-3 col-sm-4 col-xs-12">
              <p className="siteDetailsHeading">Brancg/Landlord</p>
              <p className="siteDetailsText">
                CHENNAI MANDAVELI Old No. 40 <br /> and 41, New No. 77A and 79A,{" "}
                <br /> Appu Mudali Street, Madha Church <br /> Road Entrance,
                Mylapre, CHENNAI, <br />
                TAMIL NADU-600004
              </p>
            </div>

            <div className="col-lg-3 col-sm-4 col-xs-12">
              <p className="siteDetailsHeading">Field Service Team</p>
              <p className="ipHead">
                SH:<span>Lorem Ipsom Dolor</span>
              </p>
              <p className="ipHead">
                SM:<span>Lorem Ipsom Dolor</span>
              </p>
              <p className="ipHead">
                CM:<span>Lorem Ipsom Dolor</span>
              </p>
              <p className="ipHead">
                FSO:<span>Lorem Ipsom Dolor</span>
              </p>
            </div>

            <div className="col-lg-3 col-12">
              <div>
                <p className="siteDetailsHeading mt-md-2 pt-md-1 mt-lg-0">
                  Others
                </p>
                <div className=" d-lg-block d-md-flex align-items-center justify-content-between d-xs-block  ">
                  <p className="ipHead me-4">
                    Link Site:<span>Lorem Ipsom Dolor</span>
                  </p>
                  <p className="ipHead me-4">
                    Site Accessibility:<span>Lorem Ipsom Dolor</span>
                  </p>
                  <p className="ipHead me-4">
                    AC AMC Status:<span>Lorem Ipsom Dolor</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Table Head */}
          <div className="healthStatusCounts d-flex justify-content-between align-items-center">
            <p className="fontWeight-600 fontSize16">
              Health Status and Counts
            </p>

            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={moreActionTooltip}
            >
              <div className="moreActionsBox atmSlideBox d-flex align-items-center justify-content-center">
                <span
                  className="icon-Vector1"
                  onClick={() => setTerminalDetails(!terminalDetails)}
                ></span>
                <Dropdown className="atmOptionsDropdown">
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <div
                        onClick={() => setDispatchHistory(!dispatchHistory)}
                        className="dropdownInner"
                      >
                        Dispatch History
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Link to="/" className="dropdownInner">
                        History
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <Link to="/" className="dropdownInner">
                        Feeds
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      <Link to="/" className="dropdownInner border-bottom-0">
                        Site Info
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </OverlayTrigger>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "12.72%" }}></th>
                  <th scope="col">ATM Status</th>
                  <th scope="col">Supervisory</th>
                  <th scope="col">JP</th>
                  <th scope="col">Dispenser</th>
                  <th scope="col">Pin Pad</th>
                  <th scope="col">Card Reader</th>
                  <th scope="col">RP</th>
                  <th scope="col">Cash Supply</th>
                  <th scope="col">JP Supply</th>
                  <th scope="col">RP Supply</th>
                  <th scope="col">BNA</th>
                  <th scope="col" style={{ width: "17.5%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Site Health</th>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthInactive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td>
                    <div className="siteHealthActive"></div>
                  </td>
                  <td style={{ Width: "17.5%" }}></td>
                </tr>
                <tr>
                  <th scope="row">Current Month CRA & SLM Dispatch Count</th>
                  <td>2</td>
                  <td>-</td>
                  <td>-</td>
                  <td>1</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td style={{ Width: "17.5%" }}></td>
                </tr>
                <tr>
                  <th scope="row">Since Cash Live CRA & SLM Dispatch Count</th>
                  <td>13</td>
                  <td>-</td>
                  <td>-</td>
                  <td>72</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>6</td>
                  <td style={{ Width: "17.5%" }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table Head */}
          <div className="healthStatusCounts">
            <p className="fontWeight-600 fontSize16">Cash Status</p>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox">
            <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Balance Date</th>
                  <th scope="col">Hopper 1</th>
                  <th scope="col">Hopper 2</th>
                  <th scope="col">Hopper 3</th>
                  <th scope="col">Hopper 4</th>
                  <th scope="col">Total</th>
                  <th scope="col" style={{ width: "42.95%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>19-Oct-2020, 07:00</td>
                  <td>0</td>
                  <td>2000</td>
                  <td>100</td>
                  <td>0</td>
                  <td>2100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Site Health Box */}
      <div className="configLeftBottom newTicketLastTable">
        <div className="tableBorderBox pt-0 pb-3">
          <div className="row siteDetailsBox atmTicketStatus">
            <div className="col col-xs-12">
              <div className="d-flex align-items-center">
                <svg
                  width="12"
                  height="100%"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7436 0.513774C10.5808 0.350889 10.3874 0.22168 10.1746 0.133526C9.96179 0.0453723 9.7337 0 9.50336 0C9.27302 0 9.04493 0.0453723 8.83212 0.133526C8.61931 0.22168 8.42596 0.350889 8.26309 0.513774L0.513774 8.26309C0.350889 8.42596 0.22168 8.61931 0.133526 8.83212C0.0453723 9.04493 0 9.27302 0 9.50336C0 9.7337 0.0453723 9.96179 0.133526 10.1746C0.22168 10.3874 0.350889 10.5808 0.513774 10.7436L1.29051 11.5204C1.69842 11.9283 2.27872 11.8581 2.63952 11.6607C2.87708 11.5311 3.15021 11.4819 3.41806 11.5204C3.68592 11.559 3.93408 11.6832 4.12544 11.8746C4.31679 12.0659 4.44104 12.3141 4.47959 12.5819C4.51815 12.8498 4.46894 13.1229 4.33932 13.3605C4.14188 13.7213 4.07273 14.3026 4.47963 14.7105L5.25637 15.4862C5.41924 15.6491 5.6126 15.7783 5.8254 15.8665C6.03821 15.9546 6.2663 16 6.49664 16C6.72698 16 6.95507 15.9546 7.16788 15.8665C7.38068 15.7783 7.57404 15.6491 7.73691 15.4862L15.4862 7.73691C15.6491 7.57404 15.7783 7.38068 15.8665 7.16788C15.9546 6.95507 16 6.72698 16 6.49664C16 6.2663 15.9546 6.03821 15.8665 5.8254C15.7783 5.6126 15.6491 5.41924 15.4862 5.25637L14.7095 4.47963C14.3026 4.07273 13.7223 4.14188 13.3615 4.33932C13.1239 4.46894 12.8508 4.51815 12.5829 4.47959C12.3151 4.44104 12.0669 4.31679 11.8756 4.12544C11.6842 3.93408 11.56 3.68592 11.5214 3.41806C11.4829 3.15021 11.5321 2.87708 11.6617 2.63952C11.8581 2.27872 11.9283 1.69742 11.5214 1.29051L10.7436 0.513774Z"
                    fill="#003087"
                  />
                </svg>
                <p className="ticketStatusLeft">Ticket</p>
                <p className="ticketStatusCenter">:</p>
                <p className="ticketStatusRight">8106167</p>
              </div>
            </div>
            <div className="col col-xs-12 ticketmobileheader">
              <div className="d-flex justify-content-sm-center justify-content-start align-items-center">
                <div className="siteHealthActive"></div>
                <p className="ticketStatusLeft text-nowrap">Ticket Status</p>
                <p className="ticketStatusCenter">:</p>
                <p className="ticketStatusRight text-nowrap">
                  Open - Not Dispatched
                </p>
              </div>
            </div>
            <div className="col col-xs-12 ticketmobileheader">
              <div className="d-flex justify-content-sm-end justify-content-start align-items-center">
                <svg
                  width="12"
                  height="100%"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.60737 2.54556C1.41083 2.61361 1.25884 2.72534 1.16028 2.87416C0.99528 3.12323 0.994239 3.13555 1.00278 4.74292L1.01056 8.20423L1.08228 8.35716C1.17345 8.55156 1.32027 8.69838 1.51467 8.78954C1.66078 8.85807 1.69166 8.86166 2.207 8.87014L2.74637 8.87904L2.75453 7.89827L2.76266 4.91753L2.83439 4.7646C2.92555 4.5702 3.07238 4.42338 3.26678 4.33221L3.4197 4.26049H8.0053H12.5909L12.7438 4.33221C12.9382 4.42338 13.085 4.5702 13.1762 4.7646L13.2479 4.91753L13.2561 7.89827L13.2642 8.87904L13.8036 8.87014C14.3189 8.86166 14.3498 8.85807 14.4959 8.78954C14.6903 8.69838 14.8371 8.55156 14.9283 8.35716L15 8.20423V4.68483V3.16542L14.9283 3.01249C14.8371 2.81809 14.6903 2.67127 14.4959 2.58011L14.343 2.50838L8.04636 2.5023C2.04334 2.49652 1.7431 2.49852 1.60737 2.54556ZM3.88374 5.16121C3.77346 5.20944 3.65843 5.34931 3.63883 5.45901C3.63015 5.50752 3.62659 7.75457 3.63089 10.4525L3.63872 15.3577L3.69517 15.4333C3.72621 15.4749 3.78562 15.5343 3.82721 15.5654C3.90279 15.6218 3.90452 15.6218 8.0053 15.6218C12.1061 15.6218 12.1078 15.6218 12.1834 15.5654C12.225 15.5343 12.2844 15.4749 12.3154 15.4333L12.3719 15.3577V10.3792V5.40064L12.3154 5.32503C12.2844 5.28344 12.225 5.22404 12.1834 5.19299C12.1079 5.13662 12.1012 5.13654 8.03752 5.13063C4.6954 5.12575 3.95229 5.13123 3.88374 5.16121Z"
                      fill="#003087"
                    />
                  </g>
                </svg>
                <p className="ticketStatusLeft">ATM Status</p>
                <p className="ticketStatusCenter">:</p>
                <p className="ticketStatusRight">Machine Down</p>
              </div>
            </div>
          </div>

          <div className="configSelectBoxTop row">
            <div className="clientNameSelect col">
              <label htmlFor="CallType">Call Type</label>
              <Select
                defaultValue={channelType}
                onChange={() => {
                  setChannelType();
                  changeChannelType();
                }}
                options={options}
                id="CallType"
                classNamePrefix="reactSelectBox"
                placeholder="Cash Out"
                isDisabled={true}
              />
              {channelType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="CallMode">Call Mode</label>
              <Select
                defaultValue={channelType}
                onChange={() => {
                  setChannelType();
                  changeChannelType();
                }}
                options={options}
                id="CallMode"
                classNamePrefix="reactSelectBox"
                placeholder="Cash Feed"
                isDisabled={true}
              />
              {channelType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="CallDate">Call Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                id="CallDate"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="CloseDate">Close Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                id="CloseDate"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="QueueType">Queue Type</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="QueueType"
                classNamePrefix="reactSelectBox"
                placeholder="Dropdown"
              />
              {clientName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="Category">Category</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="Category"
                classNamePrefix="reactSelectBox"
                placeholder="Cash Related"
              />
              {clientName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="SubCategory">Sub-Category</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="SubCategory"
                classNamePrefix="reactSelectBox"
                placeholder="Cash Out"
              />
              {clientName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Docket Window */}
      <div className="docketWindow">
        <ul className="nav nav-tabs nav-mobile-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Docket
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Escalation
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Additional Data
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Vendor Escalations
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              PM Checklist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              AMC
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          {/* First Tab */}
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="configLeftBottom tableBorderBox docketWindowSection">
              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col-lg col-4 newcol">
                  <label htmlFor="AssignedTo">Assigned To</label>
                  <Select
                    defaultValue={clientName}
                    onChange={() => {
                      setClientName();
                      changeClientName();
                    }}
                    options={options}
                    id="AssignedTo"
                    classNamePrefix="reactSelectBox"
                    placeholder="Please select"
                  />
                  {clientName && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col-lg col-4 newcol">
                  <label htmlFor="InputType">Input Type</label>
                  <Select
                    defaultValue={clientName}
                    onChange={() => {
                      setClientName();
                      changeClientName();
                    }}
                    options={options}
                    id="InputType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Auto Vendor Input"
                  />
                  {clientName && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                <div className="clientNameSelect col-lg col-4 newcol">
                  <label htmlFor="DocketNo">Docket No.</label>
                  <input
                    type="text"
                    name="previousEodTime"
                    id="DocketNo"
                    className="inputTextBox"
                  />
                </div>

                <div className="clientNameSelect col-lg newcol col-12 newcol-12 d-lg-block d-md-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-end h-100">
                    <div className="d-flex align-items-center">
                      <button className="btnPrimary">Add Visit</button>
                      <p className="fontWeight-600 fontSize14 ms-3">
                        CRA Visits: 3/0
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive tableContentBox">
                <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Visit</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">Docket No.</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Close Date</th>
                      <th scope="col" style={{ width: "19.45%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ABC Vendor</td>
                      <td>12345678</td>
                      <td>19-Oct-2020, 07:00</td>
                      <td>19-Oct-2020, 07:00</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Second Tab */}
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="docketWindowSection"></div>
          </div>
        </div>
      </div>

      {/* Log Box */}
      <div className="configLeftBottom newTicketLastTable logBoxSection">
        <div className="tableBorderBox">
          <div className="configSelectBoxTop row">
            <div className="clientNameSelect col">
              <label htmlFor="NextFollowUp">Next Follow-Up</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                id="NextFollowUp"
              />
            </div>
            <div className="clientNameSelect col">
              <label className="mb-3">ETA Status</label>
              <div className="d-md-flex align-items-center d-block w-100">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label w-100 text-nowrap"
                    htmlFor="flexRadioDefault1"
                  >
                    ETA Received
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label w-100 text-nowrap"
                    htmlFor="flexRadioDefault2"
                  >
                    ETA Not Received
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="configSelectBoxTop row">
            <div className="clientNameSelect col">
              <label htmlFor="ETA">ETA</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                id="ETA"
              />
            </div>
            <div className="clientNameSelect col">
              <label htmlFor="ReasonforDelay">Reason for Delay</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="ReasonforDelay"
                classNamePrefix="reactSelectBox"
                placeholder="Please Select"
              />
              {clientName && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            <div className="clientNameSelect col">
              <label htmlFor="RevisedETA">Revised ETA</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
                id="RevisedETA"
              />
            </div>
          </div>

          <div className="configSelectBoxTop configSelectBoxTop row">
            <div className="clientNameSelect col-lg-3 col-md-6">
              <label htmlFor="ActivityLog">Activity Log</label>
              <textarea
                className="form-control textAreaBox"
                id="ActivityLog"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="clientNameSelect col-lg-3 col-md-6">
              <label htmlFor="ReportedProblem">Reported Problem</label>
              <textarea
                className="form-control textAreaBox"
                id="ReportedProblem"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="clientNameSelect col-lg-3 col-md-6">
              <label htmlFor="WorkPerformed">Work Performed</label>
              <textarea
                className="form-control textAreaBox"
                id="WorkPerformed"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="clientNameSelect col-lg-3 col-md-6">
              <label htmlFor="PartsExchanged">Parts Exchanged</label>
              <textarea
                className="form-control textAreaBox"
                id="PartsExchanged"
                placeholder="Type here..."
              ></textarea>
            </div>
          </div>

          <div className="logBox">
            <ul>
              <li>Automon created ticket on Mar 21, 2022 18:13:07</li>
              <li>
                Cash Out created, Cash feed Time Mar 21 2022 6:04 PM, Balance is
                2100
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Last Table */}
      <div className="configLeftBottom newTicketLastTable">
        <div className="tableBorderBox">
          <p className="fontWeight-600 fontSize16">
            Work Order List(other open tickets for this terminal)
          </p>

          {/* Table Head */}
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox"
                placeholder="10 Entries"
              />
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span className="icon-Search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Pdf} alt="Pdf" />
                </button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipExcel}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox ">
            <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Ticket ID</th>
                  <th scope="col">Call Type</th>
                  <th scope="col">Queue Type</th>
                  <th scope="col">Call Date</th>
                  <th scope="col" style={{ width: "15.05%" }}>
                    Vendor
                  </th>
                  <th scope="col" style={{ width: "15.4%" }}>
                    Docket No.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8106034</td>
                  <td>Chronic ATM-Down</td>
                  <td>Problem Management</td>
                  <td>19-Oct-2020, 07:00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8106034</td>
                  <td>Chronic ATM-Down</td>
                  <td>Problem Management</td>
                  <td>19-Oct-2020, 07:00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8106034</td>
                  <td>Chronic ATM-Down</td>
                  <td>Problem Management</td>
                  <td>19-Oct-2020, 07:00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8106034</td>
                  <td>Chronic ATM-Down</td>
                  <td>Problem Management</td>
                  <td>19-Oct-2020, 07:00</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="paginationBox d-flex align-items-center justify-content-between my-12">
            <div className="paginationLeft fontSize12">
              Showing 1 to 10 of 49 entries
            </div>

            <div className="paginationRight">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link previousPagination"
                      to="/"
                      aria-label="Previous"
                    >
                      <span
                        className="icon-Breadcrumb-Arrow"
                        style={{
                          fontSize: "16px",
                          transform: "rotate(180deg)",
                        }}
                      ></span>
                      <span>First</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      2
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link paginationBottom" to="/">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link paginationBottom" to="/">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link nextPagination"
                      to="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        className="icon-Breadcrumb-Arrow"
                        style={{ fontSize: "16px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      {editModal && (
        <Modal
          show={editModal}
          onHide={() => setEditModal(!editModal)}
          centered
          className="defaultThemeModal saveFiltersModal centeredModal errorFiltersModal modalDialogCenteredFix"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Comment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center commentModalBody">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your comment here..."
            ></textarea>
            <div className="text-center btnsBtm">
              <button type="button" className="btnPrimaryOutline">
                Cancel
              </button>
              <button type="button" className="btnPrimary ms-2">
                Submit
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Dispatch History */}
      {dispatchHistory && (
        <Modal
          show={dispatchHistory}
          onHide={() => setDispatchHistory(!dispatchHistory)}
          centered
          className="defaultThemeModal dispatchHistoryModal centeredModal  "
          id="dispatchHistoryModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Dispatch History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Writer(CRA) Summary */}
            {/* carousal */}
            <div className="CRA-Carousal">
              <p className="fontSize14 fontSize14-sb">Writer(CRA) Summary</p>
              <div className="position-relative mt-3">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={24}
                  className="mySwiper CRA-Swiper position-static"
                  navigation={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">May-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Jun-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Jul-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Aug-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Sep-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Oct-2021</p>
                      <p className="CRA-Text2">73</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 ">Nov-2021</p>
                      <p className="CRA-Text2">31</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 "> Dec-2021</p>
                      <p className="CRA-Text2">32</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 "> Jan-2022</p>
                      <p className="CRA-Text2">35</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 "> Feb-2022</p>
                      <p className="CRA-Text2">35</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 "> Mar-2022</p>
                      <p className="CRA-Text2">35</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="CRA-Slide">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <p className="CRA-Text1 "> Apr-2022</p>
                      <p className="CRA-Text2">35</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* Table */}
            <div className="CRA-Table">
              <p className="CRA-TableHeading">Writer(CRA) Details</p>
              {/* Table Head */}
              <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                <div className="clientNameSelect configFormatEntities">
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={false}
                    classNamePrefix="reactSelectBox"
                    placeholder="10 Entries"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group has-search">
                    <span className="icon-Search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>

                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <button type="button" className="iconButtonBox">
                      <img src={Pdf} alt="Pdf" />
                    </button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipExcel}
                  >
                    <button type="button" className="iconButtonBox">
                      <img src={Excel} alt="Excel" />
                    </button>
                  </OverlayTrigger>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive tableContentBox tableBorderBox p-0">
                <table className="table table-striped table-hover table-borderless align-middle mb-0">
                  <thead>
                    <tr>
                      <th scope="col">
                        S. No.
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Ticket ID
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Call Date
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Vendor
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Call Type
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Category
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Sub Category
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                      <th scope="col">
                        Ageing
                        <a href="/">
                          <span className="icon-Sort-icon"></span>
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>7380588</td>
                      <td>02-Dec-2021, 11:42</td>
                      <td>Writer(CRA)</td>
                      <td>Dispenser Error</td>
                      <td>ATM Hardware</td>
                      <td>Dispenser Problem</td>
                      <td>5H:31M</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                <div className="paginationLeft fontSize12">
                  Showing 1 to 10 of 49 entries
                </div>

                <div className="paginationRight">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link
                          className="page-link previousPagination"
                          to="/"
                          aria-label="Previous"
                        >
                          <span
                            className="icon-Breadcrumb-Arrow"
                            style={{
                              fontSize: "16px",
                              transform: "rotate(180deg)",
                            }}
                          ></span>
                          <span>First</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link paginationBottom" to="/">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link paginationBottom" to="/">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link nextPagination"
                          to="/"
                          aria-label="Next"
                        >
                          <span>Last</span>
                          <span
                            className="icon-Breadcrumb-Arrow"
                            style={{ fontSize: "16px" }}
                          ></span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default NewTicketWindow;
