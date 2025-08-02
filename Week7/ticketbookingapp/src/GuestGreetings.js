import React from "react";

export default function GuestGreetings() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Hello Guest! 👋</h2>
      <p>Please log in to book your flights.</p>
      <p>Here are some available flights for browsing:</p>
      <ul style={{ listStyleType: "none" }}>
        <li>✈️ Delhi → Mumbai – 10:00 AM</li>
        <li>✈️ Bangalore → Kolkata – 2:00 PM</li>
        <li>✈️ Chennai → Hyderabad – 5:00 PM</li>
      </ul>
    </div>
  );
}
