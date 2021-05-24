import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleReset = () => {
    setValue(0);
  };

  const handleComplexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => setValue(value - 1)}
          disabled={value < 1 ? "disabled" : ""}
        >
          Decrease
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleComplexIncrease}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
