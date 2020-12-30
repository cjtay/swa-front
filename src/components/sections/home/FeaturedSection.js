import React from "react";
import styled from "styled-components";
import { ButtonDark } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
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
              <p class="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque
                nihil non consequuntur odio obcaecati, consectetur in saepe
                officiis maxime vero ipsam ipsa
              </p>
            </Text>
            <ImageContainer>
              <img src="https://source.unsplash.com/random" alt="img" />
            </ImageContainer>
          </Card>

          <Card>
            <Text>
              <EventTitle>Annual Charity Dinner 2018</EventTitle>
              <p class="event-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque
                nihil non consequuntur odio obcaecati, consectetur in saepe
                officiis maxime vero ipsam ipsa
              </p>
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

const Title = styled.h2`
  margin-bottom: 0.2em 0;
  color: var(--color-primary-3);
`;

const Description = styled.p`
  margin: 0.5em 0;
`;

const EventTitle = styled.h4`
  margin-bottom: 0.2em;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 600px) {
    max-width: 50%;
    justify-content: flex-start;
  }
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

const Text = styled.p`
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
