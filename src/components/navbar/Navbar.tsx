import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { featureFlags } from "../../featureFlags";

interface NavLink {
  name: string;
  href: string;
  enabled?: boolean;
}

const links: NavLink[] = [
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects", enabled: featureFlags.projects },
  { name: "Toolbox", href: "#toolbox" },
  { name: "Contact", href: "#contact" },
].filter((link) => link.enabled !== false);

export const Navbar = () => {
  const { theme, toggle } = useTheme();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="mark">N</span> ndehorta
        </a>
        <div className="nav-right">
          <div className="nav-links">
            {links.map(({ name, href }) => (
              <a key={href} href={href}>
                {name}
              </a>
            ))}
          </div>
          <button
            className="toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
};
