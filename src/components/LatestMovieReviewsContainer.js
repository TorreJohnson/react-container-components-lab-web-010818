import React, { Component } from 'react';
import 'isomorphic-fetch';
import Reviews from './MovieReviews'

const NYT_API_KEY = 'cfe93295999e4a3093ea16d8f40bac5a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews</h1>
        <Reviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
