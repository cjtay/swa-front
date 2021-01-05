import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { Header, Title, Description } from "../styles/SectionHeaders";
import DropDownContent from "../components/sections/events/DropDownContent";

import angela from "../images/wls.jpg";

const Events = () => {
  return (
    <Layout>
      <SectionBackground />
      <Wrapper>
        <ContentWrapper>
          <Header>
            <Title>Events</Title>

            <Description>
              View events or acitivities by selecting the appropriate date
              ranges or programmes
            </Description>
          </Header>
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
              <Card>
                <EventInfoContainer>
                  <EventTitle>Lunar New Year Lunch</EventTitle>
                  <EventDescription>
                    This year on 27 February 2019, we celebrated our 42nd Lunar
                    New Year Lunch for the Elderly... This year on 27 February
                  </EventDescription>
                  <Author>
                    <AuthorPhoto>
                      <img src={angela} alt="Angela" />
                    </AuthorPhoto>
                    <AuthorInfoContainer>
                      <AuthorName>Angela</AuthorName>
                      <PublishDate>10 Feb 2021</PublishDate>
                    </AuthorInfoContainer>
                  </Author>
                </EventInfoContainer>
                <ImgContainer>
                  <div>
                    <img
                      src="https://source.unsplash.com/random/800x600"
                      alt=""
                    />
                  </div>
                </ImgContainer>
              </Card>
            </List>
          </SearchSection>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Events;

const SectionBackground = styled.div`
  background: rgba(112, 49, 140, 1);
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
  position: absolute;
  top: 0;
  height: 110px;
  width: 100%;
  z-index: -1;
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

const Card = styled.li`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  max-width: 600px;
  border-radius: 15px;
  margin: 1em auto;
  padding: 0.5em;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const EventInfoContainer = styled.div`
  width: 100%;
`;

const EventTitle = styled.h4`
  color: var(--color-primary-4);
`;

const EventDescription = styled.p`
  color: var(--color-font-dark);
`;

const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-white);
    border-radius: 10px;
  }

  @media (min-width: 600px) {
    margin-right: 1em;
  }
`;

const Author = styled.div`
  display: flex;
  margin: 0.5em 0;
`;

const AuthorPhoto = styled.div`
  max-height: 30px;
  overflow: hidden;
  border-radius: 50px;
  margin-right: 0.5em;

  img {
    display: block;
    max-width: 30px;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
  }
`;
const AuthorInfoContainer = styled.div`
  margin-bottom: 0.5em;
`;

const AuthorName = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--color-black);
`;

const PublishDate = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
  color: var(--color-darkgrey);
`;
