import React from "react";

import crystaltime from "../../../images/crystaltime.png";
import florray from "../../../images/florray.png";
import moephosis from "../../../images/moephosis.png";
import teamsalon from "../../../images/teamsalon.png";
import yvonne from "../../../images/yvonne.png";

const SponsorSection = () => {
  return (
    <section className="relative w-11/12 max-w-4xl px-2 mx-auto sm:w-4/5">
      <h2 className="text-purple-900">Sponsors</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus
        fugiat expedita modi eveniet maxime aperiam excepturi repellendus
        similique! Molestiae sequi ex minima labore culpa pariatur dicta omnis
        blanditiis enim.
      </p>
      {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 */}
      <div className="grid items-center grid-cols-1 gap-4 p-5 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-center sm:max-w-3xl ">
        <div>
          <img
            src={crystaltime}
            alt="crystal time logo"
            className="w-4/5 p-2 mx-auto border border-gray-200 sm:w-48"
          />
        </div>
        <div>
          <img
            src={florray}
            alt="crystal time logo"
            className="w-4/5 mx-auto border border-gray-200 sm:w-48"
          />
        </div>
        <div>
          <img
            src={moephosis}
            alt="crystal time logo"
            className="w-4/5 mx-auto border border-gray-200 sm:w-48"
          />
        </div>
        <div>
          <img
            src={teamsalon}
            alt="crystal time logo"
            className="w-4/5 mx-auto border border-gray-200 sm:w-48"
          />
        </div>
        <div>
          <img
            src={yvonne}
            alt="crystal time logo"
            className="w-4/5 mx-auto border border-gray-200 sm:w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
