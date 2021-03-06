import React, { useState } from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  const [showSub, setShowSub] = useState(false);
  const [showSub2, setShowSub2] = useState(false);
  const [showSub3, setShowSub3] = useState(false);

  const handleSubMenu = id => {
    console.log("sub id: ", id);
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
    <div className="flex flex-col justify-between" onClick={handleSubMenuClose}>
      <Navbar
        showSub={showSub}
        showSub2={showSub2}
        showSub3={showSub3}
        handleSubMenu={handleSubMenu}
      />
      <div className="px-3 mt-12 space-y-28">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
