import React from "react";
import { Link } from "gatsby";
import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "What",
    url: "/what/",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    text: "How",
    url: "/how/",
    icon: <FaBook />,
  },
  {
    id: 4,
    text: "Events",
    url: "/events/",
    icon: <BsCalendar />,
  },
  {
    id: 5,
    text: "Participate",
    url: "/participate/",
    icon: <FaHandsHelping />,
  },
];

export default ({ styleClass }) => {
  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div className="nav-item">
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <ul className={`nav-links ${styleClass ? styleClass : ""}`}>{tempLinks}</ul>
  );
};
