#Cricket App (React Hands-on Project)

#Objectives

This project demonstrates the following ES6 and React concepts:

- List features of ES6
- Usage of `let`, `const`, and difference from `var`
- ES6 class and inheritance fundamentals
- Arrow functions and destructuring
- Use of `set()` and `map()` in JavaScript
- Conditional rendering in React
- Use of props and components

---

#Hands-on Goals

In this lab, you will:

- Create a React app named **`cricketapp`**
- Use **map()** to list 11 players and their scores
- Filter players with score `< 70` using arrow functions
- Destructure players into odd and even groups
- Merge two arrays using spread operator (`...`)
- Conditionally render components based on a flag

---

#Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node)
- Visual Studio Code or another code editor

---

#How to Run the App

1. Clone or download the project folder.
2. Open terminal and navigate to the project directory.
3. Run:

npm install
npm start

4. The app will open on http://localhost:3000.

Folder Structure.......

cricketapp/
├── public/
├── src/
│   ├── components/
│   │   ├── ListOfPlayers.js
│   │   ├── IndianPlayers.js
│   │   ├── ScoreBelow70.js
│   │   ├── OddPlayers.js
│   │   └── EvenPlayers.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md

