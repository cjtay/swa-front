import React from "react";
import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { SectionHead, Title, Description } from "../styles/SectionHeaders";
import DropDownContent from "../components/sections/events/DropDownContent";
import EventCard from "../components/sections/events/EventCard";
import SectionBackground from "../components/backgrounds/SectionBackground";

const Events = ({ data }) => {
  const eventList = data.allStrapiEvent.nodes;
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
              <FilterItem>
                <Label htmlFor="time">Select time</Label>
                <DropDownContent
                  content={
                    <>
                      <div value="all">All</div>
                      <div value="lastmonth">Last month</div>
                      <div value="thisyear">This year</div>
                      <div value="lastyear">Last year</div>
                    </>
                  }
                />
              </FilterItem>
              <FilterItem>
                <Label htmlFor="programme">Select programme</Label>
                <DropDownContent
                  content={
                    <>
                      <div value="all">All</div>
                      <div value="lastmonth">Last month</div>
                      <div value="thisyear">This year</div>
                      <div value="lastyear">Last year</div>
                    </>
                  }
                />
              </FilterItem>
            </FilterSection>

            <List>
              {eventList.map(event => (
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
  background-color: var(--color-primary-4);
  background: -webkit-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: -moz-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: linear-gradient(
    to top left,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FilterItem = styled.div`
  margin-top: 1em;
  :first-child {
    margin-top: 0em;
  }
  select {
    width: 100%;
  }
  @media (min-width: 600px) {
    margin-top: 0em;
    select {
      width: 250px;
    }
  }
`;

const Label = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--color-white);
  margin-bottom: 0.3 em;
`;

// https://stackoverflow.com/questions/58963030/drop-down-menu-using-styled-components-how-to-properly-use-class-selectors

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
