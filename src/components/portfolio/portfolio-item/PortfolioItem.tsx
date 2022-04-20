import "./portfolioItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";

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
            <div className="actions">
              {repo && (
                <div
                  className="actionBtn"
                  onClick={() => window.open(repo, "_blank")}
                >
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  Check the code
                </div>
              )}
              {deploy && (
                <div
                  className="actionBtn"
                  onClick={() => window.open(deploy, "_blank")}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  Try it !
                </div>
              )}
            </div>
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
