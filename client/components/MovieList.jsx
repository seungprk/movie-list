import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  return (
    props.movies.map(movie => <MovieListEntry movie={movie} />)
  );
};

export default MovieList;