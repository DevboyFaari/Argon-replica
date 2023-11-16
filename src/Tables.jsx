import React from "react";
import "./Tables.css";

const Tables = () => {
  return (
    <>
      <div className="tables">
        <table>
          <thead className="open">
            <tr>
              <th>Project</th>
              <th>Budget</th>
              <th></th>
              <th></th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th>Users</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="/bold.jpg"
                  alt="Angular Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>Argon Design Kit</span>
              </td>

              <td>$2,500 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="red-dot"></span> Pending
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">60%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-a">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/angular-logo.png"
                  alt="Angular Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>Angular Now UI kit Pro</span>
              </td>

              <td>$1,800 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="green-dot"></span> Completed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">100%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-b">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/black-diamond.jpg"
                  alt="Diamond logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>Black Dashboard</span>
              </td>

              <td>$3,150 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="red-dot"></span> Delayed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">72%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-c">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/react-logo.jpg"
                  alt="React Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>React Dashboard</span>
              </td>

              <td>$4,400 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="blue-dot"></span> On schedule
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">90%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-d">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/vue-logo.jpg"
                  alt="vue Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>Vue Paper UI kit</span>
              </td>

              <td>$2,200 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="green-dot"></span> Completed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">100%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-e">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
      </div>

      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      {/*-------------------------------------------------Second table------------------------------------------------*/}
      <div className="tables-2">
        <table>
          <thead className="open">
            <tr>
              <th>Project</th>
              <th>Budget</th>
              <th></th>
              <th></th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th>Users</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="/bold.jpg"
                  alt="Angular Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                Argon Design System
              </td>

              <td>$2,500 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="red-dot"></span> Pending
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">60%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-a">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/angular-logo.png"
                  alt="Angular Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                Angular Now UI kit Pro
              </td>

              <td>$1,800 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="green-dot"></span> Completed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">100%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-b">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/black-diamond.jpg"
                  alt="Diamond logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                Black dashboard
              </td>

              <td>$3,150 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="red-dot"></span> Delayed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">72%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-c">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/react-logo.jpg"
                  alt="React Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                React dashboard
              </td>

              <td>$4,400 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="blue-dot"></span> On schedule
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">90%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-d">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
          <tbody>
            <tr>
              <td>
                <img
                  src="/vue-logo.jpg"
                  alt="vue Logo"
                  style={{ width: "30px", height: "30px", marginLeft: "5px" }}
                />
                Vue paper UI kit
              </td>

              <td>$2,200 USD</td>
              <td></td>
              <td></td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <span className="green-dot"></span> Completed
              </td>

              <td></td>
              <td></td>
              <td>
                <div
                  class="avatar-group image-container"
                  style={{ position: "relative" }}
                >
                  <div class="tooltip">Adrian Chukwudi</div>
                  <img
                    class="rounded-circle"
                    src="/Color-lady.jpg"
                    alt="User 1"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "20px",
                      border: "2px solid white",
                    }}
                  />

                  <img
                    class="rounded-circle"
                    src="/argon-woman2.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      top: "5px",
                      left: "30px",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/dude-model.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "40px",
                      border: "2px solid white",
                    }}
                  />
                  <img
                    class="rounded-circle"
                    src="/profile-cover.jpg"
                    alt="User 2"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "0",
                      left: "60px",
                      border: "2px solid white",
                    }}
                  />
                  {/* <!-- Add more user images as needed --!> */}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="mr-2">100%</span>
                  <div style={{ marginLeft: "10px" }}>
                    <div class="progress-bar">
                      <div class="progress-fill-e">|</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tables;
