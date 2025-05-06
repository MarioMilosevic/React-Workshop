import React from "react";
import { dummyType } from "../utils/constants";

type DummyPersonPropsType = {
  person: dummyType;
};

const DummyPerson = ({ person }: DummyPersonPropsType) => {
  console.log(person);
  const { name, lastName, age } = person;
  return (
    <div className="border p-2 flex flex-col gap-2">
      <h1>Name {name}</h1>
      <h1>Last Name {lastName}</h1>
          <h1>Age {age}</h1>
          <div className="flex justify-between items-center">
          <button>
              Edit
          </button>
          <button>Delete</button>
          </div>
    </div>
  );
};

export default DummyPerson;
