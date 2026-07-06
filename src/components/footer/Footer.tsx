const GITHUB = "https://github.com/NicolasDeHorta";
const LINKEDIN = "https://www.linkedin.com/in/nicolas-de-horta-b37a48141/";
const EMAIL = "mailto:dehorta.n@gmail.com";

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <p className="foot-cta">
          Let's build something.
          <br />
          <a href={EMAIL}>dehorta.n@gmail.com</a>
        </p>
        <div className="foot-row">
          <span>© {new Date().getFullYear()} Nicolás de Horta</span>
          <span className="socials">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={EMAIL}>Email</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
