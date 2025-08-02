import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementByFive = () => {
    setCount(count + 5);
    sayHello();
  };

  const decrementByFive = () => {
    setCount(count - 5);
  };

  const sayHello = () => {
    console.log("Hello! You incremented the count.");
  };

  return (
    <>
      <button onClick={incrementByFive}>Increment by 5 & Say Hello</button>
      <button onClick={decrementByFive}>Decrement by 5</button>
      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        Count: {count}
      </div>
    </>
  );
}
