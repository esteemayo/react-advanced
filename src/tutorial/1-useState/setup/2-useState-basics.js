import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
