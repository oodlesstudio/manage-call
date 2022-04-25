import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import Excel from "../../images/common/excel.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const fileTypes = ["XLS", "XLSX"];

const TerminalMainWindow = () => {
  // Select
  const [selectedOption, setSelectedOption] = useState(null);

  // Drop File
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  // Tooltip
  const renderTooltipBranch = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Download Branch Master Template
    </Tooltip>
  );

  const renderTooltipTerminal = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Download Terminal Master Template
    </Tooltip>
  );

  return (
    <div className="terminalContainer">
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Branch/Terminal Registration
        </h5>

        {/* BreadCrumb */}
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
            <p className="fontSize12 colorPrimaryDefault">Client Management</p>
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
            <p className="fontSize12">Branch/Terminal Registration</p>
          </Link>
        </div>
      </div>

      <div className="tableBorderBox terminalWhiteBox d-flex justify-content-center w-100">
        <div className="terminalSmallBox">
          <div className="clientNameSelect">
            <label htmlFor="clientNameRegistration">Client Name</label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              id="clientNameRegistration"
              classNamePrefix="reactSelectBox"
              placeholder="Sri Vasavamba Cooperative Urban Bank Ltd"
            />
          </div>

          {/* Branch Box */}
          <div className="branchMasterBox">
            <p className="fontSize14 fontWeight-500 letterSpacing-2 mb-1">
              Branch Master
            </p>
            <div className="d-flex align-items-center">
              <div className="lightBlueBox text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <span>
                    <svg
                      width="20"
                      height="auto"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="dropFileIcon"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.75 4.66667C8.75 4.02208 9.22017 3.5 9.8 3.5H23.45C24.0298 3.5 24.5 4.02208 24.5 4.66667V23.3333C24.5 23.9779 24.0298 24.5 23.45 24.5H9.8C9.22017 24.5 8.75 23.9779 8.75 23.3333V19.8333H4.55C3.97017 19.8333 3.5 19.3112 3.5 18.6667V9.33333C3.5 8.68875 3.97017 8.16667 4.55 8.16667H8.75V4.66667ZM16.3333 8.16667V4.66667H9.91667V8.16667H16.3333ZM17.5 4.66667V8.16667H23.3333V4.66667H17.5ZM16.3333 9.33333H14V13.4167H16.3333V9.33333ZM17.5 13.4167V9.33333H23.3333V13.4167H17.5ZM16.3333 14.5833H14V18.6667H16.3333V14.5833ZM17.5 18.6667V14.5833H23.3333V18.6667H17.5ZM16.3333 19.8333H9.91667V23.3333H16.3333V19.8333ZM17.5 23.3333V19.8333H23.3333V23.3333H17.5ZM12.8333 9.33333V18.6667H4.55V9.33333H12.8333ZM6.5485 11.0833H7.80092L8.81767 13.2732L9.89158 11.0833H11.0617L9.45 14L11.0991 16.9167H9.86417L8.75642 14.6242L7.65392 16.9167H6.40092L8.07742 13.9895L6.5485 11.0833Z"
                        fill="#5C5C5C"
                      />
                    </svg>
                  </span>
                  <p className="fontSize14 dropFileColor ms-1">
                    Drop your .xls file here
                  </p>
                </div>
                <p className="fontSize14 dropFileColor my-1">or</p>
                <div className="position-relative">
                  <p className="fontSize14 fontWeight-500 colorPrimaryDefault position-absolute browseFileText">
                    Browse File
                  </p>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                  <p>{file ? `File name: ${file[0].name}` : ""}</p>
                </div>
              </div>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipBranch}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Terminal Box */}
          <div className="terminalMasterBox">
            <p className="fontSize14 fontWeight-500 letterSpacing-2 mb-1">
              Terminal Master
            </p>
            <div className="d-flex align-items-center">
              <div className="lightBlueBox text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <span>
                    <svg
                      width="20"
                      height="auto"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="dropFileIcon"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.75 4.66667C8.75 4.02208 9.22017 3.5 9.8 3.5H23.45C24.0298 3.5 24.5 4.02208 24.5 4.66667V23.3333C24.5 23.9779 24.0298 24.5 23.45 24.5H9.8C9.22017 24.5 8.75 23.9779 8.75 23.3333V19.8333H4.55C3.97017 19.8333 3.5 19.3112 3.5 18.6667V9.33333C3.5 8.68875 3.97017 8.16667 4.55 8.16667H8.75V4.66667ZM16.3333 8.16667V4.66667H9.91667V8.16667H16.3333ZM17.5 4.66667V8.16667H23.3333V4.66667H17.5ZM16.3333 9.33333H14V13.4167H16.3333V9.33333ZM17.5 13.4167V9.33333H23.3333V13.4167H17.5ZM16.3333 14.5833H14V18.6667H16.3333V14.5833ZM17.5 18.6667V14.5833H23.3333V18.6667H17.5ZM16.3333 19.8333H9.91667V23.3333H16.3333V19.8333ZM17.5 23.3333V19.8333H23.3333V23.3333H17.5ZM12.8333 9.33333V18.6667H4.55V9.33333H12.8333ZM6.5485 11.0833H7.80092L8.81767 13.2732L9.89158 11.0833H11.0617L9.45 14L11.0991 16.9167H9.86417L8.75642 14.6242L7.65392 16.9167H6.40092L8.07742 13.9895L6.5485 11.0833Z"
                        fill="#5C5C5C"
                      />
                    </svg>
                  </span>
                  <p className="fontSize14 dropFileColor ms-1">
                    Drop your .xls file here
                  </p>
                </div>
                <p className="fontSize14 dropFileColor my-1">or</p>
                <div className="position-relative">
                  <p className="fontSize14 fontWeight-500 colorPrimaryDefault position-absolute browseFileText">
                    Browse File
                  </p>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                  <p>{file ? `File name: ${file[0].name}` : ""}</p>
                </div>
              </div>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltipTerminal}
              >
                <button type="button" className="iconButtonBox">
                  <img src={Excel} alt="Excel" />
                </button>
              </OverlayTrigger>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center terminalBtnBox">
            <button className="btnPrimaryOutline">Cancel</button>
            <button className="btnPrimary ms-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalMainWindow;
