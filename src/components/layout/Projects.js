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
    </div>
  );
}
