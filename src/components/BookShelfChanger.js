import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThreeDotsIcon } from "../icons";

const Bookshelfchanger = (props) => {
  const [bookshelfchanger, setBookshelfchanger] = useState(false),
    { shelf } = props,
    options = [
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
    ];

  // Handling outside clicks
  useEffect(() => {
    bookshelfchanger && window.addEventListener("click", closeBookshelfchanger);
    // Cleanup function to clean event listener from window
    return () => window.removeEventListener("click", closeBookshelfchanger);
  }, [bookshelfchanger]);

  // Open Book shelf changer
  const openBookshelfchanger = () => setBookshelfchanger(true),

    // close Book shelf changer
    closeBookshelfchanger = () => setBookshelfchanger(false),
    
    // Put the book in the selected shelf
    changeBookshelf = (e) => {
      if (e.target.dataset.value && e.target.dataset.value !== props.shelf) {
        props.updateBookShelf(props.book, e.target.dataset.value);
        props.MoveTo();
      }
    };
  return (
    <div className="options ">
      <button onClick={openBookshelfchanger}>
        <ThreeDotsIcon />
      </button>
      {bookshelfchanger && (
        <div className="move-to">
          <span>Move to...</span>
          <ul>
            {options.map((option) => (
              <li
                key={option.dataValue}
                className={shelf === option.dataValue ? "selected" : ""}
                data-value={option.dataValue}
                onClick={(e) => changeBookshelf(e)}
              >
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Bookshelfchanger.propTypes = {
  shelf: PropTypes.string,
  updateBookShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  MoveTo: PropTypes.func.isRequired,
};

export default Bookshelfchanger;
