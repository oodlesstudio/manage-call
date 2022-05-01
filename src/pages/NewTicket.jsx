import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/newTicket/newTicket.css";
// Components
import Header from "../components/common/Header";
import NewTicketMain from "../components/newTicket/NewTicketMain";
import Footer from "../components/common/Footer";

const NewTicket = () => {
  const [feedbackRequest, setFeedbackRequest] = useState(false);

  return (
    <div>
      <Header />
      <NewTicketMain />
      <Footer />

      <div className="btnsAbsoluteDiv text-center">
        <button type="button" className="btnPrimaryOutline">
          Delete Ticket
        </button>
        <button type="button" className="btnPrimaryOutline ms-2">
          Close Ticket
        </button>
        <button type="button" className="btnPrimaryOutline ms-2">
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

      {/* Feedback Request */}
      {feedbackRequest && (
        <Modal
          show={feedbackRequest}
          onHide={() => setFeedbackRequest(!feedbackRequest)}
          centered
          className="defaultThemeModal saveFiltersModal errorFiltersModal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Feedback Request
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center commentModalBody">
            <textarea
              class="form-control"
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
    </div>
  );
};

export default NewTicket;
