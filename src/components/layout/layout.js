import React from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div className="mt-12 space-y-28">{children}</div>
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
