import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const CbrMainWindow = () => {
  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [channelType, setChannelType] = useState(false);
  const changeChannelType = () => setChannelType(true);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="cbrContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 colorBlack fileConfigHead">
          Online CBR Entry
        </h5>

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
            <p className="fontSize12 colorPrimaryDefault">CBR</p>
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
            <p className="fontSize12">Online CBR Entry</p>
          </Link>
        </div>
      </div>

      {/* Top Content */}
      <div className="accordion" id="onlineCbrEntryTop">
        <div className="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="cbrHeadingOne"
          >
            <h6 className="fontWeight-600 colorBlack">Filters</h6>
            <button
              className="d-flex justify-content-center align-items-center allFiltersBtn btn p-0 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#cbrCollapseOne"
              aria-expanded="true"
              aria-controls="cbrCollapseOne"
            >
              <span class="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>
          <div
            id="cbrCollapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="cbrHeadingOne"
            data-bs-parent="#onlineCbrEntryTop"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col">
                  <label htmlFor="atmId">ATM ID</label>
                  <Select
                    defaultValue={clientName}
                    onChange={() => {
                      setClientName();
                      changeClientName();
                    }}
                    options={options}
                    id="atmId"
                    classNamePrefix="reactSelectBox"
                    placeholder="Please select"
                  />
                  {clientName && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="atmLocation">ATM Location</label>
                  <Select
                    defaultValue={channelType}
                    onChange={() => {
                      setChannelType();
                      changeChannelType();
                    }}
                    options={options}
                    id="atmLocation"
                    classNamePrefix="reactSelectBox"
                    placeholder="Please select"
                    isDisabled ={true}
                  />
                  {channelType && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="date">Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate"
                    id="date"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="time">Time</label>
                  <input
                    type="text"
                    name="time"
                    id="time"
                    className="inputTextBox"
                    placeholder="HH:MM"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="previousEodDate">Previous EOD Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate"
                    id="previousEodDate"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="previousEodTime">Previous EOD Time</label>
                  <input
                    type="text"
                    name="previousEodTime"
                    id="previousEodTime"
                    className="inputTextBox"
                    placeholder="HH:MM"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="nextEodDate">Next EOD Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="unmatchedDate"
                    id="nextEodDate"
                  />
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="nextEodTime">Next EOD Time</label>
                  <input
                    type="text"
                    name="nextEodTime"
                    id="nextEodTime"
                    className="inputTextBox"
                    placeholder="HH:MM"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="accordion cbrAccordionBottom" id="onlineCbrEntryBottom">
        {/* ATM Counters */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="onlineCbrheadingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#onlineCbrCollapseOne"
              aria-expanded="false"
              aria-controls="onlineCbrCollapseOne"
            >
              ATM Counters
            </button>
          </h2>
          <div
            id="onlineCbrCollapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="onlineCbrheadingOne"
            data-bs-parent="#onlineCbrEntryBottom"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              {/* Table */}
              <div className="table-responsive atmCountersTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-0">
                        Denomination
                      </th>
                      <th scope="col">ATM Opening Balance</th>
                      <th scope="col">Dispense Counter</th>
                      <th scope="col">Deposit Counter</th>
                      <th scope="col">
                        (By Receipt) <br /> Remaining Counter
                      </th>
                      <th scope="col" className="pe-0">
                        Divert Counter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-0">
                        100
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        200
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        500
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        2000
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        Total Amount
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        Total Dump Counter
                      </th>
                      <td colspan="5" className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Replenishment Counters */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="onlineCbrheadingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#onlineCbrCollapseTwo"
              aria-expanded="false"
              aria-controls="onlineCbrCollapseTwo"
            >
              Replenishment Counters
            </button>
          </h2>
          <div
            id="onlineCbrCollapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="onlineCbrheadingTwo"
            data-bs-parent="#onlineCbrEntryBottom"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              {/* Table */}
              <div className="table-responsive atmCountersTable replenishmentCountersTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-0">
                        Denomination
                      </th>
                      <th scope="col">Amount Replenishment</th>
                      <th scope="col">Amount Returned</th>
                      <th scope="col" className="pe-0">
                        New Bal. As Per ATM Counter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-0">
                        100
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        200
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        500
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        2000
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="ps-0">
                        Total Amount
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center fontSize14 letterSpacing-2 replenishmentText">
                Note: Amount Replenishment = New Amount without adding remaining
                counter
              </p>
            </div>
          </div>
        </div>

        {/* Physical Counters and GL Balance */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="onlineCbrheadingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#onlineCbrCollapseThree"
              aria-expanded="false"
              aria-controls="onlineCbrCollapseThree"
            >
              Physical Counters and GL Balance
            </button>
          </h2>
          <div
            id="onlineCbrCollapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="onlineCbrheadingThree"
            data-bs-parent="#onlineCbrEntryBottom"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              {/* Table */}
              <div className="table-responsive atmCountersTable physicalCountersTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-0">
                        Denomination
                      </th>
                      <th scope="col">Remaining Cash From Cash Cassettes</th>
                      <th scope="col">Remaining Cash From Purge-Bin</th>
                      <th scope="col">Total Remaining Cash From ATM</th>
                      <th scope="col" className="pe-0">
                        Physical Cash Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-0">
                        100
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        200
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        500
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        2000
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        Total Amount
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        GL Balance
                      </th>
                      <td colspan="4" className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        CD Balance
                      </th>
                      <td colspan="4" className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Counters */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="onlineCbrheadingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#onlineCbrCollapseFour"
              aria-expanded="false"
              aria-controls="onlineCbrCollapseFour"
            >
              Switch Counters
            </button>
          </h2>
          <div
            id="onlineCbrCollapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="onlineCbrheadingFour"
            data-bs-parent="#onlineCbrEntryBottom"
          >
            <div className="accordion-body">
              <div className="hrGreyLine"></div>
              {/* Table */}
              <div className="table-responsive atmCountersTable">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-0">
                        Denomination
                      </th>
                      <th scope="col">Opening Counter</th>
                      <th scope="col">Dispense</th>
                      <th scope="col">Deposit</th>
                      <th scope="col">Remaining Counter</th>
                      <th scope="col" className="pe-0">
                        Closing Balance Counter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-0">
                        100
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        200
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        500
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        2000
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        Total Amount
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* GL Difference with Physical Cash */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="onlineCbrheadingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#onlineCbrCollapseFive"
              aria-expanded="false"
              aria-controls="onlineCbrCollapseFive"
            >
              GL Difference with Physical Cash
            </button>
          </h2>
          <div
            id="onlineCbrCollapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="onlineCbrheadingFive"
            data-bs-parent="#onlineCbrEntryBottom"
          >
            <div className="accordion-body physicalCashBox">
              <div className="hrGreyLine"></div>
              <div className="row configSelectBoxTop">
                <div className="col clientNameSelect">
                  <label htmlFor="physcialCashDifference">
                    GL & Physical Cash Difference
                  </label>
                  <input
                    type="number"
                    name="physcialCashDifference"
                    id="physcialCashDifference"
                    className="inputNumberBox"
                    placeholder="0"
                  />
                </div>
                <div className="col clientNameSelect">
                  <label htmlFor="physcialCashDifference">
                    GL & Physical Cash Difference
                  </label>
                  <input
                    type="number"
                    name="physcialCashDifference"
                    id="physcialCashDifference"
                    className="inputNumberBox"
                    placeholder="0"
                  />
                </div>
                <div className="col clientNameSelect">
                  <label htmlFor="physcialCashDifference">
                    GL & Physical Cash Difference
                  </label>
                  <input
                    type="number"
                    name="physcialCashDifference"
                    id="physcialCashDifference"
                    className="inputNumberBox"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="hrGreyLine"></div>
              <p className="text-center fontWeight-500 fontSize16 letterSpacing-2 physicalCashHeading">
                Difference between ATM Counters & Physical Counters
              </p>
              {/* Table */}
              <div className="table-responsive atmCountersTable replenishmentCountersTable">
                <table className="table table-borderless mt-0">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-0">
                        Denomination
                      </th>
                      <th scope="col">Overage</th>
                      <th scope="col">Shortage</th>
                      <th scope="col" className="pe-0">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-0">
                        100
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        200
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        500
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        2000
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="ps-0">
                        Total Amount
                      </th>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          placeholder="0"
                          disabled
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="number"
                          name=""
                          id=""
                          className="inputNumberBox inputTotalAmount"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center btnsBtm">
                <button type="button" className="btnPrimaryOutline">
                  Reset
                </button>
                <button type="button" className="btnPrimary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbrMainWindow;
