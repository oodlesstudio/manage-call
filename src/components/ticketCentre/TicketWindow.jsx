import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";
import Error from "../../images/common/error.svg";
import Success from "../../images/common/success.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const TicketWindow = () => {
  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);
  const [editModal, setEditModal] = useState(false);

  // all Fiilters State

  const [show, setShow] = useState(true);
  const [allfilters, setAllFilters] = useState(false);
  const [extrafilter, setExtraFilter] = useState(false);

  // filters State
  function filterState(show, filter, extrafilter) {
    if ((show || filter) === true) {
      return "";
    } else {
      return "d-none";
    }
  }

  // show State
  function allFilterView() {
    setExtraFilter(!extrafilter);
    setAllFilters(!allfilters);
  }

  // Show Hide

  function showHideView() {
    setShow(!show);
    if (extrafilter === true) {
      setExtraFilter(false);
      setAllFilters(!allfilters);
    }
  }

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

  const editButton = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit
    </Tooltip>
  );

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  // Table Active State Toggle
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = () => {
    setToggleState(!toggleState);
  };

  // -------------------- CheckBox Logic ---------------------------------

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
    nr3: false,
    nr4: false,
    nr5: false,
    nr6: false,
    nr7: false,
    nr8: false,
    nr9: false,
    nr10: false,
  });

  /* -------------------- TOGGLES checK STATE BASED ON inputName -------------------- */

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  /* -------------------- CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK -------------------- */

  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  /* -------------------- EFFECT TO CONTROL CHECKED_ALL STATE -------------------- */

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Ticket Centre
        </h5>

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
          <p className="fontSize12">Ticket Center</p>
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

      {/* New Search Criteria */}

      <div className="newSearchBox">
        <section className="newSearchHeader">
          <h6 className="fontWeight-600 colorBlack">Search Criteria</h6>
          <div className="newSeachHeaderBtns">
            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              onClick={() => allFilterView()}
            >
              <span className="icon-Filter-Icon"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                All Filters
              </span>
            </button>
            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              onClick={() => showHideView()}
            >
              <span className="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>
        </section>

        {/* data to show */}
        <div className={filterState(show, allfilters, extrafilter)}>
          <div className="hrGreyLine"></div>
          <div className="configSelectBoxTop row">
            {/* 1 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Bank</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 2 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">LOC Type</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 3 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Queue Type</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 4 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Status</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 5 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">State</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 6 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Site Type</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 7 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Call Type</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 8 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">ATM Status</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 9 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Make</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 10 */}
            <div className="clientNameSelect col">
              <label htmlFor="clientName">Site Class</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 11 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Category</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 12 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Assigned To</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 13 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">CRA</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 14 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Criticality</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 15 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Sub Category</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 16 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="channelType">Call Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="unmatchedDate"
              />
            </div>
            {/* 17 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Worklist</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 18 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Ticket</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 19 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">CRA Visits</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 20 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="clientName">Sites</label>
              <Select
                defaultValue={clientName}
                onChange={() => {
                  setClientName();
                  changeClientName();
                }}
                options={options}
                id="clientName"
                classNamePrefix="reactSelectBox"
                placeholder="All"
              />
            </div>
            {/* 21 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="terminalCode">Enter Ticket ID</label>
              <input
                type="text"
                name="terminalCode"
                id="terminalCode"
                placeholder="Ticket ID"
                className="inputTextBox"
              />
            </div>
            {/* 22 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="terminalCode">Enter ATM ID</label>
              <input
                type="text"
                name="terminalCode"
                id="terminalCode"
                placeholder="ATM ID"
                className="inputTextBox"
              />
            </div>
            {/* 23 */}
            <div
              className={
                extrafilter === true ? "clientNameSelect col" : "d-none"
              }
            >
              <label htmlFor="terminalCode">Enter Site ID</label>
              <input
                type="text"
                name="terminalCode"
                id="terminalCode"
                placeholder="Site ID"
                className="inputTextBox"
              />
            </div>
          </div>
          {/* Search and Reset Btns */}
          <div className="text-center btnsBtm">
            <button
              type="button"
              className="btnPrimaryOutline"
              onClick={() => setResetFilters(!resetFilters)}
            >
              Reset
            </button>
            <button
              type="button"
              className="btnPrimary ms-2"
              onClick={() => setSaveFilters(!saveFilters)}
            >
              Search
            </button>
          </div>
        </div>

        {/* Modals */}

        {/* Reset Filters */}
        {resetFilters && (
          <Modal
            show={resetFilters}
            onHide={() => setResetFilters(!resetFilters)}
            centered
            className="defaultThemeModal mobile-defaultThemeModal saveFiltersModal errorFiltersModal centeredModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={Error} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters could not be reset due to internal server error.
              </p>
            </Modal.Body>
          </Modal>
        )}

        {/* Save Filters */}
        {saveFilters && (
          <Modal
            show={saveFilters}
            onHide={() => setSaveFilters(!saveFilters)}
            centered
            className="defaultThemeModal saveFiltersModal mobile-defaultThemeModal centeredModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={Success} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters Reset Successfully!
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Summary */}
      <div className="accordion" id="unmatchedFilters">
        <div className="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="unmatchedFiltersHeading"
          >
            <h6 className="fontWeight-600 colorBlack">Summary</h6>
            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#unmatchedFiltersCollapse"
              aria-expanded="true"
              aria-controls="unmatchedFiltersCollapse"
            >
              <span className="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>
          <div
            id="unmatchedFiltersCollapse"
            className="accordion-collapse collapse show"
            aria-labelledby="unmatchedFiltersHeading"
            data-bs-parent="#unmatchedFilters"
          >
            <div className="accordion-body">
              <div className="summaryRow">
                <div className="summaryTableBox">
                  <p className="fontWeight-600 fontSize12">Severity</p>
                  <table className="table table-borderless summaryContentLeft">
                    <thead>
                      <tr>
                        <th scope="col">High</th>
                        <th scope="col">Medium</th>
                        <th scope="col">Low</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="summaryRed">231</td>
                        <td className="summaryBlue">231</td>
                        <td className="summaryYellow">231</td>
                        <td>231</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="summaryTableBox">
                  <p className="fontWeight-600 fontSize12">All Tickets</p>
                  <table className="table table-borderless summaryContentCenter">
                    <thead>
                      <tr>
                        <th scope="col">&lt;1h</th>
                        <th scope="col">1h</th>
                        <th scope="col">2h</th>
                        <th scope="col">4h</th>
                        <th scope="col">8h</th>
                        <th scope="col">1d</th>
                        <th scope="col">3d</th>
                        <th scope="col">5d</th>
                        <th scope="col">1w</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>73</td>
                        <td>31</td>
                        <td>32</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="summaryTableBox">
                  <p className="fontWeight-600 fontSize12">My Follow-up</p>
                  <table className="table table-borderless summaryContentCenter">
                    <thead>
                      <tr>
                        <th scope="col">-2h</th>
                        <th scope="col">-1h</th>
                        <th scope="col">0h</th>
                        <th scope="col">15m</th>
                        <th scope="col">30m</th>
                        <th scope="col">1h</th>
                        <th scope="col">2h</th>
                        <th scope="col">4h</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>73</td>
                        <td>31</td>
                        <td>32</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom ticketCentreTableHeader">
        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2 ticketCenterTableHeadTop">
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
              <div className="clientNameSelect addToWorkList">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  isSearchable={false}
                  classNamePrefix="reactSelectBox"
                  placeholder="Add to worklist"
                />
              </div>
              <button type="button" className="btnPrimary ms-2">
                Add
              </button>
              <button type="button" className="btnPrimaryOutline ms-2">
                Clear
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 mb-2 ticketCentreTableHeadBottom">
            <div className="clientNameSelect addToWorkList ms-0">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
                classNamePrefix="reactSelectBox ms-0"
                placeholder="Add to worklist"
              />
            </div>
            <div className="d-flex">
              <button type="button" className="btnPrimary ms-2">
                Add
              </button>
              <button type="button" className="btnPrimaryOutline ms-2">
                Clear
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive tableContentBox ticketCentreTableResponsive">
            <table className="table table-striped table-hover table-borderless align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "5.27%" }}>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(event) => selectAll(event.target.checked)}
                        checked={checkedAll}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        S. No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </label>
                    </div>
                  </th>
                  <th scope="col" style={{ width: "6.64%" }}>
                    Ticket ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "5.89%" }}>
                    Site ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "2.3%" }}></th>
                  <th scope="col" style={{ width: "6.46%" }}>
                    ATM ID
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "4.38%" }}>
                    Bank
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "6.33%" }}>
                    CRA
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "5.04%" }}>
                    CD Make
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "4.42%" }}>
                    Oueue Type
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "9.96%" }}>
                    Call Type
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "5.18%" }}>
                    Assianed To
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "4.82%" }}>
                    Worklist
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "6.95%" }}>
                    Call Date
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "4.82%" }}>
                    Ageing
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "5.49%" }}>
                    Last Updated
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "3.58%" }}>
                    ETA Date
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "2.96%" }}>
                    Edit
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                  <th scope="col" style={{ width: "8.75%" }}>
                    Comment
                    <Link to="/">
                      <span className="icon-Sort-icon"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr1"
                        onChange={() => toggleCheck("nr1")}
                        checked={checked["nr1"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <div className="circleNo"></div>
                        </OverlayTrigger>
                        1
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                      <div
                        className={
                          toggleState === true
                            ? "tableToggle tableToggle-active"
                            : "tableToggle"
                        }
                        onClick={() => {
                          toggleTab();
                        }}
                      >
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>
                <tr>
                  <td
                    colSpan="18"
                    className={
                      toggleState === true ? "lightPinkNestedTable" : "d-none"
                    }
                  >
                    <table className="table table-striped table-hover table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: "5.27%" }}></th>
                          <th scope="col" style={{ width: "6.64%" }}>
                            Ticket ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "5.89%" }}>
                            Oueue Type
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "2.3%" }}></th>
                          <th scope="col" style={{ width: "6.46%" }}>
                            Call Type
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "4.38%" }}>
                            Assigned To
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "6.33%" }}>
                            Worklist
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "5.04%" }}>
                            Call Date
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "4.42%" }}>
                            ETA Date
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "9.96%" }}>
                            Ageing
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "5.18%" }}>
                            Last Updated
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col" style={{ width: "4.82%" }}></th>
                          <th scope="col" style={{ width: "6.95%" }}></th>
                          <th scope="col" style={{ width: "4.82%" }}></th>
                          <th scope="col" style={{ width: "5.49%" }}></th>
                          <th scope="col" style={{ width: "3.58%" }}></th>
                          <th scope="col" style={{ width: "2.96%" }}></th>
                          <th scope="col" style={{ width: "8.75%" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>8106034</td>
                          <td>Cash Management</td>
                          <td></td>
                          <td>Cash Low</td>
                          <td>ganesh.modi</td>
                          <td>ganesh.modi</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td>ENR</td>
                          <td>6D:8H</td>
                          <td>Never</td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>8106034</td>
                          <td>Cash Management</td>
                          <td></td>
                          <td>Cash Low</td>
                          <td>ganesh.modi</td>
                          <td>ganesh.modi</td>
                          <td>21-Mar-2022, 17:44</td>
                          <td>ENR</td>
                          <td>6D:8H</td>
                          <td>Never</td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td> </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr2"
                        onChange={() => toggleCheck("nr2")}
                        checked={checked["nr2"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoTwo"></div>2
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr3"
                        onChange={() => toggleCheck("nr3")}
                        checked={checked["nr3"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoThree"></div>3
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr4"
                        onChange={() => toggleCheck("nr4")}
                        checked={checked["nr4"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoFour"></div>4
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr5"
                        onChange={() => toggleCheck("nr5")}
                        checked={checked["nr5"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoFive"></div>5
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr6"
                        onChange={() => toggleCheck("nr6")}
                        checked={checked["nr6"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoSix"></div>6
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr7"
                        onChange={() => toggleCheck("nr7")}
                        checked={checked["nr7"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <div className="circleNo circleNoSeven">!</div>7
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr8"
                        onChange={() => toggleCheck("nr8")}
                        checked={checked["nr8"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <span className="icon-Vector mr-9"></span>8
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr9"
                        onChange={() => toggleCheck("nr9")}
                        checked={checked["nr9"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <span className="icon-Vector-1 mr-9"></span>9
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
                </tr>

                <tr>
                  <td>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckOne"
                        name="nr10"
                        onChange={() => toggleCheck("nr10")}
                        checked={checked["nr10"]}
                      />
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor="flexCheckOne"
                      >
                        <span className="icon-Vector-2 mr-9"></span>10
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ps-18">
                      <p className="ticketIdBox">P</p>
                      8106034
                      <div className="tableToggle">
                        <span className="icon-Icon-2"></span>
                      </div>
                    </div>
                  </td>
                  <td>S1AC0114308</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <p className="atmIdBox">F</p>
                    </div>
                  </td>
                  <td>SPSBL071301</td>
                  <td>PSB</td>
                  <td>Branch</td>
                  <td>LIPI</td>
                  <td>Monitoring</td>
                  <td className="callTypeBox">ATM Down - Actionable query</td>
                  <td>ganesh.modi</td>
                  <td>ganesh.modi</td>
                  <td>21-Mar-2022, 17:44</td>
                  <td>0H:4M</td>
                  <td>0H:2M</td>
                  <td>ENR</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={editButton}
                    >
                      <div className="d-flex justify-content-center">
                        <button
                          className="editYellowBox"
                          onClick={() => setEditModal(!editModal)}
                        >
                          <span className="icon-Vector-11"></span>
                        </button>
                      </div>
                    </OverlayTrigger>
                  </td>
                  <td>abishek.dabholkar added comment as CDF ISSUE</td>
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

        {/* Reset Filters */}
        {editModal && (
          <Modal
            show={editModal}
            onHide={() => setEditModal(!editModal)}
            centered
            className="defaultThemeModal saveFiltersModal errorFiltersModal centeredModal"
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
      </div>
    </div>
  );
};

export default TicketWindow;
