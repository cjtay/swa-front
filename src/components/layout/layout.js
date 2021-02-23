import React from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper className="font-body ">
      <Navbar />
      <div className="space-y-28">{children}</div>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
