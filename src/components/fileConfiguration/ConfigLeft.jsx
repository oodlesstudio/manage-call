import React, { useState } from "react";
import Select from "react-select";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const ConfigTableLeftEntries = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const ConfigLeft = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [resetFilters, setResetFilters] = useState(false);
  const [saveFilters, setSaveFilters] = useState(false);

  const [showFilters, setShowFilters] = useState(false);

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [logType, setLogType] = useState(false);
  const changeLogType = () => setLogType(true);

  const [channelType, setChannelType] = useState(false);
  const changeChannelType = () => setChannelType(true);

  const [modType, setModType] = useState(false);
  const changeModType = () => setModType(true);

  const [selectError, setSelectError] = useState(false);
  const changeSelectError = () => setSelectError(true);

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

  // Tooltip Table Content
  const tableTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Sri Vasavamba Cooperative Urban Bank Ltd
    </Tooltip>
  );

  return (
    <div className="configLeft">
      {/* Config Left Top */}
      <div className="configLeftTop">
        <div className="configLeftHead d-flex justify-content-between align-items-center">
          <h5 className="fontWeight-600 fileConfigHead colorBlack">
            File Configuration
          </h5>
          <div className="d-flex align-items-center breadCrumbLeft">
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Home</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Configuration</p>
            </Link>
            <span>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1"
              >
                <path
                  d="M3 4L7 8L3 12"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="breadcrumbIcon"
                />
              </svg>
            </span>
            <Link to="/">
              <p className="fontSize12">File Configuration</p>
            </Link>
          </div>
        </div>

        <div className="position-relative">
          <div className="lightBlueBox configTopBlueBox">
            <div className="d-flex justify-content-between align-items-center configLeftFilters">
              <h6 className="fontWeight-600 colorBlack">Filters</h6>
              <button
                type="button"
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                onClick={() => setShowFilters(true)}
              >
                <span class="icon-Filter-Icon"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  All Filters
                </span>
              </button>
            </div>
            <div className="hrGreyLine"></div>
            <div className="configSelectBoxTop row">
              <div className="clientNameSelect col">
                <label htmlFor="clientName">Client Name</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setClientName();
                    changeClientName();
                  }}
                  options={options}
                  id="clientName"
                  classNamePrefix="reactSelectBox"
                  placeholder="Shri Vasavamba..."
                />
                {clientName && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="logType">Log Type</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setLogType();
                    changeLogType();
                  }}
                  options={options}
                  id="logType"
                  classNamePrefix="reactSelectBox"
                  placeholder="CBS"
                />
                {logType && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="channelType">Channel Type</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setChannelType();
                    changeChannelType();
                  }}
                  options={options}
                  id="channelType"
                  classNamePrefix="reactSelectBox"
                  placeholder="ATM"
                />
                {channelType && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>
              <div className="clientNameSelect col">
                <label htmlFor="clientName">Mode Type</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={() => {
                    setModType();
                    changeModType();
                  }}
                  options={options}
                  id="clientName"
                  classNamePrefix="reactSelectBox"
                  placeholder="ACQUIR"
                />
                {modType && (
                  <p className="text-danger font-size9">
                    Enter a correct input
                  </p>
                )}
              </div>
            </div>

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
                Save
              </button>
            </div>
          </div>

          {showFilters ? (
            <div className="lightBlueBox configTopBlueBox absoluteFiltersBox">
              <div className="d-flex justify-content-between align-items-center configLeftFilters">
                <h6 className="fontWeight-600 colorBlack">Filters</h6>
                <button
                  type="button"
                  className="allFiltersBtn"
                  onClick={() => setShowFilters(false)}
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 6L18 18"
                        stroke="#004BBD"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M18 6L6 18"
                        stroke="#004BBD"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="hrGreyLine"></div>

              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Client Name</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Shri Vasavamba..."
                  />
                  {selectError && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">Log Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="CBS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Channel Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="ATM"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Mode Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="ACQUIR"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">File Type</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Plain Text"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Extention</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder=".XLS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Vendor</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="A"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">File Prefix</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    id="channelType"
                    classNamePrefix="reactSelectBox"
                    placeholder="PROCESS"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Cut Off Time</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="11:59"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Start Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="0"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">End Line No.</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="filtersInputNumber"
                    placeholder="420"
                  />
                </div>
              </div>

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
                  Save
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* Reset Filters */}
        {resetFilters && (
          <Modal
            show={resetFilters}
            onHide={() => setResetFilters(!resetFilters)}
            centered
            className="defaultThemeModal saveFiltersModal errorFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Apply Theme
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
            className="defaultThemeModal saveFiltersModal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="fontSize16-sm letterSpacing-2">
                Filters
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={Success} alt="Success" />
              <p className="letterSpacing-2 colorBlack">
                Filters Applied Successfully!
              </p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      {/* Config Left Bottom */}
      <div className="configLeftBottom">
        <div className="configBottomHeadingBox">
          <h6 className="fontWeight-600 colorBlack">Configured Format</h6>
        </div>

        <div className="tableBorderBox">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
            <div className="clientNameSelect configFormatEntities">
              <Select
                defaultValue={selectedOption}
                onChange={() => {
                  setSelectedOption();
                  changeSelectError();
                }}
                options={ConfigTableLeftEntries}
                isSearchable={false}
                placeholder="10 Entries"
                classNamePrefix="reactSelectBox"
              />
              {selectError && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>
            <div className="d-flex">
              <div className="form-group has-search">
                <span class="icon-Search form-control-feedback"></span>
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
          <div className="table-responsive tableContentBox">
            <table className="table table-striped table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "22%" }}>
                    Client Name
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Log Type
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Channel
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    File Prefix
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Mode
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    Vendor Name
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                  <th scope="col">
                    File Extention
                    <Link to="/">
                      <span class="icon-Table-Sorting"></span>
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <OverlayTrigger
                      placement="bottom"
                      delay={{ show: 250, hide: 400 }}
                      overlay={tableTooltip}
                    >
                      <p className="tableTextInner">
                        Sri Vasavamba Cooperative Urban Bank Ltd
                      </p>
                    </OverlayTrigger>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">Punjab National Bank</p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">
                      Sri Vasavamba Cooperative Urban Bank Ltd
                    </p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">Punjab National Bank</p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">
                      Sri Vasavamba Cooperative Urban Bank Ltd
                    </p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">Punjab National Bank</p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">
                      Sri Vasavamba Cooperative Urban Bank Ltd
                    </p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">Punjab National Bank</p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">
                      Sri Vasavamba Cooperative Urban Bank Ltd
                    </p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
                <tr>
                  <td>
                    <p className="tableTextInner">Punjab National Bank</p>
                  </td>
                  <td>CBS</td>
                  <td>POS</td>
                  <td>RGCS</td>
                  <td>ISSUER</td>
                  <td>PROCESSWARE</td>
                  <td>.txt</td>
                </tr>
              </tbody>
            </table>
          </div>

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
                        class="icon-Dropdown-Arrow"
                        style={{ fontSize: "12px" }}
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
                        class="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigLeft;
