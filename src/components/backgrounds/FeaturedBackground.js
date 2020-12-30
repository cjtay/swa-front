import React from "react";
import styled from "styled-components";
import bg3 from "../../images/bg-3.svg";

const HeroBackground = () => {
  return <Wave img src={bg3} alt="background" />;
};

export default HeroBackground;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 5em;
  right: -5em;

  @media (min-width: 600px) {
    top: -2em;
    right: -15em;
    transform: scale(0.8);
  }
  @media (min-width: 900px) {
    top: -18em;
    transform: scale(0.6);
  }
  @media (min-width: 1200px) {
    top: -22em;
    right: -30em;
    transform: scale(0.6);
  }
`;
