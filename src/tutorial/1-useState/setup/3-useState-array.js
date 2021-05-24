import React, { useState } from "react";

import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = (id) => {
    const updItems = people.filter((p) => p.id !== id);
    setPeople(updItems);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleDelete(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
