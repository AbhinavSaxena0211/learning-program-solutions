import React, { useState } from "react";
import "../App.css";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.01;
    const converted = parseFloat(amount) * rate;
    alert(`Converting to Euro: Amount is €${converted.toFixed(2)}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in ₹"
          />
        </div>

        <div className="form-row">
          <label>Currency:</label>
          <textarea readOnly value="Euro" />
        </div>

        <button type="submit" className="convert-button">
          Submit
        </button>
      </form>
    </div>
  );
}
