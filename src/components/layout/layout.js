import React from "react";
// import Footer from "./footer";
// import Navbar from "./navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header>header</Header>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        <Footer>footer</Footer>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: grey;
`;

const Footer = styled.footer`
  background-color: yellow;
  margin-top: auto;
`;
