import React from "react";
import Layout from "../../components/layout/layout";

const Donate = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1>Donate Page</h1>
          <h4>Give a ray of hope</h4>
          <p>
            SWA welcome donations and support from individuals and corporations.
            Your kind gesture will help us improve the lives of our
            beneficiaries as well as contribute to our charity efforts to
            enhance the welfare of the under-privileged. On behalf of SWA, we
            would like to thank you for your heart and generosity.
          </p>
          <img
            src="https://source.unsplash.com/random/800x600"
            alt=""
            className="object-cover max-h-full mb-2 sm:mb-2 sm:mt-0 sm:mr-4 sm:w-64"
          />
          <h2>3 ways to donate</h2>
          <div>
            <h4>Cheque</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              aspernatur eius ut, quos, magni voluptatibus temporibus et non
              placeat, inventore asperiores odio repellat minus labore provident
              eveniet animi atque obcaecati.
            </p>
          </div>
          <div>
            <h4>Credit Card</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempore deserunt vitae explicabo, unde repellendus, at obcaecati
              illo nostrum dicta non, esse ipsum molestiae delectus? Minima
              possimus minus voluptates accusamus.
            </p>
          </div>
          <div>
            <h4>PayNow</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              autem atque voluptate, reprehenderit labore nobis at, illum modi
              quam explicabo impedit unde! Nulla quaerat amet aliquid, ex
              eveniet commodi perspiciatis.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Donate;
