import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";

export default function Projects() {
  return (
    <div className="projects">
      <HeroBanner />
      <div className="projects__links">
        <Link to="/birthday-reminder" target="_blank" rel="noopener noreferrer">
          Birthday Reminder
        </Link>
        <Link to="/tours" target="_blank" rel="noopener noreferrer">
          Tours
        </Link>
        <Link to="/reviews" target="_blank" rel="noopener noreferrer">
          Reviews
        </Link>
        <Link to="/faq" target="_blank" rel="noopener noreferrer">
          FAQ Accordion
        </Link>
        <Link to="/menu" target="_blank" rel="noopener noreferrer">
          Menu
        </Link>
      </div>
    </div>
  );
}
