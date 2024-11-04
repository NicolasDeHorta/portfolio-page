import "./portfolioItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";

interface PortfolioItemProps {
  img?: string;
  mobileImgs?: string[];
  text: string;
  name: string;
  deploy?: string;
  repo?: string;
  live?: boolean;
  stack: any[];
}

export const PortfolioItem = ({
  img,
  mobileImgs,
  text,
  name,
  deploy,
  stack,
  repo,
  live
}: PortfolioItemProps) => {
  return (
    <div className="portfolioItemWrapper">
      <h2>{name}</h2>
      <div className="portfolioItemContainer">
        {img && <img className="singleImg" src={img} alt="portfolio item" />}
        {mobileImgs && <div className="mobileImgs">
          {mobileImgs.map(img => <img className="mobileImg" src={img} alt="portfolio item" />)}
        </div>}
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
                  {live ? "See it live" : "Try it !"}
                </div>
              )}
            </div>
          </p>
          <div className="portfolioItemStack">
            {stack.map((stackItem, index) => (
              <FontAwesomeIcon key={index} icon={stackItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
