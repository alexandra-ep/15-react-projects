import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "../../context/context";

const Sidebar = () => {
  const { isStripeSidebarOpen, closeStripeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isStripeSidebarOpen ? "stripeapp__sidebar show" : "stripeapp__sidebar"
      }`}
    >
      <div className="stripeapp__sidebar__container">
        <button className="close-btn" onClick={closeStripeSidebar}>
          <FaTimes />
        </button>
        <div className="stripeapp__sidebar__container__links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
