import React from "react";

const ErrorExample = () => {
  let title = "Random person";

  const handleClick = () => {
    title = "Hello people";
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
