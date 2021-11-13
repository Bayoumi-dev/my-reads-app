import React from "react";
import PropTypes from "prop-types";

const Searchinput = (props)=> {
    const { handleChange, query } = props;
    return (
      <div className="search-books-input">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
      </div>
    );
}

Searchinput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchinput;
