import React, { Component } from "react";
import PropTypes from "prop-types";
import Searchinput from "../components/SearchInput";
import { AddBookIcon } from "../icons";
import { search } from "../api/BooksAPI";
import Book from "../components/Book";
import Progress from "../components/Progress";

class Search extends Component {
  state = {
    books: [],
    query: "",
    searchResult: true,
    isLoading: false,
  };

  // Handle with a search input change and searching for books
  handleChange = (e) => {
    const val = e.target.value;
    this.setState((currState) => ({
      ...currState,
      query: val,
      searchResult: true,
      isLoading: true,
    }));
    search(val)
      .then((books) =>
        books
          ? this.setState((currState) => ({
              ...currState,
              books,
            }))
          : this.setState((currState) => ({
              ...currState,
              books: false,
            }))
      )
      .then(
        (res) =>
          res === undefined &&
          this.setState((currState) => ({
            ...currState,
            searchResult: false,
            isLoading: false,
          }))
      );
  };

  render() {
    const { updateBookShelf, currBooks } = this.props;
    return (
      <section className="search">
        <div className="search-intro">
          <AddBookIcon />
          <h1>Add New Book</h1>
        </div>

        <Searchinput
          handleChange={this.handleChange}
          query={this.state.query}
        />

        <div>
          <div className="search-result">
            <ol className="books">
              
              {this.state.isLoading ? (
                <Progress />
              ) : this.state.books.length > 0 ? (
                this.state.books.map((book) => (
                  <li key={book.id}>
                    <Book
                      updateBookShelf={updateBookShelf}
                      book={book}
                      currBooks={currBooks}
                    />
                  </li>
                ))
              ) : (
                <p>
                  {!this.state.searchResult &&
                    this.state.query &&
                    `"${this.state.query}" Not Found`}
                </p>
              )}
              
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  updateBookShelf: PropTypes.func.isRequired,
  currBooks: PropTypes.array.isRequired,
};

export default Search;
