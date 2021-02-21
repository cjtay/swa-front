import React from "react";

import crystaltime from "../../../images/crystaltime.png";
import florray from "../../../images/florray.png";
import moephosis from "../../../images/moephosis.png";
import teamsalon from "../../../images/teamsalon.png";
import yvonne from "../../../images/yvonne.png";
// import SponsorBackground from "../../backgrounds/SponsorBackground";

const SponsorSection = () => {
  return (
    <section className="sm:w-4/5 max-w-4xl px-2 mx-auto">
      <h2 className="text-purple-900">Sponsors</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus
        fugiat expedita modi eveniet maxime aperiam excepturi repellendus
        similique! Molestiae sequi ex minima labore culpa pariatur dicta omnis
        blanditiis enim.
      </p>

      <div className="p-4 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:max-w-3xl mx-auto ">
        <div>
          <img
            src={crystaltime}
            alt="crystal time logo"
            className="w-4/5 sm:w-48 m-3 p-2 border border-gray-200"
          />
        </div>
        <div>
          <img
            src={florray}
            alt="crystal time logo"
            className="w-4/5 sm:w-48 m-3 border border-gray-200"
          />
        </div>
        <div>
          <img
            src={moephosis}
            alt="crystal time logo"
            className="w-4/5 sm:w-48 m-3 border border-gray-200"
          />
        </div>
        <div>
          <img
            src={teamsalon}
            alt="crystal time logo"
            className="w-4/5 sm:w-48 m-3 border border-gray-200"
          />
        </div>
        <div>
          <img
            src={yvonne}
            alt="crystal time logo"
            className="w-4/5 sm:w-48 m-3 border border-gray-200"
          />
        </div>
      </div>

      {/* <SponsorBackground /> */}
    </section>
  );
};

export default SponsorSection;
