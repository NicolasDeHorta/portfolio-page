import { Landing } from "./components/landing/Landing";
// import { Entrance } from "./components/entrance/Entrance";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Portfolio } from "./components/portfolio/Portfolio";

import "./App.scss";

function App() {
  // const [entering, setEntering] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setEntering(false);
  //   }, 3000);
  // }, []);

  return (
    <div className="App">
      <div className="navbarView">
        <Navbar />
      </div>
      {/* {entering && <Entrance />} */}

      <Landing />
      <Portfolio />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
