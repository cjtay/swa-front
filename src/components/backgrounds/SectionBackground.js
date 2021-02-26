import React from "react";
import styled from "styled-components";

const Section = () => {
  return <SectionBackground />;
};

export default Section;

const SectionBackground = styled.div`
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
  position: absolute;
  top: 0;
  height: 110px;
  width: 100%;
  z-index: -1;
`;
