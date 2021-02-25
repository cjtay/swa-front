import React from "react";
import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";

import SectionBackground from "../components/backgrounds/SectionBackground";
import ProfileCard from "../components/sections/about/ProfileCard";

const About = ({ data }) => {
  const members = data.allStrapiTeam.nodes;

  return (
    <Layout>
      <SectionBackground />

      <section className="sm:w-4/5 max-w-4xl px-2 mx-auto">
        <h1 className="text-swa-3">Executive Committee Members</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci
          deleniti debitis cum corporis maxime quaerat mollitia quas, voluptatum
          fugit temporibus. Voluptatem, vero magni! Consectetur molestiae fuga
          distinctio ea officiis!
        </p>

        <div className="mt-10 mx-2">
          {members.map((member, i) => (
            <ProfileCard key={i} member={member} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;

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
