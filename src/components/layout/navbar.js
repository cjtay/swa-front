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
    url: "#",
    icon: <BsFillPeopleFill />,
    sub: "subNav1",
  },
  {
    id: 3,
    text: "How",
    url: "#",
    icon: <FaBook />,
    sub: "subNav2",
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

const subNav1 = [
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

const subNav2 = [
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showSub2, setShowSub2] = useState(false);

  const data = useStaticQuery(getLogo);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubMenuClick = id => {
    console.log("sub id: ", id);
    if ((id = "subNav1")) {
      setShowSub2(false);
      setShowSub(!showSub);
    } else if ((id = "subNav2")) {
      setShowSub(false);
      setShowSub2(!showSub2);
    }
  };

  const handleSubNav2 = () => {
    setShowSub2(!showSub2);
  };

  const handleSubMenuClose = () => {
    setShowSub(false);
  };

  const links = mainNav.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div className="relative flex items-center w-full px-2 py-3 space-x-2 transition rounded divide-solid hover:text-swa-4">
            <span>{link.icon}</span>
            <div onClick={() => handleSubMenuClick(link.sub)}>{link.text}</div>
            {link.sub === "subNav1" ? (
              <div
                className={
                  showSub
                    ? "visible opacity-100 absolute w-48 p-3 space-y-3 rounded-lg bg-purple-50 text-swa-2 top-10 transition-all duration-300 ease-out"
                    : "invisible opacity-0 absolute w-48 p-3 space-y-3 rounded-lg bg-swa-3 top-10 transition-all duration-300 ease-out"
                }
              >
                {subNav1.map(link => {
                  return <li key={link.id}>{link.text}</li>;
                })}
              </div>
            ) : link.sub === "subNav2" ? (
              <div
                className={
                  showSub2
                    ? "visible opacity-100 absolute w-48 p-3 space-y-3 rounded-lg bg-purple-50 text-swa-2 top-10 transition-all duration-300 ease-out"
                    : "invisible opacity-0 absolute w-48 p-3 space-y-3 rounded-lg bg-swa-3 top-10 transition-all duration-300 ease-out"
                }
              >
                {subNav2.map(link => {
                  return <li key={link.id}>{link.text}</li>;
                })}
              </div>
            ) : null}
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

  return (
    <nav className="flex items-center justify-center w-full max-w-6xl p-4 mx-auto">
      {/* ------ LOGO ------- */}
      <Link to="/">
        <div className="flex items-center mt-5 space-x-2 text-white">
          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="logo"
            className="w-12"
          />
          <h4 className="md:hidden">Singapore Women's Association</h4>
        </div>
      </Link>

      {/* ------ MENU LIST & BUTTON------- */}
      <ul className="hidden text-white md:flex md:items-center md:ml-auto md:space-x-7 md:mt-5">
        {links}
        <button
          className="self-end ml-3 btn-light text-swa-3"
          onClick={handleSubNav2}
        >
          Donate
        </button>
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
            ? "visible opacity-100 absolute inset-0 z-10 flex items-start justify-center transition-all duration-300 ease-out bg-black bg-opacity-70 "
            : "invisible opacity-0 absolute inset-0 z-10 flex items-start justify-center transition-all duration-300 ease-out bg-black bg-opacity-70"
        }
      >
        <ul className="w-9/12 p-5 mt-20 bg-white divide-y divide-gray-200 rounded-lg text-swa-1">
          {mobileLinks}
          <button className="w-full mt-8 btn-dark" onClick={handleClose}>
            close
          </button>
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
