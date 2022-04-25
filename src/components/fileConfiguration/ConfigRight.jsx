import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];
const ConfigRight = () => {
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

  return (
    <div className="configRight">
      {/* Config Left Top */}
      <div className="configLeftTop">
        {/* BreadCrumb */}
        <div className="configRightHead d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center">
            <Link to="/">
              <p className="fontSize12 colorPrimaryDefault">Home</p>
            </Link>
            <span>
              <svg
                width="8"
                height="auto"
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
                width="8"
                height="auto"
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

        <div className="lightBlueBox configTopBlueBoxRight">
          <div className="d-flex mb-12">
            <div className="configDotLeftContent fontSize14">Client Name</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">
              Sri Vasavamba Cooperative Urban Bank Ltd
            </div>
          </div>

          <div className="d-flex mb-12">
            <div className="configDotLeftContent fontSize14">Format No.</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">1</div>
          </div>

          <div className="d-flex mb-12">
            <div className="configDotLeftContent fontSize14">Format Type</div>
            <div className="configDotCenterContent fontSize14">:</div>
            <div className="configDotRightContent fontSize14-m">Current</div>
          </div>

          <div className="d-flex">
            <div className="configDotLeftContent fontSize14">
              Format set to other client
            </div>
            <div className="configDotCenterContent fontSize14 d-flex align-items-center">
              :
            </div>
            <div className="configDotRightContent">
              <div className="clientNameSelect">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  id="clientName"
                  placeholder="Shri Vasavamba..."
                  classNamePrefix="reactSelectBox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="configBottomHeadingBoxRight configBottomHeadingBox"></div>

      {/*  Bottom Content */}
      <div className="configLeftBottom configRightBottom">
        <div className="tableBorderBox">
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

            <div>
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
            <table className="table table-striped table-hover table-borderless align-middle configTableRight">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "24.95%" }}>
                    Field Name
                  </th>
                  <th scope="col" style={{ width: "33.49%" }}>
                    Start Position
                  </th>
                  <th scope="col" style={{ width: "28.59%" }}>
                    Field Length
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="154"
                      className="form-control is-invalid"
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      class="invalid-feedback text-start mt-0 font-size9"
                    >
                      Enter a correct input
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Terminal ID </td>
                  <td>
                    <input type="number" name="" id="" placeholder="154" />
                  </td>
                  <td>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="terminalInputTwo"
                      placeholder="8"
                    />
                  </td>
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
                    <a
                      className="page-link previousPagination"
                      href="/"
                      aria-label="Previous"
                    >
                      <span
                        class="icon-Dropdown-Arrow"
                        style={{ fontSize: "12px" }}
                      ></span>
                      <span>First</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link paginationBottom" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link paginationBottom" href="/">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link nextPagination"
                      href="/"
                      aria-label="Next"
                    >
                      <span>Last</span>
                      <span
                        class="icon-Dropdown-Arrow-1"
                        style={{ fontSize: "12px" }}
                      ></span>
                    </a>
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

export default ConfigRight;
