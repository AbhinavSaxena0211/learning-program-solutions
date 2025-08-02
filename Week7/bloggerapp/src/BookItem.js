function BookItem({ book }) {
  return (
    <li>
      {book.title} by {book.author}
    </li>
  );
}

export default BookItem;
