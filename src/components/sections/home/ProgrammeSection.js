import React from "react";

const ProgrammeSection = () => {
  return (
    <section>
      <div class="programmes">
        <div class="programmes-header">
          <h2 class="title">Key Programmes</h2>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugiat hic eaque nobis modi laborum ipsam unde laboriosam earum
            explicabo, nostrum excepturi rem totam labore odio deleniti
            cupiditate cum facilis?
          </p>
          <div class="btn primary-dark">View programmes</div>
        </div>
        <ul class="programmes-list">
          <li class="programme-card">
            <div class="programme-text">
              <h4 class="programme-title">Elderly</h4>
              <p class="programme-description"></p>
            </div>
            <div class="programme-img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </li>
          <li class="programme-card">
            <div class="programme-text">
              <h4 class="programme-title">Community</h4>
              <p class="programme-description"></p>
            </div>
            <div class="programme-img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </li>
          <li class="programme-card">
            <div class="programme-text">
              <h4 class="programme-title">Diversity</h4>
              <p class="programme-description"></p>
            </div>
            <div class="programme-img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </li>
          <li class="programme-card">
            <div class="programme-text">
              <h4 class="programme-title">Leadership</h4>
              <p class="programme-description"></p>
            </div>
            <div class="programme-img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgrammeSection;
