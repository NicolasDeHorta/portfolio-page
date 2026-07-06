import { ExperienceCard, ExperienceInfo } from "./experienceCard/ExperienceCard";

const experienceData: ExperienceInfo[] = [
  {
    companyName: "Marvik",
    from: "2025",
    to: "Now",
    current: true,
    position: "Sr. ML Engineer",
    description:
      "Building end-to-end ML solutions — neural networks, recommender systems and LLM agents, deployed and running in production.",
    tech: ["Python", "Neural Networks", "RecSys", "Agents", "AWS"],
  },
  {
    companyName: "OrangeLoops",
    from: "2024",
    to: "2025",
    position: "Research & Development",
    description:
      "AI-powered applications with LangChain and embeddings for Retrieval-Augmented Generation, working across hosted and open-source LLMs.",
    tech: ["LLMs", "LangChain", "Embeddings", "RAG"],
  },
  {
    companyName: "OrangeLoops",
    from: "2021",
    to: "2025",
    position: "Web Developer",
    description:
      "Dynamic apps in React, TypeScript, GraphQL and Next.js, with Node.js and SQL on the backend for seamless integration.",
    tech: ["React", "TypeScript", "GraphQL", "Next.js", "Node.js"],
  },
  {
    companyName: "BADER International",
    from: "2020",
    to: "2021",
    position: "Supply Chain Data Analyst",
    description:
      "Production planning from logistics data; led the sector's tech innovation, automating reporting with Excel, SQL and Python.",
    tech: ["SQL", "Python", "Automation"],
  },
  {
    companyName: "SAMAN",
    from: "2016",
    to: "2017",
    position: "Data Analyst",
    description:
      "Production planning across every plant in the country, with SQL and Python for analysis and automated reporting.",
    tech: ["SQL", "Python", "Reporting"],
  },
];

export const Experience = () => {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Work</h2>
          <span className="rule" />
          <span className="count">2016 → now</span>
        </div>
        <div className="experience-list">
          {experienceData.map((e, i) => (
            <ExperienceCard key={i} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
};
