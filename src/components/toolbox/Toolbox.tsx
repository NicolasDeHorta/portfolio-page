interface ToolGroup {
  title: string;
  items: string[];
}

const groups: ToolGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "SQL"],
  },
  {
    title: "ML & Data Science",
    items: ["Machine Learning", "Neural Networks", "RecSys", "NLP"],
  },
  {
    title: "LLMs & Agents",
    items: ["LLMs", "AI Agents", "LangChain", "Embeddings", "Vector DBs"],
  },
  {
    title: "Cloud & Web",
    items: ["AWS", "React", "Next.js", "Node", "Firebase"],
  },
];

export const Toolbox = () => {
  return (
    <section className="block" id="toolbox">
      <div className="wrap">
        <div className="sec-head">
          <h2>Toolbox</h2>
          <span className="rule" />
          <span className="count">what I build with</span>
        </div>
        <div className="tools">
          {groups.map(({ title, items }) => (
            <div className="tool-group reveal" key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
