import React from "react";
import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

export const mainNav = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "What",
    url: "#",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    text: "How",
    url: "#",
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

export const subNav1 = [
  {
    id: 21,
    text: "History",
    url: "/what/history",
  },
  {
    id: 22,
    text: "Our board",
    url: "/what/board",
  },
  {
    id: 23,
    text: "Our work",
    url: "/what/work",
  },
  {
    id: 24,
    text: "Testimonials / awards",
    url: "/what/testimonials",
  },
  {
    id: 25,
    text: "Press release / media ",
    url: "/what/press",
  },
];

export const subNav2 = [
  {
    id: 31,
    text: "Fundraising",
    url: "/how/history",
  },
  {
    id: 32,
    text: "Miss Singapore Pageant Int",
    url: "/how/mspi",
  },
];
