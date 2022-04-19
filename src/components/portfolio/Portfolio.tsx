import "./portfolio.scss";
import { PortfolioItem } from "./portfolio-item/PortfolioItem";
import { portfolioData } from "../../portfolioData";

export const Portfolio = () => {
  return (
    <div className="portfolioWrapper">
      {portfolioData.map(
        ({ img, description, name, id, repo, deploy, stack }) => {
          return (
            <PortfolioItem
              key={id}
              name={name}
              img={img}
              text={description}
              deploy={deploy}
              stack={stack}
              repo={repo}
            />
          );
        }
      )}
    </div>
  );
};
