import React from "react";
// import Footer from "./footer";
import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />

      {children}
      {/* <Footer /> */}
      <Footer>footer</Footer>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
const Footer = styled.footer`
  background-color: yellow;
  margin-top: auto;
`;
