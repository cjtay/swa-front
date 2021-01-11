import React, { useState } from "react";
// import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
import SectionBackground from "../components/backgrounds/SectionBackground";
import AboutCard from "../components/sections/about/AboutCard";

const About = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const members = data.allStrapiTeam.nodes;

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Layout>
      {/* <ModalOverlay isOpen={isOpen} /> */}
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
              <AboutCard
                key={i}
                member={member}
                // isOpen={isOpen}
                // handleClick={handleClick}
                // handleClose={handleClose}
              />
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

// const ModalOverlay = styled.div`
//   position: absolute;
//   visibility: ${props => (props.isOpen ? "visible" : "hidden")};
//   display: ${props => (props.isOpen ? "block" : "none")};
//   background-color: var(--color-black-transparent);
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 5000px;
//   z-index: 1;
// `;

// -----------------------------------------
// ...GatsbyImageSharpFluid
// -----------------------------------------

export const getEvents = graphql`
  {
    allStrapiTeam {
      nodes {
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
