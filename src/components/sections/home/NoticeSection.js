import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../../../styles/wrappers/Wrapper";
import { Title, Description } from "../../../styles/SectionHeaders";

const AnnouncementSection = () => {
  const data = useStaticQuery(getNotice);
  console.log("notice section", data);
  return (
    <Wrapper>
      <ContentWrapper>
        <Notice>
          <Title>{data.strapiAnnouncesection.title}</Title>
          <Description>{data.strapiAnnouncesection.description}</Description>
        </Notice>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AnnouncementSection;

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

// ----------- graphql -------------------

export const getNotice = graphql`
  {
    strapiAnnouncesection {
      title
      description
    }
  }
`;
