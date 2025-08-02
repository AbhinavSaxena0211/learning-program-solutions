# Ticket Booking App (React Hands-on Project)

# Objectives

This project demonstrates the use of **conditional rendering** in React by simulating a flight ticket booking interface for guest and logged-in users.

---

# Hands-on Goals

In this hands-on lab, you will:

- Use **React state** to manage login status
- Render different views for **Guest** and **User**
- Toggle between login and logout using buttons
- Conditionally render components using:
  - `if-else` statements
  - **Element variables**
  - **Ternary operators**

---

# Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/)
- npm
- Visual Studio Code

---

# How to Run the App

1. Clone or download the project.
2. Navigate to the project directory in terminal.
3. Run the following:

npm install
npm start


4. Visit http://localhost:3000 to see the app in action.

# Components & Functionality
✅ Key Components
GuestGreeting.js

Displays: "Welcome Guest. Please login to book tickets."

UserGreeting.js

Displays: "Welcome User. You can now book your tickets."

Greeting.js

Conditionally renders GuestGreeting or UserGreeting based on isLoggedIn state.

App.js

Controls login/logout toggle.

Displays appropriate greeting and button:

"Login" if user is not logged in

"Logout" if user is logged in

# Output Behavior
Action	Output
Default	Guest greeting shown with Login button
On Login	User greeting shown with Logout button
On Logout	Back to guest greeting

Folder Structure......

ticketbookingapp/
├── src/
│   ├── components/
│   │   ├── GuestGreeting.js
│   │   ├── UserGreeting.js
│   │   └── Greeting.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
├── package.json
└── README.md
