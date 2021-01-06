import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const EventCard = ({ event }) => {
  return (
    <Card>
      <EventInfoContainer>
        <EventTitle>{event.title}</EventTitle>
        <EventDescription>{event.summary}</EventDescription>
        <Author>
          <AuthorPhoto>
            <Image
              fluid={event.author.authorPhoto.childImageSharp.fluid}
              alt={event.title}
            />
          </AuthorPhoto>
          <AuthorInfoContainer>
            <AuthorName>{event.author.name}</AuthorName>
            <PublishDate>{event.published_at}</PublishDate>
          </AuthorInfoContainer>
        </Author>
      </EventInfoContainer>
      <ImgContainer>
        <Image
          fluid={event.smallPhoto.childImageSharp.fluid}
          alt={event.title}
        />
      </ImgContainer>
    </Card>
  );
};

export default EventCard;

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
  width: 25px;
  overflow: hidden;
  margin-right: 0.5em;

  img {
    display: block;
    max-width: 30px;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
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
