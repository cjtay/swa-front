import React from "react";
import { Link } from "gatsby";
import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Lee Li Hua",
    title: "President",
    profession: "",
    description: "",
    experience: "",
    contributions: "",
    aspirations: "",
    url: "/",
    social: [<FaHome />],
  },
];

export default ({ styleClass }) => {
  const teamData = data.map(link => {
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
