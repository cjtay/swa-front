import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <Card>
        <EventInfoContainer>
          <EventTitle>{event.title}</EventTitle>
          <EventDescription>{event.summary}</EventDescription>
          {event.author !== null && (
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
              <Programme>{event.programme}</Programme>
            </Author>
          )}
        </EventInfoContainer>
        <ImgContainer>
          {event.smallPhoto !== null && (
            <Image
              fluid={event.smallPhoto.childImageSharp.fluid}
              alt={event.title}
            />
          )}
        </ImgContainer>
      </Card>
    </Link>
  );
};

export default EventCard;

const Card = styled.li`
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
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
  color: var(--color-primary-3);
`;

const EventDescription = styled.p`
  font-size: 1rem;
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
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin-right: 0.5em;
  border: 1px solid var(--color-primary-1);
  /* padding: 2px; */
  border-radius: 100%;

  img {
    display: block;
    width: 30px;
    height: 30px;
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

const Programme = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2em 0.9em;
  background-color: var(--color-primary-4);
  border-radius: 5px;
  margin-left: auto;
  align-self: center;
`;
