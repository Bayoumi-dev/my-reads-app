import React from "react";
import PropTypes from "prop-types";
import { AddBookIcon, BookShelfIcon, CloseIcon } from "../icons";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { currShelf, updateShelfToShow, sidebarList, handleSidebarList } = props;
  return (
    <aside className={sidebarList ? "aside-show" : null}>
      <div className="list-close">
        <button onClick={handleSidebarList}>
          <CloseIcon />
        </button>
      </div>

      <nav>
        <div className="my-shelves">
          <NavLink
            exact="true"
            to="/"
            className={() =>
              window.location.pathname === "/" ? "active" : null
            }
          >
            <div>
              <BookShelfIcon />
              <h2>My Shelves</h2>
            </div>
          </NavLink>
          <ul>
            <li onClick={() => updateShelfToShow("Currently Reading")}>
              <NavLink
                exact="true"
                to="/"
                className={() =>
                  window.location.pathname === "/" &&
                  currShelf === "Currently Reading"
                    ? "active"
                    : null
                }
              >
                Currently Reading
              </NavLink>
            </li>
            <li onClick={() => updateShelfToShow("Want To Read")}>
              <NavLink
                exact="true"
                to="/"
                className={() =>
                  window.location.pathname === "/" &&
                  currShelf === "Want To Read"
                    ? "active"
                    : null
                }
              >
                Want To Read
              </NavLink>
            </li>
            <li onClick={() => updateShelfToShow("Read")}>
              <NavLink
                exact="true"
                to="/"
                className={() =>
                  window.location.pathname === "/" && currShelf === "Read"
                    ? "active"
                    : null
                }
              >
                Read
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`add-book `}>
          <NavLink exact="true" to="/search" activeclassname="active">
            <AddBookIcon />
            <h2>Add Book</h2>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  sidebarList: PropTypes.bool.isRequired,
  handleSidebarList: PropTypes.func.isRequired,
  currShelf: PropTypes.string.isRequired,
  updateShelfToShow: PropTypes.func.isRequired,
};

export default Sidebar;
