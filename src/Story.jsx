import React from "react";

function Story() {
  return (
    <section className="story-page" id="story">
      <div className="story-content">
        <p className="story-label">02 / THE STORY</p>

        <h1>A World Running Out of Time</h1>

        <p>
          In the near future, Earth is becoming uninhabitable.
          Dust storms and failing crops threaten humanity's survival.
          Cooper, a former NASA pilot, now lives as a farmer with
          his children, Tom and Murph.
        </p>

        <p>
          One day, mysterious gravitational patterns lead Cooper
          to a secret NASA facility. There, he discovers a mission
          to travel through a wormhole near Saturn and search for
          another planet where humanity can survive.
        </p>

        <p>
          Cooper must leave his family behind and venture into
          the unknown, hoping to secure a future for his children.
        </p>

        <a href="#journey" className="story-button">
          Continue the Journey ↗
        </a>
      </div>

      <div className="story-image">
        <div className="planet"></div>
        <p>BEYOND OUR WORLD</p>
      </div>
    </section>
  );
}

export default Story;