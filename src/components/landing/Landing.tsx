import { Experience } from "../experience/Experience";
import { Portfolio } from "../portfolio/Portfolio";
import { Presentation } from "../presentation/Presentation";

import "./landing.scss";

export const Landing = () => {
  return (
    <>
      <Presentation />
      <Experience />
      <Portfolio />
    </>
  );
};
