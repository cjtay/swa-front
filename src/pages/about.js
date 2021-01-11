import React from "react";
// import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
import SectionBackground from "../components/backgrounds/SectionBackground";
import AboutCard from "../components/sections/about/AboutCard";

// const teamData = [
//   {
//     id: 1,
//     name: "Lee Li Hua",
//     title: "President",
//     profession: "",
//     description: "",
//     experience: "",
//     contributions: "",
//     aspirations: "",
//     url: "/",
//     social: [<FaFacebook />, <FaInstagram />, <FaLinkedin />, <FaTwitter />],
//     photo: "../../../images/leelihua.jpg",
//   },
//   {
//     id: 2,
//     name: "Angela Wong",
//     title: "Honorary Treasurer",
//     profession: "",
//     description: "",
//     experience: "",
//     contributions: "",
//     aspirations: "",
//     url: "/",
//     social: [<FaFacebook />, <FaInstagram />],
//     photo: "../../../images/wls.jpg",
//   },
// ];

const About = ({ data }) => {
  // const eventList = data.allStrapiEvent.nodes;
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
              <AboutCard key={i} member={member} />
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
        name
        profession
        title
        social {
          socialicon
          socialurl
        }
      }
    }
  }
`;
