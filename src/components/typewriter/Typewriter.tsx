import React from "react";
import { Typewriter as Typ } from "react-simple-typewriter";

import "./typewriter.scss";

export const Typewriter = () => {
  return (
    <div className="typewriter">
      <Typ
        words={["Engineer", "Developer"]}
        loop
        delaySpeed={2200}
        deleteSpeed={30}
        cursor
        cursorStyle={"_"}
      />
    </div>
  );
};
