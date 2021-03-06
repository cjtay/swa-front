import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";

const How = () => {
  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <h1 className="text-swa-3">How page</h1>

        <Link to="/">
          <p>back to home page</p>
        </Link>
      </Layout>
    </>
  );
};

export default How;
