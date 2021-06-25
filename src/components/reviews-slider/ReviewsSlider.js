import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./Data";

export default function ReviewsSlider() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3500);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__container__title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="slider__container__section">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";

            if (personIndex === index) {
              position = "activeSlide";
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <div
                key={id}
                className={`slider__container__section__info ${position}`}
              >
                <img
                  src={image}
                  alt={name}
                  className="slider__container__section__info--img"
                />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="quote">{quote}</p>
                <FaQuoteRight className="icon" />
              </div>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
