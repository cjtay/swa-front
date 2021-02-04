import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
// import HeroBackground from "../../backgrounds/HeroBackground";
import { ButtonLight } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { Description } from "../../../styles/SectionHeaders";

const HeroSection = () => {
  const data = useStaticQuery(getHero);

  return (
    <Wrapper>
      {/* <HeroBackground /> */}
      <ContentWrapper>
        {data.strapiHerosection.title !== "" && (
          <Hero>
            <Text>
              <Title>{data.strapiHerosection.title}</Title>
              <Description>{data.strapiHerosection.description}</Description>
              <Link to={data.strapiHerosection.link}>
                <ButtonLight>More</ButtonLight>
              </Link>
              <button className="ml-1 bg-white hover:bg-green-700 text-purple-500 py-2 px-6 rounded-md ">
                More
              </button>
              <div className="text-white">
                This is a standalone text styled by tailwind
              </div>
            </Text>
            <Img>
              <Image
                fluid={data.strapiHerosection.media.childImageSharp.fluid}
                alt="hero"
              />
            </Img>
          </Hero>
        )}
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
    align-items: flex-start;
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
  @media (min-width: 600px) {
    margin: 0;
  }
`;

const Img = styled.div`
  max-height: 250px;
  overflow: hidden;
  border: 5px solid white;
  margin-bottom: 1em;

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

// ----------- graphql -------------------

export const getHero = graphql`
  {
    strapiHerosection {
      title
      description
      link
      media {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
