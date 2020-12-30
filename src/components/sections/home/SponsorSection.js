import React from "react";

const SponsorSection = () => {
  return (
    <section>
      <div class="sponsors">
        <div class="sponsors-header">
          <h2 class="title">Sponsors</h2>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusamus fugiat expedita modi eveniet maxime aperiam excepturi
            repellendus similique! Molestiae sequi ex minima labore culpa
            pariatur dicta omnis blanditiis enim.
          </p>
        </div>

        <ul class="sponsors-list">
          <li class="sponsor-item">
            <img
              src="/images/crystaltime.png"
              alt="crystal time logo"
              class="sponsor-logo"
            />
          </li>
          <li class="sponsor-item">
            <img
              src="/images/florray.png"
              alt="florray logo"
              class="sponsor-logo"
            />
          </li>
          <li class="sponsor-item">
            <img
              src="/images/moephosis.png"
              alt="moephosis logo"
              class="sponsor-logo"
            />
          </li>
          <li class="sponsor-item">
            <img
              src="/images/teamsalon.png"
              alt="team salon logo"
              class="sponsor-logo"
            />
          </li>
          <li class="sponsor-item">
            <img
              src="/images/yvonne.png"
              alt="yvonne creative logo"
              class="sponsor-logo"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SponsorSection;
