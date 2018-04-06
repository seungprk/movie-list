import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  return (
    <section className="movie-list">
      {props.movies.map(movie => <MovieListEntry movie={movie} />)}
    </section>
  );
};

export default MovieList;