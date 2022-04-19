import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./presentation.scss";
import { useEffect, useState } from "react";
import { Stack } from "../stack/Stack";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export const Presentation = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offsetTrigger = 350;

  return (
    <div className="presentationWrapper">
      <div
        className={`presentation ${offset > offsetTrigger ? "gone-left" : ""}`}
      >
        <h1 className="name"> Hi! i'm Nicolas</h1>
        <h1 className="name"> a web developer</h1>
        <div className="socials">
          <div
            className="socialBtn"
            onClick={() =>
              window.open("https://github.com/NicolasDeHorta", "_blank")
            }
          >
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            GitHub
          </div>
          <div
            className="socialBtn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nicolas-de-horta-b37a48141/",
                "_blank"
              )
            }
          >
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            LinkedIn
          </div>
        </div>
      </div>
      <div
        className={`presentation ${offset > offsetTrigger ? "gone-right" : ""}`}
      >
        <Stack />
      </div>
      <div className={`downArrow ${offset > offsetTrigger ? "gone-down" : ""}`}>
        <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </div>
  );
};
