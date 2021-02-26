import React, { useState, useReducer } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
import { ButtonDark, ButtonContainer } from "../styles/buttons/ButtonStyles";
import EventCard from "../components/sections/events/EventCard";

const perPage = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "loaded":
      return {
        ...state,
        loading: false,
        loadData: [...state.loadData, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      };
    case "filter":
      return {
        ...state,
        loadData: [...action.filteredEvents],
      };
    default:
      throw new Error("invalid action from useReducer");
  }
};

const Events = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    loadData: data.allStrapiEvent.nodes.slice(0, perPage),
    more: data.allStrapiEvent.nodes.length >= perPage,
    after: perPage,
  });

  const { loading, more, loadData, after } = state;

  console.log("loadData: ", loadData);
  console.log("total data: ", data.allStrapiEvent.nodes.length);
  console.log("more: ", more);

  const [events] = useState(data.allStrapiEvent.nodes);
  const [perPageEvents] = useState(events.slice(0, perPage));
  const [filteredEvents, setFilteredEvents] = useState(perPageEvents);
  // const [filteredEvents, setFilteredEvents] = useState(
  //   data.allStrapiEvent.nodes
  // );
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterNames = [
    "All",
    ...new Set(
      events.map(e => {
        return e.programme;
      })
    ),
  ];

  const handleSearch = name => {
    if (name === "All") {
      setFilteredEvents(loadData);
      setSelectedFilter(name);
    } else {
      const filteredList = loadData.filter(e => e.programme === name);
      setFilteredEvents(filteredList);
      setSelectedFilter(name);
      console.log("selected filter: ", name);
      dispatch({ type: "filter", filteredEvents });
    }
  };

  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
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
            </SearchSection>
            <List>
              {loadData.map(event => (
                <EventCard event={event} key={event.id} />
              ))}
            </List>
            {loading && (
              <ButtonContainer>
                <p>loading...</p>
              </ButtonContainer>
            )}
            {more && (
              <ButtonContainer>
                <ButtonDark
                  onClick={() => {
                    dispatch({ type: "start" });
                    const newData = events.slice(after, after + perPage);
                    dispatch({ type: "loaded", newData });
                    console.log("filteredEvents: ", filteredEvents);
                  }}
                >
                  Load more
                </ButtonDark>
              </ButtonContainer>
            )}
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </>
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
