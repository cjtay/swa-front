import React from "react";
// import { Link } from "gatsby";

import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ProfilePhoto from "./ProfilePhoto";

const ProfileCard = ({ member, isOpen, handleClick }) => {
  const socialIcons = member.social.map((soc, i) => soc.socialicon);
  const socialUrls = member.social.map((soc, i) => soc.socialurl);

  return (
    <Card onClick={handleClick}>
      <ProfilePhoto data={member} />
      <ProfileName>
        {member.name}
        {isOpen ? "true" : "false"}
      </ProfileName>

      {socialIcons !== [] && (
        <SocialList>
          {socialIcons.map((icon, i) => (
            <Social key={i}>
              {icon === "Facebook" ? (
                <a
                  href={socialUrls[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              ) : icon === "Instagram" ? (
                <a
                  href={socialUrls[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              ) : icon === "Twitter" ? (
                <a
                  href={socialUrls[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              ) : icon === "LinkedIn" ? (
                <a
                  href={socialUrls[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              ) : null}
            </Social>
          ))}
        </SocialList>
      )}

      <ProfileStyle>
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
      </ProfileStyle>
    </Card>
  );
};

export default ProfileCard;

const Card = styled.li`
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  max-width: 550px;
  border-radius: 15px;
  margin: 1em auto;
  padding: 0.8em;
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 80%;
  }
`;

const ProfileName = styled.h2`
  color: var(--color-primary-1);
  text-align: center;
`;

const ProfileTitle = styled.h4`
  color: var(--color-primary-1);
`;

const SocialList = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em auto;
`;

const Social = styled.div`
  font-size: 1.5rem;
  margin: 0.2em 0.3em;
  color: var(--color-primary-1);
`;

const ProfileModal = styled.div`
  position: fixed;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 0.3s ease-in;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  background-color: var(--color-primary-4);
  z-index: 2;
  top: 100px;
  left: 0;
  width: 90%;
  padding: 1em;
  border-radius: 10px;
`;

const ProfileStyle = styled.div`
  /* position: fixed;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 0.3s ease-in;
  background-color: var(--color-primary-4);
  z-index: 2;
  top: 100px;
  left: 0;
  width: 90%;
  padding: 1em;
  border-radius: 10px; */
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
