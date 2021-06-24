import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
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
  );
}
