import React from "react";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: {
      city: "",
      zip: "",
    },
  });

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, name: value };
    });
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, address: { ...prev.address, city: e.target.value } };
    });
  };
  const zipHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, address: { ...prev.address, zip: e.target.value } };
    });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Vježba: useState</h1>
      <div className="border flex flex-col gap-4">
        <input
          placeholder="name"
          type="text"
          value={form.name}
          onChange={(e) => nameHandler(e)}
        />
        <input
          placeholder="email"
          type="email"
          value={form.email}
          onChange={(e) => emailHandler(e)}
        />
        <input
          placeholder="city"
          type="text"
          value={form.address.city}
          onChange={(e) => cityHandler(e)}
        />
        <input
          placeholder="zip"
          type="number"
          value={form.address.zip}
          onChange={(e) => zipHandler(e)}
        />
      </div>
    </div>
  );
}

export default App;
