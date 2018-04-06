import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = (props) => {
  return (
    <div className="movie-list-entry">{props.movie.title}</div>
  );
};

export default MovieListEntry;