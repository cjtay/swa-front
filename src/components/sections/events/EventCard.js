import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const EventCard = ({ event }) => {
  console.log("event author name: ", event.author.name);
  return (
    <Link to={`/events/${event.slug}`}>
      <>
        <div className="relative flex flex-col w-full p-5 mx-auto overflow-visible transition duration-300 rounded-lg shadow-lg cursor-pointer md:flex-row md:w-11/12 md:items-start hover:bg-gray-100 ">
          <div className="w-full p-2 mx-auto md:mr-3 md:w-3/4">
            {event.smallPhoto !== null && (
              <Image
                fluid={event.smallPhoto.childImageSharp.fluid}
                alt={event.title}
              />
            )}
          </div>
          <div className="justify-between w-full p-2 md:flex md:flex-col ">
            <div className="space-y-5 md:flex md:flex-col ">
              <div className="flex flex-col items-start">
                <h2 className=" text-swa-1">{event.title}</h2>

                <p className="w-full leading-snug text-gray-700 line-clamp-2">
                  {event.summary}
                </p>
                <div className="hidden my-2 btn-dark md:block">
                  Read more...
                </div>
                <div className="flex justify-between w-full p-2 mt-5 md:mt-0 ">
                  <div className="flex items-center justify-start my-2 space-x-2">
                    <div>
                      {event.author !== null && (
                        <Image
                          fluid={event.author.authorPhoto.childImageSharp.fluid}
                          alt={event.title}
                          className="object-cover object-center w-8 h-8 mx-auto rounded-full"
                        />
                      )}
                    </div>

                    {event.author.name !== null && (
                      <p className="text-xs text-gray-600">
                        {/* {event.author.name} */}
                      </p>
                    )}
                  </div>
                  <div>
                    {event.programme !== null && (
                      <div className="px-2 py-1 mb-2 text-xs font-bold uppercase rounded-lg bg-swa-4">
                        {event.programme}
                      </div>
                    )}
                    {event.published_at !== null && (
                      <p className="text-sm text-gray-600">
                        {event.published_at}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default EventCard;
