import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <HeroBanner />
        <div className="projects__links">
          <Link
            to="/birthday-reminder"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <Link to="/portfolio-tabs" target="_blank" rel="noopener noreferrer">
            Portfolio Tabs
          </Link>
          <Link to="/reviews-slider" target="_blank" rel="noopener noreferrer">
            Reviews Slider
          </Link>
          <Link to="/lorem-generator" target="_blank" rel="noopener noreferrer">
            Paragraph Generator
          </Link>
          <Link to="/color-generator" target="_blank" rel="noopener noreferrer">
            Color Generator
          </Link>
          <Link to="/grocery-list" target="_blank" rel="noopener noreferrer">
            Grocery List
          </Link>
          <Link to="/navbar" target="_blank" rel="noopener noreferrer">
            Navbar
          </Link>
          <Link to="/sidebar-modal" target="_blank" rel="noopener noreferrer">
            Sidebar + Modal
          </Link>
          <Link to="/stripe-app" target="_blank" rel="noopener noreferrer">
            Stripe Submenu
          </Link>
        </div>
      </div>
    </div>
  );
}
