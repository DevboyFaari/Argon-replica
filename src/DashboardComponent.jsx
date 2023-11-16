import React from "react";
import "./DashboardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const DashboardComponent = () => {
  return (
    <>
      <div className="sales-box">Onerics</div>
      <div className="sales-box2">Not oneric</div>
      <div className="display-box1">
        <div className="display-box1-content">
          <p>Page visits</p>
          <button className="animated-button">See all</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>Visitors</th>
              <th>Unique Users</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/argon/</td>
              <td>4,569</td>
              <td>340</td>
              <td>
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{
                    // color: "#fb6340",
                    color: "#2dce89",
                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                />
                4,653%
              </td>
            </tr>
            <tr>
              <td>/argon/index.html</td>
              <td>3,965</td>
              <td>319</td>
              <td>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{
                    color: "#fb6340",
                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                />
                49,53%
              </td>
            </tr>
            <tr>
              <td>/argon/charts.html</td>
              <td>3,513</td>
              <td>294</td>
              <td>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{
                    color: "#fb6340",

                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                />
                46,49%
              </td>
            </tr>
            <tr>
              <td>/argon/tables.html</td>
              <td>2,050</td>
              <td>147</td>
              <td>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{
                    color: "#2dce89",
                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                />
                50,87%
              </td>
            </tr>
            <tr>
              <td>/argon/profile.html</td>
              <td>1,795</td>
              <td>190</td>
              <td>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{
                    color: "#fb6340",
                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                />
                46,53%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="display-box2">
        <div className="display-box2-content">
          <p>Social Traffic</p>
          <button className="animated-button">See all</button>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Referral</th>
                <th>Visitors</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FaceBook</td>
                <td>1,480</td>
                <td>60%</td>

                <td>
                  {" "}
                  <div class="progress-bar">
                    <div class="progress-fill1">|</div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>FaceBook</td>
                <td>1,480</td>
                <td>65%</td>
                <td>
                  <div class="progress-bar">
                    <div class="progress-fill2">|</div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>1,290</td>
                <td>35%</td>
                <td>
                  <div class="progress-bar">
                    <div class="progress-fill3">|</div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>7,080</td>
                <td>90%</td>
                <td>
                  <div class="progress-bar">
                    <div class="progress-fill4">|</div>
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>2,580</td>
                <td>40%</td>

                <td>
                  <div class="progress-bar">
                    <div class="progress-fill5">|</div>
                  </div>{" "}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
