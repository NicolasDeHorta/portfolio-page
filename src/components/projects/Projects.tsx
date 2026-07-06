import { projects } from "../../portfolioData";

export const Projects = () => {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Cool projects &amp; clients</h2>
          <span className="rule" />
          <span className="count">0{projects.length}</span>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <a
              className="card reveal"
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="thumb">
                <img src={p.img} alt={`${p.name} screenshot`} loading="lazy" />
                <span className="kind">{p.kind}</span>
                {p.live && (
                  <span className="live-badge">
                    <span className="d" /> Live
                  </span>
                )}
              </div>
              <div className="body">
                <div className="body-top">
                  <h3>{p.name}</h3>
                  <span className="go">{p.cta} ↗</span>
                </div>
                <p>{p.description}</p>
                <div className="stack">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
