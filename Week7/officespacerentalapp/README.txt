# Office Space Rental App (React Hands-on Project)

# Objectives

This project demonstrates how to:

- Use **JSX syntax** to create React elements
- Render React elements to the DOM
- Use **inline CSS styling** in JSX
- Apply **conditional styling** based on data

---

# Hands-on Goals

In this lab, you will:

- Display a heading using JSX
- Render an office image using JSX attributes
- Create and display a list of office space objects with:
  - Name
  - Rent
  - Address
- Style rent conditionally:
  - Red if rent < ₹60,000
  - Green if rent ≥ ₹60,000

---

# Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- Visual Studio Code

---

# How to Run the App

1. Download or clone the project folder.
2. Open terminal and navigate into the project folder.
3. Run the following commands:

npm install
npm start

4. The app will open at http://localhost:3000.

# Components & Functionality
✅ Main Features
Heading: Displayed at the top of the page using JSX

Office Image: Rendered below the heading using JSX attribute src

Office List:

Array of office objects (Name, Rent, Address)

Rendered using .map() loop

Conditional Styling:

Rent below ₹60,000 → shown in red

Rent ₹60,000 or above → shown in green

✅ Styling
Center-aligned layout using CSS

Image placed below the heading

Each office card styled using a custom style object

Rent color changes based on value using inline styles.

# Styling
Center-aligned layout using CSS

Image placed below the heading

Each office card styled using a custom style object

Rent color changes based on value using inline styles

# Sample Output
A heading: "Office Space Rental"

Image of office space

Cards with:

Office Name

Rent (colored red/green based on value)

Address

Folder Structure.....

officespacerentalapp/
├── public/
│   └── office.jpg
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md

