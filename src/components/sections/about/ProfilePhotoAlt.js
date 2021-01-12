import React from "react";

import styled from "styled-components";

const ProfilePhotoAlt = ({ data }) => (
  <PhotoStyle>
    {data.photo !== null && <img src={data} alt="test" />}
  </PhotoStyle>
);

export default ProfilePhotoAlt;

const PhotoStyle = styled.div`
  width: 50px;
  height: 50px;
  /* border: 1px solid red; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  border-radius: 100%; //provide a round canvas for a portrait or landscape photo
  padding: 5px;
  margin: 50px;

  img {
    width: 100%;
    height: auto;
    border-radius: 100%; // image will not be perfect round if it is not in perfect square
    /* border: 1px solid blue; */

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
