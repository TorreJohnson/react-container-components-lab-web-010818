import React from 'react';

const MovieReview = ({ display_title, byline, summary_short }) => {
  return (
    <div className="review">
      <h1>{display_title}</h1>
      <h3>By: { byline }</h3>
      <p>Review: {summary_short }</p>
    </div>
  )
}

const Reviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(MovieReview)}
  </div>
);

Reviews.defaultProps = {
  reviews: []
}

export default Reviews;
