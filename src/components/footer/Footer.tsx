import React from "react";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      Nicolas De Horta - <a href="mailto:dehorta.n@gmail.com"> dehorta.n@gmail.com</a> - Copyright &copy; {new Date().getFullYear()}
    </div>
  );
};
