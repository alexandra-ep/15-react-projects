import React from "react";
import { useGlobalContext } from "../../../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cocktails__search">
      <form className="cocktails__search__form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
            placeholder="Cocktail name..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
