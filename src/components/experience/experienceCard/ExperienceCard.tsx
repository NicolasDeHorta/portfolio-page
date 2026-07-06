import "./experience-card.scss";

export interface ExperienceInfo {
  companyName: string;
  position: string;
  from: string;
  to: string;
  description: string;
  tech: string[];
  current?: boolean;
}

export const ExperienceCard = ({
  item: { companyName, position, from, to, description, tech, current },
}: {
  item: ExperienceInfo;
}) => {
  return (
    <div className="job reveal">
      <div className="when">
        <span className={current ? "now" : undefined}>
          {from} — {to}
        </span>
      </div>
      <div>
        <div className="role-row">
          <h3>{position}</h3>
          <span className="company">{companyName}</span>
        </div>
        <p>{description}</p>
        <div className="chips">
          {tech.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
