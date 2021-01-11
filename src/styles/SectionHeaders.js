import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 0.2em 0;
  color: var(--color-primary-3);
`;

export const Description = styled.p`
  margin: 0.5em 0;
  line-height: 1.6;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 600px) {
    max-width: 50%;
    justify-content: flex-start;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* @media (min-width: 600px) {
    max-width: 50%;
    justify-content: flex-start;
  } */
`;
