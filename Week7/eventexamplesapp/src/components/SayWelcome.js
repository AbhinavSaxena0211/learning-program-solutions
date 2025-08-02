import React from "react";

export default function SayWelcome() {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>;
}
