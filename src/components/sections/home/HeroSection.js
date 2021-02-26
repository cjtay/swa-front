import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

const HeroSection = () => {
  const data = useStaticQuery(getHero);

  return (
    <>
      {data.strapiHerosection.title !== "" && (
        <section className="w-11/12 p-8 mx-auto mt-8 text-white bg-black-transparent rounded-xl sm:flex sm:flex-row-reverse">
          <div className="sm:w-1/2">
            <h1 className="mb-2">{data.strapiHerosection.title}</h1>
            <p>{data.strapiHerosection.description}</p>
            <Link to={data.strapiHerosection.link} className="mt-2 btn-light">
              Read more
            </Link>
          </div>
          <div className="sm:w-1/2 mt-4 sm:mr-4 sm:mt-0 overflow-hidden .max-h-64 ">
            <Image
              fluid={data.strapiHerosection.media.childImageSharp.fluid}
              alt="hero"
              className="max-h-full border-4 border-white "
            />
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;

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
