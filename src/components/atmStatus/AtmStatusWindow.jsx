import React from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

import ReactApexCharts from "react-apexcharts";

const AtmStatusWindow = () => {
  // Chart imports
  const circularChart1 = {
    series: [10.36],
    options: {
      chart: {
        type: "radialBar",
        height: "120px",
        width: "100%",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#000000",
              offsetY: 5,
            },
          },
        },
      },
      fill: {
        colors: "#C54031",
        opacity: 1,
        type: "solid",
      },
      track: {
        background: "#F6F6FE",
        strokeWidth: "97%",
        margin: 10,
      },
    },
  };

  return (
    <div className="configLeft identificationContainer ticketCenterSection">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          CBI ATM Status
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
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
          <p className="fontSize12">ATM Status</p>
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
      <div className="row onsiteSection">
        <div className="col-12 col-lg-6 mb-3">
          <div className="tableBorderBox">
            <p className="fontWeight-600 fontSize16 text-center onsiteTitle">
              Onsite
            </p>

            <div className="row text-center">
              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    {/* Radical Bar chart */}
                    <div id="circularChart1">
                      <ReactApexCharts
                        options={circularChart1.options}
                        series={circularChart1.series}
                        type="radialBar"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    <div className="circleChartBox">
                      {/* Radical Bar chart */}
                      <div id="circularChart1">
                        <ReactApexCharts
                          options={circularChart1.options}
                          series={circularChart1.series}
                          type="radialBar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    <div className="circleChartBox">
                      {/* Radical Bar chart */}
                      <div id="circularChart1">
                        <ReactApexCharts
                          options={circularChart1.options}
                          series={circularChart1.series}
                          type="radialBar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive tableContentBox atmDownTableBox onSiteBigTable">
              <table className="table atm-status-table table-borderless atm-status-table align-middle mb-3">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ATM Down</th>
                    <th scope="col">Supervisory</th>
                    <th scope="col">Hardware Fatal</th>
                    <th scope="col">No Transaction</th>
                    <th scope="col">Cash Out</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onsite</td>
                    <td className="tableDarkBlueBox">15</td>
                    <td className="tableDarkBlueBox">8</td>
                    <td className="tableDarkBlueBox">6</td>
                    <td className="tableGreyBox">8</td>
                    <td className="tableDarkBlueBox">2</td>
                    <td className="tableDarkBlueBox">39</td>
                  </tr>
                  <tr>
                    <td>Grand Total</td>
                    <td colSpan="3">29</td>
                    <td className="tableGreyBox">8</td>
                    <td>2</td>
                    <td>39</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mb-3">
          <div className="tableBorderBox">
            <p className="fontWeight-600 fontSize16 text-center onsiteTitle">
              Onsite
            </p>

            <div className="row text-center">
              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    {/* Radical Bar chart */}
                    <div id="circularChart1">
                      <ReactApexCharts
                        options={circularChart1.options}
                        series={circularChart1.series}
                        type="radialBar"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    {/* Radical Bar chart */}
                    <div id="circularChart1">
                      <ReactApexCharts
                        options={circularChart1.options}
                        series={circularChart1.series}
                        type="radialBar"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="tableChartBox">
                  <div className="table-responsive tableContentBox atmDownTableBox w-100">
                    <table className="table atm-status-table table-borderless align-middle mb-0">
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">
                            Overall ATM Down
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="2" className="tableDarkBlueBox">
                            Total 29 / 272 Down
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50%" }}>&#60; 24 hr</td>
                          <td>19</td>
                        </tr>
                        <tr>
                          <td>&#60; =24 hr</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="circleChartBox">
                    {/* Radical Bar chart */}
                    <div id="circularChart1">
                      <ReactApexCharts
                        options={circularChart1.options}
                        series={circularChart1.series}
                        type="radialBar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive tableContentBox atmDownTableBox onSiteBigTable">
              <table className="table atm-status-table table-borderless align-middle mb-3">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ATM Down</th>
                    <th scope="col">Supervisory</th>
                    <th scope="col">Hardware Fatal</th>
                    <th scope="col">No Transaction</th>
                    <th scope="col">Cash Out</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onsite</td>
                    <td className="tableDarkBlueBox">15</td>
                    <td className="tableDarkBlueBox">8</td>
                    <td className="tableDarkBlueBox">6</td>
                    <td className="tableGreyBox">8</td>
                    <td className="tableDarkBlueBox">2</td>
                    <td className="tableDarkBlueBox">39</td>
                  </tr>
                  <tr>
                    <td>Grand Total</td>
                    <td colSpan="3">29</td>
                    <td className="tableGreyBox">8</td>
                    <td>2</td>
                    <td>39</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmStatusWindow;
