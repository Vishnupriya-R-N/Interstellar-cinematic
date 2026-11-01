import React from "react";

function Journey() {
  return (
    <section className="story-page journey-page" id="journey">
      <div className="story-image journey-image">
        <div className="planet"></div>
        <p>BEYOND THE STARS</p>
      </div>

      <div className="story-content">
        <p className="story-label">03 / THE JOURNEY</p>

        <h1>Every Second Has a Cost</h1>

        <p>
          Cooper joins Amelia Brand, Romilly and Doyle on a dangerous
          mission across distant worlds. They must find a planet
          capable of supporting human life.
        </p>

        <p>
          As the crew explores strange planets, they encounter
          extreme conditions and discover that time passes
          differently near massive gravitational forces.
        </p>

        <p>
          Meanwhile, Murph grows up on Earth and works to solve
          the scientific problem that could save humanity.
          Their stories become connected across space and time.
        </p>

        <p>
          At its heart, Interstellar is a story about family,
          sacrifice, hope and the power of love.
        </p>

        <a href="#characters" className="story-button">
          Meet the Crew ↗
        </a>
      </div>
    </section>
  );
}

export default Journey;