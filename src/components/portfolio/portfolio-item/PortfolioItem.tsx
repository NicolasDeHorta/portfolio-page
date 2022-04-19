import "./portfolioItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PortfolioItemProps {
  img: string;
  text: string;
  name: string;
  deploy?: string;
  repo?: string;
  stack: any[];
}

export const PortfolioItem = ({
  img,
  text,
  name,
  deploy,
  stack,
  repo,
}: PortfolioItemProps) => {
  return (
    <div className="portfolioItemWrapper">
      <h2>{name}</h2>
      <div className="portfolioItemContainer">
        <img src={img} alt="portfolio item" />
        <div className="leftContainer">
          <p className="portfolioItemText">{text}</p>
          <p>
            {deploy && (
              <a target="_blank" rel="noreferrer" href={deploy}>
                View deployment
              </a>
            )}
            {repo && (
              <div>
                <a target="_blank" rel="noreferrer" href={repo}>
                  The repo is here
                </a>
              </div>
            )}
          </p>
          <div className="portfolioItemStack">
            {stack.map((stackItem) => (
              <FontAwesomeIcon icon={stackItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
