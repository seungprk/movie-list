import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filterBy: ''
    };
  }

  searchMovie(query) {
    const lowCaseQuery = query.toLowerCase();
    this.setState({ 
      filterBy: lowCaseQuery
    });
  }

  addMovie(title) {
    let movies = this.state.movies.slice();
    movies.push({ 
      title: title,
      watched: false
    });
    this.setState({ movies: movies });
  }
  
  toggleWatched(title) {
    let movies = this.state.movies.slice();
    let index = movies.findIndex(movie => movie.title === title);
    movies[index] = {
      title: movies[index].title,
      watched: !movies[index].watched
    };
    this.setState({ movies: movies });
  }

  render() {
    let filteredMovies = this.state.movies;
    if (this.state.filterBy) {
      filteredMovies = this.state.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.state.filterBy);
      });
    }

    return (
      <div>
        <header>
          <h1>The Best Movie List Around</h1>
        </header>
        <AddMovie onAddMovie={this.addMovie.bind(this)} />
        <Search onSearchMovie={this.searchMovie.bind(this)} />
        <MovieList movies={filteredMovies} onToggleWatched={this.toggleWatched.bind(this)} />
      </div>
    );
  }
}

export default App;
