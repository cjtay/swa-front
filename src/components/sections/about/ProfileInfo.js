import React from "react";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import {
  ButtonContainer,
  ButtonLight,
} from "../../../styles/buttons/ButtonStyles";

const ProfileInfo = ({ showMod, member, itemId, handleClose }) => {
  console.log("modal member info", member);
  console.log("modal itemId info", itemId);
  console.log("modal showMod ", showMod);
  return (
    <ProfileStyle showMod={showMod} onClick={handleClose}>
      {member.description && (
        <>
          <ProfileTitle>Description</ProfileTitle>
          <ReactMarkdown source={member.description} />
        </>
      )}
      {member.experience && (
        <>
          <ProfileTitle>Experience</ProfileTitle>
          <ReactMarkdown source={member.experience} />
        </>
      )}
      {member.contribution && (
        <>
          <ProfileTitle>Contribution</ProfileTitle>
          <ReactMarkdown source={member.contribution} />
        </>
      )}
      {member.aspiration && (
        <>
          <ProfileTitle>Aspiration</ProfileTitle>
          <ReactMarkdown source={member.aspiration} />
        </>
      )}
      <ButtonContainer center>
        <ButtonLight>Close</ButtonLight>
      </ButtonContainer>
    </ProfileStyle>
  );
};

export default ProfileInfo;

const ProfileTitle = styled.h4`
  color: var(--color-primary-1);
`;

const ProfileStyle = styled.div`
  position: relative;
  visibility: ${props => (props.showMod ? "visible" : "hidden")};
  display: ${props => (props.showMod ? "block" : "none")};
  opacity: ${props => (props.showMod ? 1 : 0)};
  transition: 0.3s ease-in;
  background-color: var(--color-primary-4);
  z-index: 1;
  top: -20px;
  left: 0;
  /* height: ${props => (props.showMod ? "90%" : "0")}; */
  padding: 1em;
  border-radius: 10px;

  @media (min-width: 600px) {
    width: ${props => (props.showMod ? "80%" : "0")};
    margin: 0 auto;
  }

  h1 {
    font-weight: 700;
    color: var(--color-primary-1);
  }

  h2 {
    font-weight: 700;
    color: var(--color-primary-1);
  }

  h3 {
    font-weight: 400;
    color: var(--color-primary-1);
  }

  p {
    color: var(--color-blacklight);
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.2em auto;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    list-style-image: none;
    font-size: 1rem;
    margin: 1em auto;
  }

  em,
  strong {
    font-weight: 700;
    color: var(--color-primary-2);
  }

  u {
    text-decoration: underline;
  }

  blockquote > p {
    display: inline-block;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--color-primary-1);
    margin: 1em auto;
    background-color: var(--color-primary-4);
    border-radius: 15px;
    padding: 0 0.8em 0 0;

    ::before {
      content: "Q";
      font-size: 5rem;
      font-weight: 400;
      margin-right: 0.1em;
      position: relative;
      top: -7px;
      right: -7px;
    }
  }
`;
