import React, { useState } from "react";
import { dummyData, dummyType } from "./utils/constants";
import DummyPerson from "./components/DummyPerson";
const App = () => {
  const [persons, setPersons] = useState<dummyType[]>(dummyData);

  const deleteHandler = (id: number) => {
    setPersons((prev) => {
      return prev.filter((person) => person.id !== id);
    });
  };

  return (
    <div className="flex gap-4">
      {persons.map((person) => {
        return (
          <DummyPerson
            key={person.id}
            person={person}
            deleteHandler={deleteHandler}
          />
        );
      })}
    </div>
  );
};

export default App;
