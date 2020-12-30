import React from "react";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { ButtonDark } from "../../../styles/buttons/ButtonStyles";

const ParticipateSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Title>Get involved</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus cum, molestiae perferendis debitis aliquam ad
            repellat voluptatem nostrum nesciunt eveniet ducimus facere
            architecto corporis dignissimos quo, iste beatae inventore nisi!
          </Description>
        </Header>
        <List>
          <Card>
            <ImageContainer>
              <Title>Donate</Title>
              <Image>
                <img src="https://source.unsplash.com/random" alt="" />
              </Image>
            </ImageContainer>
            <ParticipateText>
              <ParticipateDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </ParticipateDescription>
              <ButtonPosition>
                <ButtonDark>Donate</ButtonDark>
              </ButtonPosition>
            </ParticipateText>
          </Card>
          <Card>
            <ImageContainer>
              <Title>Volunteer</Title>
              <Image>
                <img src="https://source.unsplash.com/random" alt="" />
              </Image>
            </ImageContainer>
            <ParticipateText>
              <ParticipateDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </ParticipateDescription>
              <ButtonPosition>
                <ButtonDark>Be a volunteer</ButtonDark>
              </ButtonPosition>
            </ParticipateText>
          </Card>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ParticipateSection;

const Title = styled.h2`
  margin-bottom: 0.2em 0;
  color: var(--color-primary-3);
`;

const Description = styled.p`
  margin: 0.5em 0;
`;

const ButtonPosition = styled.div`
  align-self: center;
  margin-bottom: 1.5em;

  @media (min-width: 600px) {
    align-self: flex-start;
  }
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

const List = styled.ul`
  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 600px;
  }
`;

const Card = styled.li`
  background: var(--color-lightgrey);
  padding: 1em;
  border-radius: 10px;
  margin-top: 0.5em;

  @media (min-width: 600px) {
    display: flex;
    padding: 1em;
    :last-child {
      margin-right: 0;
    }
  }
`;

const ParticipateText = styled.div`
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const ParticipateDescription = styled.p`
  color: var(--color-black);
  margin-bottom: 0.5em;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.5em;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border: 5px solid white;
  /* margin-top: 0.5em; */
  /* margin: 0.5em auto 0 auto; */
  margin-top: 1em;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-white);
  }

  @media (min-width: 600px) {
    width: 200px;
    height: 150px;
    margin-right: 0.8em;
  }
`;
