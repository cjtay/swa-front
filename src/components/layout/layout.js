import React from "react";
// import Footer from "./footer";
import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavWrapper>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Footer>footer</Footer>
      </NavWrapper>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
`;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  background-color: yellow;
  margin-top: auto;
`;
