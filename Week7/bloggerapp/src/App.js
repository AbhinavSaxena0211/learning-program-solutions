import React from "react";
import { books } from "./data";
import BookList from "./BookList";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="section">
        <h1>Course Details</h1>
        <CourseDetails />
      </div>
      <div className="section">
        <h1>Book Details</h1>
        <BookList books={books} />
      </div>
      <div className="section">
        <h1>Blog Details</h1>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
