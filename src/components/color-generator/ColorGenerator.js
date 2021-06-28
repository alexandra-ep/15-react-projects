import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

export default function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="color-generator">
      <div className="color-generator__container">
        <div className="color-generator__container__search">
          <h3>Color Generator</h3>
          <form
            className="color-generator__container__search__form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={color}
              placeholder="#f15025"
              className={`${error ? "error" : null}`}
              onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="color-generator__container__results">
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
