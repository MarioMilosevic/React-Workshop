import React, { useState } from "react";
import { dummyData, dummyType } from "./utils/constants";
import PreviewPerson from "./components/PreviewPerson";
import EditDummyPerson from "./components/EditDummyPerson";
const App = () => {
  const [persons, setPersons] = useState<dummyType[]>(dummyData);

  const deleteHandler = (id: number) => {
    setPersons((prev) => {
      return prev.filter((person) => person.id !== id);
    });
  };


  return (
    <div className="flex gap-4">
      {persons.map((person) => (
        <PreviewPerson
          key={person.id}
          person={person}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default App;
