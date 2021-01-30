import React from "react";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";
import { Title, Description } from "../styles/SectionHeaders";
import SectionBackground from "../components/backgrounds/SectionBackground";
import Layout from "../components/layout/layout";

import SEO from "../components/layout/seo";

const NotFoundPage = () => (
  <Layout>
    <SectionBackground />
    <Wrapper>
      <ContentWrapper>
        <SEO title="404: Not found" />
        <Title>404: Not Found</Title>
        <Description>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Description>
      </ContentWrapper>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
