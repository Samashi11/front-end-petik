import React, { useState } from "react";
// import React from "react";
import "./Counter.css";

const Counter = () => {
  const [number, operateNumber] = useState(0);

  const plusClick = () => {
    operateNumber(number + 1);
  };

  const minusClick = () => {
    operateNumber(number - 1);
  };

  const resetClick = () => {
    let number = 0;
    operateNumber(number);
  };

  return (
    <>
      <div className="counter">
        <p>Nilai Saat Ini : {number}</p>
        <button onClick={minusClick}>Kurang</button>
        <button onClick={plusClick}>Tambah</button>
        <button onClick={resetClick}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
