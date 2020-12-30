import React from "react";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";

const AnnouncementSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Notice>
          <Title>Important Annoucement</Title>
          <Description>
            In view of the evolving situation of the COVID 19 outbreak, we would
            like to announce that SWA Charity Gala Diner 2020 will be
            Descriptionostponed to July 2021.
          </Description>
        </Notice>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AnnouncementSection;

const Title = styled.h2`
  margin-bottom: 0.2em 0;
  color: var(--color-primary-3);
`;

const Description = styled.p`
  margin: 0.5em 0;
`;

const Notice = styled.div`
  border-radius: 10px;
  padding: 1em 1.5em;
  margin-top: 0.5em;
  background-color: var(--color-white-transparent);
  border: 1px solid var(--color-grey);

  @media (min-width: 600px) {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 2em;
  }
`;
