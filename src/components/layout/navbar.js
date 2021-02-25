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

  const tempLinks = mainNav.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div
            isOpen={isOpen}
            className="flex items-center w-full px-3 py-1 space-x-2 rounded hover:bg-swa-4 md:hover:bg-swa-3"
          >
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

      <ul className="hidden text-white md:flex md:items-center md:ml-auto md:space-x-7">
        {tempLinks}
        <div className="btn-light">Donate</div>
      </ul>
      <div
        className="flex flex-col items-center justify-center w-12 h-12 p-2 ml-3 space-y-1 border-2 border-white rounded-full cursor-pointer md:hidden"
        onClick={handleClick}
      >
        <div className="w-6 mx-auto border border-white "></div>
        <div className="w-6 mx-auto border border-white "></div>
        <div className="w-6 mx-auto border border-white "></div>
      </div>

      <div className={isOpen ? "visible " : "invisible"}>
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleClose}
        >
          <ul className="w-1/2 p-5 space-y-5 bg-white rounded-lg text-swa-1">
            {tempLinks}
            <button className="w-full btn-dark">close</button>
          </ul>
        </div>
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
