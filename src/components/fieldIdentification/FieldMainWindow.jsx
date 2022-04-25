import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];

const FieldMainWindow = () => {
  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [logType, setLogType] = useState(false);
  const changeLogType = () => setLogType(true);

  const [channelType, setChannelType] = useState(false);
  const changeChannelType = () => setChannelType(true);

  const [modType, setModType] = useState(false);
  const changeModType = () => setModType(true);

  return (
    <div className="configLeft identificationContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Field Identification Config
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
            <p className="fontSize12">Field Identification Config</p>
          </Link>
        </div>
      </div>

      {/* Top Content */}
      <div class="accordion" id="unmatchedFilters">
        <div class="accordion-item">
          <div
            className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
            id="unmatchedFiltersHeading"
          >
            <h6 className="fontWeight-600 colorBlack">Filters</h6>
            <button
              className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#unmatchedFiltersCollapse"
              aria-expanded="true"
              aria-controls="unmatchedFiltersCollapse"
            >
              <span class="icon-Hide"></span>
              <span className="ms-1 fontSize12-m colorPrimaryDefault">
                Show / Hide
              </span>
            </button>
          </div>
          <div
            id="unmatchedFiltersCollapse"
            class="accordion-collapse collapse show"
            aria-labelledby="unmatchedFiltersHeading"
            data-bs-parent="#unmatchedFilters"
          >
            <div class="accordion-body">
              <div className="hrGreyLine"></div>
              <div className="configSelectBoxTop row">
                <div className="clientNameSelect col">
                  <label htmlFor="clientName">Client Name</label>
                  <Select
                    defaultValue={clientName}
                    onChange={() => {
                      setClientName();
                      changeClientName();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="Sri Vasavamba Cooperativ..."
                  />
                  {clientName && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="channelType">Channel Type</label>
                  <Select
                    defaultValue={channelType}
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
                    defaultValue={modType}
                    onChange={() => {
                      setModType();
                      changeModType();
                    }}
                    options={options}
                    id="clientName"
                    classNamePrefix="reactSelectBox"
                    placeholder="ACQUIRER"
                  />
                  {modType && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
                <div className="clientNameSelect col">
                  <label htmlFor="logType">Txn Type</label>
                  <Select
                    defaultValue={logType}
                    onChange={() => {
                      setLogType();
                      changeLogType();
                    }}
                    options={options}
                    id="logType"
                    classNamePrefix="reactSelectBox"
                    placeholder="Withdrawal"
                  />
                  {logType && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="configLeftBottom">
        <div className="tableBorderBox">
          <div className="configSelectBoxTop row">
            <div className="clientNameSelect col">
              <label htmlFor="terminalCode">Terminal Code</label>
              <input
                type="text"
                name="terminalCode"
                id="terminalCode"
                placeholder="Enter Terminal preffix"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="binNo">BIN No.</label>
              <input
                type="text"
                name="binNo"
                id="binNo"
                placeholder="Enter BIN No."
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="acquirerId">Acquirer ID</label>
              <input
                type="text"
                name="acquirerId"
                id="acquirerId"
                placeholder="Enter Acquirer ID"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="reversalCode">Reversal Code</label>
              <input
                type="text"
                name="reversalCode"
                id="reversalCode"
                placeholder="Enter Reversal Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="reversalCodeIf">Reversal Code</label>
              <input
                type="text"
                name="reversalCodeIf"
                id="reversalCodeIf"
                placeholder="Enter Reversal Code (If required)"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="reversalType">Reversal Type</label>
              <input
                type="text"
                name="reversalType"
                id="reversalType"
                placeholder="Enter Reversal Type"
                className="inputTextBox disabledInput"
                disabled
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="channelType">Reversal Entry</label>
              <Select
                defaultValue={channelType}
                onChange={() => {
                  setChannelType();
                  changeChannelType();
                }}
                options={options}
                id="channelType"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {channelType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="debitType">Debit Type</label>
              <input
                type="text"
                name="debitType"
                id="debitType"
                placeholder="Enter Debit Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="creditType">Credit Type</label>
              <input
                type="text"
                name="creditType"
                id="creditType"
                placeholder="Enter Credit Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="txnDateType">Txn Date Time</label>
              <input
                type="text"
                name="txnDateType"
                id="txnDateType"
                placeholder="Enter Txn Date Time"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="valueDateTime">Value Date Time</label>
              <input
                type="text"
                name="valueDateTime"
                id="valueDateTime"
                placeholder="Enter Value Date Time"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="postDateTime">Post Date Time</label>
              <input
                type="text"
                name="postDateTime"
                id="postDateTime"
                placeholder="Enter Post Date Time"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="upi">UPI</label>
              <input
                type="text"
                name="upi"
                id="upi"
                placeholder="Enter UPI Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="MicroAtm">MicroATM</label>
              <input
                type="text"
                name="MicroAtm"
                id="MicroAtm"
                placeholder="Enter MICROATM Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="MobileRecharge">Mobile Recharge</label>
              <input
                type="text"
                name="MobileRecharge"
                id="MobileRecharge"
                placeholder="Enter Mobile Recharge Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="CashDeposit">Cash Deposit</label>
              <input
                type="text"
                name="CashDeposit"
                id="CashDeposit"
                placeholder="Enter Deposit Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="BalanceEnquiry">Balance Enquiry</label>
              <input
                type="text"
                name="BalanceEnquiry"
                id="BalanceEnquiry"
                placeholder="Enter Balance Enquiry Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="MiniStatement">Mini Statement</label>
              <input
                type="text"
                name="MiniStatement"
                id="MiniStatement"
                placeholder="Enter Mini Statement Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="pinChange">PIN Change</label>
              <input
                type="text"
                name="pinChange"
                id="pinChange"
                placeholder="Enter PIN Change Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="chequebookRequest">Chequebook Request</label>
              <input
                type="text"
                name="chequebookRequest"
                id="chequebookRequest"
                placeholder="Enter Chequebook Request Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="responseCode">Response Code</label>
              <input
                type="text"
                name="responseCode"
                id="responseCode"
                placeholder="Enter Response Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="ResponseCode">Response Code</label>
              <input
                type="text"
                name="ResponseCode"
                id="ResponseCode"
                placeholder="Enter Response Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="RespopnseType">Respopnse Type</label>
              <input
                type="text"
                name="RespopnseType"
                id="RespopnseType"
                placeholder="Enter Respopnse Type"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="eodCode">EOD Code</label>
              <input
                type="text"
                name="eodCode"
                id="eodCode"
                placeholder="Enter EOD Code"
                className="inputTextBox"
              />
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="txnAmountDecimal">Txn Amount’s Decimal</label>
              <Select
                defaultValue={modType}
                onChange={() => {
                  setModType();
                  changeModType();
                }}
                options={options}
                id="txnAmountDecimal"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
              {modType && (
                <p className="text-danger font-size9">Enter a correct input</p>
              )}
            </div>

            <div className="clientNameSelect col">
              <label htmlFor="officeCode">Offile Code</label>
              <input
                type="text"
                name="officeCode"
                id="officeCode"
                placeholder="Enter Offile Code (If any)"
                className="inputTextBox"
              />
            </div>
          </div>

          <div className="text-center btnsBtm">
            <button type="button" className="btnPrimaryOutline">
              Cancel
            </button>
            <button type="button" className="btnPrimary ms-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldMainWindow;
