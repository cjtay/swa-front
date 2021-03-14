import React from "react";
import { Link } from "gatsby";
const ProgrammeSection = () => {
  return (
    <section className="max-w-4xl mx-auto sm:w-4/5">
      <div className="sm:w-3/5">
        <h2 className="text-purple-900">Key Programmes</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fugiat hic eaque nobis modi laborum ipsam unde laboriosam earum
          explicabo, nostrum excepturi rem totam labore odio deleniti cupiditate
          cum facilis?
        </p>

        <Link to="/events/" className="inline-block my-4 btn-dark">
          View programmes
        </Link>
      </div>
      <div className="space-y-8">
        <div className="max-w-xl p-5 rounded-lg shadow-lg sm:flex">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              className="w-full h-72 sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-swa-3">Elderly</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>
          </div>
        </div>
        <div className="max-w-xl p-5 rounded-lg shadow-lg sm:flex">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              className="w-full h-72 sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-swa-3">Community</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>
          </div>
        </div>
        <div className="max-w-xl p-5 rounded-lg shadow-lg sm:flex">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              className="w-full h-72 sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-swa-3">Diversity</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
