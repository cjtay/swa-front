import React from "react";
import Layout from "../../components/layout/layout";

const Testimonials = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">Testimonials Page</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nisi excepturi eum placeat facilis doloribus reiciendis magni enim
            quisquam labore est optio, quibusdam similique provident,
            consectetur in unde aliquam error! Pariatur voluptatum, quos
            adipisci quidem aspernatur voluptates veritatis optio minima, odio,
            laudantium ducimus voluptate tempora deserunt saepe necessitatibus
            alias? Dolorum eaque id suscipit quidem soluta commodi placeat
            laudantium hic sit.
          </p>

          <section className="my-8">
            <h4>item 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              nesciunt, tenetur libero iusto deserunt totam aliquid voluptates
              reprehenderit beatae, possimus quasi, hic perferendis sapiente
              quam sint blanditiis nisi quia consequatur.
            </p>
            <h4>item 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              nesciunt, tenetur libero iusto deserunt totam aliquid voluptates
              reprehenderit beatae, possimus quasi, hic perferendis sapiente
              quam sint blanditiis nisi quia consequatur.
            </p>
            <h4>item 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
              nesciunt, tenetur libero iusto deserunt totam aliquid voluptates
              reprehenderit beatae, possimus quasi, hic perferendis sapiente
              quam sint blanditiis nisi quia consequatur.
            </p>
          </section>

          <section className="my-8">
            <h2 className="mb-2 text-swa-3">Our Awards</h2>
            <ul className="space-y-8">
              <li>
                <h4>Award 1</h4>
                <img
                  src="https://source.unsplash.com/random/800x600"
                  alt=""
                  className="object-cover max-h-full mb-2 overflow-hidden sm:float-right t sm:mb-2 sm:mt-0 sm:mr-4 sm:w-48"
                />
                <p>
                  Award 1 Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Harum nesciunt, tenetur libero iusto deserunt totam
                  aliquid voluptates reprehenderit beatae, possimus quasi, hic
                  perferendis sapiente quam sint blanditiis nisi quia
                  consequatur. Award 1 Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Harum nesciunt, tenetur libero iusto
                  deserunt totam aliquid voluptates reprehenderit beatae,
                  possimus quasi, hic perferendis sapiente quam sint blanditiis
                  adipisicing elit. Harum nesciunt, tenetur libero iusto
                  deserunt totam aliquid voluptates reprehenderit beatae,
                  possimus quasi, hic perferendis sapiente quam sint blanditiis
                  nisi quia consequatur.
                </p>
              </li>
              <li>
                <h4>Award 2</h4>
                <img
                  src="https://source.unsplash.com/random/800x600"
                  alt=""
                  className="object-cover max-h-full mb-2 sm:float-left sm:mb-2 sm:mt-0 sm:mr-4 sm:w-64"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum nesciunt, tenetur libero iusto deserunt totam aliquid
                  voluptates reprehenderit beatae, possimus quasi, hic
                  perferendis sapiente quam sint blanditiis nisi quia
                  consequatur. voluptates reprehenderit beatae, possimus quasi,
                  hic perferendis sapiente quam sint blanditiis nisi quia
                  consequatur. consequatur. voluptates reprehenderit beatae,
                  possimus quasi, hic perferendis sapiente quam sint blanditiis
                  consequatur. voluptates reprehenderit beatae, possimus quasi,
                  hic perferendis sapiente quam sint blanditiis nisi quia
                  consequatur. consequatur. voluptates reprehenderit beatae,
                  possimus quasi, hic perferendis sapiente quam sint blanditiis
                  nisi quia consequatur.
                </p>
              </li>
              <li>
                <h4>Award 3</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum nesciunt, tenetur libero iusto deserunt totam aliquid
                  voluptates reprehenderit beatae, possimus quasi, hic
                  perferendis sapiente quam sint blanditiis nisi quia
                  consequatur.
                </p>
                <img
                  src="https://source.unsplash.com/random/800x600"
                  alt=""
                  className="object-cover max-h-full mb-2 sm:float-right sm:mb-2 sm:mt-0 sm:mr-4 sm:w-64"
                />
              </li>
            </ul>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Testimonials;
