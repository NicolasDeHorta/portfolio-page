import { Link } from "react-router-dom";
import logo from "../../assets/img/logoNDHsquare.png";
import "./navbar.scss";

interface Section {
  path: string;
  name: string;
}

const sections: Section[] = [
  // { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLogo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {sections.map(({ name, path }) => {
        return (
          <div className="navItem">
            <Link to={path}>{name}</Link>
          </div>
        );
      })}
    </div>
  );
};
