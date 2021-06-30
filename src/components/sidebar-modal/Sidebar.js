import { useGlobalContext } from "../../context/context";
import logo from "../../images/logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar-modal__sidebar show-sidebar' : 'sidebar-modal__sidebar'}`}>
      <div className="sidebar-modal__sidebar__header">
        <img
          src={logo}
          className="sidebar-modal__sidebar__header__logo"
          alt="Coding Addict Logo"
        />
        <button className="close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-modal__sidebar__links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-modal__sidebar__social">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
