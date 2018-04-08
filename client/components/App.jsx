import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    const movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

    this.state = {
      movies: movies,
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
    let movies = this.state.movies.map(movie => ({ title: movie.title }));
    movies.push({ title: title });
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
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;