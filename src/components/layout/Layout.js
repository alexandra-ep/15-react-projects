import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BirthdayReminder from "../birthday-reminder/BirthdayReminder";
import ToursPage from "../tours/ToursPage";
import Reviews from "../reviews/Reviews";
import Questions from "../questions/Questions";


export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/birthday-reminder" component={BirthdayReminder} />
        <Route path="/tours" component={ToursPage} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
}
