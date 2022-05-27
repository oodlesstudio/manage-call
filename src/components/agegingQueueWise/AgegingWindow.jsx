import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const AgegingWindow = () => {
  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [selectedOption, setSelectedOption] = useState(null);

  // Modals
  const [referenceNo, setReferenceNo] = useState(false);

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

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  const [page, setPage] = useState("aqw");

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {page === "aqw" && (
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              Ageing - Queue Wise
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
              <p className="fontSize12">Ageing - Queue Wise</p>
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

          {/* Bottom Content */}
          <div className="configLeftBottom ticketCentreTableHeader">
            <div className="tableBorderBox">
              <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                <div className="clientNameSelect d-flex">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate atmDownCalendar"
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate ms-2 atmDownCalendar"
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
                </div>
              </div>

              <div className="atmDownHead">ATM DOWN</div>

              {/* Table */}
              <div className="table-responsive tableContentBox atmDownTableBox">
                <table className="table table-striped table-hover table-borderless align-middle queueWiseTableResponsive">
                  <thead>
                    <tr>
                      <th scope="col" rowSpan="2" className="ps-0">
                        Queue Type
                      </th>
                      <th scope="col">&#60;=24 Hrs</th>
                      <th scope="col">&#62;24 Hrs</th>
                      <th scope="col">&#62;48 Hrs</th>
                      <th scope="col">&#62;72 Hrs</th>
                      <th scope="col">&#62;96 Hrs</th>
                      <th scope="col">&#62;120 Hrs</th>
                      <th scope="col">&#62;240 Hrs</th>
                      <th scope="col">&#62;360 Hrs</th>
                      <th scope="col">&#62;480 Hrs</th>
                      <th scope="col">&#62;600 Hrs</th>
                      <th scope="col">&#62;720 Hrs</th>
                      <th scope="col" className="borderBottomRightRadius"></th>
                    </tr>

                    <tr>
                      <th
                        scope="col"
                        className="borderTopLeftRadius borderBottomLeftRadius ps-0"
                      >
                        &#60;=1 D
                      </th>
                      <th scope="col">&#62;1 D</th>
                      <th scope="col">&#62;2 D</th>
                      <th scope="col">&#62;3 D</th>
                      <th scope="col">&#62;4 D</th>
                      <th scope="col">&#62;5 D</th>
                      <th scope="col">&#62;10 D</th>
                      <th scope="col">&#62;15 D</th>
                      <th scope="col">&#62;20 D</th>
                      <th scope="col">&#62;25 D</th>
                      <th scope="col">&#62;30 D</th>
                      <th scope="col" className="borderTopRightRadius">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Monitoring</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTwo"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxThree"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFour"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFive"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSix"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxEight"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Field Service</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTwo"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxEight"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxEleven"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Cash Management</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTwo"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxThree"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFour"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSix"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Monitoring-SLM</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTwo"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxThree"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFour"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSix"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Monitoring ( CRM/Bank )</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFour"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Flagged</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxNine"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Network</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxFour"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">TIS</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxSeven"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxEleven"
                        >
                          1
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Grand Total</th>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPage("fg")}
                          className="oneGreyBox greyBoxTen"
                        >
                          1
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Save Filters */}
            {referenceNo && (
              <Modal
                show={referenceNo}
                onHide={() => setReferenceNo(!referenceNo)}
                centered
                className="defaultThemeModal saveFiltersModal unmatchedTableModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fontSize16-sm letterSpacing-2">
                    Transaction ID Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      EJ Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      SW Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      Network Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      GL Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      )}

      {page === "fg" && (
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              History
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
              <Link to="/ageging-queue-wise">
                <p className="fontSize12 colorPrimaryDefault">
                  Ageing - Queue Wise
                </p>
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
              <p className="fontSize12">File Configuration</p>
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

          {/* Filter */}
          <div className="accordion" id="unmatchedFilters">
            <div className="accordion-item">
              <div
                className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
                id="unmatchedFiltersHeading"
              >
                <h6 className="fontWeight-600 colorBlack">Filter</h6>
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
                  <div className="hrGreyLine"></div>
                  <div className="configSelectBoxTop row">
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

                    <div className="clientNameSelect col">
                      <label htmlFor="clientName">Call Type</label>
                      <Select
                        defaultValue={selectedOption}
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

                    <div className="clientNameSelect col">
                      <label htmlFor="clientName">ATM Status</label>
                      <Select
                        defaultValue={selectedOption}
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="configLeftBottom ticketCentreTableHeader">
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
              <div className="table-responsive tableContentBox">
                <table className="table table-striped table-hover table-borderless align-middle mb-0 aqw-table queueWiseTableResponsive">
                  <thead>
                    <tr>
                      <th scope="col">
                        S. No.
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Ticket ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        ATM ID
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Bank
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        City,State
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        CRA
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        CD Make
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Call Type
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Assianed To
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Call Date
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Close Date
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Ageing
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="circleNo"></div>1
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Karnal, Punjab</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="circleNo circleNoTwo"></div>2
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Thrissur, Kerala</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="circleNo circleNoFive"></div>5
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Daltangunj, Jharkhand</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="circleNo circleNoSix"></div>6
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Coochbebhar, West Bengal</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="circleNo circleNoSeven">!</div>7
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Coochbebhar, West Bengal</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="icon-Vector mr-9"></span>8
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Coochbebhar, West Bengal</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="icon-Vector-1 mr-9"></span>9
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Coochbebhar, West Bengal</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="icon-Vector-2 mr-9"></span>10
                        </div>
                      </td>
                      <td>8106034</td>
                      <td>SPSBL071301</td>
                      <td>PSB</td>
                      <td>Coochbebhar, West Bengal</td>
                      <td>Branch</td>
                      <td>LIPI</td>
                      <td className="callTypeBox">Supervisory</td>
                      <td>ganesh.modi</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>21-Mar-2022, 17:44</td>
                      <td>0H:4M</td>
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

            {/* Save Filters */}
            {referenceNo && (
              <Modal
                show={referenceNo}
                onHide={() => setReferenceNo(!referenceNo)}
                centered
                className="defaultThemeModal saveFiltersModal unmatchedTableModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fontSize16-sm letterSpacing-2">
                    Transaction ID Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      EJ Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      SW Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      Network Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      GL Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgegingWindow;
