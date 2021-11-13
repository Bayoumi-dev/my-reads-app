import React from "react";
import PropTypes from 'prop-types';

const BookRating = (props)=> {
        const {rating} = props
        return (
            <div className="rating">
            {rating?
              [...Array(Math.ceil(rating))].map((_, index) => (
                <div key={index} className="star"></div>
              )): <div className="star-gray"></div>}
          </div>
        );
}

BookRating.propTypes = {
  rating: PropTypes.number,
};

export default BookRating;
