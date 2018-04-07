import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies
    };
  }

  searchMovie(query) {
    var lowCaseQuery = query.toLowerCase();
    var filteredArr = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(lowCaseQuery);
    });
    this.setState({ 
      movies: filteredArr
    });
  }

  addMovie(movie) {
    console.log(movie);
  }

  render() {
    return (
      <div>
        <header>
          <h1>The Best Movie List Around</h1>
        </header>
        <AddMovie onAddMovie={this.addMovie.bind(this)} />
        <Search onSearchMovie={this.searchMovie.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;