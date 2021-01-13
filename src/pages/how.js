import React from "react";
import { Link } from "gatsby";

import angela from "../images/wls.jpg";
import ProfilePhotoAlt from "../components/sections/about/ProfilePhotoAlt";
import Layout from "../components/layout/layout";

const How = () => {
  return (
    <Layout>
      <h1>How page</h1>
      <ProfilePhotoAlt data={angela} />

      <Link to="/">
        <p>back to home page</p>
      </Link>
    </Layout>
  );
};

export default How;
