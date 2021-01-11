import React from "react";
import Footer from "../layout/footer";

import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}

      <Footer>footer</Footer>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 100vh;
`;
// const Footer = styled.footer`
//   background-color: yellow;
//   margin-top: auto;
// `;
