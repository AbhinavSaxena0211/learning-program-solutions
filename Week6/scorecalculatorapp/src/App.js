import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <h1>Student Management Portal</h1>
      <CalculateScore
        name="Abhi Saxena"
        school="DPS Bhopal"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;
