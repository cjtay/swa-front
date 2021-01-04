import React from "react";
import styled from "styled-components";
import { ButtonDark } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { Header, Title, Description } from "../../../styles/SectionHeaders";

import FeaturedBackground from "../../backgrounds/FeaturedBackground";

const FeaturedSection = () => {
  return (
    <Wrapper>
      <FeaturedBackground />
      <ContentWrapper>
        <Header>
          <Title>Featured events</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
            non consequuntur odio obcaecati, consectetur in saepe officiis
            maxime vero ipsam ipsa exercitationem.
          </Description>
          <ButtonPosition>
            <ButtonDark>View all event</ButtonDark>
          </ButtonPosition>
        </Header>

        <FeaturedList>
          <Card>
            <Text>
              <EventTitle>Lunar New Year Lunch 2019</EventTitle>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque
                nihil non consequuntur odio obcaecati, consectetur in saepe
                officiis maxime vero ipsam ipsa
              </Description>
            </Text>
            <ImageContainer>
              <img src="https://source.unsplash.com/random" alt="img" />
            </ImageContainer>
          </Card>

          <Card>
            <Text>
              <EventTitle>Annual Charity Dinner 2018</EventTitle>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque
                nihil non consequuntur odio obcaecati, consectetur in saepe
                officiis maxime vero ipsam ipsa
              </Description>
            </Text>
            <ImageContainer>
              <img src="https://source.unsplash.com/random" alt="img" />
            </ImageContainer>
          </Card>
        </FeaturedList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FeaturedSection;

const EventTitle = styled.h4`
  margin-bottom: 0.2em;
`;

const ButtonPosition = styled.div`
  align-self: center;
  margin-bottom: 1.5em;

  @media (min-width: 600px) {
    align-self: flex-start;
  }
`;

const FeaturedList = styled.ul`
  @media (min-width: 600px) {
    max-width: 550px;
    margin-left: auto;
  }
`;

const Card = styled.li`
  background: rgba(112, 49, 140, 0.7);
  background: -webkit-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 0.7),
    rgba(132, 137, 199, 0.7)
  );
  background: -moz-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 0.7),
    rgba(132, 137, 199, 0.7)
  );
  background: linear-gradient(
    to top left,
    rgba(112, 49, 140, 0.7),
    rgba(132, 137, 199, 0.7)
  );
  padding: 1em;
  border-radius: 10px;
  margin-top: 0.5em;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Text = styled.div`
  color: var(--color-white);
`;
const ImageContainer = styled.div`
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

  @media (min-width: 600px) {
    margin-top: 0;
    margin-right: 1em;
  }
`;
