import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";
import { Description } from "../../../styles/SectionHeaders";

const FeaturedCard = ({ event }) => {
  console.log(event.smallPhoto.childImageSharp.fluid);
  return (
    <Card>
      <ImageContainer>
        <Image
          fluid={event.smallPhoto.childImageSharp.fluid}
          alt={event.title}
        />
      </ImageContainer>
      <Text>
        <EventTitle>{event.title}</EventTitle>
        <Description>{event.summary}</Description>
      </Text>
    </Card>
  );
};

export default FeaturedCard;

const Card = styled.li`
  background: rgba(112, 49, 140, 0.7);
  background: -webkit-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 0.7),
    rgba(132, 137, 199, 0.7)
  );
  background: -moz-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 0.7),
    rgba(132, 137, 199, 0.7)
  );
  background: linear-gradient(
    to top left,
    rgba(112, 49, 140, 0.7),
    rgba(120, 137, 199, 0.8)
  );
  display: flex;
  flex-direction: column-reverse;
  padding: 1em;
  border-radius: 10px;
  margin-top: 0.5em;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: start;
  }
`;

const Text = styled.div`
  color: var(--color-white);
  @media (min-width: 600px) {
    width: 60%;
  }
`;

const EventTitle = styled.h4`
  margin-bottom: 0.2em;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5em;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
    /* background-color: var(--color-white); */
  }

  @media (min-width: 600px) {
    margin-top: 0;
    margin-right: 1em;
    width: 40%;
  }
`;
