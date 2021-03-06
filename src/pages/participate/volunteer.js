import React from "react";
import Layout from "../../components/layout/layout";

const Volunteer = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1>Volunteer Page with SWA</h1>
          <p>
            SWA welcome donations and support from individuals and corporate
            member volunteers for supporting our charity efforts. You can be
            part of us and contribute your time or expertise to help us with
            administrative matters and management of our charity programmes and
            projects.
          </p>
          <img
            src="https://source.unsplash.com/random/800x600"
            alt=""
            className="object-cover max-h-full mb-2 sm:mb-2 sm:mt-0 sm:mr-4 sm:w-64"
          />

          <h2>Form Section</h2>
        </section>
      </Layout>
    </>
  );
};

export default Volunteer;
