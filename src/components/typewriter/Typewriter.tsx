import React from "react";
import { Typewriter as Typ } from "react-simple-typewriter";

import "./typewriter.scss";

export const Typewriter = () => {
  return (
    <div className="typewriter">
      <Typ
        words={["Engineer", "Web Developer"]}
        loop
        delaySpeed={2200}
        deleteSpeed={40}
        cursor
        cursorStyle={"_"}
      />
    </div>
  );
};
