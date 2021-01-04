import React from "react";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";

import crystaltime from "../../../images/crystaltime.png";
import florray from "../../../images/florray.png";
import moephosis from "../../../images/moephosis.png";
import teamsalon from "../../../images/teamsalon.png";
import yvonne from "../../../images/yvonne.png";
// import SponsorBackground from "../../backgrounds/SponsorBackground";

const SponsorSection = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Title>Sponsors</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusamus fugiat expedita modi eveniet maxime aperiam excepturi
            repellendus similique! Molestiae sequi ex minima labore culpa
            pariatur dicta omnis blanditiis enim.
          </Description>

          <List>
            <Item>
              <Logo src={crystaltime} alt="crystal time logo" />
            </Item>
            <Item>
              <Logo src={florray} alt="crystal time logo" />
            </Item>
            <Item>
              <Logo src={moephosis} alt="crystal time logo" />
            </Item>
            <Item>
              <Logo src={teamsalon} alt="crystal time logo" />
            </Item>
            <Item>
              <Logo src={yvonne} alt="crystal time logo" />
              {/* <img
              src="/images/yvonne.png"
              alt="yvonne creative logo"
              class="sponsor-logo"
            /> */}
            </Item>
          </List>
        </ContentWrapper>
      </Wrapper>
      {/* <SponsorBackground /> */}
    </>
  );
};

export default SponsorSection;

const Title = styled.h2`
  margin-bottom: 0.2em 0;
  color: var(--color-primary-3);
`;

const Description = styled.p`
  margin: 0.5em 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-white-transparent);
  border-radius: 10px;
  margin: 1em auto;
  /* border: 1px solid red; */

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 800px;
  }
`;

const Item = styled.li`
  align-self: center;
  padding-top: 1em;
  /* width: 100%; */
  :last-child {
    padding-bottom: 1em;
  }
  @media (min-width: 600px) {
    margin-left: 1.5em;
  }
`;

const Logo = styled.img`
  max-width: 180px;
  border: 1px solid var(--color-lightgrey);
`;
