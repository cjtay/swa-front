import React, { useState } from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [showSub, setShowSub] = useState(false);
  const [showSub2, setShowSub2] = useState(false);
  const [showSub3, setShowSub3] = useState(false);

  const [showWhat, setShowWhat] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [showPart, setShowPart] = useState(false);

  const handleSubMenu = id => {
    console.log("handleSubMenu: ", id);
    console.log("showWhat: ", showWhat);
    console.log("showHow: ", showHow);
    console.log("showPart: ", showPart);
    if (id === "What") {
      setShowHow(false);
      setShowPart(false);
      setShowWhat(!showWhat);
    } else if (id === "How") {
      setShowWhat(false);
      setShowPart(false);
      setShowHow(!showHow);
    } else if (id === "Participate") {
      setShowWhat(false);
      setShowHow(false);
      setShowPart(!showPart);
    }
  };
  // const handleSubMenu = id => {
  //   console.log("handleSubMenu: ", id);
  //   console.log("showSub: ", showSub);
  //   if (id === "What") {
  //     setShowSub2(false);
  //     setShowSub3(false);
  //     setShowSub(!showSub);
  //   } else if (id === "How") {
  //     setShowSub(false);
  //     setShowSub3(false);
  //     setShowSub2(!showSub2);
  //   } else if (id === "Participate") {
  //     setShowSub(false);
  //     setShowSub2(false);
  //     setShowSub3(!showSub2);
  //   } else {
  //     setShowSub(false);
  //     setShowSub2(false);
  //     setShowSub3(false);
  //   }
  // };

  const handleSubMenuClose = () => {
    setShowWhat(false);
    setShowHow(false);
    setShowPart(false);
  };

  return (
    <div className="flex flex-col justify-between ">
      <Navbar
        showSub={showSub}
        showSub2={showSub2}
        showSub3={showSub3}
        showWhat={showWhat}
        showHow={showHow}
        showPart={showPart}
        handleSubMenu={handleSubMenu}
      />
      <div
        onClick={handleSubMenuClose}
        onKeyDown={handleSubMenuClose}
        role="close menu"
        className="px-5 mt-12 space-y-28"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
