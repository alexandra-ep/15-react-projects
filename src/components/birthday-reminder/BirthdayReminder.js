import { useState } from "react";
import { Data } from "./Data";
import { List } from "./List";

export default function BirthdayReminder() {
  const [people, setPeople] = useState(Data);

  return (
    <div className="birthdays">
      <section className="birthdays__container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}
