import React from "react";

import "./experience-card.scss";

export interface ExperienceInfo {
  companyName: string,
  position: string,
  from: string,
  to: string,
  description: string,
}

export const ExperienceCard = ({ item: { companyName, position, from, to, description } }: { item: ExperienceInfo }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <div className="experience-position">{position}</div>
        <div className="experience-name">{companyName}</div>
        <div className="experience-period">{from} - {to}</div>
      </div>
      <div className="experience-card-body">
        {description}
      </div>
    </div>
  );
};
