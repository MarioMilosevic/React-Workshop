import React, { useState } from "react";
import { dummyData, dummyType } from "./utils/constants";
import DummyPerson from "./components/DummyPerson";
import EditDummyPerson from "./components/EditDummyPerson";
const App = () => {
  const [persons, setPersons] = useState<dummyType[]>(dummyData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const deleteHandler = (id: number) => {
    setPersons((prev) => {
      return prev.filter((person) => person.id !== id);
    });
  };

  const editHandler = (id: number) => {
    console.log("radi", id);
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="flex gap-4">
      {persons.map((person) => {
        return isEditing ? (
          <EditDummyPerson
            key={person.id}
            person={person}
            editHandler={editHandler}
          />
        ) : (
          <DummyPerson
            key={person.id}
            person={person}
            deleteHandler={deleteHandler}
            toggleEdit={toggleEdit}
          />
        );
      })}
    </div>
  );
};

export default App;
