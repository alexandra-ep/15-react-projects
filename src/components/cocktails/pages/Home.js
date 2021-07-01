import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div className="cocktails__home">
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
