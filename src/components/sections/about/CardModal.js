import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const CardModal = ({ isOpen, member }) => {
  console.log("card member: ", member);
  return (
    <Wrapper isOpen={isOpen}>
      Card Modal {member.name}
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
    </Wrapper>
  );
};

export default CardModal;

const Wrapper = styled.div`
  background-color: red;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  /* height: 200px; */
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};

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

const ProfileTitle = styled.h4`
  color: var(--color-primary-1);
`;

const ProfileStyle = styled.div`
  position: absolute;
  /* visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 0.3s ease-in; */
  background-color: var(--color-primary-4);
  z-index: 2;
  top: 100px;
  left: 0;
  width: 90%;
  padding: 1em;
  border-radius: 10px;
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
