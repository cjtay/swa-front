import React from "react";

const ParticipateSection = () => {
  return (
    <section className="sm:w-4/5 max-w-4xl px-2 mx-auto">
      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Get involved</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus cum, molestiae perferendis debitis aliquam ad repellat
          voluptatem nostrum nesciunt eveniet ducimus facere architecto corporis
          dignissimos quo, iste beatae inventore nisi!
        </p>
      </div>

      <div className="sm:max-w-2xl mx-auto">
        <div className="bg-gray-200 p-6 sm:flex rounded-xl my-5">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mb-2 sm:mt-0 sm:mr-4 sm:w-64 object-cover"
          />

          <div>
            <h4 className="text-swa-1">Donate</h4>
            <p className="leading-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cum, molestiae perferendis debitis aliquam ad
              repellat voluptatem nostrum nesciunt eveniet ducimus facere
              architecto corporis dignissimos quo, iste beatae inventore nisi!
            </p>
            <div className="flex flex-row justify-start ">
              <div className="btn-dark my-4">Donate</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-6 sm:flex sm:flex-row-reverse rounded-xl my-5">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mb-2 sm:mt-0 sm:ml-4 sm:w-64 object-cover"
          />

          <div>
            <h4 className="text-swa-1 sm:text-right">Volunteer</h4>
            <p className="sm:text-right leading-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cum, molestiae perferendis debitis aliquam ad
              repellat voluptatem nostrum nesciunt eveniet ducimus facere
              architecto corporis dignissimos quo, iste beatae inventore nisi!
            </p>
            <div className="flex flex-row justify-left sm:justify-end ">
              <div className="btn-dark my-4">Volunteer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
