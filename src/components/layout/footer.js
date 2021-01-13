import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterSection>My Footer</FooterSection>;
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
    border: 10px solid green;
  }
`;
