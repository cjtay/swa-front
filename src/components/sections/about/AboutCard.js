import React from "react";
// import { Link } from "gatsby";
// import Image from "gatsby-image";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutCard = ({ member }) => {
  // const icons = member.social.map((icon, i) => <div key={i}>{icon}</div>);

  const socialIcons = member.social.map((soc, i) => soc.socialicon);
  const socialUrls = member.social.map((soc, i) => soc.socialurl);

  console.log("social icons", socialIcons);
  console.log("social urls", socialUrls);

  return (
    <Card>
      <h1>{member.name}</h1>

      {socialIcons.map((icon, i) => (
        <Social key={i}>
          {icon === "Facebook" ? (
            <FaFacebook />
          ) : icon === "Instagram" ? (
            <FaInstagram />
          ) : icon === "Twitter" ? (
            <FaTwitter />
          ) : icon === "LinkedIn" ? (
            <FaLinkedin />
          ) : null}
        </Social>
      ))}

      {/* <ProfilePhoto>
        <Image fluid={member.authorPhoto.childImageSharp.fluid} />
      </ProfilePhoto> */}
    </Card>
  );
};

export default AboutCard;

const Card = styled.li`
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
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

// const ProfilePhoto = styled.div`
//   width: 100px;
//   height: 100px;
//   overflow: hidden;
//   margin-right: 0.5em;
//   border: 1px solid var(--color-primary-1);
//   /* padding: 2px; */
//   border-radius: 100%;

//   img {
//     display: block;
//     width: 100px;
//     height: 100px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

const Social = styled.div`
  width: 30px;
  height: 30px;
`;
