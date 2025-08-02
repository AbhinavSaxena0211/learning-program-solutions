import React from "react";

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
