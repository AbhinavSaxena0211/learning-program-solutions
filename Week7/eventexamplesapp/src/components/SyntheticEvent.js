import React from "react";

export default function SyntheticEvent() {
  const handleClick = (e) => {
    alert("I was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
