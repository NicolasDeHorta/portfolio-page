interface Capability {
  n: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    n: "01",
    title: "ML & data science",
    description:
      "Machine learning, neural networks and recommender systems — turning messy data into models that make good decisions.",
  },
  {
    n: "02",
    title: "LLMs & agents",
    description:
      "RAG pipelines, AI agents and LLM tooling with LangChain — model-agnostic, across both hosted and open-source LLMs.",
  },
  {
    n: "03",
    title: "End-to-end & cloud",
    description:
      "From data pipelines to deployment on AWS — plus the React and Node interfaces that put ML in users' hands.",
  },
];

export const Capabilities = () => {
  return (
    <section className="block" id="do">
      <div className="wrap">
        <div className="sec-head">
          <h2>What I do</h2>
          <span className="rule" />
          <span className="count">03</span>
        </div>
        <div className="caps">
          {capabilities.map(({ n, title, description }) => (
            <div className="cap reveal" key={n}>
              <span className="n">{n}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
