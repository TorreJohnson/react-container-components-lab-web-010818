import React from 'react';
import 'isomorphic-fetch';
import Reviews from './MovieReviews'

const NYT_API_KEY = 'cfe93295999e4a3093ea16d8f40bac5a';

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  fetchMovies(searchTerm) {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
  }

  changeSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  search = (event) => {
    event.preventDefault();
    this.fetchMovies(this.state.searchTerm);
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.search}>
          <input type="search" value={this.state.searchTerm} onChange={this.changeSearch}/>
          <input type="submit" />
        </form>
        <h1>Search Results:</h1>
        <Reviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
