import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div className="cocktails__list__container__item">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="cocktails__list__container__item__footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails-app/cocktail/${id}`} className="details-btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
