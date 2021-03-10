import React from "react";

import Layout from "../components/layout/layout";

import SEO from "../components/layout/seo";

const NotFoundPage = () => (
  <>
    {/* --- background pattern --- */}
    <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
    <Layout>
      <SEO title="404: Not found" />
      <h1>Custom 404 page</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;
