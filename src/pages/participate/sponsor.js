import React from "react";
import Layout from "../../components/layout/layout";

const Sponsor = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">Be a Sponsor</h1>
          <div className="mb-8 text-xl font-light">
            Enable us to continue to do good for the underprivileged
          </div>
          <p>
            You can be one of our sponsors and SWA welcome sponsorships and
            financial support from individuals and corporate member volunteers
            for our charity efforts. Sponsorship contributions will enable us to
            continue to achieve our goal and provide more programmes to our
            beneficiaries. contribute to our charity programmes and projects.
          </p>
          <div className="mx-auto mb-8 md:p-5 max-x-full md:max-w-xl">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt=""
              className="object-cover object-center mx-auto"
            />
          </div>
          <div className="max-w-2xl p-5 mx-auto my-8 border-2 rounded-lg border-swa-4">
            <h3>How you can help us</h3>
            <ul className="my-3 list-disc list-inside">
              <li>
                Be a corporate cash sponsor. We offer many attractive packages,
                starting at $3,000.
              </li>
              <li>Table donations – buy a table to attend the dinner</li>
              <li>Special Package</li>
              <li>
                Advertisements – get an advertisement page in our programme
                booklet
              </li>
              <li>Other donations</li>
            </ul>
            <button className="btn-dark">Download Sponsorship Form</button>
          </div>

          <h2>Cash / Corporate Sponsorship</h2>
          <h4>Presenting sponsor</h4>
          <h4>Gold sponsor</h4>
          <h4>Silver sponsor</h4>
          <h4>Bronze sponsor</h4>
          <h2>Charity Dinner Table Donations </h2>
          <h4>Platinum table</h4>
          <h4>Gold table</h4>
          <h4>Silver table</h4>
          <h4>Bronze table</h4>
          <h2>Advertisement in Souvenir Programme Booklet</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, vitae
            molestias. In excepturi maiores ipsa obcaecati necessitatibus
            quaerat? Est omnis eligendi aliquid quis autem, debitis sed!
            Doloremque quasi aliquid nam!
          </p>
        </section>
      </Layout>
    </>
  );
};

export default Sponsor;
