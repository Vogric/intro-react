import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);
  //HandleAdd
  const handlePush = () => {
    setCounter(counter + 1);
  };
  const handlePop = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handlePop}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePush}>+1</button>
    </>
  );
};

CounterApp.protoTypes = {
  value: PropTypes.number,
};

export default CounterApp;
