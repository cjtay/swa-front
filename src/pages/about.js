import React from "react";
import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
import SectionBackground from "../components/backgrounds/SectionBackground";
import ProfileCard from "../components/sections/about/ProfileCard";

const About = ({ data }) => {
  const members = data.allStrapiTeam.nodes;

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Executive Committee Members</Title>

            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              adipisci deleniti debitis cum corporis maxime quaerat mollitia
              quas, voluptatum fugit temporibus. Voluptatem, vero magni!
              Consectetur molestiae fuga distinctio ea officiis!
            </Description>
          </SectionHead>

          <List>
            {members.map((member, i) => (
              <ProfileCard key={i} member={member} />
            ))}
          </List>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default About;

const List = styled.ul`
  width: 100%;
  margin-top: 2em;
`;

// -----------------------------------------
// ...GatsbyImageSharpFluid
// -----------------------------------------

export const getEvents = graphql`
  {
    allStrapiTeam {
      nodes {
        id
        name
        profession
        title
        description
        experience
        aspiration
        contribution
        social {
          socialicon
          socialurl
        }
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
