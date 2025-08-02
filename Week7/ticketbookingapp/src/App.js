import React, { useState } from "react";
import UserGreetings from "./UserGreetings";
import GuestGreetings from "./GuestGreetings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✈️ Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <UserGreetings />
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <GuestGreetings />
        </>
      )}
    </div>
  );
}

export default App;
