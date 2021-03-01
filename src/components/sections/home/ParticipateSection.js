import React from "react";

const ParticipateSection = () => {
  return (
    <section className="w-11/12 max-w-4xl px-2 mx-auto sm:w-4/5">
      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Get involved</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus cum, molestiae perferendis debitis aliquam ad repellat
          voluptatem nostrum nesciunt eveniet ducimus facere architecto corporis
          dignissimos quo, iste beatae inventore nisi!
        </p>
      </div>

      <div className="mx-auto sm:max-w-2xl">
        <div className="p-6 my-5 bg-gray-100 sm:flex rounded-xl">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt=""
            className="object-cover max-h-full mb-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 sm:w-64"
          />

          <div>
            <h4 className="text-swa-1">Donate</h4>
            <p className="leading-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cum, molestiae perferendis debitis aliquam ad
              repellat voluptatem nostrum nesciunt eveniet ducimus facere
              architecto corporis dignissimos quo, iste beatae inventore nisi!
            </p>

            <div className="inline-block my-4 btn-dark">Donate</div>
          </div>
        </div>
        <div className="p-6 my-5 bg-gray-100 sm:flex sm:flex-row-reverse rounded-xl">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt=""
            className="object-cover max-h-full mb-2 border-4 border-white sm:mb-2 sm:mt-0 sm:ml-4 sm:w-64"
          />

          <div>
            <h4 className="text-swa-1 sm:text-right">Volunteer</h4>
            <p className="leading-normal sm:text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cum, molestiae perferendis debitis aliquam ad
              repellat voluptatem nostrum nesciunt eveniet ducimus facere
              architecto corporis dignissimos quo, iste beatae inventore nisi!
            </p>

            <div className="inline-block my-4 btn-dark">Volunteer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
