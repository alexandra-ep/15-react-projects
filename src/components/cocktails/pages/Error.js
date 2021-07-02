import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="cocktails__error">
      <div className="cocktails__error__container">
        <h1>Oops! It's a dead end</h1>
        <Link to="/cocktails-app" className="links-btn">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
