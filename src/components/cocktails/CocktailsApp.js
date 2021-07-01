import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

export default function CocktailApp() {
  return (
    <Router>
      <div className="cocktails">
        <Navbar />
        <Switch>
          <Route exact path="/cocktails-app">
            <Home />
          </Route>
          <Route path="/cocktails-app/about">
            <About />
          </Route>
          <Route path="/cocktails-app/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="/cocktails-app/error">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
