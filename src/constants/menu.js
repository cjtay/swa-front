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
    subNav: [
      {
        id: 11,
        text: "History",
        url: "/what/history",
      },
      {
        id: 12,
        text: "Our board",
        url: "/what/about",
      },
      {
        id: 13,
        text: "Our work",
        url: "/what/work",
      },
      {
        id: 14,
        text: "Testimonials / awards",
        url: "/what/testimonials",
      },
      {
        id: 15,
        text: "Press release / media ",
        url: "/what/press",
      },
    ],
  },
  {
    id: 3,
    text: "How",
    url: "#",
    icon: <FaBook />,
    subNav: [
      {
        id: 21,
        text: "Fundraising",
        url: "/how/fundraising",
      },
      {
        id: 22,
        text: "Miss Singapore Pageant Int",
        url: "/how/mspi",
      },
    ],
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
    subNav: [
      {
        id: 31,
        text: "Donate",
        url: "/participate/donate",
      },
      {
        id: 32,
        text: "Volunteer",
        url: "/participate/volunteer",
      },
      {
        id: 33,
        text: "Sponsor",
        url: "/participate/sponsor",
      },
    ],
  },
];

export const subNav1 = [
  {
    id: 11,
    text: "History",
    url: "/what/history",
  },
  {
    id: 12,
    text: "Our board",
    url: "/what/about",
  },
  {
    id: 13,
    text: "Our work",
    url: "/what/work",
  },
  {
    id: 14,
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
    id: 21,
    text: "Fundraising",
    url: "/how/fundraising",
  },
  {
    id: 22,
    text: "Miss Singapore Pageant Int",
    url: "/how/mspi",
  },
];

export const subNav3 = [
  {
    id: 31,
    text: "Donate",
    url: "/participate/donate",
  },
  {
    id: 32,
    text: "Volunteer",
    url: "/participate/volunteer",
  },
  {
    id: 33,
    text: "Sponsor",
    url: "/participate/sponsor",
  },
];
