import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div>Hero Section</div>
        <Hero>
          <Text>
            <Title>Singapore Women's Association</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellat accusantium nobis quod aspernatur, eius fuga officiis
              fugit laborum vero iste unde enim aliquid in nemo ea, optio ex
              architecto!
            </Description>
            <div class="btn btn-cta primary-light">action</div>
          </Text>
          <Img>
            <img src="https://source.unsplash.com/random" alt="" />
          </Img>
        </Hero>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
`;

const Hero = styled.div`
  border-radius: 10px;
  color: var(--color-font-light);
  padding: 0.2em 1em;
  background-color: var(--color-black-transparent);
  max-width: 700px;
  margin: 0 auto;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
    max-height: 70vh;
    overflow: hidden;
    /* background-color: transparent; */
  }
`;

const Text = styled.div`
  margin-bottom: 1em;
  max-width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  color: var(--color-white);
`;

const Img = styled.div`
  max-height: 250px;
  overflow: hidden;
  border: 5px solid white;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-white);
  }

  @media (min-width: 600px) {
    width: 50%;
    margin-right: 1em;
  }
`;

const Description = styled.p`
  margin: 0.5em 0;
`;
