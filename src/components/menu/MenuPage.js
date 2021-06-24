import { useState } from "react";
import { Menu } from "./Menu";
import { Categories } from "./Categories";
import { items } from "./Data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__container__title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </div>
  );
}
