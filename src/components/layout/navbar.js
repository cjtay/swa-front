import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PageLinks from "../../constants/links";

import styled from "styled-components";
import logo from "../../assets/logo.png";

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(getNavData);
  console.log("logo: ", data.file.childImageSharp.fluid);
  return (
    <nav>
      <Header>
        <Logo>
          <img src={logo} alt="" />
          <LogoTitle>Singapore Women's Association</LogoTitle>
        </Logo>

        <Nav>
          <NavList>
            <PageLinks />
          </NavList>
        </Nav>

        <Link to="/participate/donate">
          <button>Donate</button>
        </Link>
      </Header>
    </nav>
  );
};

export default Navbar;

export const getNavData = graphql`
  {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "logo.png" }
    ) {
      sourceInstanceName
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = styled.header`
  padding: 1em 5% 2em 5%;

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 15%;
    /* background-color: var(--color-primary-1); */
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    background-color: var(--color-white);
    padding: 0.1em;
    border-radius: 100%;
    margin-right: 10px;

    @media (min-width: 600px) {
      width: 60px;
      height: 60px;
      padding: 0.2em;
    }
  }
`;

const LogoTitle = styled.div`
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 700;
  text-align: left;

  @media (min-width: 600px) {
    display: none;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
`;

const Nav = styled.nav`
  margin: 1em auto 0 auto;
`;

const NavList = styled.div`
  text-align: center;
  list-style: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-white);

  li {
    display: inline-block;
    padding: 0.2em 0em;
  }

  a {
    padding: 0.2em 0.4em;
    transition: all 0.5s ease;

    :hover {
      border-bottom: 2px solid var(--color-white);
    }
    :focus {
      outline: none;
      background-color: var(--color-primary-4);
      border-radius: 0.3em;
    }
  }
`;
