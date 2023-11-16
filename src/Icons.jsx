import React from "react";
import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faAlignLeft,
  faAmbulance,
  faArchive,
  faAtom,
  faBagShopping,
  faBasketball,
  faBell,
  faBold,
  faBookBookmark,
  faBox,
  faBriefcase,
  faBucket,
  faBuilding,
  faCartShopping,
  faChartBar,
  faChartPie,
  faCompass,
  faCube,
  faGlasses,
  faHeart,
  faHourglassEnd,
  faIdBadge,
  faLightbulb,
  faMailReply,
  faMoneyBills,
  faPhotoFilm,
  faWalkieTalkie,
} from "@fortawesome/free-solid-svg-icons";

const buttonData = [
  { icon: faAmbulance, text: "" },
  { icon: faArchive, text: "Archive" },
  { icon: faAtom, text: "Atom" },
  { icon: faBagShopping, text: "Bag" },
  { icon: faBasketball, text: "Ball" },
  { icon: faBell, text: "Bell" },
  { icon: faBold, text: "Bold" },
  { icon: faBookBookmark, text: "Bookmark" },
  { icon: faBox, text: "Box" },
  { icon: faBriefcase, text: "Briefcase" },
  { icon: faBuilding, text: "Building" },
  { icon: faCartShopping, text: "Cart" },
  { icon: faChartPie, text: "Chartpie" },
  { icon: faChartBar, text: "Chart-bar" },
  { icon: faHeart, text: "Heart" },
  { icon: faIdBadge, text: "Badge" },
  { icon: faGlasses, text: "Glasses" },
  { icon: faLightbulb, text: "Bulb" },
  { icon: faBucket, text: "Bucket" },
  { icon: faAlignCenter, text: "Center" },
  { icon: faAlignLeft, text: "Left" },
  { icon: faPhotoFilm, text: "Photo" },
  { icon: faCompass, text: "Compass" },
  { icon: faMailReply, text: "Reply" },
  { icon: faMoneyBills, text: "Money" },
  { icon: faCube, text: "App" },
  { icon: faWalkieTalkie, text: "Talk" },
  { icon: faHourglassEnd, text: "Hourglass" },
];

buttonData.sort((a, b) => a.text.localeCompare(b.text));

const Button = ({ icon, text }) => (
  <button className="grid-item">
    <FontAwesomeIcon icon={icon} style={{ margin: "-2px 9px" }} />
    <span>{text}</span>
  </button>
);

const Icons = () => {
  return (
    <div className="icon-container">
      <p>Icons</p>
      <hr style={{ width: "50" }}></hr>
      <div className="style-house">
        {buttonData.map((button, index) => (
          <Button key={index} icon={button.icon} text={button.text} />
        ))}
      </div>
    </div>
  );
};

export default Icons;
