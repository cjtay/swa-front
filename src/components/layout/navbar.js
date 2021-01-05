import React, { useState } from "react";
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
    text: "About",
    url: "/what/",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    text: "Programmes",
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(getLogo);

  const tempLinks = navData.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <MenuItem isOpen={isOpen}>
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </MenuItem>
        </Link>
      </li>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Logo>
          <Image fluid={data.file.childImageSharp.fluid} alt="logo" />
          <LogoTitle>Singapore Women's Association</LogoTitle>
          <MenuIcon onClick={handleClick}>
            <div />
            <div />
            <div />
          </MenuIcon>
        </Logo>

        <MenuContainer>
          <MenuWrapper>{tempLinks}</MenuWrapper>
          <CTA>Donate</CTA>
        </MenuContainer>
        <MenuMobileContainer isOpen={isOpen}>
          <MenuMobileWrapper isOpen={isOpen}>{tempLinks}</MenuMobileWrapper>
        </MenuMobileContainer>
      </Wrapper>
    </>
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
  display: grid;
  grid-template-rows: auto auto;
  justify-content: space-between;
  color: var(--color-white);
  padding: 1em;
  margin: 0.5em auto;

  @media (min-width: 960px) {
    grid-template-columns: 100px auto;
    width: 100%;
    max-width: 1200px;
  }
`;

const MenuContainer = styled.div`
  display: none;
  /* width: 100; */
  @media (min-width: 960px) {
    display: grid;
    grid-template-rows: 40px;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto 100px;
  }
`;

const MenuWrapper = styled.ul`
  display: grid;
  gap: 0.1em;
  grid-template-columns: repeat(5, auto);
  /* justify-content: center;
  align-items: center; */
  @media (min-width: 600px) {
    margin-left: auto;
    margin-right: 1em;
  }
`;

const MenuMobileContainer = styled.div`
  position: absolute;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  z-index: 1;
  /* display: ; */
  width: 100%;
  margin-top: 5em;
  color: var(--color-primary-1);
  @media (min-width: 960px) {
    display: none;
  }
`;

const MenuMobileWrapper = styled.ul`
  display: grid;
  gap: 0.5em;
  grid-template-rows: repeat(5, auto);
  opacity: ${props => (props.isOpen ? 0.95 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  width: 60%;
  height: 100%;
  border-radius: 10px;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  padding: 1em 0 1em 2em;
  background-color: var(--color-white);
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(450px)")};
  transition: 0.5s ease-in-out;

  @media (min-width: 960px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: ${props => props.isOpen && "flex-start"}; */
  /* align-items: stretch; */
  padding: 0.3em 0.6em;
  width: 100%;
  border-radius: 10px;
  transition: 0.3s ease-out;
  span {
    margin-right: 1em;
  }

  :hover {
    background-color: var(--color-black-transparent);
  }
`;

const Logo = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  gap: 1em;
  align-items: center;
  justify-content: center;
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
  font-size: 1.2em;
  @media (min-width: 960px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: 3em;
  height: 3em;
  border-radius: 50px;
  border: 2px solid var(--color-white);
  cursor: pointer;

  @media (min-width: 960px) {
    display: none;
  }

  div {
    height: 0.1em;
    width: 1.3em;
    background-color: var(--color-white);
  }
`;

const CTA = styled(ButtonLight)`
  display: none;

  @media (min-width: 960px) {
    display: inline-block;
  }
`;
