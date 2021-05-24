import React, { useState, useEffect, useReducer } from "react";

import Modal from "./Modal";
import reducer from "./reducer";
import { data } from "../../../data";

const getLocalStorage = () => {
  const people = localStorage.getItem("people");
  if (people) return JSON.parse(people);
  return [];
};

const defaultState = {
  people: getLocalStorage(),
  isModalOpen: false,
  modalContent: "hello world",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(state.people));
  }, [state.people]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_PERSON", payload: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
