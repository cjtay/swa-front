import React from "react";

const ParticipateSection = () => {
  return (
    <section>
      <div class="participate">
        <div class="participate-header">
          <h2 class="title">Get involved</h2>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus cum, molestiae perferendis debitis aliquam ad
            repellat voluptatem nostrum nesciunt eveniet ducimus facere
            architecto corporis dignissimos quo, iste beatae inventore nisi!
          </p>
        </div>
        <ul class="participate-list">
          <li class="participate-card">
            <div class="participate-img-container">
              <h4 class="participate-title">Donate</h4>
              <div class="participate-img">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
            </div>
            <div class="participate-text">
              <p class="participate-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </p>
              <div class="btn primary-dark">Donate</div>
            </div>
          </li>
          <li class="participate-card">
            <div class="participate-img-container">
              <h4 class="participate-title">Volunteer</h4>
              <div class="participate-img">
                <img src="https://source.unsplash.com/random" alt="" />
              </div>
            </div>
            <div class="participate-text">
              <p class="participate-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit.
              </p>
              <div class="btn primary-dark">Be a volunteer</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ParticipateSection;
