import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { ButtonDark } from "../../../styles/buttons/ButtonStyles";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { Header, Title, Description } from "../../../styles/SectionHeaders";

import FeaturedBackground from "../../backgrounds/FeaturedBackground";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiEvent(
        filter: { highlight: { eq: true } }
        sort: { fields: published_at, order: DESC }
        limit: 3
      ) {
        nodes {
          title
          summary
          id
          slug
          smallPhoto {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  // ...GatsbyImageSharpFluid
  const highlightedEvents = data.allStrapiEvent.nodes;

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
            <Link to="/events/">
              <ButtonDark>View all event</ButtonDark>
            </Link>
          </ButtonPosition>
        </Header>

        <FeaturedList>
          {highlightedEvents.map(event => (
            <FeaturedCard event={event} key={event.id} />
          ))}
        </FeaturedList>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FeaturedSection;

const ButtonPosition = styled.div`
  align-self: center;
  margin-bottom: 1.5em;

  @media (min-width: 600px) {
    align-self: flex-start;
  }
`;

const FeaturedList = styled.ul`
  @media (min-width: 600px) {
    max-width: 650px;
    margin-left: auto;
  }
`;
