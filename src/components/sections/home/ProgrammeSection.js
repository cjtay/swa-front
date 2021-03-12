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
        <div class="sm:flex rounded-lg shadow-lg p-5 max-w-xl">
          <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              class="h-72 w-full sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 class="text-lg font-bold text-swa-3">Elderly</h4>
            <p class="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>
          </div>
        </div>
        <div class="sm:flex rounded-lg shadow-lg p-5 max-w-xl">
          <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              class="h-72 w-full sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 class="text-lg font-bold text-swa-3">Community</h4>
            <p class="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>
          </div>
        </div>
        <div class="sm:flex rounded-lg shadow-lg p-5 max-w-xl">
          <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <img
              src="https://source.unsplash.com/random/800x600"
              alt="programme"
              class="h-72 w-full sm:w-32 sm:h-32"
            />
          </div>
          <div>
            <h4 class="text-lg font-bold text-swa-3">Diversity</h4>
            <p class="mt-1">
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
