import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCocktail = () => {
  const { id } = useParams();
  const [loadingCocktail, setLoadingCocktail] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoadingCocktail(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoadingCocktail(false);
      } catch (error) {
        console.log(error);
        setLoadingCocktail(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loadingCocktail) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <h2 className="cocktails__single__heading">No cocktail to display</h2>
    );
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <div className="cocktails__single">
      <Link to="/cocktails-app" className="links-btn">
        Back home
      </Link>
      <h2 className="cocktails__single__heading">{name}</h2>
      <div className="cocktails__single__container">
        <img src={image} alt={name} />
        <div className="cocktails__single__container__info">
          <p>
            <span className="drink-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index} className="drink-data-ingr">{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
