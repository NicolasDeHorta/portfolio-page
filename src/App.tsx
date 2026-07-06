import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Capabilities } from "./components/capabilities/Capabilities";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Toolbox } from "./components/toolbox/Toolbox";
import { Footer } from "./components/footer/Footer";
import { useReveal } from "./hooks/useReveal";
import { featureFlags } from "./featureFlags";

import "./App.scss";

function App() {
  useReveal();

  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Experience />
        {featureFlags.projects && <Projects />}
        <Toolbox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
