import React from "react";
import { dummyType } from "../utils/constants";

type PersonProps = {
  person: dummyType;
  toggleEdit: () => void;
  deleteHandler: (id: number) => void;
};

const Person = ({ person, toggleEdit, deleteHandler }: PersonProps) => {
  const { name, lastName, age, id, active } = person;

  return (
    <div className="border p-2 flex flex-col gap-2 min-w-[180px]">
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Active: {active ? "Yes" : "No"}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className="rounded-xl px-2 py-1 border bg-green-600"
          onClick={toggleEdit}
        >
          Edit
        </button>
        <button
          className="rounded-xl px-2 py-1 border bg-red-700"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Person;
