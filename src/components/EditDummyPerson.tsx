import React, { useState } from "react";
import { dummyType } from "../utils/constants";

type EditDymmyPersonProps = {
  person: dummyType;
  editHandler: (updatedPerson: dummyType) => void;
  closeEdit: () => void;
};

const EditDummyPerson = ({
  person,
  editHandler,
  closeEdit,
}: EditDymmyPersonProps) => {
  const [editPerson, setEditPerson] = useState<dummyType>({ ...person });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      console.log('edit dummy')
    e.preventDefault();
    editHandler(editPerson);
    closeEdit();
  };

  return (
    <form
      className="border flex flex-col gap-2 justify-between"
      onSubmit={(e) => submitHandler(e)}
    >
      <input
        className="text-slate-900"
        type="text"
        placeholder="Name"
        value={editPerson.name}
        onChange={(e) =>
          setEditPerson((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        className="text-slate-900"
        type="text"
        placeholder="Last Name"
        value={editPerson.lastName}
        onChange={(e) =>
          setEditPerson((prev) => ({ ...prev, lastName: e.target.value }))
        }
      />
      <input
        className="text-slate-900"
        type="number"
        placeholder="Last Name"
        value={editPerson.age}
        onChange={(e) =>
          setEditPerson((prev) => ({ ...prev, age: e.target.valueAsNumber }))
        }
      />
      <input
        className="text-slate-900"
        type="checkbox"
        checked={editPerson.active}
        onChange={(e) =>
          setEditPerson((prev) => ({ ...prev, active: e.target.checked }))
        }
      />
      <div className="flex justify-between items-center mt-4">
        <button className="rounded-xl px-2 py-1  bg-green-600" type="submit">
          Save
        </button>
        <button
          className="rounded-xl px-2 py-1  bg-red-700"
          onClick={closeEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditDummyPerson;
