import ListofPlayers from "./components/ListofPlayers";
import ScoreBelow70 from "./components/ScoreBelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListofIndianPlayers from "./components/ListofIndianPlayers";
import { IndianPlayers } from "./components/IndianPlayers";

const players = [
  { name: "Sachin", score: 100 },
  { name: "Dhoni", score: 95 },
  { name: "Kohli", score: 45 },
  { name: "Raina", score: 70 },
  { name: "Sharma", score: 68 },
  { name: "Bumrah", score: 60 },
  { name: "Pandya", score: 75 },
  { name: "Ashwin", score: 85 },
  { name: "Jadeja", score: 40 },
  { name: "Gill", score: 50 },
  { name: "Yadav", score: 35 },
];

const flag = false;

function App() {
  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h2>Odd Players</h2>
        <OddPlayers players={IndianPlayers} />
        <hr />
        <h2>Even Players</h2>
        <EvenPlayers players={IndianPlayers} />
        <hr />
        <h2>List of Indian Players Merged:</h2>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
