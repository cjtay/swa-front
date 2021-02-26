import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

const mainNav = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "What",
    url: "/about/",
    icon: <BsFillPeopleFill />,
  },
  // {
  //   id: 21,
  //   text: "Milestones",
  //   url: "/about/milestones",
  //   icon: <BsFillPeopleFill />,
  // },
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(getLogo);

  const links = mainNav.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div className="flex items-center w-full px-3 py-3 space-x-1 transition rounded divide-solid hover:text-swa-4">
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </div>
        </Link>
      </li>
    );
  });

  const mobileLinks = mainNav.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div className="flex items-center w-full px-3 py-5 space-x-3 font-bold transition rounded divide-solid hover:bg-swa-4 md:hover:bg-swa-3">
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </div>
        </Link>
      </li>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-center w-full max-w-6xl p-4 mx-auto j ustify-center">
      {/* ------ LOGO ------- */}
      <Link to="/">
        <div className="flex items-center space-x-2 text-white">
          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="logo"
            className="w-12"
          />
          <h4 className="md:hidden">Singapore Women's Association</h4>
        </div>
      </Link>

      {/* ------ MENU LIST & BUTTON------- */}
      <ul className="hidden text-white md:flex md:items-center md:ml-auto md:space-x-7">
        {links}
        <div className="btn-light">Donate</div>
      </ul>

      {/* ------ BURGER ICON ------- */}
      <div
        className="flex flex-col items-center justify-center w-12 h-12 p-2 ml-3 space-y-1 border-2 border-white rounded-full cursor-pointer md:hidden"
        onClick={handleClick}
      >
        <div className="w-6 mx-auto border border-white "></div>
        <div className="w-6 mx-auto border border-white "></div>
        <div className="w-6 mx-auto border border-white "></div>
      </div>

      {/* ------ MODAL ------- */}

      <div
        className={
          isOpen
            ? "visible opacity-100 absolute inset-0 z-10 flex items-start justify-center transition-all duration-700 ease-out bg-black bg-opacity-70 "
            : " invisible opacity-0 absolute inset-0 z-10 flex items-start justify-center transition-all duration-700 ease-in bg-black bg-opacity-70 "
        }
        onClick={handleClose}
      >
        <ul
          className={
            isOpen
              ? "mt-20 w-9/12 p-5  transform translate-x-0 transition-all duration-700 ease-out bg-white rounded-lg text-swa-1 divide-y divide-gray-200"
              : "mt-20 w-9/12 p-5 transform translate-x-full transition-all duration-700 ease-in bg-white rounded-lg text-swa-1 divide-y divide-gray-200"
          }
        >
          {mobileLinks}
          <button className="w-full mt-8 btn-dark">close</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

export const getLogo = graphql`
  {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "logo.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
