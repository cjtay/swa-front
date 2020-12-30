import React from "react";
import styled from "styled-components";
import bg1 from "../../images/bg-1.svg";

const HeroBackground = () => {
  return <Wave img src={bg1} alt="background" />;
};

export default HeroBackground;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0em;
  transform: scale(1.9);

  @media (min-width: 600px) {
    top: -5em;
    transform: scale(1.5);
  }
  @media (min-width: 900px) {
    top: -20em;
    left: 0em;
    transform: scale(1.5);
  }
  @media (min-width: 1200px) {
    top: -45em;
    transform: scale(2);
  }
`;
