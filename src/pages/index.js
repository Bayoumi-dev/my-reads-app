import React from "react";
import BooksShelf from "../components/BooksShelf";
import PropTypes from "prop-types";

const Home = (props) => {
  const { currShelf, books, updateBookShelf, isLoading } = props;
  return (
    <>
      <BooksShelf
        currShelf={currShelf}
        books={books}
        updateBookShelf={updateBookShelf}
        isLoading={isLoading}
      />
    </>
  );
};

Home.propTypes = {
  currShelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
