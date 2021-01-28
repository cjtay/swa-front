// Outstanding tasks
// Display All filter - default on initial load
// pagination
// final styling

import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
// import DropDownContent from "../components/sections/events/DropDownContent";
import EventCard from "../components/sections/events/EventCard";
import SectionBackground from "../components/backgrounds/SectionBackground";

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
      console.log("selected filter: ", name);
      setFilteredEvents(events);
      setSelectedFilter(name);
    } else {
      const filteredList = events.filter(e => e.programme === name);
      console.log("selected filter: ", name);
      console.log("Filtered List: ", filteredList);
      setFilteredEvents(filteredList);
      setSelectedFilter(name);
      console.log("selected filter: ", name);
    }
  };

  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <SectionHead>
            <Title>Events</Title>

            <Description>
              View events or acitivities by selecting the appropriate date
              ranges or programmes
            </Description>
          </SectionHead>

          <SearchSection>
            <FilterSection>
              <Label>Filter by programmes</Label>
              <FilterItem>
                {filterNames.map((filtername, i) => (
                  <Search
                    key={i}
                    onClick={() => handleSearch(filtername)}
                    name={filtername}
                    selectedFilter={selectedFilter}
                  >
                    {filtername}
                  </Search>
                ))}
              </FilterItem>
            </FilterSection>
            <List>
              {filteredEvents.map(event => (
                <EventCard event={event} key={event.id} />
              ))}
            </List>
          </SearchSection>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Events;

const Search = styled.div`
  display: inline-block;
  background-color: ${props =>
    props.name === props.selectedFilter
      ? "var(--color-primary-2)"
      : "var(--color-white)"};
  color: ${props =>
    props.name === props.selectedFilter
      ? "var(--color-white)"
      : "var(--color-primary-2)"};
  font-weight: 400;
  font-size: 1rem;
  padding: 0.1em 1.1em;
  margin: 0 0.5em;
  border-radius: 10px;
  cursor: pointer;
`;

const SearchSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: 600px) {
    margin-top: 1em;
  }
`;

const FilterSection = styled.div`
  width: 100%;
  border: 1px solid var(--color-lightgrey);
  border-radius: 10px;
  padding: 1em;

  @media (min-width: 600px) {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto; */
  }
`;

const FilterItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--color-primary-2);
  margin-bottom: 1em;
`;

const List = styled.ul`
  width: 100%;
  margin-top: 2em;
`;

// -----------------------------------------
// ...GatsbyImageSharpFluid
// -----------------------------------------

export const getEvents = graphql`
  {
    allStrapiEvent {
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
