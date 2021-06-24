import { Tour } from "./Tour";

export const Tours = ({ tours }) => {
  return (
    <div className="tours__container">
      <div className="tours__container__title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours__container__list">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </div>
  );
};
