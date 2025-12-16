import "./Skills.css";

export function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming</h3>
          <p>Java, C++, C#, MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React.js, .NET</p>
        </div>

        <div className="skill-card">
          <h3>Core Concepts</h3>
          <p>Data Structures, OOPS, Problem Solving</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>VS Code, Git, GitHub</p>
        </div>
      </div>
    </section>
  );
}
