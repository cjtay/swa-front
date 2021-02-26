import React from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-full bg-bottom bg-no-repeat bg-cover lg:bg-cover z-n10 bg-hero-pattern"></div>

      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="space-y-28">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
