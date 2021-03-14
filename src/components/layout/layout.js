import React, { useState } from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";

const Layout = ({ children }) => {
  const [showWhat, setShowWhat] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const [showPart, setShowPart] = useState(false);

  const handleSubMenu = id => {
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

  const handleSubMenuClose = () => {
    setShowWhat(false);
    setShowHow(false);
    setShowPart(false);
  };

  return (
    <div className="flex flex-col justify-between ">
      <Navbar
        showWhat={showWhat}
        showHow={showHow}
        showPart={showPart}
        handleSubMenu={handleSubMenu}
        role="menu"
      />
      <div
        onClick={handleSubMenuClose}
        onKeyDown={handleSubMenuClose}
        className="px-5 mt-12 space-y-28"
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
