import React, { useState, useEffect } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const getLocalStorage = () => {
  const people = localStorage.getItem("people");
  if (people) return JSON.parse(people);
  return [];
};

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };

      setPeople((people) => {
        return [...people, newPerson];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
