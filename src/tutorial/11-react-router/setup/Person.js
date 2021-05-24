import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { data } from "../../../data";

const Person = () => {
  const [name, setName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [id]);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
