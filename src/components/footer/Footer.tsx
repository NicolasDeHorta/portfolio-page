import React from "react";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      Nicolas De Horta - Copyright &copy; {new Date().getFullYear()}
    </div>
  );
};
