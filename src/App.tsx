import React, { useState } from "react";
// import { dummyData, dummyType } from "./utils/constants";
// import PreviewPerson from "./components/PreviewPerson";
import MarioParent from "./components/MarioParent";
import MarioChild from "./components/MarioChild";

const App = () => {
  // const [persons, setPersons] = useState<dummyType[]>(dummyData);

  // const deleteHandler = (id: number) => {
  //   setPersons((prev) => {
  //     return prev.filter((person) => person.id !== id);
  //   });
  // };

  // const editHandler = (editedPerson: dummyType) => {
  //   console.log(editedPerson);
  //   setPersons((prev) => {
  //     return prev.map((person) =>
  //       person.id === editedPerson.id ? { ...editedPerson } : person
  //     );
  //   });
  // };

  return (
    <div className="flex gap-4">
      <MarioParent>
        <MarioChild/>
      </MarioParent>
      {/* {persons.map((person) => (
        <PreviewPerson
          key={person.id}
          person={person}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))} */}
    </div>
  );
};

export default App;
