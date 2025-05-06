import React, { useState } from "react";
import { dummyType } from "../utils/constants";
import Person from "./Person";
import EditDummyPerson from "./EditDummyPerson";

type DummyPersonPropsType = {
  person: dummyType;
  deleteHandler: (id: number) => void;
};

const PreviewPerson = ({ person, deleteHandler }: DummyPersonPropsType) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const editHandler = (id: number) => {
    console.log("id", id);
  };

  return (
    <>
      {isEditing ? (
        <EditDummyPerson person={person} editHandler={editHandler} />
      ) : (
        <Person
          person={person}
          toggleEdit={toggleEdit}
          deleteHandler={deleteHandler}
        />
      )}
    </>
  );
};

export default PreviewPerson;
