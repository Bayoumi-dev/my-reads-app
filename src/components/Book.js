import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelfchanger from "./BookShelfChanger";
import BookRating from "./BookRating";

class Book extends Component {
  state = {
    isMoveTo: false,
  };

  // Returns the books that are already on shelves
  isBookInShelves = (bookId) => {
    const isBookInShelves = this.props.currBooks.filter((book) => bookId === book.id)[0];
    return isBookInShelves && isBookInShelves.shelf;
  };
  MoveTo = () => this.setState({ isMoveTo: true });

  render() {
    const { book, updateBookShelf } = this.props;
    return (
      book && (
        <article className={`book ${this.state.isMoveTo && "book-move"}`}>
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
              shelf={book.shelf ? book.shelf : this.isBookInShelves(book.id)}
              updateBookShelf={updateBookShelf}
              book={book}
              MoveTo={this.MoveTo}
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
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  currBooks: PropTypes.array,
};

export default Book;
