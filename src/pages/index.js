import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import NoticeSection from "../components/sections/home/NoticeSection";
import HeroSection from "../components/sections/home/HeroSection";
import FeaturedSection from "../components/sections/home/FeaturedSection";
import ProgrammeSection from "../components/sections/home/ProgrammeSection";
import ParticipateSection from "../components/sections/home/ParticipateSection";
import SponsorSection from "../components/sections/home/SponsorSection";

// this is a test comment

const IndexPage = () => {
  return (
    <>
      {/* --- background pattern --- */}
      <div className="absolute w-full h-full bg-bottom bg-no-repeat bg-cover lg:bg-cover z-n10 bg-hero-pattern"></div>
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
