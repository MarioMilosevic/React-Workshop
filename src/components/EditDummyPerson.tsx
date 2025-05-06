import React, { useState } from "react";
import { dummyType } from "../utils/constants";

type EditDymmyPersonProps = {
  person: dummyType;
  editHandler: (id: number) => void;
};

const EditDummyPerson = ({ person }: EditDymmyPersonProps) => {
  const [editPerson, setEditPerson] = useState({ ...person });
  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Age" />
    </div>
  );
};

export default EditDummyPerson;
