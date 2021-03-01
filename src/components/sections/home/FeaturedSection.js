import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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
    <section className="relative w-11/12 max-w-4xl px-2 mx-auto sm:w-4/5">
      {/* --- background pattern ---  */}
      <div className="absolute w-full h-full bg-left bg-no-repeat bg-cover md:bg-contain md:-right-64 top-24 bg-featured-pattern z-n10"></div>

      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Featured events</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
          non consequuntur odio obcaecati, consectetur in saepe officiis maxime
          vero ipsam ipsa exercitationem.
        </p>

        <Link to="/events/" className="inline-block mt-2 mb-5 btn-dark md:mb-0">
          View all event
        </Link>
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
