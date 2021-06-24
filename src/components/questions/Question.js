import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="questions__container__info__item">
      <header>
        <h4>{title}</h4>
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};
