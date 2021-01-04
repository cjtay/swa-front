import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import HeroBackground from "../../backgrounds/HeroBackground";
import { ButtonLight } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";

const HeroSection = () => {
  const data = useStaticQuery(getHeroImage);
  const [flag, setFlag] = useState(false);

  console.log(data);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <Wrapper>
      <HeroBackground />
      <ContentWrapper>
        <Hero>
          <Text>
            <Title>Singapore Women's Association</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellat accusantium nobis quod aspernatur, eius fuga officiis
              fugit laborum vero iste unde enim aliquid in nemo ea, optio ex
              architecto!
            </Description>
            <ButtonLight onClick={handleClick}>
              More : {flag ? "true" : "false"}
            </ButtonLight>
          </Text>
          <Img>
            <Image fluid={data.file.childImageSharp.fluid} alt="swa logo" />
          </Img>
        </Hero>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

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
    max-height: 70%;
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
  font-weight: 700;
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

// ----------- graphql -------------------

export const getHeroImage = graphql`
  {
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "hero-img.jpg" }
    ) {
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
