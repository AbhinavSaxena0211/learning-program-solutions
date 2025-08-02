#Event Examples App (React Hands-on Project)

#Objectives

This project demonstrates how to handle events in React using:

- React Event System
- Synthetic Events
- Event Handlers with `this` keyword
- Handling form events and user interaction

---

#Hands-on Goals

In this lab, you will:

- Implement multiple React event handlers
- Use **synthetic events** in buttons
- Trigger multiple functions on a single event
- Use props to pass and handle event arguments
- Create a `CurrencyConvertor` component that converts Indian Rupees to Euro

---

#Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node)
- Visual Studio Code

---

#How to Run the App

1. Clone/download the project folder.
2. Open terminal and navigate to the project directory.
3. Install dependencies:

npm install
npm start

4. The app will open on http://localhost:3000.

# Components
1. App.js
Maintains a counter state (default 5).

Implements 4 buttons inside a navbar-style header:

Increment: Increases counter and shows "Hello!" alert.

Decrement: Decreases counter.

Say Welcome: Displays a welcome message passed as an argument.

Synthetic Event: Displays an alert when clicked.

2. CurrencyConvertor
A form to convert INR (₹) to Euro (€) on button click.

Shows result using alert().

Demonstrates handling onSubmit, controlled inputs, and styling.

# Styling Features
Counter is displayed at the top center.

Navbar-style buttons for better UX.

Form elements styled with gap, padding, and alignment.

Dynamic conversion feedback via alert() on form submission.

Folder Structure.....


eventexamplesapp/
├── public/
├── src/
│   ├── components/
│   │   └── CurrencyConvertor.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md

