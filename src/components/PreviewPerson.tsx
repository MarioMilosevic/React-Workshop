import React, { useState } from "react";
import { dummyType } from "../utils/constants";
import Person from "./Person";
import EditDummyPerson from "./EditDummyPerson";

type DummyPersonPropsType = {
  person: dummyType;
  deleteHandler: (id: number) => void;
  editHandler: (editedPerson: dummyType) => void;
};

const PreviewPerson = ({
  person,
  deleteHandler,
  editHandler,
}: DummyPersonPropsType) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {isEditing ? (
        <EditDummyPerson
          person={person}
          editHandler={editHandler}
          closeEdit={() => setIsEditing(false)}
        />
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
