import { useState } from "react";

export const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <div className="tours__container__list__item">
      <img src={image} alt={name} />
      <footer>
        <div className="tours__container__list__item--info">
          <h4>{name}</h4>
          <h4 className="price">$ {price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}{" "}
          <button className="read-btn" onClick={() => setReadmore(!readmore)}>
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};
