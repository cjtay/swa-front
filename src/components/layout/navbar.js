import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { ButtonLight } from "../../styles/buttons/ButtonStyles";

import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa";
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs";

import styled from "styled-components";

const navData = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "What",
    url: "/what/",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    text: "How",
    url: "/how/",
    icon: <FaBook />,
  },
  {
    id: 4,
    text: "Events",
    url: "/events/",
    icon: <BsCalendar />,
  },
  {
    id: 5,
    text: "Participate",
    url: "/participate/",
    icon: <FaHandsHelping />,
  },
];

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(getLogo);
  console.log("logo: ", data.file.childImageSharp.fluid);

  const tempLinks = navData.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <MenuItem>
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </MenuItem>
        </Link>
      </li>
    );
  });

  return (
    <Wrapper>
      <Logo>
        <Image fluid={data.file.childImageSharp.fluid} alt="logo" />
        <LogoTitle>Singapore Women's Association</LogoTitle>
      </Logo>

      <MenuContainer>
        <MenuWrapper>{tempLinks}</MenuWrapper>
        <CTA>Donate</CTA>
      </MenuContainer>
    </Wrapper>
  );
};

export default Navbar;

export const getLogo = graphql`
  {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "logo.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  top: 0px;
  display: grid;
  grid-template-rows: auto auto;
  padding: 1em 3em;
  justify-content: center;
  color: var(--color-white);
  /* border: 1px solid red; */

  @media (min-width: 1000px) {
    grid-template-columns: 500px auto;
    justify-content: space-between;
    /* justify-content: space-between; */
  }
`;

const MenuContainer = styled.div`
  display: grid;
  grid-template-rows: 40px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* width: 100; */
  @media (min-width: 1000px) {
    grid-template-columns: auto 100px;
  }
`;

const MenuWrapper = styled.ul`
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(5, auto);
  /* justify-content: center;
  align-items: center; */
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: 1em;
  }
`;

const MenuItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.3em;
  align-items: center;
  padding: 0.3em 0.5em;
  border-radius: 10px;
  transition: 0.3s ease-out;
  span {
    margin-top: 5px;
  }

  :hover {
    background-color: var(--color-black-transparent);
  }
`;

const Logo = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  gap: 1.5em;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  /* border: 1px red solid; */

  img {
    background-color: var(--color-white);
    width: 50px;
    padding: 0.2em;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

const LogoTitle = styled.h3`
  @media (min-width: 1000px) {
    display: none;
  }
`;

const CTA = styled(ButtonLight)`
  display: none;

  @media (min-width: 1000px) {
    display: inline-block;
  }
`;
