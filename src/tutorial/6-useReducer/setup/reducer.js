const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "person added",
    };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_PERSON") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Person deleted",
    };
  }

  throw new Error("No matching action type");
};

export default reducer;
