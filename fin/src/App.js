import React, { useState } from "react";
import data from "./data";
import List, { num_word } from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const length = people.length;
  return (
    <main>
      <section className="container">
        <h3>
          {length}{" "}
          {num_word(length, ["день рождения", "дня рождения", "дней рождения"])}{" "}
          сегодня
        </h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Очистить список
        </button>
      </section>
    </main>
  );
}

export default App;
