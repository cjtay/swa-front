import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

// import HeroBackground from "../../backgrounds/HeroBackground";

const HeroSection = () => {
  const data = useStaticQuery(getHero);

  return (
    <>
      {data.strapiHerosection.title !== "" && (
        <section className="bg-black-transparent rounded-xl sm:flex sm:flex-row-reverse max-w-2xl mx-auto text-white p-8">
          <div className="sm:w-1/2">
            <h1 className="mb-2">{data.strapiHerosection.title}</h1>
            <p>{data.strapiHerosection.description}</p>
            <Link to={data.strapiHerosection.link}>
              <button className="btn-light mt-2">Read more</button>
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
