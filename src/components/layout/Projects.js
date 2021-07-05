import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import { ProjectItems } from "./ProjectItems";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <HeroBanner />
        <div className="projects__container__links">
          {ProjectItems.map((item, index) => {
            return (
              <Link
                to={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={item.cName}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
