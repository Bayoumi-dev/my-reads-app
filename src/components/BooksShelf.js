import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Progress from "../components/Progress";

const BooksShelf = (props) => {
  const { currShelf, books, updateBookShelf, isLoading } = props;
  return (
    <section className="books-shelf">
      <h1 className="books-shelf-title">{currShelf}</h1>
      <ol className="books">
        {isLoading ? (
          <Progress />
        ) : (
          books.length > 0 &&
          books
            .filter(
              (book) =>
                book.shelf.replaceAll(" ", "").toLowerCase() ===
                currShelf.replaceAll(" ", "").toLowerCase()
            )
            .map((book) => (
              <li key={book.id}>
                <Book book={book} updateBookShelf={updateBookShelf} />
              </li>
            ))
        )}
      </ol>
    </section>
  );
};

BooksShelf.propTypes = {
  currShelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BooksShelf;
