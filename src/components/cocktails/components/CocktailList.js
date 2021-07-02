import { useGlobalContext } from "../../../context/context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = () => {
  const { cocktails, loadingCocktails } = useGlobalContext();

  if (loadingCocktails) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="cocktails__list__heading">
        No cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <div className="cocktails__list">
      <h2 className="cocktails__list__heading">Cocktails</h2>
      <div className="cocktails__list__container">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
