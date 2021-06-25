import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BirthdayReminder from "../birthday-reminder/BirthdayReminder";
import ToursPage from "../tours/ToursPage";
import Reviews from "../reviews/Reviews";
import Questions from "../questions/Questions";
import MenuPage from "../menu/MenuPage";
import Portfolio from "../portfolio-tabs/Portfolio";
import ReviewsSlider from "../reviews-slider/ReviewsSlider";

export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/birthday-reminder" component={BirthdayReminder} />
        <Route path="/tours" component={ToursPage} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={Questions} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/portfolio-tabs" component={Portfolio} />
        <Route path="/reviews-slider" component={ReviewsSlider} />
      </Switch>
    </Router>
  );
}
