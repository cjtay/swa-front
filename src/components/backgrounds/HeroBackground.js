import React from "react";
import styled from "styled-components";
import bg1 from "../../images/bg-1.svg";

const HeroBackground = () => {
  return <img src={bg1} alt="background" className="absolute z-n10" />;
  // <Wave img src={bg1} alt="background" />
};

export default HeroBackground;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  /* top: 9em; */

  transform: scale(1);

  /* @media (min-width: 600px) {
    top: -5em;
    transform: scale(1.5);
  }
  @media (min-width: 900px) {
    top: -20em;
    left: 0em;
    transform: scale(1.5);
  }
  @media (min-width: 1200px) {
    top: 0;
    left: 0px;

    transform: scale(1);
  } */
`;
