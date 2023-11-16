import React, { useState } from "react";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faBarChart,
  faCalendarAlt,
  faComputer,
  faGear,
  faIcons,
  faLifeRing,
  faLocationPinLock,
  faPaintRoller,
  faPeopleGroup,
  faPercentage,
  faPersonRunning,
  faPieChart,
  faRocket,
  faSearch,
  faSignIn,
  faTable,
  faToggleOn,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const SidebarMenuItem = ({ icon, color, text, href }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      <FontAwesomeIcon
        icon={icon}
        style={{
          color,
          marginLeft: "25px",
        }}
      />
      <span style={{ marginLeft: "20px" }}>{text}</span>
    </a>
  </li>
);

const Dashboard = () => {
  const [menuChange, setMenuChange] = useState(false);

  const Toggle = () => {
    setMenuChange(!menuChange);
  };

  return (
    <div className="parent-nav">
      <div className="vertical-nav">
        <a href="home">
          <img alt="..." className="argon" src="./argon-react.webp" />
        </a>

        <ul className="navbar-nav">
          <SidebarMenuItem
            icon={faComputer}
            color="#1171ef"
            text="Dashboard"
            href="/index"
          />
          <SidebarMenuItem
            icon={faIcons}
            color="purple"
            text="Icons"
            href="/icons"
          />
          <SidebarMenuItem
            icon={faLocationPinLock}
            color="#fb6340"
            text="Maps"
            href="/maps"
          />
          <SidebarMenuItem
            icon={faUser}
            color="yellow"
            text="User Profile"
            href="/user-profile"
          />
          <SidebarMenuItem
            icon={faTable}
            color="#f5365c"
            text="Tables"
            href="/tables"
          />
          <SidebarMenuItem
            icon={faSignIn}
            color="skyblue"
            text="Login"
            href="/login"
          />
          <SidebarMenuItem
            icon={faUserCircle}
            color="pink"
            text="Register"
            href="/register"
          />
          <hr className="half" style={{ width: "200px", marginLeft: "20px" }} />
          <SidebarMenuItem
            icon={faRocket}
            color="grey"
            text="Getting started"
            href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar"
          />
          <SidebarMenuItem
            icon={faPaintRoller}
            color="grey"
            text="Foundation"
            href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar"
          />
          <SidebarMenuItem
            icon={faToggleOn}
            color="grey"
            text="Components"
            href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar"
          />
        </ul>
      </div>

      <div className="elements">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />

        <input
          type="text"
          placeholder="Search"
          className="input-field-container"
        />
      </div>
      <div onClick={Toggle}>
        <img src="pic1.jpg" className="profilepic" alt="1" />
        <span className="profile-name">
          <b>Adewunmi Dunni</b>
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
      </div>
      <div className="grid-container">
        <div className="one">
          <h6 style={{ color: " #8898aa", marginRight: "13px" }}>Traffic</h6>
          <div className="grid-details">
            <span>350,897</span>

            <FontAwesomeIcon
              icon={faArrowUp}
              style={{
                color: "#2dce89",
                display: "block",
                marginLeft: "-75px",
                position: "absolute",
                marginTop: "15px",
              }}
            />
            <span
              style={{
                color: "#2dce89",
                display: "block",
                marginLeft: "-55px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
              }}
            >
              3.48%
            </span>
            <span
              style={{
                color: "grey",
                display: "block",
                marginLeft: "-3px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
                fontSize: "17px",
              }}
            >
              Since last month
            </span>
          </div>

          <FontAwesomeIcon
            icon={faBarChart}
            style={{
              borderRadius: "50%",
              padding: "17px",
              color: "white",
              backgroundColor: "#f5365c",
              marginLeft: "20px",
              marginTop: "-2px",
            }}
          />
        </div>
        <div className="one">
          <h6 style={{ color: " #8898aa", marginRight: "13px" }}>Newusers</h6>
          <div className="grid-details">
            <span style={{ marginLeft: "-100px" }}>2,356</span>

            <FontAwesomeIcon
              icon={faArrowDown}
              style={{
                color: "#fb6340",
                display: "block",
                marginLeft: "-100px",
                position: "absolute",
                marginTop: "15px",
              }}
            />
            <span
              style={{
                color: "#fb6340",
                display: "block",
                marginLeft: "-80px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
              }}
            >
              3.48%
            </span>
            <span
              style={{
                color: "grey",
                display: "block",
                marginLeft: "-20px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
                fontSize: "17px",
              }}
            >
              Since last week
            </span>
          </div>

          <FontAwesomeIcon
            icon={faPieChart}
            style={{
              borderRadius: "50%",
              padding: "17px",
              color: "white",
              backgroundColor: "#fb6340",
              marginLeft: "5px",
              marginTop: "-2px",
            }}
          />
        </div>
        <div className="one">
          <h6 style={{ color: " #8898aa", marginRight: "13px" }}>Sales</h6>
          <div className="grid-details">
            <span style={{ marginLeft: "-68px" }}>924</span>

            <FontAwesomeIcon
              icon={faArrowDown}
              style={{
                color: "#f5365c",
                display: "block",
                marginLeft: "-68px",
                position: "absolute",
                marginTop: "15px",
              }}
            />

            {/* new div */}
            <span
              style={{
                color: "#f5365c",
                display: "block",
                marginLeft: "-50px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
              }}
            >
              1.18%
            </span>
            <span
              style={{
                color: "grey",
                display: "block",
                marginLeft: "-3px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
                fontSize: "17px",
              }}
            >
              Since yesterday
            </span>
          </div>

          <FontAwesomeIcon
            icon={faPeopleGroup}
            style={{
              borderRadius: "50%",
              padding: "17px",
              color: "white",
              backgroundColor: "#ffd600",
              marginLeft: "20px",
              marginTop: "-2px",
            }}
          />
        </div>
        <div className="one">
          <h6 style={{ color: " #8898aa", marginRight: "13px" }}>
            Performance
          </h6>
          <div className="grid-details">
            <span style={{ marginLeft: "-122px" }}>49,65%</span>

            <FontAwesomeIcon
              icon={faArrowUp}
              style={{
                color: "#2dce89",
                display: "block",
                marginLeft: "-122px",
                position: "absolute",
                marginTop: "15px",
              }}
            />
            <span
              style={{
                color: "#2dce89",
                display: "block",
                marginLeft: "-105px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
              }}
            >
              12%
            </span>
            <span
              style={{
                color: "grey",
                display: "block",
                marginLeft: "-65px",
                position: "absolute",
                marginTop: "10px",
                fontWeight: "200",
                fontSize: "17px",
              }}
            >
              Since last month
            </span>
          </div>

          <FontAwesomeIcon
            icon={faPercentage}
            style={{
              borderRadius: "50%",
              padding: "17px",
              color: "white",
              backgroundColor: "#11cdef",
              marginLeft: "-10px",
              marginTop: "-2px",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
