import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { Header, Title, Description } from "../styles/SectionHeaders";

import { IoIosArrowDown } from "react-icons/io";
import angela from "../images/wls.jpg";

const Events = () => {
  return (
    <Layout>
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
              <Label>Filter by date range</Label>
              <Dropdown>
                <button>
                  <div>Select</div>
                  <IoIosArrowDown />
                </button>
                <DropdownContent>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </DropdownContent>
              </Dropdown>

              <Label>Filter by programme</Label>
              <Dropdown>
                <button>
                  <div>Select</div>
                  <IoIosArrowDown />
                </button>
                <DropdownContent>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </DropdownContent>
              </Dropdown>
            </FilterSection>
            <List>
              <Card>
                <EventInfoContainer>
                  <EventTitle>Lunar New Year Lunch</EventTitle>
                  <EventDescription>
                    This year on 27 February 2019, we celebrated our 42nd Lunar
                    New Year Lunch for the Elderly...
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
                  <div class="img">
                    <img src="https://source.unsplash.com/random" alt="" />
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

const SearchSection = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: 2px solid red;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border: 1px solid blue;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Label = styled.div`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--color-primary-1);
  margin-bottom: 0.3 em;
`;

const Dropdown = styled.div`
  overflow: hidden;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 1em;
    width: 220px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid var(--color-primary-1);
    font-weight: 300;

    :hover {
      background-color: var(--color-primary-1);
      color: var(--color-white);
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--color-white);
  z-index: 1;

  :hover {
    display: block;
  }

  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    :hover {
      background-color: #ddd;
    }
  }
`;

// https://stackoverflow.com/questions/58963030/drop-down-menu-using-styled-components-how-to-properly-use-class-selectors

const List = styled.ul``;

const Card = styled.li`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const EventInfoContainer = styled.div`
  width: 70%;
`;

const EventTitle = styled.h3``;

const EventDescription = styled.p`
  color: var(--color-font-dark);
`;

const ImgContainer = styled.div`
  width: 30%;
  max-height: 180px;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-white);
  }

  @media (min-width: 600px) {
    margin-right: 1em;
  }
`;

const Author = styled.div`
  display: flex;
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
