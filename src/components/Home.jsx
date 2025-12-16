import profile from "../assets/profile.jpg";
import "./HomeSection.css";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Sujal Choudhary</h1>
        <h2>Aspiring Software Engineer | Front-End Developer</h2>
        <p>
          Computer Science Engineering student at Chandigarh University with a
          strong foundation in Data Structures, Algorithms, and Front-End
          Development.
        </p>
      </div>

      <div className="hero-img">
        <img src={profile} alt="Sujal Choudhary" />
      </div>
    </section>
  );
}
