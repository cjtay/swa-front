import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const FeaturedCard = ({ event }) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <div className="flex flex-col w-full p-5 my-5 overflow-hidden transition duration-300 bg-white rounded-lg shadow-lg cursor-pointer opacity-90 md:w-11/12 md:flex-row md:items-start hover:bg-gray-100 hover:opacity-70">
        <div>
          <Image
            fluid={event.smallPhoto.childImageSharp.fluid}
            alt={event.title}
            className="object-cover object-center mx-auto mb-2 md:w-48 md:mr-3 "
          />
        </div>
        <div>
          <h3 className=" text-swa-3">{event.title}</h3>
          <p className="line-clamp-4">{event.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
