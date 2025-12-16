import "./Projects.css";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Currency Converter</h3>
          <p>
            A React-based web application that converts currencies in real time
            using external APIs with a clean UI.
          </p>
          <span>React • JavaScript • API</span>
          <a
            href="https://github.com/Sujal2106"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Phone Cart Application</h3>
          <p>
            A shopping cart application to browse phones, add items to cart,
            and manage total price dynamically.
          </p>
          <span>React • JavaScript • CSS</span>
          <a
            href="https://github.com/Sujal2106"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Rock Paper Scissors Game</h3>
          <p>
            A browser-based interactive game implementing game logic and score
            tracking.
          </p>
          <span>HTML • CSS • JavaScript</span>
          <a
            href="https://github.com/Sujal2106"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>IoT Weather Monitoring System</h3>
          <p>
            An IoT-based system to monitor temperature and humidity using sensors
            with real-time data visualization.
          </p>
          <span>IoT • Sensors • Embedded</span>
          <a
            href="https://github.com/Sujal2106"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
