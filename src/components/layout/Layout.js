import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BirthdayReminder from "../birthday-reminder/BirthdayReminder";
import ToursPage from "../tours/ToursPage";

export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
        <Route path="/birthday-reminder" component={BirthdayReminder} />
        <Route path="/tours" component={ToursPage} />
      </Switch>
    </Router>
  );
}
