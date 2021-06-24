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
      <Link to="/questions" target="_blank" rel="noopener noreferrer">
        Questions | FAQ
      </Link>
    </div>
  );
}
