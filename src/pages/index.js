import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import NoticeSection from "../components/sections/home/NoticeSection";
import HeroSection from "../components/sections/home/HeroSection";
import FeaturedSection from "../components/sections/home/FeaturedSection";
import ProgrammeSection from "../components/sections/home/ProgrammeSection";
import ParticipateSection from "../components/sections/home/ParticipateSection";
import SponsorSection from "../components/sections/home/SponsorSection";

const IndexPage = () => {
  return (
    <>
      <SEO title="SWA Home" />
      <Layout>
        <HeroSection />
        <NoticeSection />
        <FeaturedSection />
        <ProgrammeSection />
        <ParticipateSection />
        <SponsorSection />
      </Layout>
    </>
  );
};
export default IndexPage;
