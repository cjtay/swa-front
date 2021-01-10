import React from "react";
import styled from "styled-components";
import { ButtonDark } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { Header, Title, Description } from "../../../styles/SectionHeaders";

const ProgrammeSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Title>Key Programmes</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugiat hic eaque nobis modi laborum ipsam unde laboriosam earum
            explicabo, nostrum excepturi rem totam labore odio deleniti
            cupiditate cum facilis?
          </Description>
          <ButtonPosition>
            <ButtonDark>View programmes</ButtonDark>
          </ButtonPosition>
        </Header>
        <ProgrammeList>
          <ProgrammeCard>
            <ProgrammeText>
              <ProgrammeTitle>Elderly</ProgrammeTitle>
              <Description>programme description</Description>
            </ProgrammeText>
            <ProgrammeImage>
              <img src="https://source.unsplash.com/random" alt="" />
            </ProgrammeImage>
          </ProgrammeCard>
          <ProgrammeCard>
            <ProgrammeText>
              <ProgrammeTitle>Community</ProgrammeTitle>
              <Description>programme description</Description>
            </ProgrammeText>
            <ProgrammeImage>
              <img src="https://source.unsplash.com/random" alt="" />
            </ProgrammeImage>
          </ProgrammeCard>
          <ProgrammeCard>
            <ProgrammeText>
              <ProgrammeTitle>Diversity</ProgrammeTitle>
              <Description>programme description</Description>
            </ProgrammeText>
            <ProgrammeImage>
              <img src="https://source.unsplash.com/random" alt="" />
            </ProgrammeImage>
          </ProgrammeCard>
          <ProgrammeCard>
            <ProgrammeText>
              <ProgrammeTitle>Leadership</ProgrammeTitle>
              <Description>programme description</Description>
            </ProgrammeText>
            <ProgrammeImage>
              <img src="https://source.unsplash.com/random" alt="" />
            </ProgrammeImage>
          </ProgrammeCard>
        </ProgrammeList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProgrammeSection;

const ButtonPosition = styled.div`
  align-self: center;
  margin-bottom: 1.5em;

  @media (min-width: 600px) {
    align-self: flex-start;
  }
`;

const ProgrammeList = styled.ul`
  @media (min-width: 600px) {
    display: flex;
    margin: 0 auto;
  }
`;

const ProgrammeCard = styled.li`
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
  padding: 1em;
  border-radius: 10px;
  margin-top: 0.5em;

  @media (min-width: 600px) {
    margin-right: 0.5em;
    display: flex;
    flex-direction: column-reverse;

    :last-child {
      margin-right: 0;
    }
  }
`;

const ProgrammeText = styled.div`
  color: var(--color-white);
`;

const ProgrammeTitle = styled.h4`
  margin-bottom: 0.2em;
  /* text-align: center; */
  font-size: rem;
`;

const ProgrammeImage = styled.div`
  max-height: 200px;
  overflow: hidden;
  border: 5px solid white;
  margin-top: 0.5em;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-white);
  }
`;
