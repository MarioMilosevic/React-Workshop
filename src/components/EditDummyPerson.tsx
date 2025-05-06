import React, { useState } from "react";
import { dummyType } from "../utils/constants";

type EditDymmyPersonProps = {
  person: dummyType;
  editHandler: (id: number) => void;
};

const EditDummyPerson = ({ person, editHandler }: EditDymmyPersonProps) => {
  const [editPerson, setEditPerson] = useState({ ...person });
  return (
    <div className="border flex flex-col gap-2">
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
    </div>
  );
};

export default EditDummyPerson;
