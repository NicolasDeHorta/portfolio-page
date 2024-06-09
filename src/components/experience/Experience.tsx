import React from "react";

import "./experience.scss";
import { ExperienceCard, ExperienceInfo } from "./experienceCard/ExperienceCard";

const experienceData: ExperienceInfo[] = [
  {
    companyName: "OrangeLoops",
    from: "Feb-2024",
    to: "Present",
    position: "Research & Development",
    description: "Researching AI-powered applications. Working with OpenAI Python API, LLaMa3, LangChain, and Embeddings for Retrieval Augmented Generation."
  },
  {
    companyName: "OrangeLoops",
    from: "Nov-2021",
    to: "Present",
    position: "Web Developer",
    description: "Developed and maintained dynamic applications using React.js, TypeScript, GraphQL, and Next.js. Performed backend tasks utilizing Node.js and SQL, ensuring seamless integration."
  },
  {
    companyName: "BADER International - Uruguay",
    from: "2020",
    to: "2021",
    position: "Supply Chain Data Analyst",
    description: "Conducted production planning based on analysis of production and logistics data, leading the technological innovation of the sector. Assisted the supply chain department using Excel, SQL and Python for innovation, automating tasks and reporting."
  },
  {
    companyName: "SAMAN - Uruguay",
    from: "2016",
    to: "2017",
    position: "Data Analyst",
    description: "Conducted production planning based on analysis of production and logistics data for all plants in the country. Utilized Excel, SQL, and Python for data analysis and automated reporting."
  }
]

export const Experience = () => {
  return (
    <section className="experience-section">
      <h1 className="subtitle">My Experience</h1>
      <div className="experience-list">
        {experienceData.map(e => <ExperienceCard item={e} />)}
      </div>
    </section>
  );
};
