import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import me from "../../assets/img/me.png";

const GITHUB = "https://github.com/NicolasDeHorta";
const LINKEDIN = "https://www.linkedin.com/in/nicolas-de-horta-b37a48141/";
const EMAIL = "mailto:dehorta.n@gmail.com";

export const Hero = () => {
  return (
    <header className="hero" id="top" style={{paddingTop: "50px"}}>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow reveal">
              <span className="dot" /> Machine Learning · Data Science
            </p>
            <h1 className="reveal">
              Nicolás
              <br />
              de Horta
            </h1>
            <p className="role reveal">
              <b>Senior ML Engineer</b> &amp; Fullstack dev
            </p>
            <p className="tagline reveal">
              Designing end-to-end machine learning systems — from neural
              networks and recommender systems to LLM agents running in production.
              ML engineer, data scientist and
              full-stack developer.
            </p>
            <div className="actions reveal">
              <a className="btn primary" href={EMAIL}>
                <FontAwesomeIcon icon={faEnvelope} /> Get in touch
              </a>
              <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="profile reveal">
            <div className="profile-head">
              <img className="avatar" src={me} alt="Nicolás de Horta" />
              <div>
                <p className="pname">Nicolás de Horta</p>
                <p className="prole">Data Science Specialist</p>
              </div>
            </div>
            <dl>
              <dt>Role</dt>
              <dd>Sr. ML Engineer</dd>
              <dt>Focus</dt>
              <dd>Agents · Machine Learning · Full-stack dev</dd>
              <dt>Based</dt>
              <dd>Uruguay</dd>
            </dl>
          </div>
        </div>
      </div>
    </header>
  );
};
