import React from "react";
import styled from "styled-components";
import bg2 from "../../images/bg-2.svg";

const HeroBackground = () => {
  return <Wave img src={bg2} alt="background" />;
};

export default HeroBackground;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  bottom: -2em;
  transform: scale(2);

  @media (min-width: 600px) {
    bottom: -5em;
    transform: scale(1.3);
  }
  @media (min-width: 900px) {
    bottom: -5em;
  }
  @media (min-width: 1200px) {
    bottom: -5em;
  }
`;
