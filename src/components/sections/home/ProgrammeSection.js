import React from "react";
import { Link } from "gatsby";
const ProgrammeSection = () => {
  return (
    <section className="w-11/12 max-w-4xl px-2 mx-auto sm:w-4/5">
      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Key Programmes</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fugiat hic eaque nobis modi laborum ipsam unde laboriosam earum
          explicabo, nostrum excepturi rem totam labore odio deleniti cupiditate
          cum facilis?
        </p>
        <div className="flex flex-row justify-center sm:justify-start ">
          <Link to="/events/">
            <div className="my-4 btn-dark">View programmes</div>
          </Link>
        </div>
      </div>
      <div className="mr-auto sm:max-w-xl">
        <div className="p-6 my-5 sm:flex sm:flex-row-reverse bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl">
          <div className="text-white">
            <h4>Elderly</h4>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/800x600"
            alt=""
            className="object-cover max-h-full mt-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 sm:w-40"
          />
        </div>
        <div className="p-6 my-5 sm:flex sm:flex-row-reverse bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl">
          <div className="text-white">
            <h4>Community</h4>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/600x1200"
            alt=""
            className="object-cover max-h-full mt-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 sm:w-40"
          />
        </div>
        <div className="p-6 my-5 sm:flex sm:flex-row-reverse bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl">
          <div className="text-white">
            <h4>Diversity</h4>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/1200x700"
            alt=""
            className="object-cover max-h-full mt-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 sm:w-40"
          />
        </div>
        <div className="p-6 my-5 sm:flex sm:flex-row-reverse bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl">
          <div className="text-white">
            <h4>Community</h4>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/800x1000"
            alt=""
            className="object-cover max-h-full mt-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
