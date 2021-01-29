import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const subNav = [
  {
    id: 1,
    text: "Contact",
    url: "/forms/contact",
  },
  {
    id: 2,
    text: "Volunteer Form",
    url: "/forms/volunteer",
  },
  {
    id: 3,
    text: "Sponsor Form",
    url: "/forms/sponsor",
  },
  {
    id: 4,
    text: "MSPI Application Form",
    url: "/forms/mspiapplication",
  },
];

const Footer = () => {
  const tempSubLinks = subNav.map(link => {
    return (
      <div key={link.id}>
        <Link to={link.url}>
          <div>{link.text}</div>
        </Link>
      </div>
    );
  });

  return (
    <FooterSection>
      <SubMenu>{tempSubLinks}</SubMenu>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: rgba(112, 49, 140, 1);
  background: -webkit-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: -moz-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: linear-gradient(
    to top left,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  padding: 1em 0.5em;
  color: var(--color-white);
  text-align: center;
  margin-top: auto;

  @media (min-width: 600px) {
  }
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  font-size: 1rem;
  margin: 0 auto;

  div {
    margin: 1em 0;
  }
`;
