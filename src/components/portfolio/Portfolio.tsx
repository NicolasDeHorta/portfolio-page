import "./portfolio.scss";
import { PortfolioItem } from "./portfolio-item/PortfolioItem";
import { portfolioData } from "../../portfolioData";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    setPortfolioItems(
      Array.from(document.querySelectorAll(".portfolioItemWrapper"))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("isVisible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.7,
      }
    );
    console.log(portfolioItems.length);
    portfolioItems.length > 0 &&
      portfolioItems.forEach((item) => observer.observe(item));
  }, [portfolioItems.length, portfolioItems]);

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
