import React from "react";
import styled from "styled-components";

const FeaturedSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Title>Featured events</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
            non consequuntur odio obcaecati, consectetur in saepe officiis
            maxime vero ipsam ipsa exercitationem.
          </Description>
          <Button>View all events</Button>
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

const Wrapper = styled.div`
  /* position: relative; */
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 980px;
  margin: 0.5em auto 0 auto;
  padding: 1em 1.5em;
`;

const Title = styled.h2`
  margin-bottom: 0.2em;
`;

const EventTitle = styled.h4`
  margin-bottom: 0.2em;
`;

const Description = styled.p`
  margin: 0.5em 0;
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

const Button = styled.div`
  align-self: center;
  margin-bottom: 1.5em;

  @media (min-width: 600px) {
    align-self: flex-start;
  }
`;

const FeaturedList = styled.div`
  @media (min-width: 600px) {
    max-width: 550px;
    margin-left: auto;
  }
`;

const Card = styled.div`
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
