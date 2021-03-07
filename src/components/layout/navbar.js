import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import logo from "../../assets/logo.png";

import { mainNav, subNav1, subNav2, subNav3 } from "../../constants/menu";

const Navbar = ({ showSub, showSub2, showSub3, handleSubMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(getLogo);

  const handleClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const links = mainNav.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div
            onClick={() => {
              handleSubMenu(link.text);
            }}
            onMouseEnter={() => {
              handleSubMenu(link.text);
            }}
            className="relative flex items-center w-full px-2 py-3 space-x-2 transition rounded divide-solid hover:text-swa-4"
          >
            <span>{link.icon}</span>
            <div>{link.text}</div>
            {link.text === "What" ? (
              <div
                className={
                  showSub
                    ? "visible opacity-100 absolute w-52 p-3 space-y-3 rounded-lg bg-purple-50 text-swa-2 top-10 transition-all duration-300 ease-out hidden md:block"
                    : "invisible opacity-0 absolute w-48 p-3 space-y-3 rounded-lg bg-swa-3 top-10 transition-all duration-300 ease-out"
                }
              >
                {subNav1.map(link => {
                  return (
                    <Link to={link.url}>
                      <li
                        key={link.id}
                        className="px-3 py-2 rounded-lg hover:text-white hover:bg-swa-3"
                      >
                        <div>{link.text}</div>
                      </li>
                    </Link>
                  );
                })}
              </div>
            ) : link.text === "How" ? (
              <div
                className={
                  showSub2
                    ? "visible opacity-100 absolute w-48 p-3 space-y-3 rounded-lg bg-purple-50 text-swa-2 top-10 transition-all duration-300 ease-out hidden md:block"
                    : "invisible opacity-0 absolute w-48 p-3 space-y-3 rounded-lg bg-swa-3 top-10 transition-all duration-300 ease-out"
                }
              >
                {subNav2.map(link => {
                  return (
                    <Link to={link.url}>
                      <li
                        key={link.id}
                        className="px-3 py-2 rounded-lg hover:text-white hover:bg-swa-3"
                      >
                        <div>{link.text}</div>
                      </li>
                    </Link>
                  );
                })}
              </div>
            ) : link.text === "Participate" ? (
              <div
                className={
                  showSub3
                    ? "visible opacity-100 absolute w-48 p-3 space-y-3 rounded-lg bg-purple-50 text-swa-2 top-10 transition-all duration-300 ease-out "
                    : "invisible opacity-0 absolute w-48 p-3 space-y-3 rounded-lg bg-swa-3 top-10 transition-all duration-300 ease-out"
                }
              >
                {subNav3.map(link => {
                  return (
                    <Link to={link.url}>
                      <li
                        key={link.id}
                        className="px-3 py-2 rounded-lg hover:text-white hover:bg-swa-3"
                      >
                        <div>{link.text}</div>
                      </li>
                    </Link>
                  );
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
        {link.text === "What" ? (
          <div>
            <div className="flex flex-col w-full px-3 py-5 font-bold rounded divide-solid ">
              <div className="flex items-center space-x-3">
                <span>{link.icon}</span>
                <div>{link.text}</div>
              </div>
            </div>
            {subNav1.map(link => {
              return (
                <li
                  key={link.id}
                  className="px-3 py-2 mb-2 font-bold rounded-lg bg-swa-4 ml-7 active:bg-swa-2"
                >
                  <Link to={link.url}>
                    <div>{link.text}</div>
                  </Link>
                </li>
              );
            })}
          </div>
        ) : link.text === "How" ? (
          <div>
            <div className="flex flex-col w-full px-3 py-5 font-bold rounded divide-solid ">
              <div className="flex items-center space-x-3">
                <span>{link.icon}</span>
                <div>{link.text}</div>
              </div>
            </div>
            {subNav2.map(link => {
              return (
                <li
                  key={link.id}
                  className="px-3 py-2 mb-2 font-bold rounded-lg bg-swa-4 ml-7 active:bg-swa-2"
                >
                  <Link to={link.url}>
                    <div>{link.text}</div>
                  </Link>
                </li>
              );
            })}
          </div>
        ) : link.text === "Participate" ? (
          <div>
            <div className="flex flex-col w-full px-3 py-5 font-bold rounded divide-solid ">
              <div className="flex items-center space-x-3">
                <span>{link.icon}</span>
                <div>{link.text}</div>
              </div>
            </div>
            {subNav3.map(link => {
              return (
                <li
                  key={link.id}
                  className="px-3 py-2 mb-2 font-bold rounded-lg bg-swa-4 ml-7 active:bg-swa-2"
                >
                  <Link to={link.url}>
                    <div>{link.text}</div>
                  </Link>
                </li>
              );
            })}
          </div>
        ) : (
          <Link to={link.url}>
            <div className="flex flex-col w-full px-3 py-5 font-bold rounded divide-solid ">
              <div className="flex items-center space-x-3">
                <span>{link.icon}</span>
                <div>{link.text}</div>
              </div>
            </div>
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav className="z-20 flex items-center justify-center w-full max-w-6xl p-4 mx-auto mt-5 md:mt-0">
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
      <ul className="hidden text-white md:flex md:items-center md:ml-auto md:space-x-7 md:mt-5">
        {links}
        <Link to="/participate/donate">
          <button className="self-end ml-3 btn-light text-swa-3">Donate</button>
        </Link>
      </ul>
      {/* ------ BURGER ICON ------- */}
      <div
        className="flex flex-col items-center justify-center w-12 h-12 p-2 ml-10 space-y-1 border-2 border-white rounded-full cursor-pointer md:hidden"
        onClick={handleClick}
      >
        <div className="w-6 mx-auto border border-white "></div>
        {/* <div className="w-6 mx-auto border border-white "></div> */}
        <p className="text-xs font-light text-white uppercase">menu</p>
        <div className="w-6 mx-auto border border-white "></div>
      </div>
      {/* ------ MODAL ------- */}
      <div
        className={
          isOpen
            ? "visible opacity-100 fixed inset-0 z-10 flex items-start justify-center transition-all duration-300 ease-out bg-black bg-opacity-70 h-full"
            : "invisible opacity-0 absolute inset-0 z-10 flex items-start justify-center transition-all duration-300 ease-out bg-black bg-opacity-70"
        }
      ></div>
      {isOpen ? (
        <ul className="absolute top-0 z-20 w-9/12 p-5 mt-20 bg-white divide-y divide-gray-200 rounded-lg text-swa-1">
          {mobileLinks}
          <button className="w-full mt-8 btn-dark" onClick={handleClose}>
            close
          </button>
        </ul>
      ) : null}
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
