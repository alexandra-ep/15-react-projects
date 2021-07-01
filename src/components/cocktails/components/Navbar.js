import { Link } from "react-router-dom";
import logo from "../../../images/logo-2.svg";

const Navbar = () => {
  return (
    <nav className="cocktails__navbar">
      <div className="cocktails__navbar__container">
        <Link to="/cocktails-app">
          <img
            src={logo}
            alt="cocktail db logo"
            className="cocktails__navbar__container__logo"
          />
        </Link>
        <ul className="cocktails__navbar__container__links">
          <li>
            <Link to="/cocktails-app">Home</Link>
          </li>
          <li>
            <Link to="/cocktails-app/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
