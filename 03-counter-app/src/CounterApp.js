import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //HandleAdd
  const handleAdd = (e) => {
    // console.log(e);
    console.log("Hello World");
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>

      <button onClick={handleAdd}> +1</button>
    </>
  );
};

CounterApp.protoTypes = {
  value: PropTypes.number,
};

export default CounterApp;
