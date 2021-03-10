import React, { useState } from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [showSub, setShowSub] = useState(false);
  const [showSub2, setShowSub2] = useState(false);
  const [showSub3, setShowSub3] = useState(false);

  const handleSubMenu = id => {
    if (id === "What") {
      setShowSub2(false);
      setShowSub3(false);
      setShowSub(!showSub);
    } else if (id === "How") {
      setShowSub(false);
      setShowSub3(false);
      setShowSub2(!showSub2);
    } else if (id === "Participate") {
      setShowSub(false);
      setShowSub2(false);
      setShowSub3(!showSub2);
    } else {
      setShowSub(false);
      setShowSub2(false);
      setShowSub3(false);
    }
  };

  const handleSubMenuClose = () => {
    setShowSub(false);
    setShowSub2(false);
    setShowSub3(false);
  };

  return (
    <div
      className="flex flex-col justify-between"
      onClick={handleSubMenuClose}
      onKeyDown={handleSubMenuClose}
      role="close menu"
    >
      <Navbar
        showSub={showSub}
        showSub2={showSub2}
        showSub3={showSub3}
        handleSubMenu={handleSubMenu}
      />
      <div className="px-5 mt-12 space-y-28">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
