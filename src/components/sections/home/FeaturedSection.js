import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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
    <section className="w-11/12 max-w-4xl px-2 mx-auto sm:w-4/5">
      <FeaturedBackground />

      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Featured events</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
          non consequuntur odio obcaecati, consectetur in saepe officiis maxime
          vero ipsam ipsa exercitationem.
        </p>
        <div className="flex flex-row justify-center sm:justify-start">
          <Link to="/events/" className="mt-2  btn-dark">
            View all event
          </Link>
        </div>
      </div>

      <div className="ml-auto sm:max-w-xl">
        {highlightedEvents.map(event => (
          <FeaturedCard event={event} key={event.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
