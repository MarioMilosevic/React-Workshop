import React, { useState, useRef } from "react";
import { dummyData } from "./utils/constants";
import DummyPerson from "./components/DummyPerson";
const App = () => {
  return (
    <div className="flex gap-4">
      {dummyData.map((person) => {
        return <DummyPerson key={person.id} person={person} />;
      })}
    </div>
  );
};

export default App;
