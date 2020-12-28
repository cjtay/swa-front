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
  top: 8em;
  transform: scale(1.8);

  @media (min-width: 600px) {
    top: 0em;
    transform: scale(1.7);
  }
  @media (min-width: 900px) {
    top: 0em;
    transform: scale(1.1);
  }
  @media (min-width: 1200px) {
    top: -25em;
    transform: scale(1);
  }
`;
