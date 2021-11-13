import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThreeDotsIcon } from "../icons";

class Bookshelfchanger extends Component {
  state = {
    bookshelfchanger: false,
    options: [
      {
        option: "Currently Reading",
        dataValue: "currentlyReading",
      },
      {
        option: "Want to Read",
        dataValue: "wantToRead",
      },
      {
        option: "Read",
        dataValue: "read",
      },
      {
        option: "None",
        dataValue: "none",
      },
    ],
  };

  // Handling outside clicks
  componentDidUpdate() {
    // setTimeout method to skip the opening and closing Book shelf changer at the same time
    setTimeout(() => {
      this.state.bookshelfchanger
        ? window.addEventListener("click", this.closeBookshelfchanger)
        : window.removeEventListener("click", this.closeBookshelfchanger);
    }, 0);
  }

  // Open Book shelf changer
  openBookshelfchanger = (e) => {
    this.setState((currState) => ({
      ...currState,
      bookshelfchanger: !this.state.bookshelfchanger && true,
    }));
  };

  // close Book shelf changer
  closeBookshelfchanger = () => {
    this.setState((currState) => ({
      ...currState,
      bookshelfchanger: false,
    }));
  };

  // Put the book in the selected shelf
  changeBookshelf = (e) => {
    if (e.target.dataset.value && e.target.dataset.value !== this.props.shelf) {
      this.props.updateBookShelf(this.props.book, e.target.dataset.value);
      this.props.MoveTo();
    }
  };

  render() {
    const { shelf } = this.props;
    return (
      <div className="options ">
        <button onClick={this.openBookshelfchanger}>
          <ThreeDotsIcon />
        </button>
        {this.state.bookshelfchanger && (
          <div className="move-to">
            <span>Move to...</span>
            <ul>
              {this.state.options.map((option) => (
                <li
                  key={option.dataValue}
                  className={shelf === option.dataValue ? "selected" : ""}
                  data-value={option.dataValue}
                  onClick={(e) => this.changeBookshelf(e)}
                >
                  {option.option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Bookshelfchanger.propTypes = {
  shelf: PropTypes.string,
  updateBookShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  MoveTo: PropTypes.func.isRequired,
};

export default Bookshelfchanger;
