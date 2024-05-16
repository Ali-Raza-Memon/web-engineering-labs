import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          // setValue(value + 1);
          setValue((prev) => prev + 1);
        }}
      >
        {" "}
        +{" "}
      </button>{" "}
      {value}{" "}
      <button
        onClick={() => {
          // setValue(value - 1);
          setValue((prev) => prev - 1);
        }}
      >
        {" "}
        -{" "}
      </button>{" "}
    </div>
  );
}
