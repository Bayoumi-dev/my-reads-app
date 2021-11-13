import React, { Component } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Sidebar from "./layout/SideBar";
import "./style/App.css";
import * as BookApi from "./api/BooksAPI";
import Home from "./pages";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  state = {
    books: [],
    currShelf: "Currently Reading",
    sidebarList: false,
    isLoading: true,
  };

  componentDidMount() {
    this.getBooks();
  }

  // Get books from API
  getBooks = () => {
    BookApi.getAll().then((books) =>
      this.setState((currState) => ({ ...currState, books, isLoading: false }))
    );
  };

  // Update bookshelf then get books from API
  updateBookShelf = (book, shelf) =>
    BookApi.update(book, shelf).then(() => this.getBooks());

  // A Function to update the current shelf to show it on the home page (My Shelves)
  updateShelfToShow = (currShelf) =>
    this.setState((currState) => ({ ...currState, currShelf }));

  // Show and hide Sidebar list
  // This feature appears on the screen has a width of less than 768px
  handleSidebarList = () =>
    this.setState((currState) => ({
      ...currState,
      sidebarList: this.state.sidebarList ? false : true,
    }));

  render() {
    return (
      <div className={`App ${this.state.sidebarList ? "move-app" : null}`}>
        <Header handleSidebarList={this.handleSidebarList} />
        <div className="page">
          <div className="container">
            <Sidebar
              sidebarList={this.state.sidebarList}
              handleSidebarList={this.handleSidebarList}
              currShelf={this.state.currShelf}
              updateShelfToShow={this.updateShelfToShow}
            />
            <main>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <Home
                      currShelf={this.state.currShelf}
                      books={this.state.books}
                      updateBookShelf={this.updateBookShelf}
                      isLoading={this.state.isLoading}
                    />
                  }
                />
                <Route
                  path="/search"
                  element={
                    <Search
                      updateBookShelf={this.updateBookShelf}
                      currBooks={this.state.books}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
