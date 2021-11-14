import React, { useState } from "react";
import PropTypes from "prop-types";
import Searchinput from "../components/SearchInput";
import { AddBookIcon } from "../icons";
import { search } from "../api/BooksAPI";
import Book from "../components/Book";
import Progress from "../components/Progress";

const Search = (props) => {
  const [{ books, query, searchResult, isLoading }, setState] = useState({
      books: [],
      query: "",
      searchResult: true,
      isLoading: false,
    }),
    { updateBookShelf, currBooks } = props,
    // Handle search input change and search for books
    handleChange = (e) => {
      const val = e.target.value;
      setState((currState) => ({
        ...currState,
        query: val,
        searchResult: true,
        isLoading: true,
      }));
      search(val)
        .then((books) =>
          books
            ? setState((currState) => ({
                ...currState,
                books,
              }))
            : setState((currState) => ({
                ...currState,
                books: false,
              }))
        )
        .then(
          (res) =>
            res === undefined &&
            setState((currState) => ({
              ...currState,
              searchResult: false,
              isLoading: false,
            }))
        );
    };

  return (
    <section className="search">
      <div className="search-intro">
        <AddBookIcon />
        <h1>Add New Book</h1>
      </div>

      <Searchinput handleChange={handleChange} query={query} />

      <div>
        <div className="search-result">
          <ol className="books">
            {isLoading ? (
              <Progress />
            ) : books.length > 0 ? (
              books.map((book) => (
                <li key={book.id}>
                  <Book
                    updateBookShelf={updateBookShelf}
                    book={book}
                    currBooks={currBooks}
                  />
                </li>
              ))
            ) : (
              <p>{!searchResult && query && `"${query}" Not Found`}</p>
            )}
          </ol>
        </div>
      </div>
    </section>
  );
};

Search.propTypes = {
  updateBookShelf: PropTypes.func.isRequired,
  currBooks: PropTypes.array.isRequired,
};

export default Search;
