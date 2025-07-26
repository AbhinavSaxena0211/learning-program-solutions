import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React Bootcamp",
      startDate: "2025-07-01",
      endDate: "2025-07-30",
      status: "ongoing",
    },
    {
      name: "NodeJS Mastery",
      startDate: "2025-06-01",
      endDate: "2025-06-30",
      status: "completed",
    },
  ];

  return (
    <div>
      <h2>My Academy Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
