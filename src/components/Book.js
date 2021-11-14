import React, { useState } from "react";
import PropTypes from "prop-types";
import Bookshelfchanger from "./BookShelfChanger";
import BookRating from "./BookRating";

const Book = (props) => {
  const [isMoveTo, setIsMoveTo] = useState(false),
    { book, updateBookShelf } = props,
    // Returns the books that are already on shelves
    isBookInShelves = (bookId) => {
      const isBookInShelves = props.currBooks.filter(
        (book) => bookId === book.id
      )[0];
      return isBookInShelves && isBookInShelves.shelf;
    },
    MoveTo = () => setIsMoveTo(true);

  return (
    book && (
      <article className={`book ${isMoveTo && "book-move"}`}>
        <div className="top">
          <span
            className="categories"
            title={`Categories: ${
              book.categories ? book.categories[0] : "uncategorized"
            }`}
          >
            {book.categories ? book.categories[0] : "uncategorized"}
          </span>
          <Bookshelfchanger
            shelf={
              book.shelf
                ? book.shelf
                : isBookInShelves(book.id)
                ? isBookInShelves(book.id)
                : "none"
            }
            updateBookShelf={updateBookShelf}
            book={book}
            MoveTo={MoveTo}
          />
        </div>
        <div className="body">
          <a href={book.previewLink} target="_blank" rel="noreferrer">
            <div className="book-cover">
              <img
                src={`${book.imageLinks && book.imageLinks.thumbnail}`}
                alt={book.title}
              />
            </div>
            <h4>{book.title}</h4>
            <div className="authors">
              {book.authors &&
                book.authors.map((author, index) => (
                  <span key={index}>{author}</span>
                ))}
            </div>
          </a>
        </div>
        <BookRating rating={book.averageRating} />
      </article>
    )
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  currBooks: PropTypes.array,
};

export default Book;
