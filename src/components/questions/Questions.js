import { useState } from "react";
import { data } from "./Data";
import { Question } from "./Question";

export default function Questions() {
  const [questions] = useState(data);

  return (
    <div className="questions">
      <div className="questions__container">
        <h3>FAQ regarding login</h3>
        <div className="questions__container__info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
}
