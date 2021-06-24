import { Review } from "./Review";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <div className="reviews__container__title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </div>
  );
}
