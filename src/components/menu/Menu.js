export const Menu = ({ items }) => {
  return (
    <div className="menu__container__items">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;
        return (
          <div key={id} className="menu__container__items__single">
            <img
              src={img}
              alt={title}
              className="menu__container__items__single--img"
            />
            <div className="menu__container__items__single__info">
              <header>
                <h4 className="title">{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="description">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
