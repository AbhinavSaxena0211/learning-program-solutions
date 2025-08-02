import React, { useState } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const increment = () => {
    setCounter(counter + 1);
    sayHello();
  };

  const decrement = () => setCounter(counter - 1);

  const sayHello = () => {
    alert("Hello! Welcome to the event examples app.");
  };

  const sayWelcome = (msg) => {
    alert(`Say Welcome: ${msg}`);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h2 className="counter-heading">Counter Value: {counter}</h2>
      <nav className="navbar">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
        <button onClick={handleClick}>Click Me</button>
      </nav>

      <div className="content">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
