import React from "react";
import Image from "gatsby-image";

import styled from "styled-components";

const ProfilePhoto = ({ data }) => (
  <PhotoStyle>
    {data.photo !== null && <Image fluid={data.photo.childImageSharp.fluid} />}
  </PhotoStyle>
);

export default ProfilePhoto;

const PhotoStyle = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid var(--color-primary-4);
  /* box-shadow: 1px 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1); */
  overflow: hidden;
  border-radius: 100%; //provide a round canvas for a portrait or landscape photo
  padding: 5px;
  margin: 1em auto;

  img {
    width: 100% !important;
    height: auto;
    border-radius: 100%;
    /* border: 1px solid blue; */

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
