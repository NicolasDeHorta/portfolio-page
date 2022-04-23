import {
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faEnvelope,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

const faGrapQl: any = {
  prefix: "fac",
  iconName: "graphql", // Any name you like
  icon: [
    400, // width
    400, // height
    [], // ligatures
    "", // unicode (if relevant)
    "M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9", // svg path data
  ],
};

const typescriptIcon: any = {
  prefix: "fac",
  iconName: "typescript",
  icon: [
    23,
    23,
    [],
    "",
    "M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z",
  ],
};

export const About = () => {
  return (
    <div className="textWrapper">
      <p>
        My name is Nicolas, i'm a
        <span>
          <FontAwesomeIcon icon={faCode} /> &nbsp;Developer
        </span>
        and also
        <span>
          <FontAwesomeIcon icon={faFlask} /> <FontAwesomeIcon icon={faReact} />
          &nbsp;Chemical Engineer
        </span>
        .{" "}
      </p>
      <p>
        A long ago i had to decide between Chemical and Software Enginerering,
        but ... why not both?{" "}
      </p>
      <p>
        The story starts with{" "}
        <span>
          <FontAwesomeIcon icon={faPython} /> Python{" "}
        </span>
        , i wanted to get into Data science and Data analysis which i was really
        passionate about, got to work at two big industrial companies as Data
        analyst, i was really excited about combining my two passions.
      </p>{" "}
      <p>
        {" "}
        Later on i started a Web Development Bootcamp and really enjoyed it,
        some months later started working as a
        <span>
          <FontAwesomeIcon icon={typescriptIcon} />
          <FontAwesomeIcon icon={faReact} /> React
        </span>
        frontend developer at a Software company, and some time after that moved
        from that project to another in the same company getting into fullstack
        development featuring new tecnologies like
        <span>
          <FontAwesomeIcon icon={faNodeJs} /> Node.js
        </span>
        ,
        <span>
          <FontAwesomeIcon icon={faDatabase} /> Postgres
        </span>
        and
        <span>
          <FontAwesomeIcon icon={faGrapQl} /> GraphQL
        </span>
        .
      </p>
      <p>
        I'm now still working at that Company, developing come projects on my
        own and continue studying Computer engineering. Feel free to contact me
        via{" "}
        <span>
          <a href="mailto:dehorta.n@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> eMail
          </a>
        </span>
        {/* through the{" "}
        <Link to="/contact" className="aboutLink">
          {" "}
          contact page{" "}
        </Link> */}
        or my LinkedIn at the{" "}
        <Link to="/" className="aboutLink">
          {" "}
          main page{" "}
        </Link>
        .
      </p>
    </div>
  );
};
