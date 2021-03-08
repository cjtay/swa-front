import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";

import ProfileCard from "../../components/sections/about/ProfileCard";

const About = ({ data }) => {
  const members = data.allStrapiTeam.nodes;

  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">Executive Committee Members</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci deleniti debitis cum corporis maxime quaerat mollitia quas,
            voluptatum fugit temporibus. Voluptatem, vero magni! Consectetur
            molestiae fuga distinctio ea officiis!
          </p>

          <div className="flex flex-col items-center mt-10 space-y-9">
            {members.map((member, i) => (
              <ProfileCard key={i} member={member} />
            ))}
          </div>
        </section>
      </Layout>
    </>
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
