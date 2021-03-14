import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import EventCard from "../components/sections/events/EventCard";

const Events = ({ data }) => {
  const [events] = useState(data.allStrapiEvent.nodes);
  const [filteredEvents, setFilteredEvents] = useState(
    data.allStrapiEvent.nodes
  );
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterNames = [
    "All",
    ...new Set(
      events.map(e => {
        return e.programme;
      })
    ),
  ];

  useEffect(() => {
    console.log("events: ", events);
    console.log("programmes", filterNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("initial filterdEvents: ", filteredEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (events !== []) {
  //   console.log("from event page: ", events);
  // }

  const handleSearch = name => {
    if (name === "All") {
      setFilteredEvents(events);
      setSelectedFilter(name);
    } else {
      const filteredList = events.filter(e => e.programme === name);
      setFilteredEvents(filteredList);
      setSelectedFilter(name);
    }
  };

  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <div className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">Events</h1>
          <p>
            View events or acitivities by selecting the appropriate date ranges
            or programmes
          </p>

          <div className="w-3/4 p-3 mx-auto mb-12 border border-gray-200 rounded-lg mt-9">
            <p className="mb-3 text-sm text-gray-700">Filter by programmes</p>
            <ul className="flex flex-wrap items-center justify-center space-x-3">
              {filterNames.map((filtername, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(filtername)}
                  onKeyDown={() => handleSearch(filtername)}
                  className={`px-3 py-1 text-sm font-bold uppercase ${
                    selectedFilter === filtername && `bg-swa-4`
                  } bg-gray-200 rounded-lg cursor-pointer hover:bg-swa-4 mb-3 `}
                >
                  {filtername}
                </button>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-6 ">
            {filteredEvents.map(event => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Events;

// -----------------------------------------
// ...GatsbyImageSharpFluid
// -----------------------------------------

export const getEvents = graphql`
  {
    allStrapiEvent(sort: { fields: published_at, order: DESC }) {
      totalCount
      nodes {
        author {
          name
          authorPhoto {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        date
        programme
        title
        summary
        published_at(formatString: "Do MMM YYYY")
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
`;
