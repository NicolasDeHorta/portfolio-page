import { HashRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/about/About";

import "./App.scss";

function App() {
  console.log(process.env.NETLIFY_AUTH_TOKEN)
  return (
    <HashRouter>
      <div className="App">
        <div className="navbarView">
          <Navbar />
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
