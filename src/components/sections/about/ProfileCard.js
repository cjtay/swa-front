import React, { useState } from "react";

import styled from "styled-components";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = ({ member }) => {
  const [showMod, setShowMod] = useState(false);
  const [itemId, setItemId] = useState({});

  const handleShow = id => {
    console.log("ID received", id);
    console.log("showMod: ", showMod);
    console.log("member selected - member", member);
    console.log("itemId set ", itemId);

    setShowMod(true);
    setItemId(member);
  };

  const handleClose = () => {
    console.log("handleClose triggered");
    setShowMod(false);
  };

  const socialIcons = member.social.map((soc, i) => soc.socialicon);
  const socialUrls = member.social.map((soc, i) => soc.socialurl);

  return (
    <Card>
      <ProfilePhoto data={member} />
      <ProfileName>{member.name}</ProfileName>

      <ProfilePosition>{member.title}</ProfilePosition>
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
      <Info onClick={() => handleShow(member.id)}>Read more</Info>

      <ProfileInfo
        showMod={showMod}
        member={member}
        itemId={itemId}
        handleClose={handleClose}
      />
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

const ProfilePosition = styled.p`
  color: var(--color-grey);
  font-weight: 300;
  font-size: 0.9rem;
  text-align: center;
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

const Info = styled.p`
  display: block;
  padding: 0.3em 0.5em;
  text-align: center;
  margin: 1em auto;
  border-radius: 10px;
  border: 1px solid var(--color-primary-4);
  background-color: var(--color-white);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: var(--color-primary-4);
  }
`;

// const ProfileModal = styled.div`
//   position: fixed;
//   visibility: ${props => (props.isOpen ? "visible" : "hidden")};
//   opacity: ${props => (props.isOpen ? 1 : 0)};
//   transition: 0.3s ease-in;
//   /* display: ${props => (props.isOpen ? "block" : "none")}; */
//   background-color: var(--color-primary-4);
//   z-index: 2;
//   top: 100px;
//   left: 0;
//   width: 90%;
//   padding: 1em;
//   border-radius: 10px;
// `;
