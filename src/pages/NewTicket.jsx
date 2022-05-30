import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/newTicket/newTicket.css";
// Components
import Header from "../components/common/Header";
import NewTicketMain from "../components/newTicket/NewTicketMain";
import Footer from "../components/common/Footer";

import excelImg from "../images/common/excel.svg";

const NewTicket = () => {
  const [feedbackRequest, setFeedbackRequest] = useState(false);

  const [attachment, setAttachment] = useState(false);

  const [attachmentUpload, setAttachmentUpload] = useState(false);

  function uploadData() {
    setAttachmentUpload(true);
  }
  function removeUpload() {
    setAttachmentUpload(false);
  }

  return (
    <div>
      <Header />
      <NewTicketMain />
      <Footer />

      <div className="btnsAbsoluteDiv text-center ticketFooter d-none d-md-block ">
        <button type="button" className="btnPrimaryOutline">
          Delete Ticket
        </button>
        <button type="button" className="btnPrimaryOutline ms-2">
          Close Ticket
        </button>
        <button
          type="button"
          className="btnPrimaryOutline ms-2"
          onClick={() => setAttachment(!attachment)}
        >
          Attachments
        </button>
        <button
          type="button"
          className="btnPrimaryOutline ms-2"
          onClick={() => setFeedbackRequest(!feedbackRequest)}
        >
          Feedback Request
        </button>
        <button type="button" className="btnPrimary ms-2">
          Save Ticket
        </button>
      </div>
      <div className="btnsAbsoluteDiv d-flex d-md-none align-items-center justify-content-center ticketmobileFooter">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="footerDropDownBtn">
            Other Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="footerDropdownHover">
              <Dropdown.Item
                className="footerDropdownItem"
                onClick={() => setFeedbackRequest(!feedbackRequest)}
              >
                <p className="footerDropDOwnText">Feedback Request</p>
              </Dropdown.Item>
            </div>
            <div className="footerDropdownHover">
              <Dropdown.Item
                className="footerDropdownItem"
                onClick={() => setAttachment(!attachment)}
              >
                <p className="footerDropDOwnText">Attachment</p>
              </Dropdown.Item>
            </div>
            <div className="footerDropdownHover">
              <Dropdown.Item className="footerDropdownItem">
                <p className="footerDropDOwnText">Close Ticket</p>
              </Dropdown.Item>
            </div>
            <div className="footerDropdownHover">
              <Dropdown.Item className="footerDropdownItem border-bottom-0">
                <p className="footerDropDOwnText">Delete Ticket</p>
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <button type="button" className="btnPrimary ms-2">
          Save Ticket
        </button>
      </div>

      {/* Feedback Request */}
      {feedbackRequest && (
        <Modal
          show={feedbackRequest}
          onHide={() => setFeedbackRequest(!feedbackRequest)}
          centered
          className="defaultThemeModal saveFiltersModal errorFiltersModal centeredModal feedbackRequestModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Feedback Request
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center commentModalBody">
            <input
              type="text"
              name="previousEodTime"
              placeholder="Feedback Title"
              id="DocketNo"
              className="inputTextBox mb-2"
            />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your feedback here..."
            ></textarea>
            <div className="form-check align-self-start mt-3 clientNameSelect ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="localShopAddress"
              />
              <label
                className="form-check-label mb-0"
                htmlFor="localShopAddress"
              >
                Feedback given
              </label>
            </div>
            <div className="text-center btnsBtm btnsMobileBtn">
              <button
                type="button"
                className="btnPrimaryOutline"
                onClick={() => setFeedbackRequest(!feedbackRequest)}
              >
                Cancel
              </button>
              <button type="button" className="btnPrimary ms-2">
                Submit
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* attachment Request */}
      {attachment && (
        <Modal
          show={attachment}
          onHide={() => setAttachment(!attachment)}
          centered
          className="defaultThemeModal attachmentModal centeredModal unmatchedTableModal"
          id="attachmentModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Attachments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="fontSize16 fontWeight-500 mt-3 mb-2">
              Attach New File (Size limit 5MB)
            </p>
            <div
              className={
                attachmentUpload === true
                  ? "attachmentUploadBox active mb-4"
                  : "attachmentUploadBox  mb-4"
              }
            >
              <div className="beforeAttachmentUpload">
                <p className="text-center d-flex align-items-center justify-content-center attachmentText1">
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.25 4.66667C9.25 4.02208 9.72017 3.5 10.3 3.5H23.95C24.5298 3.5 25 4.02208 25 4.66667V23.3333C25 23.9779 24.5298 24.5 23.95 24.5H10.3C9.72017 24.5 9.25 23.9779 9.25 23.3333V19.8333H5.05C4.47017 19.8333 4 19.3112 4 18.6667V9.33333C4 8.68875 4.47017 8.16667 5.05 8.16667H9.25V4.66667ZM16.8333 8.16667V4.66667H10.4167V8.16667H16.8333ZM18 4.66667V8.16667H23.8333V4.66667H18ZM16.8333 9.33333H14.5V13.4167H16.8333V9.33333ZM18 13.4167V9.33333H23.8333V13.4167H18ZM16.8333 14.5833H14.5V18.6667H16.8333V14.5833ZM18 18.6667V14.5833H23.8333V18.6667H18ZM16.8333 19.8333H10.4167V23.3333H16.8333V19.8333ZM18 23.3333V19.8333H23.8333V23.3333H18ZM13.3333 9.33333V18.6667H5.05V9.33333H13.3333ZM7.0485 11.0833H8.30092L9.31767 13.2732L10.3916 11.0833H11.5617L9.95 14L11.5991 16.9167H10.3642L9.25642 14.6242L8.15392 16.9167H6.90092L8.57742 13.9895L7.0485 11.0833Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                  Drop your file here
                </p>
                <span className="text-center attachmentText1">or</span>
                <label htmlFor="attachmentInput">
                  <p className="text-center attachmentText2">Browse File</p>
                </label>
                <input
                  onChange={uploadData}
                  type="file"
                  id="attachmentInput"
                  className="d-none"
                />
              </div>
              <div className="afterAttachmentUpload">
                <div className="attachmentUploaded">
                  <div className="d-flex aligm-items-center">
                    <img src={excelImg} alt="" />
                    <p className="uploadedDataText ms-2">
                      Excelspreadsheet.xls
                    </p>
                  </div>
                  {/* remove  */}
                  <span type="button" onClick={removeUpload}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4L12 12"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 4L4 12"
                        stroke="black"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="w-100 table-responsive mb-4">
              <table className="table table-striped table-hover table-borderless align-middle">
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
                      File Name
                      <Link to="/">
                        <span className="icon-Sort-icon"></span>
                      </Link>
                    </th>
                    <th scope="col">
                      Uploaded On
                      <Link to="/">
                        <span className="icon-Sort-icon"></span>
                      </Link>
                    </th>
                    <th scope="col">
                      Uploaded By
                      <Link to="/">
                        <span className="icon-Sort-icon"></span>
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5">
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
  );
};

export default NewTicket;
