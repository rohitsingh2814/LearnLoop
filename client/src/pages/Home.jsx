
import CrystalizedBall from "../components/CrystalizedBall";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page" id="home">
      <Navbar />

      <section className="hero-section">

        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-tagline">
            YOUR JOURNEY TO SUCCESS STARTS HERE
          </span>

          <h1>
            Placement
            <br />
            Preparation <span>Lab.</span>
          </h1>

          <p className="hero-subtitle">
            Prepare smarter, practice better, and build the skills
            you need to succeed in your placement journey.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <a href="#learn" className="hero-btn primary-btn">
              Learn Now
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        {/* Center - Crystalized Ball Animation */}
        <div className="hero-visual relative w-full h-[450px]">
          <CrystalizedBall
            preset="frost"
            color="#BFE6FF"
            size={0.80}
            crackle={0.3}
            fill={0.6}
            interactive
            hoverStrength={0.65}
            strands={3}
            flares={0.3}
            glow={0.6}
            sparks={0.2}
            particleCount={16000}
            motion="fall"
            particleShape="round"
            depth={0.8}
            sway={0.4}
            twinkle={0.4}
            haze={0.5}
            dustSpeed={0.7}
            speed={1}
            intro
            paused={false}
          />
        </div>

        {/* Right Content */}
        <div className="hero-description">
          <div className="description-item">
            <span className="description-dot"></span>
            <p>For Placement Preparation</p>
          </div>

          <div className="description-item">
            <span className="description-dot"></span>
            <p>AI Based Learning</p>
          </div>

          <div className="description-item">
            <span className="description-dot"></span>
            <p>Learn at Your Own Pace</p>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Home;
