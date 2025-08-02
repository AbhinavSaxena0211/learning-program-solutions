export default function ScoreBelow70({ players }) {
  const below70 = players.filter((player) => player.score < 70);
  return (
    <ul>
      {below70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} - <span>{item.score}</span>
        </li>
      ))}
    </ul>
  );
}
