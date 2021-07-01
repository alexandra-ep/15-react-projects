import { useGlobalContext } from "../../context/context";
import logo from "../../images/logo-stripe.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openStripeSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="stripeapp__nav" onMouseOver={handleSubmenu}>
      <div className="stripeapp__nav__container">
        <div className="stripeapp__nav__container__header">
          <img src={logo} alt="Stripe Logo" className="logo" />
          <button className="toggle-btn" onClick={openStripeSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="stripeapp__nav__container__links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
