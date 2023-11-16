import React from "react";
import "./UserProfile.css";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfile = () => {
  return (
    <div className="profile-user">
      <div className="navy"></div>
      {/* <div className="elements">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />

        <input
          type="text"
          placeholder="Search"
          className="input-field-container"
        />
      </div> */}
      <img src="pic1.jpg" className="user-profile-pic" alt="1" />

      {/* <div onClick={Toggle}>
        <span className="profile-name">
          <b>U</b>
          {menuChange && (
            <div className="profile-content">
              <h6 style={{ color: "grey", margin: "13px" }}>Welcome!</h6>
              <div className="profile-list">
                <a href="Home">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ marginLeft: "20px" }}
                  />
                  <span style={{ marginLeft: "20px" }}>My Profile</span>
                </a>
                <a href="Settings">
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{ marginLeft: "20px" }}
                  />
                  <span style={{ marginLeft: "20px" }}>Settings</span>
                </a>
                <a href="Activity">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ marginLeft: "20px" }}
                  />
                  <span style={{ marginLeft: "20px" }}>Activity</span>
                </a>
                <a href="Support">
                  <FontAwesomeIcon
                    icon={faLifeRing}
                    style={{ marginLeft: "20px" }}
                  />
                  <span style={{ marginLeft: "20px" }}>Support</span>
                </a>

                <hr
                  style={{
                    width: "200px",
                    color: "grey",
                    marginTop: "3px",
                    marginBottom: "3px",
                  }}
                ></hr>
                <a href="Login">
                  <FontAwesomeIcon
                    icon={faPersonRunning}
                    style={{ marginLeft: "20px" }}
                  />
                  <span style={{ marginLeft: "20px", marginTop: "5px" }}>
                    Logout
                  </span>
                </a>
              </div>
            </div>
          )}
        </span>
      </div> */}
      <img
        src="./profile-cover.jpg"
        alt="12"
        style={{
          marginLeft: "200px",
          width: "1500px",
          height: "1100px",
          zIndex: "2",
        }}
      />
      <div className="seeds">
        <h1>Hello Dunnie!</h1>
        <p>
          This is your profile page. You can see the progress you've made with
          <br />
          your work and manage your projects or assigned tasks
        </p>
        <button className="animated-button">Edit Profile</button>
        <div className="user-rectangle">
          <div className="header-contents">
            <p style={{ marginLeft: "30px", fontWeight: "600" }}>My Account</p>
            <button className="animated-button">Settings</button>
          </div>

          <form class="form-container">
            <h6 class="heading-small text-muted mb-4">User information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-username">
                      Username
                    </label>
                    <input
                      id="input-username"
                      placeholder="Username"
                      type="text"
                      class="form-control-alternative form-control"
                      value="lucky.jesse"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-email">
                      Email address
                    </label>
                    <input
                      id="input-email"
                      placeholder="jesse@example.com"
                      type="email"
                      class="form-control-alternative form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-first-name">
                      First name
                    </label>
                    <input
                      id="input-first-name"
                      placeholder="First name"
                      type="text"
                      class="form-control-alternative form-control"
                      value="Lucky"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-last-name">
                      Last name
                    </label>
                    <input
                      id="input-last-name"
                      placeholder="Last name"
                      type="text"
                      class="form-control-alternative form-control"
                      value="Jesse"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <h6 class="heading-small text-muted mb-4">Contact information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-control-label" for="input-address">
                      Address
                    </label>
                    <input
                      id="input-address"
                      placeholder="Home Address"
                      type="text"
                      class="form-control-alternative form-control"
                      value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    />
                  </div>
                </div>
              </div>
              <div class="row place">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label class="form-control-label" for="input-city">
                      City
                    </label>
                    <input
                      id="input-city"
                      placeholder="City"
                      type="text"
                      class="form-control-alternative form-control"
                      value="New York"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">
                      Country
                    </label>
                    <input
                      id="input-country"
                      placeholder="Country"
                      type="text"
                      class="form-control-alternative form-control"
                      value="United States"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">
                      Postal code
                    </label>
                    <input
                      id="input-postal-code"
                      placeholder="Postal code"
                      type="number"
                      class="form-control-alternative form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="user-rectangle2">
            <img src="pic1.jpg" className="user-pic" alt="user-pic" />
            <div className="stats">
              <p>
                22{" "}
                <span
                  style={{
                    display: "block",
                    marginLeft: "-15px",
                    color: "grey",
                    fontWeight: "400",
                  }}
                >
                  Friends
                </span>
              </p>
              <p>
                10{" "}
                <span
                  style={{
                    display: "block",
                    marginLeft: "-15px",
                    color: "grey",
                    fontWeight: "400",
                  }}
                >
                  Photos
                </span>
              </p>
              <p>
                9{" "}
                <span
                  style={{
                    display: "block",
                    marginLeft: "-15px",
                    color: "grey",
                    fontWeight: "400",
                  }}
                >
                  Likes
                </span>
              </p>
            </div>

            <div class="text-center cover">
              <h5>
                Adewunmi Dunni
                <span style={{ fontWeight: 300 }}>, 22</span>
              </h5>
              <div style={{ fontSize: "15px", fontWeight: "300" }}>
                Lagos, Nigeria
              </div>
              <div style={{ fontSize: "15px" }}>
                HR Manager - Sesban team Officer
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>
                University of Lagos
              </div>
              <hr class="my-4" />
              <p>
                Hobbies are walking my pitbulls, long walks on the beach,
                reading autobiographies, cooking, arm wrestling and etc...
              </p>
              <a href="#pablo">Show more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
