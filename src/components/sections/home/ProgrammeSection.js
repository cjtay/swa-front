import React from "react";
import { Link } from "gatsby";
const ProgrammeSection = () => {
  return (
    <section className="sm:w-4/5 max-w-4xl px-2 mx-auto">
      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Key Programmes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fugiat hic eaque nobis modi laborum ipsam unde laboriosam earum
          explicabo, nostrum excepturi rem totam labore odio deleniti cupiditate
          cum facilis?
        </p>
        <div className="flex flex-row justify-center sm:justify-start ">
          <Link to="/events/">
            <div className="btn-dark my-4">View programmes</div>
          </Link>
        </div>
      </div>
      <div className="sm:max-w-xl mr-auto">
        <div className="sm:flex sm:flex-row-reverse p-6 bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl my-5">
          <div className="text-white">
            <h4>Elderly</h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/800x600"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mt-2 sm:mt-0 sm:mr-4 sm:w-40 object-cover"
          />
        </div>
        <div className="sm:flex sm:flex-row-reverse p-6 bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl my-5">
          <div className="text-white">
            <h4>Community</h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/600x1200"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mt-2 sm:mt-0 sm:mr-4 sm:w-40 object-cover"
          />
        </div>
        <div className="sm:flex sm:flex-row-reverse p-6 bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl my-5">
          <div className="text-white">
            <h4>Diversity</h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/1200x700"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mt-2 sm:mt-0 sm:mr-4 sm:w-40 object-cover"
          />
        </div>
        <div className="sm:flex sm:flex-row-reverse p-6 bg-gradient-to-br from-swa-5 via-swa-5 to-swa-1 rounded-xl my-5">
          <div className="text-white">
            <h4>Community</h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              mauris at felis faucibus consectetur. Proin enim lacus, sagittis
              vel turpis in, vehicula venenatis arcu. Sed ac nisl nec nisi
              ultrices convallis.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/random/800x1000"
            alt=""
            className="max-h-full border-4 border-white sm:mb-2 mt-2 sm:mt-0 sm:mr-4 sm:w-40 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
