import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${
        isSubmenuOpen ? "stripeapp__submenu show" : "stripeapp__submenu"
      }`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`stripeapp__submenu__container ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
