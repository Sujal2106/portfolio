import "./Contact.css";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I’m open to internships, entry-level roles, and collaboration opportunities.
        Feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:sujalchoudhary2106@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Sujal2106"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
