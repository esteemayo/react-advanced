import React, { useState } from "react";

import { data } from "./../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const handleRemovePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Prop drilling</h3>
      <List people={people} onRemove={handleRemovePerson} />
    </section>
  );
};

const List = ({ people, onRemove }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} onRemove={onRemove} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, onRemove }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
