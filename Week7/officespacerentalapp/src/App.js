import "./App.css";

const element = "Office Space";
const jsxatt = (
  <img
    src={process.env.PUBLIC_URL + "/officeImage.jpeg"}
    width="25%"
    height="25%"
    alt="Office Space"
  />
);

const officeSpaces = [
  { Name: "DBS", Rent: 50000, Address: "Chennai" },
  { Name: "Regus", Rent: 65000, Address: "Bangalore" },
  { Name: "WeWork", Rent: 45000, Address: "Hyderabad" },
];

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h1>{element}, at Affordable Range</h1>
        {jsxatt}
      </div>

      {officeSpaces.map((ItemName, index) => {
        let colorClass = ItemName.Rent <= 60000 ? "textRed" : "textGreen";
        return (
          <div key={index} className="office-box">
            <h1>Name: {ItemName.Name}</h1>
            <h3 className={colorClass}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
