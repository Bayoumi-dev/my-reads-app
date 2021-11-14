import React, { useState, useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/SideBar";
import "./style/App.css";
import * as BookApi from "./api/BooksAPI";
import Home from "./pages";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [{ books, currShelf, sidebarList, isLoading }, setState] = useState({
    books: [],
    currShelf: "Currently Reading",
    sidebarList: false,
    isLoading: true,
  });

  // The Mounting function
  useEffect(() => getBooks(), []);

  // Get books from API
  const getBooks = () => {
    BookApi.getAll().then((books) =>
      setState((currState) => ({ ...currState, books, isLoading: false }))
    );
  };

  // Update bookshelf then get books from API
  const updateBookShelf = (book, shelf) =>
    BookApi.update(book, shelf).then(() => getBooks());

  // A Function to update the current shelf to show it on the home page (My Shelves)
  const updateShelfToShow = (currShelf) =>
    setState((currState) => ({ ...currState, currShelf }));

  // Show and hide Sidebar list
  // This feature appears on the screen has a width of less than 768px
  const handleSidebarList = () =>
    setState((currState) => ({
      ...currState,
      sidebarList: sidebarList ? false : true,
    }));

  return (
    <div className={`App ${sidebarList ? "move-app" : null}`}>
      <Header handleSidebarList={handleSidebarList} />
      <div className="page">
        <div className="container">
          <Sidebar
            sidebarList={sidebarList}
            handleSidebarList={handleSidebarList}
            currShelf={currShelf}
            updateShelfToShow={updateShelfToShow}
          />
          <main>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <Home
                    currShelf={currShelf}
                    books={books}
                    updateBookShelf={updateBookShelf}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <Search updateBookShelf={updateBookShelf} currBooks={books} />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
