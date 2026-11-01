
import "./App.css";
import cooperPhoto from "./assets/cooper.png";
import ameliaPhoto from "./assets/amelia.png";
import tarsPhoto from "./assets/tars.png";
import Story from "./Story";
import Journey from "./Journey";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        INTERSTELLAR
      </a>

      <div className="nav-links">
        <a href="#mission">The Mission</a>
        <a href="#crew">The Crew</a>
        <a href="#credits">Credits</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="subtitle">
          A JOURNEY BEYOND OUR GALAXY
        </p>

        <h1>
          INTER
          <br />
          STELLAR
        </h1>

        <p className="tagline">
          Mankind was born on Earth.
          <br />
          It was never meant to die here.
        </p>

        <a
          href="https://www.primevideo.com/detail/0F5ZWKMGYEEZ2JDJXBYMY3MDJ2?ref_=atv_sr_fle_c_sr9fee6d_pvsearchresults_1_1"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-button"
        >
          Watch the Movie ↗
        </a>
      </div>

      <p className="side-text">
        SPACE · TIME · LOVE
      </p>
    </section>
  );
}

function Mission() {
  return (
    <section className="mission" id="mission">
      <p className="section-label">01 / THE MISSION</p>

      <h2>
        Beyond the boundaries
        <br />
        of our universe.
      </h2>

      <p className="mission-description">
        As Earth faces an uncertain future, dust storms and
        failing crops threaten humanity's survival. Cooper,
        a former NASA pilot, joins a secret mission to travel
        beyond our solar system and search for a new home.
      </p>
    </section>
  );
}

function Crew() {
  return (
    <section className="crew" id="crew">
      <p className="section-label">04 / THE CREW</p>

      <h2>Meet the explorers.</h2>

      <div className="character-grid">
        <article className="character-card">
          <img
            src={cooperPhoto}
            alt="Cooper from Interstellar"
          />

          <div className="card-caption">
            <small>File 001 · The pilot</small>
            <h3>Cooper</h3>
          </div>
        </article>

        <article className="character-card">
          <img
            src={ameliaPhoto}
            alt="Amelia Brand from Interstellar"
          />

          <div className="card-caption">
            <small>File 002 · The scientist</small>
            <h3>Amelia Brand</h3>
          </div>
        </article>

        <article className="character-card">
          <img
            src={tarsPhoto}
            alt="TARS robot from Interstellar"
          />

          <div className="card-caption">
            <small>File 003 · The machine</small>
            <h3>TARS</h3>
          </div>
        </article>
      </div>
    </section>
  );
}

function Makers() {
  const credits = [
    {
      number: "01",
      role: "Director",
      name: "Christopher Nolan",
      link: "https://www.google.com/search?q=Christopher+Nolan",
    },
    {
      number: "02",
      role: "Writing",
      name: "Jonathan Nolan / Christopher Nolan",
      link: "https://www.google.com/search?q=Jonathan+Nolan",
    },
    {
      number: "03",
      role: "Producer",
      name: "Emma Thomas",
      link: "https://www.google.com/search?q=Emma+Thomas+Interstellar",
    },
    {
      number: "04",
      role: "Cinematography",
      name: "Hoyte van Hoytema",
      link: "https://www.google.com/search?q=Hoyte+van+Hoytema",
    },
    {
      number: "05",
      role: "Music",
      name: "Hans Zimmer",
      link: "https://www.google.com/search?q=Hans+Zimmer+Interstellar",
    },
    {
      number: "06",
      role: "Editing",
      name: "Lee Smith",
      link: "https://www.google.com/search?q=Lee+Smith+film+editor",
    },
    {
      number: "07",
      role: "Production Design",
      name: "Nathan Crowley",
      link: "https://www.google.com/search?q=Nathan+Crowley",
    },
    {
      number: "08",
      role: "Sound Design",
      name: "Richard King",
      link: "https://www.google.com/search?q=Richard+King+sound+designer",
    },
  ];

  return (
    <section className="makers" id="credits">
      <div className="makers-heading">
        <p className="section-label">
          05 / BEHIND THE FILM
        </p>

        <h2>
          THE WORLD
          <br />
          HAS <em>MAKERS.</em>
        </h2>

        <p className="makers-description">
          A film is more than its frame. Direction, writing,
          cinematography, music, design and sound shape the
          universe you enter.
        </p>
      </div>

      <div className="makers-list">
        {credits.map((credit) => (
          <a
            className="maker-row"
            href={credit.link}
            target="_blank"
            rel="noopener noreferrer"
            key={credit.number}
          >
            <span className="maker-number">
              {credit.number}
            </span>

            <span className="maker-role">
              {credit.role}
            </span>

            <span className="maker-name">
              {credit.name}
            </span>

            <span className="maker-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>INTERSTELLAR</p>
      <p>A FILM BY CHRISTOPHER NOLAN</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Story />
      <Journey />
      <Crew />
      <Makers />
      <Footer />
    </>
  );
}

export default App;
