export default function OddPlayers(props) {
  const [first, , third, , fifth] = props.players || [];

  return (
    <ul>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </ul>
  );
}
