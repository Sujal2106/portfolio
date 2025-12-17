import profile from "../assets/profile.jpg";
import "./HomeSection.css";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Sujal Choudhary</h1>
        <h2>Aspiring Software Engineer | Front-End Developer</h2>

        <p>
          Computer Science Engineering student with strong fundamentals in
          Data Structures, Algorithms, and Front-End Development. Passionate
          about building clean and scalable web applications.
        </p>

        {/* CTA BUTTONS */}
        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            className="btn primary"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-img">
        <img src={profile} alt="Sujal Choudhary" />
      </div>
    </section>
  );
}
